import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../hooks/conection";
import { BlogId, Blogs } from "../interfaces/blogsInterfaces";

function BlogInfo(){
    const { id } = useParams<{id: string}>();
    const [post, setPost] = useState<BlogId | null>(null);

    useEffect(() => {
      const fetchGetPostsById = async () =>{
        try{
            const postIdData = await getBlogById(id);
            setPost(postIdData.data);
            console.log("información del blog por id: " + postIdData.data)
        } catch(err){
            console.error('Error al obtener el post:', err);
        }
    }
    fetchGetPostsById();
    },[]);    


    
    
    return (
        <div className="HomePage">
            { post ? (
                <div>

                <div className="EncabezadoBlog">
                    <h1 className="TextEncabezadoBlog">{post.name_device}</h1>
                    <p style={{fontSize:'18px'}}>{new Date(post.relase_date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</p>
                </div>
                <div className="CuerpoBlog">
                    <img src={post.image_url} className="imageBlog" alt={post.name_device} />
                    <p className="descriptionBlog">{post.description}</p>
                </div>
                </div>
            ):(
                <div className="centerDiv">
                    <span className="loader"></span>
                </div>
            )}
        </div>
    )
}

export default BlogInfo;