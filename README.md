# InFolio - Portfolio Management

Portfolio Manager built in Electron. Manages projects with the following directory tree:

## Typical Project Directory Tree

```
Portfolio Root
├── Project1/
│   ├── README.md
│   ├── infolio.json
│   ├── assets/
│   │   ├── screenshot.jpg
│   │   ├── mockup.jpg
│   │   └── cover.jpg
│   ├── sources/
│   │   ├── bootstrap.scss
│   │   ├── webpack.js
│   │   └── index.html
│   ├── releases/
│   │   ├── app.js
│   │   ├── app.css
│   │   └── index.html
│   └── scripts/
│       ├── webpack.config.js
│       ├── gulpfile.js
│       └── package.json
├── Project2/
└── gfx
│   └── Project3/
└── ...
```

Project folders can be anywhere under the portfolio root. The app will recognize project folders on its own.
`README.md` contains your project readme.
`infolio.json` contains project metadata such as status, full name, taxonomy, assets required, etc.
`assets/` contains your project's image files.
`sources/`,`releases/` and `scripts/` are examples of folders not touched by the program, but suggested organization. You can have any amount of folders like this.

## Operation

This application will allow you to select a root portfolio folder, which will be displayed on the tree pane.
* You can browse your portfolio tree to find your project folders
* You are free to use any folder structure you like, projects can be at any location in the tree. Only the project folder's contents matter.
* To convert an external project, right click on a folder and click convert. This will move all current folder contents into a `sources/` folder. If required, `README.md` and `infolio.json` will be created. Git files / folders will not be touched so you can track the new structure.
* You can then edit the project. As you add metadata and assets, it will be tracked by `infolio.json`, and `assets/` respectively.

## License

MIT License
