import "./styles.css";

const knowledge = [
  "fa-html5",
  "fa-css3-alt",
  "fa-js-square",
  "fa-figma",
  "fa-react",
  "fa-git-alt",
];

function Skills() {
  return (
    <div className="skills" id="skills">
      <h2 className="title">Knowledge</h2>
      <div className="container">
        {knowledge.map((item) => (
          <div className="skill" key={item}>
            <i className={`fa-brands ${item} fa-4x`}></i>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
