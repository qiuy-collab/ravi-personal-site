const workerModulePath = require.resolve("next/dist/lib/worker");
const workerModule = require(workerModulePath);

class InProcessWorker {
  constructor(targetPath, options) {
    this.targetModule = require(targetPath);
    this.options = options;

    for (const method of options.exposedMethods || []) {
      if (method.startsWith("_")) {
        continue;
      }

      this[method] = async (...args) => {
        const previousWorkerFlag = process.env.IS_NEXT_WORKER;

        if (this.options.onActivity) {
          this.options.onActivity();
        }

        process.env.IS_NEXT_WORKER = "true";

        try {
          return await this.targetModule[method](...args);
        } finally {
          if (previousWorkerFlag === undefined) {
            delete process.env.IS_NEXT_WORKER;
          } else {
            process.env.IS_NEXT_WORKER = previousWorkerFlag;
          }

          if (this.options.onActivityAbort) {
            this.options.onActivityAbort();
          }
        }
      };
    }
  }

  end() {
    return Promise.resolve({ forceExited: false });
  }

  close() {}
}

require.cache[workerModulePath].exports = {
  ...workerModule,
  Worker: InProcessWorker
};

process.env.NODE_ENV = "production";
process.env.NEXT_TELEMETRY_DISABLED = "1";

async function run() {
  const build = require("next/dist/build").default;
  await build(process.cwd(), false, false, false, false);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
