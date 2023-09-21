import React from "react";
import { useParams } from "react-router-dom";
import "./ArticleDetails.css";

const ArticleDetails = () => {
  const { id } = useParams();
  const parrotImageURL = require('./../../assests/Images/pets/facts-parrots.webp');
  const articles = [
    {
      id: 1,
      title: "Parrot",
      description: "This is a brief description of the first article content.",
    },
    {
      id: 2,
      title: "Cat",
      description: "This is a brief description of the first article content.",
    },
    // Add more articles here
  ];

  // Find the selected article based on its ID
  const selectedArticle = articles.find((article) => article.id === Number(id));

  if (!selectedArticle) {
    return <div>Article not found.</div>;
  }

  return (
    <div className="article-details">
    <h1 className="article-title">{selectedArticle.title}</h1>
    {selectedArticle.title === "Parrot" && (
      <img
        src={parrotImageURL}
        alt="Parrot"
        style={{ width: "300px", height: "200px" }} // Adjust the width and height as needed
      />
    )}
    <p className="article-content">{selectedArticle.description}</p>

    {selectedArticle.title === "Parrot" && (
      <div>
     
        <h2>More About Parrots</h2>
        <p>
          Parrots are highly intelligent birds known for their vibrant plumage
          and ability to mimic human speech. They are found in tropical and
          subtropical regions...
        </p>
        <p>
          Parrots are social creatures and often form strong bonds with their
          owners. They require a balanced diet that includes fruits, vegetables,
          and nuts...
        </p>
        {/* Add more information as needed */}
      </div>
    )}
  </div>
  );
};

export default ArticleDetails;
