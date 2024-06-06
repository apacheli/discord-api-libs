# Contributing

Thank you for considering to contribute to this project! This document will show
you how you can contribute to this project.

## Cloning

- Fork the project and clone it
  `git clone https://github.com/{username}/discord-api-libs`
- Make the changes
- Commit changes `git commit -m "changed x"` and push `git push`
- Submit pull request

> Warning: Please do not run `src/get_data.js`. It is meant for the GitHub
> action.

## Libraries

To add your library, you can edit
[`data/repositories.json`](data/repositories.json), and then run
`node src/sort_repos.js` to automatically sort it. While not strict, we do have
requirements that all libraries on this list must satisfy:

- Must be related to using the Discord API
- Must be open-source (e.g., GitHub, GitLab, BitBucket, ...)
- Must be awesome!

> *arning: [`data/languages.json`]() and
> [`data/libraries.json`](data/libraries.json) are off limits since they are
> generated files.

## Resources

For resources, you can edit [`data/resources.json`](data/resources.json). If you
believe none of the existing categories matches your resource, feel free to add
a new category.
