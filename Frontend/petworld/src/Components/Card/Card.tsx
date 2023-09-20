import React from "react";
import { animated, useSpring, config } from "@react-spring/web";
import "./Card.css";
import { Link } from "react-router-dom";
const animationConfig = config.molasses;

interface Article {
    article: any;
}

const Card : React.FC<Article> = ({ article }) => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: animationConfig,
  });

  return (
    <Link to={`/articles/${article.id}`} className="link">
        <animated.div style={fade}>
        <div className="card mb-4">
            <div className="card-image-container"> {/* Apply the CSS class here */}
            <img
                src={article.imageUrl}
                alt="Article Thumbnail"
                className="card-img-top"
            />
            </div>
            <div className="card-body">
            <h3 className="card-title">{article.title}</h3>
            <p className="card-text">{article.description}</p>
            </div>
        </div>
        </animated.div>
    </Link>

  );
};

export default Card;
