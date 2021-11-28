import express from 'express';
import router from "./router/index.js";
import {Model} from 'objection';
import knex from 'knex';
import connection from "./knexfile.mjs";
//TODO: check why I can't import directories

Model.knex(new knex(connection));

const app = express();

app.use(express.json())
app.use('/', router);

export default app;