
import arrow from "../assets/arrow.svg";
import profile from "../assets/profile.jpg";


export const Introduction = () => {
    return (
        <section className="intro">
            <h1 className="name">Hi, I'm Brian Dadi</h1>
            <p className="role">Frontend Developer</p>
            <img className="avatar" src={profile} alt="Brian Dadi" />
            <p className="bio">
            I worked in customer service for several years, and with the evolution of technology, it sparked a curiosity for coding, leading me to explore new horizons.
            I am a self-taught developer with a passion for creating user-friendly and visually appealing web applications. I have experience in HTML, CSS, JavaScript, React, and Node.js. I am always eager to learn new technologies and improve my skills. I enjoy solving problems and finding efficient solutions to complex challenges. I believe that collaboration and communication are key to success in any project.
            </p>
            <img className="arrow" src={arrow} alt="arrow to show to scroll down" />
        </section>
    );
};

