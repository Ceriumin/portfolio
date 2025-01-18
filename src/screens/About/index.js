import React from "react";

function About() {
  const openResume = () => {
    window.open('/Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <h3>HELLO!</h3>
      <h1>Nice to meet you!</h1>
      <p>I am an aspiring Software Developer and Student enrolled at the University of Huddersfield, majoring in Computer Science.</p>
      <p>I am passionate about all things programming, whether it's making games, applications or solving problems, and I am a big dreamer.</p>
      <p>I am very happy and open to explore other opportunities.</p>
      <p>While you're here you can check out my <a href="https://github.com/ceriumin">GitHub</a> for all my weird stuff</p>
      <p>If you're interested in what I do you can find my resume <a href="#" onClick={openResume}>here</a></p>
    </div>
  );
}

export default About;