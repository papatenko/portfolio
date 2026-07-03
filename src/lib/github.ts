/**
 * Build-time GitHub star fetch. Runs during `astro build`; if the API is
 * unreachable (offline build, rate limit), the static `stars` fallback in
 * src/data/projects.ts is used instead. Never fails the build.
 */
const cache = new Map<string, number | null>();

export async function getStars(repo: string): Promise<number | null> {
  if (cache.has(repo)) return cache.get(repo) ?? null;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    });
    clearTimeout(timer);
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const data = (await res.json()) as { stargazers_count?: number };
    const stars = typeof data.stargazers_count === 'number' ? data.stargazers_count : null;
    cache.set(repo, stars);
    return stars;
  } catch {
    cache.set(repo, null);
    return null;
  }
}
