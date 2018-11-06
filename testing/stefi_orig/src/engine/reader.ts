import { IReader } from "./../interface/engine/reader";
import { readFile } from "fs";

export class FileReader {
  public async read(path: string): Promise<string[]> {
    return new Promise(
      (
        resolve: (str: string[]) => void,
        reject: (str: Error) => void
      ): void => {
        readFile(
          path,
          "utf-8",
          (err: Error, data: string): void => {
            if (err) {
              reject(err);
            }
            resolve(
              data
                .trim()
                .split(/\n|\r\n/)
                .filter((x: string) => x !== "")
                .map((x: string) => x.trim())
            );
          }
        );
      }
    );
  }
}
