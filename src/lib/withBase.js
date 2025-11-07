export function withBase(path = "") {
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.replace(/\/$/, "");
  const cleanPath = String(path).replace(/^\//, "");
  return `${cleanBase}/${cleanPath}`;
}
