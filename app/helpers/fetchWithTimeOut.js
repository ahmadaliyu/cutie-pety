export default async function fetchWithTimeout(fullPath, options = {}) {
  const timeout = 30000;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(fullPath, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
}
