// GET    -  '/post/list'        -  List all posts and send them as JSON to the client.
// POST   -  '/post'      -  Handle post creation form submission. Send the created post in JSON response.
// GET    -  '/post/:id'         -  Load single post and send them as JSON to the client.
// DELETE -  '/post/:id'         -  Delete single post
// PATCH  -  '/post/:id'         -  Handle post editing form submission, send the edited post as JSON.

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3020'
});

// const listPosts = () =>
//   new Promise((resolve, reject) => {
//     api
//       .get('/post/list')
//       .then(response => {
//         const data = response.data;
//         resolve(data);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });

export const listPosts = () => api.get('/post/list').then(response => response.data);

export const createPost = body => api.post('/post', body).then(response => response.data);

export const loadPost = id => api.get(`/post/${id}`).then(response => response.data);

export const deletePost = id => api.delete(`/post/${id}`).then(response => response.data);

export const editPost = (id, body) =>
  api.patch(`/post/${id}`, body).then(response => response.data);
