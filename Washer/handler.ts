import {
    fileURLToPath
} from 'node:url'


function handler(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}

export default handler