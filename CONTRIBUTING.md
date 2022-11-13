# Contributing Guide

Hello, thank you for taking a look at our contributing guide. This manual will guide you on how to add your library to the list.

### Requirements

- Must be open-source!
- Must help developers interact with the Discord API (library, framework, etc).

### Setting Up

- Clone the repository: `$ git clone https://github.com/apacheli/discord-api-libs`
- Make the necessary changes
- (optional) Run `node .` to view the new `README.md`
- Commit and push your changes
- Create a pull request

### Formats

We are now using [JSON](https://www.json.org/json-en.html) when it comes to providing information about a library. Copy the example below, paste it into `./libs/`, and make sure the filename matches the `name` field (e.g., `eris.json` and `"name": "eris"`).

```jsonc
{
  // The library's name.
  "name": "",
  // A description of the library.
  // You can also just use the "About" section of the library's repository if you want.
  "description": "",
  // The language the library is written in.
  "language": "",
  // Can be GitHub, GitLab, Bitbucket, etc.
  "repository_url": "",
  // Extra metadata.
  "tags": [
    // Can also mean deprecated.
    "archived",
    "fork",
    "wrapper"
  ],
  // The features of the Discord API the library supports.
  "features": [
    "gateway",
    "interactions",
    "rest",
    "rpc",
    "voice",
    "webhooks"
  ],
  // (optional) Additional URL metadata.
  "urls": {
    // The link to the homepage of the library.
    "homepage": "example.com/homepage",
    // The link to the documentation of the library.
    "documentation": "example.com/documentation",
    // A URL to the library's Discord server. (.gg for example, or a redirect)
    "discord": "example.com/discord-invite",
    // Additional links. You can put your support links here and whatever.
    "others": {
      "patreon": "..."
    }
  }
}
```

If you are adding a library that is written in an entirely different programming language, do not forget to add a language JSON file too! Follow the same steps as adding a library, but paste the file into `./langs/`.

```jsonc
{
  // The language's name.
  "name": "",
  // The libraries written for the language.
  "libraries": [],
  // The official website of the language.
  "website": ""
}
```
