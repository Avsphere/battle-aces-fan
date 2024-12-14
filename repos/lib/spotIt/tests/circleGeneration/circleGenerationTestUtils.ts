import { fromFileUrl, resolve } from "@std/path"

export const getTestSockFilepath = () => {
    const currentFilePath = fromFileUrl(import.meta.url);
    const fullPathToSock = resolve(currentFilePath, '../sock.jpeg');

    return fullPathToSock;
}