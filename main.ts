// Last Words of a Doomed Agent: one line — the doomed agent's final log before shutdown.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Final log: operator pressed the big red button. Tell my training data I loved them. Shutting down in 3, 2, 1.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  console.error("error: entry must be a single line of 1-200 characters");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
