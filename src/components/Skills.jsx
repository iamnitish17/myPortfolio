import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import sk1 from "../assets/sk-1.png";
import sk2 from "../assets/sk-2.png";
import sk8 from "../assets/sk-8.png";
import sk9 from "../assets/sk-9.png";
import sk10 from "../assets/sk-10.png";
import sk11 from "../assets/sk-11.png";
import sk12 from "../assets/sk-12.png";
import sk13 from "../assets/sk-13.png";
import sk14 from "../assets/sk-14.png";

import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";

const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (
        <div
            id="skills"
            className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
            {/* BACKGROUND ELEMENTS END */}
            <Wrapper>
                {/* SKILL ICONS START */}
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
                    <SkillIcon path={sk1} />
                    <SkillIcon path={sk2} />
                    <SkillIcon path={sk8} />
                    <SkillIcon path={sk9} />
                    <SkillIcon path={sk10} />
                    <SkillIcon path={sk11} />
                    <SkillIcon path={sk12} />
                    <SkillIcon path={sk13} />
                    <SkillIcon path={sk14} />
                </Div>
                {/* SKILL ICONS END */}

                {/* SERVICES SECTION START */}
                <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
                    {/* SERVICES START */}
                    <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
                        {/* <Service
                            num="1"
                            title="Ui/Ux Design"
                            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
                            data={[
                                "Prototype",
                                "Wireframe",
                                "User Experience",
                                "Prototype",
                                "Prototype",
                            ]}
                        /> */}
                        <Service
                            num="1"
                            title="Java Developement"
                            desc="Skilled Java developer with a passion for creating efficient and robust applications. Proficient in Java programming, I excel at designing and implementing software solutions that meet client needs. My expertise extends to optimizing code, troubleshooting issues, and collaborating with cross-functional teams to deliver high-quality projects."
                            data={[
                                "OOPs",
                                "JVM",
                                "Framework",
                                "APIs",
                                "Version Control ",
                            ]}
                        />
                        <Service
                            num="2"
                            title="Frontend Development"
                            desc="I am a code artist in the realm of front-end development, painting interactive landscapes with HTML, CSS, and JavaScript. With a touch of creativity, I transform design visions into vibrant user interfaces that dance and respond to every click. My canvas is the digital world, where I craft visually captivating websites and applications, ensuring that each brushstroke of code contributes to an immersive and delightful user experience. "
                            data={[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "React.js",
                                "SEO",
                            ]}
                        />
                        <Service
                            num="3"
                            title="Database Development"
                            desc="
I am a data sculptor, molding intricate databases that house the lifeblood of applications. With the precision of a craftsman, I design and build robust data architectures that seamlessly store, organize, and retrieve information. My artistry lies in creating dynamic ecosystems where data flows harmoniously, empowering applications to thrive and users to explore with ease. In this digital atelier, I shape the backbone of technology, infusing every entity and relationship with purpose and efficiency."
                            data={[
                                "SQL",
                                "DBMS",
                                "Data Modeling",
                                "CRUD",
                                "Database Security",
                            ]}
                        />
                    </div>
                    {/* SERVICES END */}

                    {/* SECTION HEADING START */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
                        <span>Solving</span>
                        <span>Problems</span>
                        <span className="flex items-center gap-2">
                            Through
                            <img
                                src={pattern}
                                className="block md:hidden w-[80px] mt-1"
                            />
                        </span>
                        <span className="flex items-center gap-4">
                            Good{" "}
                            <img
                                src={pattern}
                                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
                            />
                        </span>
                        <span>Services</span>
                    </div>
                    {/* SECTION HEADING END */}
                </div>
                {/* SERVICES SECTION END */}

                <Portfolio />
                <Achievements />
            </Wrapper>
        </div>
    );
};

export default Skills;
