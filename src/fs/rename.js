import * as fs from 'node:fs/promises';

const rename = async () => {
    const errorText = 'FS operation failed';

    try {
        await fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md');
    } catch(error) {
        throw new Error(errorText);
    }
};

await rename();