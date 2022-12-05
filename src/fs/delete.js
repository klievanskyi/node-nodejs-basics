import { unlink } from 'node:fs/promises';

const remove = async () => {
    const errorText = 'FS operation failed';

    try {
        await unlink('./src/fs/files/fileToRemove.txt');
    } catch (error) {
        throw new Error(errorText);
    }
};

await remove();