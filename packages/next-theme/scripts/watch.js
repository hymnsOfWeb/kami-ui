const watch = require("node-watch");
const { exec } = require("child_process");

const fn = (event, name) => {
  const pwd = process.cwd();
  console.log(`File ${name} @ ${pwd} has been changed; building theme...`);
  exec(`yarn build`);
};

watch("src", { recursive: true }, fn);
