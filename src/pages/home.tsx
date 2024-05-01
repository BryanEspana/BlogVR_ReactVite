import React, { useEffect, useState } from "react";
import { getPosts } from "../hooks/conection";

export interface Post {
    id: number;
    name_device: string;
    relase_date: string;
    description: string;
    image_url: string;

}

function Home(){

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
    })

    return (
        <div className="HomePage">
            <img src="src/assets/fondo.png" className="imgHome"/>
            <h1 className="TextImg animate__animated animate__backInDown">EXPLORANDO LA REALIDAD VIRTUAL</h1>
            <div className="Blogs">
                {posts.map(post => (
                    <div key={post.id} className="CardsBlog">
                        <img src={post.image_url} alt={post.name_device} />
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