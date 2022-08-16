import React from "react";
import moment from "moment";
import { useGlobalContext } from "./context";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  AOS.init({
    duration: 1000,
  });

  return (
    <section className="stories">
      {hits.map((story) => {
        const {
          objectID,
          title,
          num_comments,
          url,
          points,
          author,
          created_at,
        } = story;
        return (
          <article key={objectID} className="story" data-aos="fade-up-left">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span> {num_comments}{" "}
              comments
            </p>
            <p className="info">
              | {moment(created_at).format("MMMM Do YYYY, h:mm:ss a")}
            </p>
            <div>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                read more
              </a>
              <button className="remove-btn" onClick={() => removeStory(objectID)}>remove</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
