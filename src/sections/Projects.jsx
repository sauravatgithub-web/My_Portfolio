import { useState } from "react";

const cgame = import.meta.env.VITE_CGAME;
const lagame = import.meta.env.VITE_LAGAME;
const codeforge = import.meta.env.VITE_CODEFORGE;
const hospital = import.meta.env.VITE_HOSPITAL;
const wikipedia = import.meta.env.VITE_WIKIPEDIA;
const taskmanager = import.meta.env.VITE_TASK_MANAGER;
const moviecom = import.meta.env.VITE_MOVIECOM;
const chatroom = import.meta.env.VITE_CHATROOM;
const pipeline = import.meta.env.VITE_RISCV_PIPELINE;

const projects = [
    {
        name: "Odyssey of Life",
        img: "/cgame.jpg",
        about: "The game is Odyssey of Life, a multi-levelled game of three levels, which revolves around your punya gained(points scored) and 3 lokas i.e. bhu-loka , pathal-loka, swarg-loka. You start the game in bhu-loka and based on your punya you either get promoted to swarg-lok or get demoted to pathal-lok. There are some virtuous objects which increase your punya and also there are some bad objects which can decrease your punya.",
        techstack: "C Language",
        giturl: cgame
    },
    {
        name: "Log Archive Tool",
        img: "/log.png",
        about: "This is a basic bash script to create a log-archive-tool which would simply create archive of log files present in /var/log. This is created on a Debian based Linux system.",
        techstack: "Shell",
        giturl: lagame
    },
    {
        name: "CodeForge",
        img: "/codeforge.jpg",
        about: "CodeForge is a web application designed to streamline the management and execution of computer science labs, particularly for Data Structures and Algorithms (DSA) courses in colleges, with a focus on institutions like IITs. It aims to empower instructors to create and assign DSA problems, track student progress, and analyze their performance.",
        techstack: "React, Node.js, Express, MongoDB",
        giturl: codeforge   
    },
    {
        name: "Azuremed Hospitals",
        img: "/azuremed.png",
        about: "A full-stack Hospital Management System with a structured relational database and a responsive web interface. Built to streamline hospital operations like patient appointments, doctor scheduling, room assignments, and test/drug tracking.",
        techstack: "React, Node.js, Express, MySQL",
        giturl: hospital
    },
    {
        name: "India Wikipedia",
        img: "/wikipedia.png",
        about: "A replica of the India Wikipedia page to demonstrate and apply basic web development tools like HTML, CSS, and JavaScript.",
        techstack: "HTML, CSS, JavaScript",
        giturl: wikipedia
    },
    {
        name: "Task Manager",
        img: "/taskmanager.png",
        about: "This project showcases a sleek and functional Task Manager Web Application built using fundamental web technologies: HTML, CSS, and JavaScript. It draws inspiration from the Todoist app, incorporating classic design patterns and color schemes to give a professional and real-world feel. .",
        techstack: "React, Node.js, Express, MongoDB, MaterialUI and more.",
        giturl: taskmanager
    },
    {
        name: "Moviecom",
        img: "/moviecom.png",
        about: "Moviecom is a full-featured, real-time web application that lets users video call, watch movies together, and chat simultaneously — all in one seamless interface. It combines the best of chat apps and streaming platforms, delivering an engaging and interactive experience.",
        techstack: "React, Node.js, Express, MongoDB, Socket.IO, CSS, MaterialUI, Cloudinary and more",
        giturl: moviecom
    },
    {
        name: "ChatRoom",
        img: "/chatroom.png",
        about: "ChatRoom in C with Socket Programming using threads and using select system call. Both Threads and Select system call allows to handle multiple clients in socket programming simultaneosly. Private messages, group chats and file tranfer are supported. Messages and files transfer are end to end encrypted.",
        techstack: "C language",
        giturl: chatroom
    },
    {
        name: "RISCV PIPELINE",
        img: "/pipeline.png",
        about: "This is a simulation code for RISC V pipeline and assembler running in background.",
        techstack: "C++ Language",
        giturl: pipeline
    },
]

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prev) => prev - 1);
                setIsTransitioning(false);
            }, 300);
        }
        setShowDetails(false);
    };

    const handleNext = () => {
        if (currentIndex < projects.length - 1) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prev) => prev + 1);
                setIsTransitioning(false);
            }, 300);
        }
        setShowDetails(false);
    };

    return (
        <div className="projects-section" id='projects'>
            <label className="projects-header">Projects</label>
            <div className="projects-section-main">
                <div className="projects-panel">
                    <div className="projects-window">
                        <div className="projects-title">
                            <p>{projects[currentIndex].name}</p>
                        </div>
                        <div className="projects-image">
                            <div
                                className="projects-slider"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {projects.map((p, index) => (
                                    <div
                                        key={index}
                                        className={`slide ${index === currentIndex ? 'center' : 'side'}`}
                                    >
                                        <img src={p.img} alt="demo" className="projects-photo" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className="buttons left-button"
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                        >
                            ⬅️
                        </button>
                        <button
                            className="buttons right-button"
                            onClick={handleNext}
                            disabled={currentIndex === projects.length - 1}
                        >
                            ➡️
                        </button>
                        <button className="buttons details-button" onClick={() => setShowDetails(prev => !prev)}>{showDetails ? "Close" : "Check"} Details</button>

                        <div className={`projects-description ${showDetails ? 'show' : ''}`}>
                            <div className="projects-about">
                                About
                                <hr />
                                <p>
                                    {projects[currentIndex].about}
                                </p>
                            </div>
                            <div className="projects-tech-stack">
                                Tech-Stack
                                <hr />
                                <p>
                                    {projects[currentIndex].techstack}
                                </p>
                            </div>
                            <div>
                                Interested in knowing more ?  
                                <span 
                                    style={{ textDecoration: "underline", cursor: "pointer" }} 
                                    onClick={() => {
                                        window.open(projects[currentIndex].giturl, '_blank');
                                    }}>
                                        See on GitHub
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;