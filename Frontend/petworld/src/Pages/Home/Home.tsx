import React,{useState,useEffect} from 'react';
import { animated, useSpring, config,useTrail } from '@react-spring/web';

const catImage = require('./../../assests/Images/pets/Cat.jpg');
const dogImage = require('./../../assests/Images/pets//Dog.jpg');
const fishImage = require('./../../assests/Images/pets/Fish.jpg');
const parrotImage = require('./../../assests/Images/pets/Parro.jpg');


const HomePage: React.FC = () => {
  const [animateElements, setAnimateElements] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateElements(true);
      
    }, 200); // Adjust the delay as needed
  }, []);
  
  const animationConfig = config.molasses;

  
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const articles = [
    {
      id: 1,
      title: 'Parrot',
      description: 'This is a brief description of the first article content.',
      imageUrl: parrotImage,
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


  // Shorter
  // const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })

  console.log(fade);

  
  return (
    <div className="container mt-5">
      <header className="text-center">
      <animated.div style={fade} >
        <h1 className="display-4">Welcome to Our Website</h1>
      </animated.div>
        <p className="lead">Your go-to source for amazing content.</p>
      </header>


      <section className="mt-5">
        <h2 className="text-center">Featured Articles</h2>
        {rows.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((article) => (


                  <animated.div
                  key={article.id}
                  style={{
                    opacity: animateElements ? 1 : 0,
                    transform: animateElements ? 'translate3d(0, 0, 0)' : 'translate3d(0, -50px, 0)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease', // Optional: Add a smooth transition effect
                    }}
                  className="col-md-4"
                  >
                <div  className="card mb-4">
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

              </animated.div>


            ))}
          </div>
        ))}
      </section>

      <section className="mt-5">
        <h3 className="text-center">Categories</h3>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <ul className="list-group list-group-horizontal justify-content-center">
          <li className="list-group-item"><a href="#">Category 1</a></li>
          <li className="list-group-item"><a href="#">Category 2</a></li>
          {/* Add more categories or links here */}
          <animated.h1 style={fade2}>
            Hello
          </animated.h1>
          <button onClick={() => setIsToggled((!isToggled))}>Toggle</button>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
