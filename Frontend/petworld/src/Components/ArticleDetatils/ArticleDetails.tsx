import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ArticleDetails.css";

import axios from "axios";

const ArticleDetails = () => {
  const { id } = useParams();
    // Placeholder article data for testing
    const article = {
      title: "Sample Article",
      content: "This is the content of the sample article.",
    };
  

//   const [article, setArticle] = useState<any>(null);

//   useEffect(() => {
//     axios.get(`/api/articles/${id}`).then((response:any) => {
//       setArticle(response.data);
//     });
//   }, [id]);

//   if (!article) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className="article-details">
    <h1 className="article-title">{article.title}</h1>
    <p className="article-content">{article.content}</p>
  </div>
  );
};

export default ArticleDetails;

    // <div>
    //     <h1>Article</h1>
    //   {/* <h1>{article.title}</h1>
    //   <p>{article.content}</p> */}
    // </div>