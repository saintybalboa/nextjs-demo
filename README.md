# NextJS Demo UI

NextJS Demo web application built on React.

## Setup

Supports the node version specified in [.nvmrc](.nvmrc)

Install package dependencies:
```bash
npm install
```

Start the application:
```bash
npm run start
```

Open the React Demo in a browser: http://localhost:3000/

### Local development

Create the following environment variables in `.env.local`:
```bash
NEXT_PUBLIC_API_BASE_URL=https://API_ENDPOINT_HERE
```

Start the application server for local development:
```bash
npm run dev
```

The React Demo should automatically be opened in the browser: http://localhost:4000/

### Tests

Install global dependencies:
```bash
npm install jest -g
```

Run unit tests:
```bash
npm run test
```

### Storybook

Install global dependencies:
```bash
npm install @storybook/cli -g
```

Build storybook:
```bash
npm run build:storybook
```

Run storybook:
```bash
npm run storybook
```

## Resources

https://nextjs.org/
