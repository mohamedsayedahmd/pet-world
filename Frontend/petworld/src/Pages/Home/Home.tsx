import React from "react";
import { useState, useEffect } from "react";
import Card from "./../../Components/Card/Card";
import { animated, useSpring, config } from "@react-spring/web";

const HomePage: React.FC = () => {
  const [animateElements, setAnimateElements] = useState(false);
  const catImage = require('./../../assests/Images/pets/Cat.jpg');
  const dogImage = require('./../../assests/Images/pets//Dog.jpg');
  const fishImage = require('./../../assests/Images/pets/Fish.jpg');
  const parrotImage = require('./../../assests/Images/pets/Parro.jpg');
  const [isToggled, setIsToggled] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateElements(true);
    }, 100); // Adjust the delay as needed
  }, []);
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  })
  // CSS objects (css) {any css obj}
  const fade2 = useSpring({
    
    //     opacity: isToggled ? 1 : 0,
    // fontSize: isToggled ? "2rem" : "5em",
    color: isToggled ? "green" : "red",
    transform: isToggled ? 'translate3d(0, 0, 0)' : 'translate3d(0, -50px, 0)',

  })

  const fade3 = useSpring({
    opacity: animateElements ? 1 : 0,
    transform: animateElements ? 'translate3d(0, 0, 0)' : 'translate3d(0, -50px, 0)',

  })

  const articles = [
    {
      id: 1,
      title: "Parrot",
      description: "This is a brief description of the first article content.",
      imageUrl: parrotImage,
    },
    {
      id: 2,
      title: "Cat",
      description: "This is a brief description of the second article content.",
      imageUrl: catImage,
    },
    {
      id: 3,
      title: "Dog",
      description: "This is a brief description of the third article content.",
      imageUrl: dogImage,
    },
    {
      id: 4,
      title: "Fish",
      description: "This is a brief description of the fourth article content.",
      imageUrl: fishImage,
    },
    {
      id: 5,
      title: "Article Title 5",
      description: "This is a brief description of the fifth article content.",
      imageUrl: "https://via.placeholder.com/150",
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
        <animated.h1 style={fade}>Welcome to Our Website</animated.h1>
      </header>

      <section className="mt-5">
        <h2 className="text-center">Featured Articles</h2>
        {rows.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((article) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={article.id}>
                <Card article={article} />
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>

  );
};

export default HomePage;
