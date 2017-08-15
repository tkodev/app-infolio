# HTKO Portfolio Manager

Portfolio Manager built in Electron. Manages projects with the following directory tree:

## Typical Project Directory Tree

```
Portfolio Root
├── Project1/
│   ├── sources/
│   │   ├── bootstrap.scss
│   │   ├── webpack.js
│   │   └── index.html
│   ├── releases/
│   │   ├── app.js
│   │   ├── app.css
│   │   └── index.html
│   ├── scripts/
│   │   ├── webpack.config.js
│   │   ├── gulpfile.js
│   │   └── package.json
│   ├── assets/
│   │   ├── screenshot.jpg
│   │   ├── mockup.jpg
│   │   └── cover.jpg
│   └── README.md
├── Project2/
└── gfx
│   └── Project3/
└── ...
```

Project folders can be anywhere under the portfolio root. The app will recognize project folders on its own.
`README.md` contains your project readme, as well as `yaml` front-matter which contains project metadata such as status, full name, taxonomy, assets required, etc.
`assets/` contains your project's image files.
`scripts/`, `sources/` and `releases/` are examples of folders not touched by the program, but suggested organization. You can have any amount of folders you like.

## Operation

This application will allow you to select a portfolio folder which houses your projects, which will be displayed on the tree pane.
* You can browse your portfolio tree to find your project folders
* You are free to use any folder structure you like, projects can be at any location in the tree. Only the project folder's contents matter.
* You can then convert your project folders to be supported this application, it will move all project files into `sources/` of the project's folder (except `git` files), and create a `README.md` if not present.
* You can then edit the project. As you add content, metadata and assets, it will be added to `README.md`, `README.md`'s front matter, and `assets/` respectively.

## License

MIT License
