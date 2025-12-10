# setting up husky, eslint and prettier

```
pnpm add -D husky
pnpm dlx husky init
pnpm add -D lint-staged

also add in the package.json
"prepare": "husky install"
```

## Add this in eslint.config.mjs

```js
import simpleImportSort from 'eslint-plugin-simple-import-sort'
```

Add the following to package.json

```json
 "lint-staged": {
        "*.{js,jsx,ts,tsx}": [
            "prettier --write",
            "eslint --fix"
        ],
        "*.{json,md,yml,yaml,css,scss}": [
            "prettier --write"
        ]
    },

```

## prettier

to sort the classes add the plugins": ["prettier-plugin-tailwindcss"] in .prettierrc

```json
{
    "semi": false,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "es5",
    "plugins": ["prettier-plugin-tailwindcss"]
}
```

## to commit-msg

```
pnpm add -D @commitlint/cli @commitlint/config-conventional

and then make the commitlint.config.cjs
```
