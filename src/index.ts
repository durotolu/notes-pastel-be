import server from './api/server';
import { openDb } from './database/sqlite';

const PORT = process.env.PORT || 4000;

(async () => {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      content TEXT,
      timestamp TEXT
    )
  `);
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();
