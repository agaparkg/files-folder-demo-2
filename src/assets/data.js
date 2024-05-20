const data = {
  name: "sample-vite-app",
  isFolder: true,
  items: [
    {
      name: "node_modules",
      isFolder: true,
      items: [
        {
          name: ".vite",
          isFolder: true,
        },
        {
          name: ".bin",
          isFolder: true,
        },
      ],
    },
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "vite.svg",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "assets",
          isFolder: true,
          items: [
            {
              name: "utils.js",
              isFolder: false,
            },
          ],
        },
        {
          name: "components",
          isFolder: true,
          items: [
            {
              name: "Header.jsx",
              isFolder: false,
            },
            {
              name: "SideBar.jsx",
              isFolder: false,
            },
            {
              name: "MainBody.jsx",
              isFolder: false,
            },
            {
              name: "Footer.jsx",
              isFolder: false,
            },
          ],
        },
        {
          name: "index.jsx",
          isFolder: false,
        },
        {
          name: "App.jsx",
          isFolder: false,
        },
      ],
    },
    {
      name: ".eslintrc.cjs",
      isFolder: false,
    },
    {
      name: ".gitignore",
      isFolder: false,
    },
    {
      name: ".index.html",
      isFolder: false,
    },
    {
      name: "package.json",
      isFolder: false,
    },
    {
      name: "README.md",
      isFolder: false,
    },
  ],
};
export default data;
