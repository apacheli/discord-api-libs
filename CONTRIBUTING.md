# Contributing

This document will show you how you can contribute to this project. Thanks for
reading!

## Cloning

- Fork and clone: `git clone https://github.com/{username}/discord-api-libs`
- Make the changes
- Commit changes: `git commit -m "changed x"`
- Push changes: `git push`
- Create pull request

> **Warning**: DO NOT run `src/get_data.js`. It is meant for the GitHub action.

## Libraries

To add your library, you can edit
[`data/repositories.json`](data/repositories.json). The library will
automatically be sorted from the GitHub action. While not strict, we have
requirements that all libraries on this list must satisfy:

- Must be related to the Discord API
- Must be open-source (e.g., GitHub, GitLab, BitBucket, ...)
- Must be awesome!

> **Note**: `data/languages.json` and `data/libraries.json` are generated files,
> so you don't have to touch them.

## Resources

For resources, you can edit [`data/resources.json`](data/resources.json). If
none of the existing categories matches your resource, feel free to add a new
category.
