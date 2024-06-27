import Link from "next/link";
import { useRouter } from 'next/router';
function Resume() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/'); // Navigate programmatically using next/router
  };
  return(
    <>
  <footer>
      <div className="f-column">
        <div className="logoTitle"><Link href="#home"><h1>codeforcer</h1></Link></div>
        <div className="follow">
          <h2>My Resume <i className="bi bi-grid 1x2"></i></h2>
        </div>
      </div>

      <div className="copyright">
      </div>
    </footer>
   <main>
    <section id="resume" className="resume">
      <div className="container">

        <div className="section-title"><br/>
        <center>
          <h2>_CODEFORCER WEB DEVELOPER_</h2>
          <p>Welcome to my resume</p>
        </center><br/>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>PERSONAL PROFILE:</h4>
              <ul>
               <li>`email - <Link style={{color: '#149ddd'}} href="mailto:codeforcerdev@gmail.com">codeforcerdev@gmail.com</Link></li>
               <li>`contact - <Link style={{color: '#149ddd'}} href="tel:08105209452">+234 (0)8105209452</Link></li>
               <li>`website - <Link style={{color: '#149ddd'}} href="codeforcer.pythonanywhere.com">codeforcer.pythonanywhere.com</Link></li>
               <li>`A member on codeforces.</li>
              </ul>
                <p><em>*An independent and self-motivated individual. 
                I create scalable and customizable websites for you in your specifications with the use of high end web languages. 
                I am ready and available for at your disposal to deliver a proficient website for you.
                </em></p>
            </div>

            <h3 className="resume-title">SKILLS:</h3>
            <div className="resume-item">
                <ul>
                    <li>*Time management,</li>
                    <li>*Team-work,</li>
                    <li>*Leadership,</li>
                    <li>*verbal & written communication.</li>
                </ul>
            </div>
          </div>
          <h3 className="resume-title">PROGRAMMING STACKS:</h3>
            <div className="resume-item">
              <h5>Languages:</h5>
                <ul>

<li>Python,</li>
<li>Html , css & javascript(Nodejs,react and react Native)</li>
<li>PHP(laravel and codeigniter)</li>
<li>C++ and Java.</li>
                </ul>
            </div>
            <div className="resume-item">
              <h5>Database:</h5>
              <ul>
              <li>MySQL, </li><li> Sqlite3,</li> <li> mongodb,</li> <li> postgrelSQL </li><li> Firebase.</li></ul>
            </div>
            <div className="resume-item">
              <h5>NoCode:</h5>
              <ul>
              <li>WordPress,</li><li>Wix.</li></ul>
            </div>
          </div>
          <h3 className="resume-title">SPOKEN LANGUAGES:</h3>
          <div className="resume-item">
              <ul>
              <li>English (fluent)</li>
              <li>Native/Bilingual</li>
            </ul>
            </div>
          <h3 className="resume-title">EXTRA CURRICULUM ACTIVITIES:</h3>
          <div className="resume-item">
              <ul>
              <li>create website template and designs</li>
              <li>code different  web project and upload.</li>
            </ul>
            </div>
          <h3 className="resume-title">EDUCATION:</h3>
          <div className="resume-item">
              <ul>
              <li>AGRICULTURAL AND ENVIRONMENTAL ENGINEERING
 Federal University of Technology, Akure, Nigeria (2021 - till date)
</li>
            </ul>
            </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">WORK EXPERIENCE:</h3>
            <div className="resume-item">
              <h5>March 2020 -</h5>
              <p>Front-End Teacher
                abraytech programming academy
                  www.abraytech.com.
                </p>
            </div>
            <div className="resume-item">
              <h5>January 2020 - </h5>
              <p>Earned a certificate in web programming from sololearn
                sololearn.com , geekforgeek , udemy and w3school.</p>
            </div>
            <div className="resume-item">
              <h5>July 2021 -</h5>
              <p>Front-End and Backend Intern
AicoreLimited
www.aicoret.com
</p>
            </div>
            <div className="resume-item">
               <h5>FreeLancer</h5>
              <p>Fiverr and Upwork Freelancer (2020 - till date)
</p>
            </div>
          </div>
        </div><br/><br/>
        <div style={{textAlign: 'center'}}>
          <h5><button style={{background: '#04a4ff',
      fontSize: '0.9em',
      padding: '0.4em',
      textDecoration: 'none',
      color: 'white',
      borderRadius: '7px',
      fontWeight: '500',
      border: '2px solid #04a4ff',
      transition: 'all 0.2s ease-in'}}  onClick={handleNavigation}>Go to Home</button></h5>
        </div>
    </section>
    </main>
   <br/><br/>
       <div className="scroll-up-btn">
        <i className="bi bi-tornado"></i>
    </div>
    <footer>
      <div className="f-column">
        <div className="logoTitle"><Link href="#home">codeforcerDev.io</Link></div>
        <div className="follow">
          <span>Follow us</span>
          <div className="followIcon">
            <Link href="https://github.com/c-top-stack" target="_blank"
              ><i className="bi bi-github" title="Github"></i
            ></Link>
            <Link href="https://www.facebook.com/Temitope.Adeleke" target="_blank"
              ><i className="bi bi-facebook" title="Facebook"></i
            ></Link>
             <Link href="https://www.expo.dev/@devctop" target="_blank"><i className="bi bi-grid 1x2" title="Expo dev"></i></Link>
          </div>
        </div>
      </div>

      <div className="copyright">
        <span
          >Developed by <Link href="#" className="copy">&copy; codeforcerDev</Link> |
          <span className="far fa-copyright"></span> 2021 All rights reserved</span
        >
      </div>
    </footer>
</>

  )
}

export default Resume
