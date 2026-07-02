import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TARGET_BYTES = 100 * 1024; // 100 KB
const OUTPUT_PATH = join(__dirname, '..', 'public', 'payload.txt');

const lines = [];
let currentSize = 0;

while (currentSize < TARGET_BYTES) {
  const line = `keep-sim-${Date.now()}-${Math.random().toString(36).substring(2)}-${currentSize}\n`;
  lines.push(line);
  currentSize += Buffer.byteLength(line, 'utf-8');
}

writeFileSync(OUTPUT_PATH, lines.join(''), 'utf-8');
console.log(`Generated ${OUTPUT_PATH} (${currentSize} bytes)`);
