# 3.0.0

[React Bangkok 3.0.0 website.](https://reactbkk.com/3.0.0/)

Using Gatsby with Emotion.

## Other projects

| Project | Link |
| --- | --- |
| React Bangkok 3.0.0 website | https://github.com/reactbkk/3.0.0 |
| React in Patterns (TH) Book | https://reactbkk.gitbook.io/react-in-patterns-th/ |
| GitHub issue bot | https://github.com/reactbkk/3.0.0-issue-bot |
| Poster image generator | https://github.com/reactbkk/3.0.0-posters-nametags |
| Name tag generator | https://github.com/reactbkk/3.0.0-posters-nametags |
| Ticket checkin & fulfillment system | https://github.com/dtinth/ticket-checkin |
| Tweetboard | https://github.com/reactbkk/tweetboard-frontend |
| Countdown timer | https://github.com/reactbkk/countdown-timer |
| React Bangkok connect | https://github.com/WiNloSt/react-bangkok-connect-cloned |

## Development

### Preparation

- Please install latest version of **Node.js**.

- Please install latest version of **Yarn**.

- Please use **Visual Studio Code** to edit this project. This repo contains
  [VS Code settings](.vscode) that is optimized for this project.

### Setup project

1.  Clone this repository.

2.  Install dependencies using

    ```sh
    yarn
    ```

3.  Open this project in **Visual Studio Code.**

    VS Code will recommend you to install some extensions: “This workspace has
    extension recommendations.” Click **Install All.** After all extensions
    finished installing, click the **Reload** button.

### Development workflow

1.  Open this project in **Visual Studio Code.**

2.  Use the menu **Tasks** &rarr; **Run build task...** or press
    <kbd>Cmd+Shift+B</kbd> to start the development server.

    You should see: `You can now view reactbkk3 in the browser.`.

3.  Go to http://localhost:8000 to view your site!

### Coding standard

- Based on
  [eslint-config-react-tools](https://github.com/react-tools/eslint-config-react-tools/blob/master/index.js).

- Code for the app lives inside `src` folder. They are grouped by feature /
  domain to encourage
  [screaming architecture](https://8thlight.com/blog/uncle-bob/2011/09/30/Screaming-Architecture.html).

- We don't use `export default`, but use named exports, so that VS Code can
  auto-import and auto-rename better

- Take a look at the [`src/design`](src/design) folder which establishes the
  typographic scale and rhythm.
