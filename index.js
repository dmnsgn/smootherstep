/** @module smootherstep */

/**
 * Ken Perlin's improved version of the commonly used first-order smoothstep function.
 *
 * @see [Wikipedia – Smoothstep]{@link https://en.wikipedia.org/wiki/Smoothstep#Variations}
 *
 * @alias module:smootherstep
 * @param {number} a
 * @param {number} b
 * @param {number} v
 * @returns {number}
 */
const smootherstep = (a, b, v) => {
  const x = Math.max(0, Math.min(1, (v - a) / (b - a)));
  return x * x * x * (x * (6 * x - 15) + 10);
};

export default smootherstep;
