import React from 'react';
const catImage = require('./Cat.jpg');
const dogImage = require('./Dog.jpg');
const fishImage = require('./Fish.jpg');
const HomePage: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'Article Title 1',
      description: 'This is a brief description of the first article content.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Cat',
      description: 'This is a brief description of the second article content.',
      imageUrl: catImage,
    },
    {
      id: 3,
      title: 'Dog',
      description: 'This is a brief description of the third article content.',
      imageUrl: dogImage,
    },
    {
      id: 4,
      title: 'Fish',
      description: 'This is a brief description of the fourth article content.',
      imageUrl: fishImage,
    },
    {
      id: 5,
      title: 'Article Title 5',
      description: 'This is a brief description of the fifth article content.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    // Add more articles here
  ];

  // Group articles into rows of 5
  const rows = [];
  for (let i = 0; i < articles.length; i += 5) {
    const row = articles.slice(i, i + 5);
    rows.push(row);
  }

  return (
    <div className="container mt-5">
      <header className="text-center">
        <h1 className="display-4">Welcome to Our Website</h1>
        <p className="lead">Your go-to source for amazing content.</p>
      </header>

      <section className="mt-5">
        <h2 className="text-center">Featured Articles</h2>
        {rows.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((article) => (
              <div className="col-md-4" key={article.id}>
                <div className="card mb-4">
                  <img
                  style={{ minHeight: '414.4px' }}
                    src={article.imageUrl}
                    alt="Article Thumbnail"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h3 className="card-title">{article.title}</h3>
                    <p className="card-text">{article.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>

      <section className="mt-5">
        <h3 className="text-center">Categories</h3>
        <ul className="list-group list-group-horizontal justify-content-center">
          <li className="list-group-item"><a href="#">Category 1</a></li>
          <li className="list-group-item"><a href="#">Category 2</a></li>
          {/* Add more categories or links here */}
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
