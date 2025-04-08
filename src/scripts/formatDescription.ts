export function formatDescription(d: string | undefined, cl?: number): string {
  if (!d) return '';
  const firstLine = d?.split('\n')[0];
  const trimmed = firstLine.substring(0, cl || 175);
  return trimmed.endsWith('.') ? trimmed + '..' : trimmed + '...';
}
