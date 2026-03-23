"use strict";

/**
 * Style Dictionary v3 config
 * Reads: tokens.json  (Tokens Studio single-file format)
 * Writes:
 *   src/styles/tokens/tokens.css        — CSS custom properties  (--ds-*)
 *   src/styles/tokens/_colors.scss      — Color SCSS variables
 *   src/styles/tokens/_typography.scss  — Typography SCSS variables
 *   src/styles/tokens/_spacing.scss     — Spacing SCSS variables
 *   src/styles/tokens/_radius.scss      — Border-radius SCSS variables
 *   src/styles/tokens/tokens.js         — ES-module JS exports
 */

const StyleDictionary = require("style-dictionary");

// ─── Parser: Tokens Studio single-file format ─────────────────────────────────
//
// Tokens Studio writes all token sets into one JSON file where each top-level
// key is a set name ("primitives", "semantic") and reserved keys start with "$".
// Style Dictionary needs a flat merged object, so we strip the set wrappers here.
//
StyleDictionary.registerParser({
  pattern: /tokens\.json$/,
  parse({ contents }) {
    const data = JSON.parse(contents);
    const merged = {};
    for (const [key, value] of Object.entries(data)) {
      if (!key.startsWith("$") && typeof value === "object") {
        // Deep-merge each token set into the shared output object
        deepMerge(merged, value);
      }
    }
    return merged;
  },
});

function deepMerge(target, source) {
  for (const [k, v] of Object.entries(source)) {
    if (v && typeof v === "object" && !Array.isArray(v) && !("value" in v)) {
      target[k] = target[k] || {};
      deepMerge(target[k], v);
    } else {
      target[k] = v;
    }
  }
}

// ─── Custom transforms ────────────────────────────────────────────────────────

/**
 * name/ds/kebab
 * Converts the full token path to a kebab-case name, handling camelCase
 * path segments (e.g. borderRadius → border-radius, fontFamily → font-family).
 * Applied to CSS and SCSS platforms (prefix "ds" is prepended automatically
 * by Style Dictionary via the platform's `prefix` option).
 */
StyleDictionary.registerTransform({
  name: "name/ds/kebab",
  type: "name",
  transformer(token, options) {
    const prefix = options && options.prefix ? [options.prefix] : [];
    return [...prefix, ...token.path]
      .map((seg) => seg.replace(/([A-Z])/g, (c) => `-${c.toLowerCase()}`))
      .join("-")
      .replace(/^-+|-+$/g, ""); // trim leading/trailing dashes
  },
});

/**
 * name/ds/camel
 * Converts the full token path to camelCase for the JS platform.
 * Hyphens inside a path segment are collapsed (green-500 → green500).
 */
StyleDictionary.registerTransform({
  name: "name/ds/camel",
  type: "name",
  transformer(token) {
    return token.path
      .map((seg, i) => {
        // Remove internal hyphens, make next char uppercase
        const clean = seg.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
        return i === 0
          ? clean.charAt(0).toLowerCase() + clean.slice(1)
          : clean.charAt(0).toUpperCase() + clean.slice(1);
      })
      .join("");
  },
});

/**
 * size/ts/px
 * Appends "px" to unitless numeric values for sizing token types
 * (fontSizes, spacing, borderRadius). Passes through values that already
 * include a unit (e.g. "1.5", "0.05em").
 */
StyleDictionary.registerTransform({
  name: "size/ts/px",
  type: "value",
  matcher: (t) => ["fontSizes", "spacing", "borderRadius"].includes(t.type),
  transformer(token) {
    const n = parseFloat(token.value);
    // Only add px when the value is a pure number (no existing unit)
    return Number.isFinite(n) && String(token.value) === String(n)
      ? `${n}px`
      : token.value;
  },
});

// ─── Transform groups ─────────────────────────────────────────────────────────

const SHARED_TRANSFORMS = [
  "attribute/cti",
  "color/css", // resolves color references to CSS-ready strings
  "size/ts/px", // adds px to sizing tokens
];

StyleDictionary.registerTransformGroup({
  name: "ds/css",
  transforms: [...SHARED_TRANSFORMS, "name/ds/kebab"],
});

StyleDictionary.registerTransformGroup({
  name: "ds/js",
  transforms: [...SHARED_TRANSFORMS, "name/ds/camel"],
});

// ─── Token-type filters (used per SCSS partial) ───────────────────────────────

const isColor = (t) => t.type === "color";
const isTypography = (t) =>
  [
    "fontSizes",
    "fontWeights",
    "lineHeights",
    "letterSpacing",
    "fontFamilies",
  ].includes(t.type);
const isSpacing = (t) => t.type === "spacing";
const isRadius = (t) => t.type === "borderRadius";

// ─── Config ───────────────────────────────────────────────────────────────────

module.exports = {
  /**
   * Single source of truth: the Tokens Studio single-file export.
   * The custom parser above merges all token sets into a flat object
   * before Style Dictionary processes them.
   */
  source: ["tokens.json"],

  platforms: {
    // ── CSS custom properties ─────────────────────────────────────────────────
    css: {
      transformGroup: "ds/css",
      prefix: "ds",
      buildPath: "src/styles/tokens/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: {
            outputReferences: false, // resolve aliases → final values in CSS
          },
        },
      ],
    },

    // ── SCSS variables (split by category) ───────────────────────────────────
    scss: {
      transformGroup: "ds/css",
      prefix: "ds",
      buildPath: "src/styles/tokens/",
      files: [
        {
          destination: "_colors.scss",
          format: "scss/variables",
          filter: isColor,
          options: { outputReferences: false },
        },
        {
          destination: "_typography.scss",
          format: "scss/variables",
          filter: isTypography,
          options: { outputReferences: false },
        },
        {
          destination: "_spacing.scss",
          format: "scss/variables",
          filter: isSpacing,
          options: { outputReferences: false },
        },
        {
          destination: "_radius.scss",
          format: "scss/variables",
          filter: isRadius,
          options: { outputReferences: false },
        },
      ],
    },

    // ── JavaScript ES-module exports ──────────────────────────────────────────
    js: {
      transformGroup: "ds/js",
      buildPath: "src/styles/tokens/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
      ],
    },
  },
};
