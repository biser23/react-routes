import React from "react";
import { experiences, studies } from "../data/resume";

const Resume = () => {
  return (
    <div>
      <h1>Currículum</h1>
      <div>
        <h2>Experiencia Laboral</h2>
        <ul>
          {experiences.map((experience) => (
            <li key={experience.id}>
              <h3>{experience.title}</h3>
              <p>{experience.company}</p>
              <p>{experience.date}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Educación</h2>
        <ul>
          {studies.map((study) => (
            <li key={study.id}>
              <h3>{study.title}</h3>
              <p>{study.institution}</p>
              <p>{study.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;