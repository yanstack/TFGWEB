import {createPool} from 'mysql2/promise';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './config.js';

// creando la conexion a la base de datos
export const pool = createPool({
    host:DB_HOST,
    port: DB_PORT,
    user:DB_USER,
    password: DB_PASSWORD,
    database:DB_NAME
});