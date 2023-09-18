import React from 'react';

const AboutUsPage :React.FC = () => {
  return (
    <div className="container mt-5">
      <header className="text-center">
        <h1 className="display-4">About Us</h1>
        <p className="lead">Get to know our amazing team.</p>
      </header>

      <section className="mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquam justo nec odio bibendum, at fringilla ipsum suscipit.
              Nullam id lectus vel libero vehicula feugiat sit amet et elit.
              Phasellus auctor eleifend purus, id interdum erat posuere nec.
            </p>
            <p>
              Nulla facilisi. Nullam non ullamcorper tortor. Suspendisse ac
              odio sed elit fermentum tincidunt. Vivamus sagittis sapien vel
              quam volutpat, nec vestibulum elit aliquam. Suspendisse id justo
              nec purus iaculis tristique.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Our Team</h2>
            <ul>
              <li>John Doe - CEO</li>
              <li>Jane Smith - CTO</li>
              <li>Alice Johnson - Lead Designer</li>
              <li>Bob Wilson - Lead Developer</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide high-quality products/services and
          continuously innovate to meet the needs of our customers. We are
          dedicated to excellence and strive to make a positive impact on our
          community and the world.
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;
