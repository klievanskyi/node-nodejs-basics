import { readdir } from 'node:fs/promises';

const list = async () => {
    const errorText = 'FS operation failed';

    try {
        const files = await readdir('./src/fs/files/');
        console.log(files);
    } catch(error) {
        throw new Error(errorText);
    }
};

await list();