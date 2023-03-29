import http from 'node:http';
import handler from './handler.js';
const PORT = process.env.PORT || 1337;
const server = http.createServer(handler).listen(PORT, () => console.log(`server running on ${PORT}`));
export { server };
//# sourceMappingURL=server.js.map