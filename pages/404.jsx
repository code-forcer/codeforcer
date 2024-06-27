import Link from "next/link";

function NotFound() {
    return(
      <>
    <footer>
        <div className="f-column">
          <div className="logoTitle"><Link href="#home">codeforcerDev.io</Link></div>
          <div className="follow">
            <span>Oops !!!</span>
            <div className="followIcon">
              <span className="">😓</span>
            </div>
          </div>
        </div>
  
        <div className="copyright">
        </div>
      </footer>
      <div className="scroll-up-btn">
        <i className="bi bi-arrow-up-circle"></i>
      </div>
  
      <div className="bg-fixed-1">
        <div className="bg-content">
          <div className="bg-text-1">404 ERROR.</div>
          <div className="bg-text-2">The requested URL was not found on this server. Our software engineers are working on it - -</div>
          <br/>
          <Link style={{background: '#04a4ff',
      fontSize: '0.9em',
      padding: '0.4em',
      textDecoration: 'none',
      color: 'white',
      borderRadius: '7px',
      fontWeight: '500',
      border: '2px solid #04a4ff',
      transition: 'all 0.2s ease-in'}} href="/">Go to home</Link>
        </div>
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
  
  export default NotFound
  
  