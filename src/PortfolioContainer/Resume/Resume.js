import React, { useState, useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/scrollService";
import Animations from "../../Utilities/Animations";
import "./Resume.css";

import education from "../../assets/Resume/education.svg";
import work from "../../assets/Resume/work-history.svg";
import programming from "../../assets/Resume/programming-skills.svg";
import projects from "../../assets/Resume/projects.svg";
import interests from "../../assets/Resume/interests.svg";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: education },
    { label: "Work History", logoSrc: work },
    { label: "Programming Skills", logoSrc: programming },
    { label: "Projects", logoSrc: projects },
    { label: "Interests", logoSrc: interests },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Anonymity ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Developed an online complaint management system bridging students and authorities",
      subHeading:
        "Technologies Used:  HTML, CSS, JavaScript, ReactJS, and Node.js.",
    },
    {
      title: "Moving Object Detection",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Created an online platform to detect moving objects using ReactJS and TensorFlow 75% to 80% accuracy.",
      subHeading:
        "Technologies Used: TenserFlow, Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"J.C. Bose University of Science and Technology, YMCA"}
        subHeading={"Bachelor Of Technology Computer Science Engineering"}
        fromDate={"2017"}
        toDate={"2021"}
      />

      <ResumeHeading
        heading={"Sr. Secondary School"}
        subHeading={"GBSSS Sarojini Nagar"}
        fromDate={"2015"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"Secondary School"}
        subHeading={"Tarun Niketan Public School"}
        fromDate={"2013"}
        toDate={"2015"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      {/* <div className="experience-container"> */}
      <ResumeHeading
        heading={"Ajio.com"}
        subHeading={"Software Engineer "}
        fromDate={"Jan 2023"}
        toDate={"Present"}
      />
      <ResumeHeading
        heading={"Opoyi"}
        subHeading={"Software Engineer "}
        fromDate={"April 2021"}
        toDate={"Jan 2023"}
      />
      <ResumeHeading
        heading={"Poumki Digital LLP"}
        subHeading={"FULL STACK DEVELOPER "}
        fromDate={"July 2021"}
        toDate={"April 2022"}
      />
      {/* <ResumeHeading
          heading={"Codersvaly"}
          subHeading={"Software Developer Intern "}
          fromDate={"jan 2020 "}
          toDate={"june 2021"}
        /> */}
      {/* <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an Presentation website for client with the dashboard
            for managing the speaker and participant user, managing reviews,
            users, payment etc. .
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div> */}
      {/* </div> */}
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Currently decoding the mystical language of the flute – because playing with code isn't the only language I'm fluent in. 🎶 Stay tuned for a symphony of learning moments, where algorithms meet arpeggios and coding meets cadences. It's not just about writing notes; it's about crafting a musical journey in the world of programming. Portfolio melody in the making – hit play soon!"
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        {console.log("in logo check", bullet.logoSrc)}
        <img
          className="bullet-logo"
          // src={require(`../../assets/Resume/programming-skills.svg`).default}
          // src={require(`${bullet.logoSrc}`).default}

          src={bullet.logoSrc}
          // alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);
  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
