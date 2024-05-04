import axios from 'axios';

const API_URL = 'http://localhost:3000/posts';  // Cambia esto por la URL real de tu backend

// Función para obtener posts
export const getPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    throw error;
  }
};

// Función para crear un post
export const createPost = async (postData) => {
  try {
    const response = await axios.post(API_URL, postData);
    return response.data;
  } catch (error) {
    console.error('Error al crear un post:', error);
    throw error;
  }
};


//Función para traer blog por id
export const getBlogById = async (id) => {
  try{
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error){
    console.error('Error al obtener el post:', error);
    throw error;
  }
}

//Función para eliminar un blog por id
export const deleteBlog = async (id) => {
  try{
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error){
    console.error('Error al eliminar el post:', error);
    throw error;
  }
}