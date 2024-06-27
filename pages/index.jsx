import Link from "next/link";
import styles from '../public/assets/index.module.css'; 
import GitHubProfile from "./gitprofile";
export default function IndexPage() {
  return (
      <div className={styles.generaldivforindexpage}>
        <div className={styles.card}>
          <img src="/assets/Images/two.jpeg" alt="imageFile" />
          <div>
            <h1>
              <strong>Codeforcer</strong>
              </h1>
              <h3><b>Web Developer</b>  <i className="fa fa-code" style={{color:'#04aeff'}}></i></h3><div className={styles.starrating}>★ ★ ★ ★ ★</div><p><span className={styles.textqoute}>`</span>An independent and self-motivated individual. I create scalable and customizable websites for you in your specifications with the use of high end web languages. I am ready and available for at your disposal to deliver a proficient website for you <span className={styles.textqoute}>`</span>.</p>
              <div className={styles.sitelink}><span className={styles.textgo}>My portfolio-link</span> <i className="fa fa-external-link"></i> :  <Link className={styles.linksite} href="/home" target="_blank" rel="noopener noreferrer">https://codeforcerdev.io</Link></div>
              <br />
              <div className={styles.sitelink}><span className={styles.textgo}>Email-link</span> <i className="fa fa-envelope"></i> :  <Link className={styles.linksite} href="mailto:codeforcerdev@gmail.com">codeforcerdev@gmail.com</Link></div>
              {/* Github profile */}
              <GitHubProfile/>
              {/* ends */}
              <br/><div className={styles.socialicons}><Link href="https://www.facebook.com/profile.php?id=100086183976686"><i className="fa fa-facebook"></i></Link>
              <Link href="https://x.com/Temitop6331035?t=c4y6ZLfYnXX6RRn-k7XOQg&s=08"><i className="fa fa-twitter"></i></Link>
              <Link href="https://github.com/c-top-stack"><i className="fa fa-github"></i></Link></div>
              <Link href="https://wa.me/+2348105209452" className={styles.whatsappbutton}><i className="fa fa-whatsapp"></i>Chat on WhatsApp</Link>
              <Link href="https://x.com/Temitop6331035?t=c4y6ZLfYnXX6RRn-k7XOQg&s=08#" className={styles.followbtn}>Follow on twitter</Link>
              <footer className={styles.indexpagefooter}><p>© 2024 <span style={{color:'#04aeff', textDecoration: 'underline'}}>codeforcerdev</span>. All Rights Reserved.</p>
              </footer></div></div>
</div>
  )
}

