// Minimal classnames joiner — avoids pulling in a dependency for something this small.
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
