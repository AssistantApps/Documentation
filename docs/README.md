# Welcome to the Documentation repo! 🎉 👨‍💻

Editing the files in the `docs` folder will modify the pages on the [live site][docWebsite]. Feel free to create [Issues][docsIssues] and/or [Pull Requests][docsPullRequests] for changes you think will make the website better!

## Running it locally

### 1. Pull the source code

_Run this in your terminal or CMD_

```
git clone https://github.com/AssistantApps/Documentation.git
```

### 2. Install dependencies

_Run this in your terminal or CMD_

```
npm run dev:install
```

### 3. Run it

_Run this in your terminal or CMD_

```
npm run dev
```

### 4. View it

Open your browser (Chrome, Firefox, etc) to `localhost:3000`

---

## Please Note

If you want make any `css` changes, please make them in the `scss` folder, in the appropriate file. The `css` files are generated from the `scss` files. 

You can test this by running `npm run styles`. This command will compile the `scss` files into the `css` files and then minify those `css` files.

<!-- Links used in the page -->

[docWebsite]: https://docs.assistantapps.com?ref=AssistantAppsGithub
[homePage]: https://assistantapps.com?ref=AssistantAppsDocs
[docsIssues]: https://github.com/AssistantApps/Documentation/issues?ref=AssistantAppsDocs
[docsPullRequests]: https://github.com/AssistantApps/Documentation/pulls?ref=AssistantAppsDocs
