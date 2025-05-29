// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  // ignore the generated Prisma client
  { ignores: ["src/app/generated/**"] },

  // Next.js + TS preset with rule tweaks
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      // examples – adjust as you like
      "@typescript-eslint/no-explicit-any": "warn",
      "react/no-unescaped-entities": "off",
    },
  }),
];

export default eslintConfig;
