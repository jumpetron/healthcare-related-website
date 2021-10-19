import React, { useEffect, useState } from 'react';
import Blog from '../../Blogs/Blog';
import './BlogSection.css'

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      fetch("./blog.json")
        .then((res) => res.json())
        .then((data) => setBlogs(data));
    }, []);
    return (
      <>
        <div className="text-center mt-5 mb-5 blog-header">
          <h2 className="text-danger">Gets Every Single Updates Here</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
        <div className="blog-container ">
          {blogs.slice(0,4).map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </>
    );
};

export default BlogSection;