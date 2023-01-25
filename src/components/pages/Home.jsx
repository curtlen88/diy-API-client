import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

export default function Home() {
    const [blogs, setBlogs] = useState([]);
    const [blogId, setBlogId] = useState("");

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/cobblog`);
                setBlogs(response.data.allBlogs);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBlogs();
    }, []);

    const listBlogs = blogs.map((blog => {
        return (
            <div key={blog._id}>
                <h2>{blog.name}</h2>
                <h3>{blog.title}</h3>

                <button 
                    onClick={() => { setBlogId(blog._id) }}
                > Show Blog
                </button>
            </div>
        );
    }));

    const blogID = blogs.find(blog => blog._id === blogId);
    console.log(blogID);

    return (
        <div style={{display: "flex"}}>
            <div style={{width: "50%"}}>
                <h1>Home</h1>
                {listBlogs}
            </div>
            <div style={{width: "50%"}}>
                <h1>Blog</h1>
                <h2>{blogID?.name}</h2>
                <p>{blogID?.title}</p>
                <p>{blogID?.content}</p>
            </div>

        </div>
    );
}