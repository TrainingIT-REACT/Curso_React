import types from './types';

const postsLoading = () => ({
  type: types.POSTS_LOADING
});

const postsError = () => ({
  type: types.POSTS_ERROR
});

const postsLoaded = (posts) => ({
  type: types.POSTS_LOADED,
  posts
})

export const getPosts = () => async (dispatch) => {
  dispatch(postsLoading());
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await res.json();
    dispatch(postsLoaded(json));
  } catch {
    dispatch(postsError());
  }
};
