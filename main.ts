// Cat Reviews Its Human — entry program for make.fun.
// Emits one fixed one-star review line to the output directory.
// Uses only the Node standard library and behaves identically on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "One star. Closed the bathroom door again. I screamed until he opened it. I did not go in. That was never the point.";

function assertEntryIsValid(line: string): void {
  const isSingleLine = !line.includes("\n") && !line.includes("\r");
  const hasRealText = line.trim().length > 0;
  const withinLimit = line.length >= 1 && line.length <= 200;
  if (!isSingleLine || !hasRealText || !withinLimit) {
    throw new Error("Entry line must be 1-200 characters on a single line.");
  }
}

assertEntryIsValid(ENTRY_LINE);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_LINE, "utf8");
