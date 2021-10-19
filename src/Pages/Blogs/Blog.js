import React from 'react';
import { Button } from 'react-bootstrap';


const Blog = (props) => {
    const {title, image, body} = props.blog
    return (
      <div className="blog">
        <div>
          <img className="img-fluid" src={image} alt="" />
          <h5 className="mt-2">{title}</h5>
          <p>{body}</p>
        </div>
        <Button className="btn custom-btn">Read Now</Button>
      </div>
    );
};

export default Blog;