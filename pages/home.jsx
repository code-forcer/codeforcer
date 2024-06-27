import React ,{useEffect} from "react";
import Link from "next/link";
import GitHubRepo from "./gitrepocall";
import About from "./workdes";
import ContactForm from "../components/ContactForm";
import TypingAnimation from '../components/TypingAnimation';
export default function Home() {
    return (
    <>
    <div id="loader" className="loader">
        <div className="contain">
            <div className="boxes box1"></div>
            <div className="boxes box2"></div>
            <div className="boxes box3"></div>
            <div className="boxes box4"></div>
        </div>
        <p><i className="bi bi-globe"></i> Welcome to my Portfolio, <i className="bi bi-emoji-heart-eyes"></i> Please wait...</p>
    </div>

    <div className="scroll-up-btn">
        <i className="bi bi-tornado"></i>
    </div>

    <nav className="navbar">
        <div className="container">
            <div className="logo"><i style={{color:'#04a4ff'}} className="bi bi-code-slash"></i> <Link href="#home">codeforcer<span>.io</span></Link></div>

            <ul>
                <li className="closeNav"><Link href="#home">Home</Link></li>
                <li className="closeNav"><Link href="#about">About</Link></li>
                <li className="closeNav"><Link href="#service">Services</Link></li>
                <li className="closeNav"><Link href="#skill">Skills</Link></li>
                <li className="closeNav"><Link href="#contact">Contact</Link></li>
            </ul>

            <div className="menu-btn">
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
            </div>
        </div>
    </nav>

    <section className="home" id="home">
        <div className="container">
            <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">codeforcer</div><br/>
                <div className="text-3">And I'm <h2><TypingAnimation style={{color:'#04aeff'}}/></h2></div>
                
                <Link href="#contact">Hire Me</Link>
            </div>
        </div>
    </section>

    <section className="about" id="about">
        <div className="container">
            <h2 className="title">About Me</h2>

            <div className="about-content">
                <div className="column left">
                    <img src="/assets/Images/two.jpeg" alt=""/>
                </div>
                <div className="column right">
                    <div className="text">I'm codeforcer,
                        <div>and I'm <span><TypingAnimation/></span>
                        </div>
                        </div>
                    <p> As a Full-stack Developer, I create scalable and customizable website with the use of high end web languages. I am skilled in the use of <b>HTML, CSS,</b> and <b>Javascript</b>.
                    </p>
                    <p>I work also with other languages used for backend developement which are <b>NodeJS</b>, <b>Python</b> and <b>MySql</b>, for backend purposes.</p>
                    <p>
                    As a freelancer I am open to all kind of web programming services, design and branding with the assurance to satisfy your technological needs.
                    </p>
                    <Link download="codeforcerCV.txt" href="/assets/libs/codeforcerCV.txt" passHref={true} legacyBehavior>
                    <a download="codeforcerCV.txt">Download CV</a>
    </Link> | <Link href="/resume">Check resume</Link> 
                </div>
            </div>

            </div>
      
    </section>


    <section className="services" id="service">
        <div className="container">
            <h2 className="title">My Services</h2>
            <div className="service-content">

                <div className="card">
                    <div className="box">
                        <i className="bi bi-code-slash"></i>
                        <div className="text">Web Developement</div>
                        <p>I offer exclusive, attractive, easy to navigate, and responsive website. With code written in HTML, CSS, and Javascript, which gives room for scalability and customization.  </p>
                    </div>
                </div>

                <div className="card">
                    <div className="box">
                        <i className="bi bi-code"></i>
                        <div className="text">Mobile app development</div>
                        <p>I use react native UI for mobile app development with dynamic backend (NodeJS, Nextjs and Django)</p>
                    </div>
                </div>

                <div className="card">
                    <div className="box">
                        <i className="bi bi-tools"></i>
                        <div className="text">Technical support</div>
                        <p>
                            I offer technological support to solve real time problems for existing brands and start ups.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>


    <section className="skills" id="skill">
        <div className="container">
            <h2 className="title">My Skills</h2>
            <div className="skills-content">
                <div className="column left">
                    <div className="text">My creative skills and experience</div>
                    <p>I'm codeforcer a full-stack developer, Android application/game developer, and tech enthusiast who loves to work with current technologies in web, mobile, the IoT, and data science. <br/><br/>
                        I Utilize the narrowest opportunity in Tech to solve real time problems for  existing brands and start ups.<br/><br/>
                        My core values are built on innovation, Teamwork and Customer Focus.
                    </p>
                    <Link href="#contact">Contact Me</Link>
                </div>

                <div className="skill_image">
                    <div className="img">
                        <img src="/assets/Images/skills1.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <div className="bg-fixed-1">
        <div className="bg-content">
            <div className="bg-text-1">Want the best? You can get the best.</div>
            <div className="bg-text-2">We are here for you - -</div>
        </div>
    </div>


    <section className="teams" id="team">
        <div className="container">
            <h2 className="title">Recently deployed project</h2>
            <GitHubRepo/>
            <About/>
        </div>
    </section>


    <section className="contact" id="contact">
        <div className="container">

            <h2 className="title">Contact Me</h2>

            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>Lets take over your projects from here, don't forget to send a message through the contact form or through the email link below.
                    </p>
                    <div className="icons">
                        <div className="row">
                            <i className="bi bi-person-circle"> </i>
                            <div className="info">
                                <div className="head" title="A member of codeforces moreinfo(codeforces.com)">Name</div>
                                <div className="sub-title" title="A member of codeforces moreinfo@(codeforces.com)">codeforcer</div>
                            </div>
                        </div>

                        <div className="row">
                            <i className="bi bi-geo-alt-fill"></i>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Ondo state, Nigeria</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="bi bi-telephone-fill"></i>
                            <div className="info">
                                <div className="head">Call us</div>
                                <div className="sub-title"><Link href="tel:+234 810 520 9452">+234 810 520 9452</Link></div>
                            </div>
                        </div>

                        <div className="row">
                            <i className="bi bi-envelope-fill"></i>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title" title="codeforcerdev@gmail.com"><Link href="mailto:codeforcerdev@gmail.com">codeforcerdev@gmail.com</Link></div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="column right">
                    <div className="h-cont">
                        <div className="text">Message me</div>
                        <div className="conf-msg"></div>
                    </div>
                    {/* Component forms */}
                    <ContactForm/>
                    {/* ends here */}
                </div>

            </div> 

        </div>
    </section>

    <footer>
        <div className="f-column">
            <div className="logoTitle"><Link href="#home">codeforcerDev.io</Link></div>
            <div className="follow">
                <span>Follow us</span>
                <div className="followIcon">
                    <Link href="https://github.com/c-top-stack" target="_blank"><i className="bi bi-github" title="Github"></i>
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=100086183976686" target="_blank"><i className="bi bi-facebook" title="Facebook"></i></Link>
                    <Link href="https://www.expo.dev/@devctop" target="_blank"><i className="bi bi-grid 1x2" title="Expo dev"></i></Link>
                </div>
            </div>
        </div>

        <div className="copyright">
            <span>Developed by <Link href="#" className="copy">&copy; codeforcerDev</Link> | <span className="far fa-copyright"></span> 2021 All rights reserved</span>
        </div>

    </footer>
    </>
)
}

