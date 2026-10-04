/**
 * Pexels resizes photos on request (the w/h query parameters). Given a Pexels
 * URL with w and h set, returns a srcset of the same crop at smaller widths so
 * phones download a photo sized for their screen instead of the largest one.
 */
export function pexelsSrcSet(url: string, widths: number[]): string {
  const u = new URL(url);
  const w = Number(u.searchParams.get("w"));
  const h = Number(u.searchParams.get("h"));
  return widths
    .filter((tw) => tw <= w)
    .map((tw) => {
      const v = new URL(url);
      v.searchParams.set("w", String(tw));
      v.searchParams.set("h", String(Math.round((h * tw) / w)));
      return `${v.toString()} ${tw}w`;
    })
    .join(", ");
}
