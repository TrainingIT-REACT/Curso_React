import { createAsyncAction } from 'redux-promise-middleware-actions';

export const getPosts = createAsyncAction('POSTS', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return await res.json();
});
