import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from './Post';

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

    function renderPosts() {
        return posts.map((post, i) => {
            return <Post key={i} post={post} />
        });
    }

  return (
    <div className='home'>
        {renderPosts()}
    </div>
  );
}

export default Home;