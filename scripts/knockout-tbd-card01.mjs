/**
 * Убирает почти чёрный фон у PNG карточки tbd (Pochacco) — прозрачность для наложения на ProductArtSvg.
 */
import { readFile, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pngPath = join(__dirname, "../public/tbd-drop7-card01-sanrio-pochacco.png");

const buf = await readFile(pngPath);
const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({
  resolveWithObject: true,
});

const { width, height, channels } = info;
const out = new Uint8ClampedArray(data);
const hard = 22;
const soft = 52;

for (let i = 0; i < out.length; i += 4) {
  const r = out[i];
  const g = out[i + 1];
  const b = out[i + 2];
  const aIn = out[i + 3];
  const mx = Math.max(r, g, b);
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;

  if (aIn === 0) continue;

  if (mx <= hard && lum < 30) {
    out[i + 3] = 0;
    continue;
  }

  if (mx < soft && lum < 42) {
    const t = (mx - hard) / (soft - hard);
    const factor = Math.max(0, Math.min(1, t));
    out[i + 3] = Math.round(aIn * factor);
  }
}

const result = await sharp(Buffer.from(out), {
  raw: { width, height, channels: 4 },
})
  .png()
  .toBuffer();

await writeFile(pngPath, result);
console.log("OK:", pngPath, `${width}x${height}`);
