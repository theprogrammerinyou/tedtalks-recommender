import React, { useState } from "react";
import "./styles.css";

//database
const videos = {
  "About Humans": [
    {
      Title: "What happens to our brain during migrain? ",
      Description:
        "Thinking of what happens to your brain during migrain? Check this video out",
      Link: "https://www.youtube.com/watch?v=qwZypa0iKq8"
    },
    {
      Title: "How to take the perfect nap?",
      Description:
        "Having trouble with your sleep? Watch this video to understand what happens when you get a perfect sleep and how to get one.",
      Link: "https://www.youtube.com/watch?v=BN9yqF6Um98"
    },
    {
      Title: "How to improve your critical thinking?",
      Description:
        "Want to improve the way you think about your problems in real life? Check out this amazing Ted-Ed video about critical thinking.",
      Image: "https://www.youtube.com/watch?v=vNDYUlxNIAA"
    },
    {
      Title: "How does A.I. learn?",
      Description:
        "Although Tanay Pratap says AI/ML is not the field you need to go into when you are starting your career, but do check this amazing video which helps you understand how exactly AI works. ",
      Image: "https://www.youtube.com/watch?v=0yCJMt9Mx9c"
    },
    {
      Title: "Some Amazing secrets about human brain",
      Description:
        "Want to know some amazing secrets about human brain, then this video is definitely for you, click on the link and watch the video right away",
      Image: "https://www.youtube.com/watch?v=iQqSKfPop28"
    }
  ],
  Facts: [
    {
      Title: "What's in the air that you breathe?",
      Link: "https://www.youtube.com/watch?v=xEodej_M7TI",
      Description:
        "Are you curious to know what gases are present in the environment you live in? Want to know what gases are present in the air you breathe? Check the video here."
    },

    {
      Title: "Who decides how long a second is?",
      Description:
        "Ever wondered who is the person who decides how long a day must be or how long a second must be? Then do check this video out. ",
      Link: "https://www.youtube.com/watch?v=OKms5a0nGO4"
    },

    {
      Title: "What's the speed of your thought",
      Description:
        "Ever thought what's the speed of your thought? Hahah no pun intended, check out the video to know at what speed does a thought come in to your mind",
      Link: "https://www.youtube.com/watch?v=g12bxfYVhMk"
    },
    {
      Title: "Rise and Fall of History's first empire",
      Description:
        "Ever wondered which empire or king was the first ever king to rule the world? Checkout this video to get the answer",
      Link: "https://www.youtube.com/watch?v=XBk9KywTIgk"
    },
    {
      Title: "Flying and Lightning Robots",
      Description:
        "Fascinating title huh? Try watching this video to understand and explore the amazing world of robots that will make you fall in love with the concepts of drones and robots.",
      Link: "https://www.youtube.com/watch?v=RCXGpEmFbOw&list=WL"
    }
  ],
  "Human Body": [
    {
      Title: "Why do we sweat?",
      Description:
        "Tired of sweating too much in the summers due to scorching heat outside? Try this video to understand the science behind sweating.",
      Link: "https://www.youtube.com/watch?v=fctH_1NuqCQ"
    },
    {
      Title: "How do  we get dandruff?",
      Description:
        "Want to find out the exact reason about why do you get dandruff and does it actually cause hairfall? Check this video out.",
      Image: "https://www.youtube.com/watch?v=x6DUOokXZAo"
    },
    {
      Title: "Why do we dream? ",
      Link: "https://www.youtube.com/watch?v=2W85Dwxx218",
      Description:
        "Got a bad dream last night? Check this video to understand why and how do we dream?"
    },
    {
      Title: "Why do we get fever? ",
      Link: "https://www.youtube.com/watch?v=jRvxnpfCDSo",
      Description:
        "Watch this video to get the exact science behind what happens to our body when we get fever."
    }
  ]
};

const genres = Object.keys(videos);

export default function App() {
  const [List, setList] = useState(videos.Facts);

  function clickHandler(item) {
    const video = videos[item];
    setList(video);
  }

  const allVideos = (video) => {
    const title = video.Title;
    const link = video.Link;
    const desc = video.Description;
    const html = (
      <li>
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <a href={link} target="_blank" rel="noreferrer">
            Click to watch the video.
          </a>
          <p>Courtesy: Ted </p>
        </div>
      </li>
    );
    return html;
  };

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="emoji">
          🔥📽️🎞️
        </span>{" "}
        Ted-Ed videos.
      </h1>
      <p>Checkout the best Ted-Ed videos. Select a genre to get started</p>
      <div>
        {genres.map((video) => {
          return (
            <button
              key={video}
              className="btn"
              onClick={() => clickHandler(video)}
            >
              {video}
            </button>
          );
        })}
      </div>
      <ul>
        {List.map((video) => {
          return allVideos(video);
        })}
      </ul>
    </div>
  );
}
