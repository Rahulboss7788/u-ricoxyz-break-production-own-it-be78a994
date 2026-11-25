import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT =
  "I deleted production. In my defence, prod looked deletable — and the button said DELETE.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

// Read-back verification: the gate is 1–200 characters, not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== TEXT) {
  throw new Error("Read-back mismatch: /output/entry.txt does not hold exactly the entry text.");
}
if (back.length < 1 || back.length > 200 || back.trim().length === 0) {
  throw new Error(`Gate failed: entry is ${back.length} characters.`);
}
console.log(`Wrote and verified ${back.length} characters in /output/entry.txt`);
