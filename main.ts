import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outputDirectory = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');
const destination = join(outputDirectory, 'entry.png');

await mkdir(dirname(destination), { recursive: true });
await copyFile(source, destination);
