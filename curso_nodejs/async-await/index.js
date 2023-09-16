import fs from "fs/promises";
//This is an example for know how to implement async-await whit file system
async function readFile() {
  try {
    const firstData = await fs.readFile("./text1.txt", "utf8");
    console.log("text 1:\n", firstData);

    const secondData = await fs.readFile("./text2.txt", "utf8");
    console.log("text 2:\n", secondData);

    const thirdData = await fs.readFile("./text3.txt", "utf8");
    console.log("text 3:\n", thirdData);

    const fourthData = await fs.readFile("./index.html", "utf8");
    console.log("index.html:\n", fourthData);
  } catch (error) {
    //throw error;
    console.error("error reading files: ", error);
  }
}

//readFile();

async function renameFile(){
  try {
    await fs.rename("./text1_renamed.txt", "./text1.txt");
    console.log("file renamed");
  } catch (error) {
    throw error;
    //console.error("error renaming file: ", error);
  }
};

//renameFile();

//writeFile() delete content in the file and replace the text
async function writeFile(){
  try {
    await fs.writeFile("./text1.txt", "This is a new text");
    console.log("file written");
  } catch (error) {
    throw error;
    //console.error("error writing file: ", error);
  }
};

//writeFile();

//appendFile() write text at the end of content of file
async function appendFile(){
  try {
    await fs.appendFile("./text1.txt", "This is a new text");
    console.log("file appended");
  } catch (error) {
    throw error;
    //console.error("error appending file: ", error);
  }
};

//appendFile();

//unlink() Is for delete a file
async function unlinkFile(){
  try {
    await fs.unlink("./text1.txt");
    console.log("file deleted");
  } catch (error) {
    throw error;
    //console.error("error deleting file: ", error);
  }
};

//unlinkFile();