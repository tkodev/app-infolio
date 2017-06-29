# HTKO Portfolio Manager

Portfolio Manager built in Electron. Manages projects with the following directory tree:

## Typical Project Directory Tree

```
├── sources/
│   ├── bootstrap.scss
│   ├── webpack.js
│   └── index.html
├── release/
│   ├── app.js
│   ├── app.css
│   └── index.html
├── assets/
│   ├── screenshot.jpg
│   ├── mockup.jpg
│   └── cover.jpg
└── README.md
```

`README.md` contains your project readme, as well as `yaml` front-matter which contains project metadata such as status, full name, taxonomy, assets required, etc.
`assets/` contains your project's image files.
`sources/` and `release/` store project source and release files and are not touched by this program.

## Operation

This application will allow you to select a portfolio folder which houses your projects, which will be displayed on the tree pane.
* You can browse your portfolio tree to find your project folders
* You are free to use any folder structure you like, projects can be at any location in the tree. Only the project folder's contents matter.
* You can then convert your project folders to be supported this application, it will move all project files into `release/` of the project's folder (except `git` files), create a README if not present.
* You can then edit the project. As you add content, metadata and assets, it will be added to `README.md`, `README.md`'s front matter, and `assets/` respectively.

## License

MIT License
