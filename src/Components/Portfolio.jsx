/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Shopping Cart Website",
    description:
      "A fully functional shopping cart application built with React, Tailwind CSS, and Redux Toolkit. This project showcases my skills in state management, responsive design, and seamless user experience.",
    url: "https://cart-seven-orcin.vercel.app/",
  },
  {
    title: "Logistic Website",
    description:
    "This transportation service website is built with React and Tailwind CSS, offering a modern, responsive design to enhance user experience. The website provides seamless navigation and user-friendly interface.",
    url: "https://transport-sepia.vercel.app/",
  },
  {
    title: "My Resume Site",
    description:
      "Created Resume and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://suraj371k.github.io/Resume/",
  },
  {
    title: "Food Website",
    description:
    "I developed the frontend of a food website using React. This project showcases my skills in creating dynamic and responsive web interfaces, focusing on user-friendly design and seamless navigation",
    url: "https://food-web-dun.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
