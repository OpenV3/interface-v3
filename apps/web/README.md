# Ubeswap Web Interface

## Running the interface locally

### 1. Run the following cmds in the monorepo project root

```bash
# Install dependencies
yarn install

# Build the ui package first
yarn workspace ui build

# Run typecheck again
yarn g:typecheck
```

### 2. Run in the ./app/web directory

```bash
yarn
yarn start
# investigate if the following cmd works from the root: yarn web start
```
