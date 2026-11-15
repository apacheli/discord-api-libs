import { readFile, writeFile } from "node:fs/promises";

console.log("Generating list...");

const aiTopics = ["ai-assisted", "ai-generated", "llm"];

const [languages, libraries, resources] = await Promise.all([
  "languages",
  "libraries",
  "resources",
]
  .map((f) => readFile(`data/${f}.json`, "utf8").then(JSON.parse)));

let s =`# Discord API Libraries 🚀

A curated list of open-source libraries for interacting with Discord's API.

Something off? Want to contribute? Take a peek at [our contributing guide](CONTRIBUTING.md).

## AI Policy

This list may include libraries that are AI/LLM-assisted or generated. Such libraries must disclose it and are labeled with **(AI-assisted)**. If your library uses AI/LLM tooling, please mention it when contributing.

## Resources

`;

for (const resourceType in resources) {
  s += `### ${resourceType}\n\n`;
  for (const resource of resources[resourceType]) {
    s += `- [${resource.name}](${resource.url})\n`;
  }
  s += "\n";
}

s += "## Libraries\n";

for (const language in languages) {
  s += `\n### ${language}\n\n`;
  for (const library of languages[language]) {
    const lib = libraries[library];
    s += `- [${lib.name}](${lib.url})`;
    if (lib.archived) {
      s += ` **(archived)**`;
    }
    if (lib.topics?.some((t) => aiTopics.includes(t))) {
      s += ` **(AI-assisted)**`;
    }
    s += ` - ${lib.description}\n`;
  }
}

await writeFile("README.md", s);

console.log("Done generating list.");
