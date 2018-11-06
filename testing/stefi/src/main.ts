import { FileReader } from "./engine/reader";

console.log('typescript stefi');

const file:string = "./files/library/stefyLibrary.json";

const fr: FileReader = new FileReader();
const content: Promise<string[]> = fr.read(file);
content.then((res: string[]) => console.log(res));
