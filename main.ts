// Make the AI Judge Laugh: Cat Reviews Its Human — make.fun entry.
// Writes the entry text to /output/entry.txt.
// Node standard library only; deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star. Closed the bathroom door again. I screamed until he opened it. I did not go in. That was never the point.";

// Gate guard: the sealed scorer only accepts 1-200 characters, a single line, never only whitespace.
// A carriage return or newline would break the one-entry promise,
// so reject them rather than trusting the length check alone.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.includes("\n") ||
  LINE.includes("\r") ||
  !LINE.trim()
) {
  throw new Error("entry line violates the gate constraints");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
