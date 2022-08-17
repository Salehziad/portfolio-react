import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import tictac from "../assets/img/tictac.PNG";
import calculater from "../assets/img/calculater.PNG";
import chat from "../assets/img/chat.PNG";
import nameIt from "../assets/img/nameIt.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import authy from "../assets/img/authy.PNG";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Authy",
            description: "Node Js & ReactJs",
            imgUrl: authy,
            live: "https://auth-app-salehziad.netlify.app/",
            github: "https://github.com/Salehziad/full-auth-project-react"
        },
        {
            title: "Name It!",
            description: "Design & ReactJs",
            imgUrl: nameIt,
            live: " https://nameit-salehziad.netlify.app/",
            github: "https://github.com/Salehziad/name-suggestion-app"
        }, {
            title: "Real Time Chat",
            description: "Node Js & ReactJs",
            imgUrl: chat,
            live: "https://realtime-chat-applicatio-saleh.herokuapp.com/",
            github: "https://github.com/Salehziad/Realtime-Chat-Application"
        }, {
            title: "Tic Tac Toy",
            description: "Design & ReactJs",
            imgUrl: tictac,
            live: " https://tic-tac-toy-salehziad.netlify.app/",
            github: "https://github.com/Salehziad/tic-tac-game-reactJs/tree/main/tic-tac"
        }, {
            title: "Calculater",
            description: "Design & ReactJs",
            imgUrl: calculater,
            live: "https://calculater-salehziad.netlify.app/",
            github: "https://github.com/Salehziad/Calculater"
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) => <div
                                className={isVisible
                                ? "animate__animated animate__fadeIn"
                                : ""}>
                                <h2>Projects</h2>
                                <p>Here is a list of my projects front end progects and full stack node with react</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav
                                        variant="pills"
                                        className="nav-pills mb-5 justify-content-center align-items-center"
                                        id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content
                                        id="slideInUp"
                                        className={isVisible
                                        ? "animate__animated animate__slideInUp"
                                        : ""}>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {projects.map((project, index) => {
                                                    return (<ProjectCard key={index} {...project}/>)
                                                })
}
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="section">
                                            <p></p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <p></p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt='ss'/>
        </section>
    )
}
