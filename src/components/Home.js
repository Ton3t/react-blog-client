import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    async function getPosts() {
        const postsRes = await Axios.get("http://localhost:5000/posts");
        setPosts(postsRes.data);
        console.log(postsRes.data);
    }

  return (
    <div className='home'>Home</div>
  );
}

export default Home;