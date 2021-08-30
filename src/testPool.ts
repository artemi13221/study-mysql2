import mysql from 'mysql2';
import * as db from '../db.json';

const pool = mysql.createPool(db);
const testPool = pool.promise();

export { testPool };
