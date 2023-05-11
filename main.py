import json


features = [
    "gateway",
    "interactions",
    "oauth2",
    "rest",
    "rpc",
    "voice",
    "webhooks"
]


def main():
    s = """# Discord API Libraries

A curated list of open-source libraries for developing with the Discord API.

## Resources

- [Discord API Server](https://discord.gg/discord-api)
- [Discord Bots Server](https://discord.gg/0cDvIgU2voWn4BaD)
- [Discord Developer Documentation](https://discord.com/developers/docs/intro)
- [Discord Developers Server](https://discord.gg/discord-developers)
- [discord-api-docs](https://github.com/discord/discord-api-docs)
"""

    with open("languages.json") as languages, open("libraries.json") as libraries:
        languages = json.loads(languages.read())
        libraries = json.loads(libraries.read())

        for language in languages:
            language_data = languages.get(language)
            s += f"\n## [{language}]({language_data.get('url')})\n\n"
            for library in language_data.get("libraries"):
                library_data = libraries.get(library)
                s += f"- [{library}]({library_data.get('repository_url')})"

                library_features = library_data.get("features")
                if len(library_features) > 0 and ("gateway" not in library_features or "rest" not in library_features):
                    for feature in features:
                        if feature in library_features:
                            s += f"[^{feature}]"

                description = library_data.get("description")
                if description:
                    s += f" - {description}"
                s += "\n"

    s += "\n---\n\n"
    for feature in features:
        s += f"[^{feature}]: This library is designed specifically for {feature}\n"

    with open("README.md", "w", encoding="utf8") as f:
        f.write(s)


if __name__ == "__main__":
    main()
