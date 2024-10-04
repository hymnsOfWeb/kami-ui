const watch = require("node-watch");
const { exec } = require("child_process");

const fn = (event, name) => {
  const pwd = process.cwd();
  console.log(`File ${name} @ ${pwd} has been changed; building theme...`);
  exec(`yarn build:no-lint`);
};

watch(["index.ts", "helpers", "hooks", "utils"], { recursive: true }, fn);
