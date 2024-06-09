import { readFile, writeFile } from "node:fs/promises";

let repos = JSON.parse(await readFile("data/repositories.json", "utf8"));

const sorter = (a, b) => a.toLowerCase().localeCompare(b.toLowerCase());

repos = repos.sort(sorter);

await writeFile(
  "data/repositories.json",
  JSON.stringify(repos, null, 2) + "\n",
);
