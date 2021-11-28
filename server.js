'use strict';

import app from './src/app.js';

const HOST = process.env.NODE_CONTAINER_HOST;
const PORT = process.env.NODE_CONTAINER_PORT;

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);