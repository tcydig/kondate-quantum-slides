const fs = require("fs");
const path = require("path");

const SLIDES_DIR = path.join(__dirname, "..", "slides");
const OUTPUT_FILE = path.join(SLIDES_DIR, "all.md");

const FRONT_MATTER = `---
marp: true
theme: kondate
paginate: true
---`;

function getSlideFiles() {
  return fs
    .readdirSync(SLIDES_DIR)
    .filter((f) => f.endsWith(".md") && f !== "all.md")
    .sort();
}

function stripFrontMatter(content) {
  const match = content.match(/^---\n[\s\S]*?\n---\n?/);
  if (match) {
    return content.slice(match[0].length);
  }
  return content;
}

function merge() {
  const files = getSlideFiles();
  const bodies = files.map((f) => {
    const content = fs.readFileSync(path.join(SLIDES_DIR, f), "utf-8");
    return stripFrontMatter(content).trim();
  });

  const merged = FRONT_MATTER + "\n\n" + bodies.join("\n\n---\n\n") + "\n";

  let existing = "";
  try {
    existing = fs.readFileSync(OUTPUT_FILE, "utf-8");
  } catch (_) {
    // file doesn't exist yet
  }

  if (existing === merged) {
    console.log("slides/all.md is up to date.");
    return;
  }

  fs.writeFileSync(OUTPUT_FILE, merged, "utf-8");
  console.log(`slides/all.md generated from ${files.length} files.`);
}

function watch() {
  let chokidar;
  try {
    chokidar = require("chokidar");
  } catch (_) {
    console.error(
      "chokidar is not installed. Install it or use marp-cli which bundles it."
    );
    process.exit(1);
  }

  merge();

  const watcher = chokidar.watch(SLIDES_DIR, {
    ignored: (filePath) => path.basename(filePath) === "all.md",
    ignoreInitial: true,
    depth: 0,
  });

  watcher.on("all", (event, filePath) => {
    if (!filePath.endsWith(".md")) return;
    console.log(`[${event}] ${path.basename(filePath)} — regenerating...`);
    merge();
  });

  console.log("Watching slides/ for changes...");
}

if (process.argv.includes("--watch")) {
  watch();
} else {
  merge();
}
