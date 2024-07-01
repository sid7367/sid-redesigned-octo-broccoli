import React from "react";
import PropTypes from "prop-types";

const Education = ({ education }) => {
  return (
    <section id="education" className="container">
      <h1>Education</h1>
      <ul>
        {education.map((item) => (
          <li key={item.degree}>
            <h2>{item.degree}</h2>
            <h3>{item.institution}</h3>
            <p>
              {item.graduated}
              <br />
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      degree: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      graduated: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Education;
