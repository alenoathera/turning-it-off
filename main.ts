/**
 * Entrypoint for make.fun bounty:
 * Have You Tried Turning It Off? (u-motasimfuad-have-you-tried-turning-it-off-154a938b)
 *
 * Deterministically writes a funny single-line reply from a hopeless tech support
 * agent to a desperate customer to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt if unset).
 */

import * as fs from "node:fs";
import * as path from "node:path";

// Revision 2: Polished deadpan support agent line with exact pacing
const SUPPORT_LINE: string =
  "I understand the server is actively smoking, but company policy requires you to turn it back on for thirty seconds to see if the fault replicates.";

function run(): void {
  if (SUPPORT_LINE.length < 1 || SUPPORT_LINE.length > 199) {
    throw new Error(`Invalid line length: ${SUPPORT_LINE.length} (must be 1..199 chars)`);
  }

  const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outputDir, { recursive: true });

  const outputPath: string = path.join(outputDir, "entry.txt");
  fs.writeFileSync(outputPath, SUPPORT_LINE, { encoding: "utf8" });
}

run();
