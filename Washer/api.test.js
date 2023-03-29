// @ts-ignore
import test from 'node:test';
import assert from 'node:assert';
import { promisify } from 'node:util';
test('Api Test Suite', async (t) => {
    const testPort = 9009;
    // @ts-ignore
    process.env.PORT = testPort;
    const { server } = await import('./server.js');
    const apiAddress = `http://localhost:${testPort}`;
    await t.test('Hello world', async (t) => {
        const request = await fetch(apiAddress, {
            method: 'GET'
        });
        assert.strictEqual(request.status, 200);
    });
    await promisify(server.close.bind(server))();
});
//# sourceMappingURL=api.test.js.map