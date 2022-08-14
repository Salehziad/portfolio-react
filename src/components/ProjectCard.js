import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,github,live }) => {
  return (
    <Col size={12} sm={6} md={4} className="cards">
      <div className="proj-imgbx">
        <img src={imgUrl} alt='s'/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <div className="btn-box">
          <a target="_blank" href={github} rel="noreferrer">Github</a> 
          <a target="_blank" href={live} rel="noreferrer">Live Url</a>
        </div>
    </Col>
  )
}
