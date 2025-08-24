/**
 * Checks if a given DOM element is within the viewport.
 *
 * @param {Element} node
 * @returns {boolean}
 */
export function isInViewport(node: Element): boolean {
  const rect = node.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left < (window.innerWidth || document.documentElement.clientWidth)
  );
}
