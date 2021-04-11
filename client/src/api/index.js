import axios from 'axios';

const url = 'http://localhost:5000/posts'; //returns all the posts in the db

export const fetchPosts = () => axios.get(url);