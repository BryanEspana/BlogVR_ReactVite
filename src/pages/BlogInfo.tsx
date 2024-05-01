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
           <div>
            <h1></h1>
           </div>
        </div>
    )
}

export default Home;