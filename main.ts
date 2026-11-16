import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const source = join(dirname(fileURLToPath(import.meta.url)), "entry.png");
const outputDirectory = resolve(process.env.MAKEFUN_OUTPUT_DIR || "/output");

await mkdir(outputDirectory, { recursive: true });
await copyFile(source, join(outputDirectory, "entry.png"));
