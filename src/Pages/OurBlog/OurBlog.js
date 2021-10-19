import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './OurBlog.css'

const OurBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      fetch("./blog.json")
        .then((res) => res.json())
        .then((data) => setBlogs(data));
    }, []);
    return (
      <>
        <div className="our-blog-header">
          <h3>Carenting</h3>
          <p>
            A community of information and resources to improve your health and
            well-being.
          </p>
        </div>
        <div className="blog-area container">
          {blogs.map((blog) => (
            <div>
              <div>
                <div>
                  <img className="img-fluid" src={blog.image} alt="" />
                  <h5 className="mt-2">{blog.title}</h5>
                  <p>{blog.body}</p>
                </div>
                <Button className="btn custom-btn">Read Now</Button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
};

export default OurBlog;