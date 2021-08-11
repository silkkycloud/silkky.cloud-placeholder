<div align="center">
<a href="https://silkky.cloud/">
  <img src="public/img/png/brand/text-background.png" width="600px" alt="Silkky.Cloud" />
</a>
<p>
  <em>Protect your information and anonymity against global surveillance.</em>
</p>

**This is the current Silkky.Cloud website**

[![Deploy to Netlify](https://github.com/silkkycloud/silkky.cloud/actions/workflows/production.yml/badge.svg)](https://demo.silkky.cloud/)

<a href="https://liberapay.com/silkkycloud/donate" target="_blank">
  <img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg" height="30px">
</a>
<a href="https://www.buymeacoffee.com/silkkycloud" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="30px" alt="Buy Me A Coffee">
</a>

[Join our Matrix](https://matrix.to/#/#silkkycloud:matrix.org)

[Join our Discord](https://discord.com/invite/BvqJQ3hNrQ)

</div>

## Contributing

**Important:** Please sign your commits with GPG. [Guide](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification)

1. **Fork this repository**

2. **Clone your fork**

3. **Create a new branch for your new feature**

- ```git branch feature```
-  ```git checkout feature```

4. **Install dependencies and build static site**

- ```yarn install```
- ```yarn build```

### Setup development server

1. **Install dependencies**

- ```yarn install```

2. **Build static site**

- ```yarn build```

3. **Start development server**

- ```yarn start```

4. **Go to** ```http://localhost:8080/```

### Using build scripts

To build the static site we use NPM / yarn scripts, for convenience each build is seperated into separate scripts.

Full build:

- ```yarn build```

Compile the Liquid files

- ```yarn liquid```

Compile the SASS / SCSS

- ```yarn css```

Static files (Copies files from 'node_modules' and 'public')

- ```yarn static```

**Thanks to JetBrains for supporting this project by providing free licenses for their development tools.**

<a href="https://jb.gg/OpenSource" target="_blank">
  <img src="public/img/svg/jetbrains.svg" width="120px" alt="JetBrains">
</a>
