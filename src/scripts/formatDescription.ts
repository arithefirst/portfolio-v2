export function formatDescription(d: string | undefined): string {
  if (!d) return '';
  const firstLine = d?.split('\n')[0];
  const trimmed = firstLine.substring(0, 175);
  return trimmed.endsWith('.') ? trimmed.slice(0, -1) + '..' : trimmed + '...';
}
