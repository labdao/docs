# LabDAO Docs

This repository powers [`docs.labdao.com`](https://docs.labdao.com). It pulls together all LabDAO/OpenLab documentation together into a single site using [Docusaurus](https://docusaurus.io/).

### Writing documentation

We've established some conventions around writing documentation that make it easy to integrate new projects' docs into this repository and deploy those docs to `docs.labdao.com`. Here's what you need to know:
* All documentation should live in a folder named `docs/` in the root of your repository.
* When making references between documentation files, [use relative paths](https://docusaurus.io/docs/docs-markdown-features#referencing-other-documents).
* Each Markdown page should have a [front matter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter) section at the beginning, which at minimum should define the document's `title` and `description`.
* If you want to control the order in which the documents in a directory show up in the sidebar, add `sidebar_position: <x>` to the front matter for each document in the directory.
* If you want to customize the sidebar label for a particular directory, add a `_category_.json` file in the relevant directory with the contents `{ "label": "My Label" }`. All the options available via `_category_.json` are documented [here](https://docusaurus.io/docs/sidebar/autogenerated#autogenerated-sidebar-metadata).

To add your repository's documentation to `docs.labdao.com`, make a pull request adding your repository as a Git submodule inside of this repository's `docs/_projects` folder. The submodule should be referenced in `.gitmodules` using an HTTPS repository link, not an SSH link (for Vercel compatibility).


### Development

```
$ yarn
$ yarn start
```
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.


### Build

```
$ yarn build
```


This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

This repository is deployed using [Vercel](https://vercel.com/), which has a Docusaurus V2 template. Just create a new Vercel project, connect it to this repository, and click deploy, and you're off to the races!

### Misc

We collect anonymized analytics information from visitors to the documentation site to help us write better docs and understand which documentation is most important to our users.
