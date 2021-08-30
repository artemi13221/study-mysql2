import express from 'express';
import dotenv from 'dotenv';
import console from 'console';
import { testPool } from './testPool';

// .env file reload
dotenv.config();

// Init
const app = express();
const port = process.env.PORT ?? 10002;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  try {
    const test = await testPool.query(
      'SELECT * FROM users WHERE name = `ruoh`',
    );
    res.send(test[0]);
  } catch (error) {
    console.error(error);
  }
});

app.post('/login', async (req, res) => {
  const data = req.body;

  try {
    const loginInformation = await testPool.query(
      'SELECT * FROM users WHERE name = ? AND age = ?',
      [data.name, data.age],
    );

    res.send(loginInformation[0]);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`${port}, open!`);
});
