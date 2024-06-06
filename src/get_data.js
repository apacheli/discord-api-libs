import { readFile, writeFile } from "node:fs/promises";

const repos = JSON.parse(await readFile("data/repositories.json", "utf8"));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const sorter = (a, b) => a.toLowerCase().localeCompare(b.toLowerCase());
const sortObject = (x) =>
  Object.keys(x).sort(sorter).reduce((a, b) => (a[b] = x[b], a), {});

const languages = {};
const libraries = {};

// Long delay because GitHub is more restrictive to no-Authorization requests
const interval = 10_000;
const time = repos.length * interval / 60_000;

console.log(`Time: ${time}-${time * 1.05} m\nRepositories: ${repos.length}\n`);

for (let i = 0; i < repos.length; i++) {
  const repo = repos[i];
  const url = `https://api.github.com/repos${repo.substring(18)}`;
  console.log(`[${i}/${repos.length}] Fetching ${url}...`);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Accept": "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    console.log(`    ${url} seems to have vanished...\n`);
    await sleep(interval);
    continue;
  }
  if (repo !== data.html_url) {
    console.log(`    New URL detected: ${repo} -> ${data.html_url}\n`);
  }
  libraries[data.name] = {
    archived: data.archived,
    created_at: Date.parse(data.created_at),
    description: data.description ?? "",
    fork: data.fork,
    forks: data.forks_count,
    homepage: data.homepage,
    language: data.language,
    name: data.name,
    pushed_at: Date.parse(data.pushed_at),
    stars: data.stargazers_count,
    topics: data.topics.sort(sorter),
    url: data.html_url,
    watchers: data.watchers_count,
  };
  (languages[data.language] ??= []).push(data.name);
  await sleep(interval);
}

for (const l in languages) {
  languages[l] = languages[l].sort(sorter);
}

await Promise.all([
  writeFile("data/languages.json", JSON.stringify(sortObject(languages))),
  writeFile("data/libraries.json", JSON.stringify(sortObject(libraries))),
]);

console.log("Done.");
