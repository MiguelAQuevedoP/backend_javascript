import fs from 'fs/promises';
import EventEmitter from 'events';

 class FileWatcher extends EventEmitter {
    async readFile(file){
        try {
            const data = await fs.readFile(file,'utf8');
            this.emit('read', file, data);
        } catch (error) {
            this.emit('error',error);
        }
    }
 };

const fileReader = new FileWatcher();

fileReader.on('read', (file, data) => {
    console.log(`File ${file} read succefully: `, data);
});

fileReader.on('error', (error) => {
    console.log(`There was an error: ${error.message}`);
});

(async () => {
    try {
        await fileReader.readFile('text1.txt');
        await fileReader.readFile('text2.txt');
        await fileReader.readFile('text3.txt');
    } catch (error) {
        console.log(error);
    }
})();