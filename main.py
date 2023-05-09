import json


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
                description = library_data.get("description")
                if description:
                    s += f" - {description}"
                s += "\n"

    with open("README.md", "w", encoding="utf8") as f:
        f.write(s)


if __name__ == "__main__":
    main()
