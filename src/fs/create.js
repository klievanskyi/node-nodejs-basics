import { writeFile } from 'node:fs/promises';

const create = async () => {
    const text = 'I am fresh and young';
    const errorText = 'FS operation failed';
    const path = './src/fs/files/fresh.txt';

    try {
        writeFile(path, text, {flag: 'wx+'});
    } catch(error) {
        throw new Error(errorText);
    }

};

await create();