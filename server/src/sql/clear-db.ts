

import { pool } from './../adaptors/connectPostgre';
import { release } from 'os';

const query = `
  TRUNCATE
  df.account_followers,
  df.activities,
  df.blog_followers,
  df.post_followers,
  df.comment_followers,
  df.news_feed,
  df.notifications`;

pool.query(query, (err) => {
  if (err) throw err;
  console.log('The database has been cleared')
  release();
});