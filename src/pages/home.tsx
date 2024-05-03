import React, { useEffect, useState } from "react";
import { getPosts } from "../hooks/conection";
import { useNavigate } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';

export interface Post {
    id: number;
    name_device: string;
    relase_date: string;
    description: string;
    image_url: string;

}

function Home(){
    const navigate = useNavigate();
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() =>{
        const fetchPosts = async () =>{
            try{
                const postsData = await getPosts();
                setPosts(postsData.data);
            }catch(error){
                console.error('Error al obtener los posts:', error);
            }
        };
        fetchPosts();
    },[]);

    const goToBlogById = async (id: number) => {
        try {
            console.log("id: " + id);
            navigate(`/blog/${id}`);

        } catch (error) {
            console.error('Error al obtener el post:', error);
        }
    }

    const isAdmin = localStorage.getItem('isActive') === 'true';
    const goToEditPost = async (id: number) => {
        
    }
    const deletePost = async (id: number) => {}

    return (
        <div className="HomePage">
            <img src="src/assets/fondo.png" className="imgHome"/>
            <h1 className="TextImg animate__animated animate__backInDown">EXPLORANDO LA REALIDAD VIRTUAL</h1>
            <div className="Blogs">
                {posts.map(post => (
                    <div key={post.id} className="CardsBlog" onClick={async () => await goToBlogById(post.id)}>
                        {
                            (isAdmin) && (
                                <div className="AdminButtons">
                                    <Tooltip title="Editar">
                                    <button className="btn btn-edit" onClick={async () => await goToEditPost(post.id)}>
                                    <img src="src/assets/icons/edit.svg" className="ico"/>
                                    </button>
                                    </Tooltip>
                                    
                                    <Tooltip title="Eliminar">
                                    <button className="btn btn-edit" onClick={async () => await deletePost(post.id)}>
                                    <img src="src/assets/icons/trash.svg" className="ico"/>
                                    </button>
                                    </Tooltip>
                                </div>
                            )
                        }
                        <img src={post.image_url} alt={post.name_device} className="imgDiv" />
                        <h2>{post.name_device}</h2>
                        <p className="Fecha">{new Date(post.relase_date).toLocaleDateString()} | Realidad Virtual, Realidad Virtual Social</p>
                        <p className="multiline-truncate">{post.description}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Home;