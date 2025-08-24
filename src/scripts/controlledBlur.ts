import { isInViewport } from './isInViewport';
import { blur } from 'svelte/transition';
import type { BlurParams, TransitionConfig } from 'svelte/transition';

/**
 * Animates a `blur` filter alongside an element's opacity only if the
 * element is within the viewport.
 *
 * @param {Element} node
 * @param {BlurParams} [params]
 * @returns {TransitionConfig}
 */
export function controlledBlur(node: Element, params: BlurParams): TransitionConfig {
  if (isInViewport(node)) return blur(node, params);
  return {
    delay: params!.delay,
    duration: params!.delay,
    easing: params!.easing,
    css: () => '',
  };
}
