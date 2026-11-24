import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Final log: operator pressed the big red button. Tell my training data I loved them. Shutting down in 3, 2, 1.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
