# @tractorzoom/component-library

Component library using Material UI

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://tractorzoom.github.io/virtualized-select/)

[![Publish Status](https://github.com/TractorZoom/component-library/workflows/publish/badge.svg)](https://github.com/TractorZoom/component-library/actions) [![PR Verify Status](https://github.com/TractorZoom/component-library/workflows/pull_request_verify/badge.svg)](https://github.com/TractorZoom/component-library/actions)

[Live Examples](https://component-library-git-master-tractorzoomdevs.vercel.app)

## Contributing

We welcome improvements and fixes via PRs. Review the contributing guidelines below before getting started.

### Running Locally

To run the examples locally, ensure you have your env variables set (in your `.env.local` file for example).

| variable                          | dev/preview           | prod                  |
| --------------------------------- | --------------------- | --------------------- |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | _google_maps_api_key_ | _google_maps_api_key_ |

Install shared dependencies and all package dependencies

```
npm ci && ./node_modules/.bin/lerna bootstrap
```

Then run the next examples

```
npm run dev
```

### Code Style

We use Prettier with pre-commit hooks to format the majority of our code style preferences.

### Committing

We use commitlint to ensure our commit messages are consistent and semantic. Commitlint is enable through a pre-commit hook with `husky`. For assistance with making commit messages that abide by our configuration, use `npm run commit` to step through the commitizen wizard to commit staged changes.

### Testing

Using [Jest](https://github.com/facebook/jest) for testing. Prefer the use of Jest Snapshots and [react-test-renderer](https://reactjs.org/docs/test-renderer.html).

```
npm run test
```

### [Creating React Components of SVGs](https://react-svgr.com/)

General Usage

```
    npx @svgr/cli --icon --replace-attr-values "#063855=currentColor" icon.svg
```
