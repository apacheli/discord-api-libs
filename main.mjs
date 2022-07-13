import { readdir, readFile, writeFile } from "fs/promises";

const langs = {};
const libs = {};

await Promise.all([
  (async () => {
    for (const file of (await readdir("./langs"))) {
      const json = JSON.parse(await readFile(`./langs/${file}`));
      langs[json.name] = json;
    }
  })(),
  (async () => {
    for (const file of (await readdir("./libs"))) {
      const json = JSON.parse(await readFile(`./libs/${file}`));
      libs[json.name] = json;
    }
  })(),
]);

const features = [
  "gateway",
  "rest",
  "webhooks",
];

const footnotes = {
  "fork": "This library is a fork of another library.",
  "gateway": "This library is for the gateway/WebSocket API.",
  "interactions": "This library is for the interactions API.",
  "rest": "This library is for the HTTP/REST API.",
  "rpc": "This library is for the RPC API.",
  "webhooks": "This library is for the webhooks API.",
  "voice": "This library is for the voice API.",
  "wrapper": "This library is a framework/wrapper for another library.",
};

let str = `# Discord API Libraries

🚀 **A curated list of Discord API libraries developed by members of the community** 🚀

Want to help contribute to this project? Take a look at [our contributing guide](./CONTRIBUTING.md).

### Resources

- [Discord API Server](https://discord.gg/discord-api)
- [Discord Bots Server](https://discord.gg/0cDvIgU2voWn4BaD)
- [Discord Developer Documentation](https://discord.com/developers/docs)
- [Discord Developers Server](https://discord.gg/discord-developers)
- [discord-api-docs](https://github.com/discord/discord-api-docs)

---

`;

for (const lang of Object.keys(langs).sort()) {
  const x = langs[lang];

  str += `### [${x.name}](${x.website})\n\n`;

  for (const lib of x.libraries) {
    const y = libs[lib];

    str += `- [${y.name}](${y.repository_url})`;

    if (y.tags.includes("fork")) {
      str += "[^fork]";
    }
    if (y.features.every((x) => !features.includes(x))) {
      for (const tag of y.features) {
        str += `[^${tag}]`;
      }
    }
    if (y.tags.includes("wrapper")) {
      str += "[^wrapper]";
    }
    if (y.tags.includes("archived")) {
      str += " **(archived)**";
    }

    if (y.description !== null) {
      str += ` - ${y.description}`;
    }
    str += "\n";
  }
  str += "\n";
}

for (const footnote in footnotes) {
  str += `[^${footnote}]: ${footnotes[footnote]}\n`;
}

await writeFile("./README.md", str);
