import React, { useState } from 'react';
import './BlogPost.css';

const BlogPost = ({ title, author, date, image, children }) => {
    
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
      };
    
      const handleDislike = () => {
        setDislikes(dislikes + 1);
      };
    return (
        <div className="blog-post">
            <h2>{title}</h2>
            <div className="meta">
                <span>Author: {author}</span>
                <span>Date: {date}</span>
            </div>
            <img src={image} alt="Descriptive" />
            <p>{children}</p>
            <hr />
            <div className="like-dislike">
          <button onClick={handleLike}>Like</button>
          <span>{likes} Likes</span>
          <button onClick={handleDislike}>Dislike</button>
          <span>{dislikes} Dislikes</span>
        </div>

        </div>
    );
}

export default BlogPost;