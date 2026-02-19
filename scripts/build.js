const { execSync } = require("child_process");

const FORMATS = ["pptx", "pdf", "png"];
const arg = process.argv[2] || "pptx";

if (!FORMATS.includes(arg)) {
  console.error(`Unknown format: "${arg}". Use one of: ${FORMATS.join(", ")}`);
  process.exit(1);
}

const flag = arg === "png" ? "--images png" : `--${arg}`;
const cmd = `marp ${flag} slides/all.md -o output/all.${arg}`;

console.log(`Building ${arg.toUpperCase()}...`);
execSync(cmd, { stdio: "inherit" });
