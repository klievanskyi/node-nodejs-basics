import { readdir, mkdir, copyFile } from 'node:fs/promises';

const copy = async () => {
    const errorText = 'FS operation failed';

    try {
        const files = await readdir('./src/fs/files/');
        await mkdir('./src/fs/files_copy/', { recursive: false });
        for (const file of files) {
            copyFile(`./src/fs/files/${file}`, `./src/fs/files_copy/${file}`);
        }
    } catch(error) {
        throw new Error(errorText);
    }
};

await copy();
