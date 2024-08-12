# Age of Sigmar Battle Manual

A web manual to help players navigate battles in Age of Sigmar.

Download the Pocketbase application from <https://pocketbase.io/docs/> and place it in the `src/server` folder.
Start the server by typing:

```bash
src/server/pocketbase serve
```

Run the web app by:

```bash
npm install
npm run dev
```

_Discalimer_ - This repository is undergoing development, and some rules may be incorrect or missing.

## TODO's

### Game TODO´s

- Store user faction type choice in local storage instead of redux state
- Remove all deprecated stuff, such as admin and armies
- Make Battle Formation selectable
- Store battle formation choice in local storage instead of redux state
- Extract Game setup from start-of-turn-phase and navigate to start-of-turn-phase from end-of-turn-phase
- Parse and store ability execution information, such as "Once per Turn, Your Movement Phase"
- Add user login
- Store game info in DB
- Fix parser bugs and parse more factions
- Parse Manifestation Lore
- Parse and save Warscrolls

### General TODO's

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
- Add more armies
- Add army units
