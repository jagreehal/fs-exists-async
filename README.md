# fs-exists-async

**fs-exists-async** is a lightweight utility that allows you to check if a file or directory exists asynchronously using Node.js' native `fs.promises` module.

It's easy to use, has no external dependencies, and returns `true` if the path exists and `false` if it doesn't.

## Installation

You can install **fs-exists-async** via npm, yarn or pnpm:

```bash
npm install fs-exists-async
# or
yarn add fs-exists-async
# or
pnpm add fs-exists-async
```

## Usage

To check if a file or directory exists, import the exists function and use it as follows:

```javascript
import { exists } from 'fs-exists-async';

// Check if a file exists
const filePath = './example.txt';
const fileExists = await exists(filePath);
console.log(`File exists: ${fileExists}`);

// Check if a directory exists
const directoryPath = './example-directory';
const directoryExists = await exists(directoryPath);
console.log(`Directory exists: ${directoryExists}`);
```

## License

This package is open-source and distributed under the MIT License.
