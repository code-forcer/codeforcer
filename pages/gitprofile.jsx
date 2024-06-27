import { useState } from 'react';
import { fetchGitHubData } from '../utils/github';
import styles from '../public/assets/index.module.css'; 
const GitHubProfile = () => {
  const [userData, setUserData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const username = 'c-top-stack'; // Replace with your GitHub username

  const toggleDropdown = async () => {
    if (!userData) {
      try {
        const data = await fetchGitHubData(username);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching GitHub data:', error.message);
      }
    }
    setIsOpen(!isOpen);
  };

  return (
    <div><br/>
      <button onClick={toggleDropdown} style={{background: '#04a4ff',
      fontSize: '0.9em',
      padding: '0.4em',
      textDecoration: 'none',
      color: 'white',
      borderRadius: '7px',
      fontWeight: '500',
      border: '2px solid #04a4ff',
      transition: 'all 0.2s ease-in'}}>Click to show my Github profile <i className="bi bi-github" title="Github"></i
              ></button><br/>
      {isOpen && userData && (
        <div className={styles.cardgit}> {/* Apply CSS class */}<br/>
          <div>
            <code style={{textDecoration:'underline'}}>Using Github API-call real time:</code>
            <p><label>Bio:</label>{userData.bio}</p>
            <p><label>Number of Repositories:</label> {userData.public_repos}</p>
            <p><label>Date Created:</label> {userData.created_at}</p>
            <p>Repository Links:</p>
            <ul>
              {userData.repos_url && (
                <li>
                  <a style={{background: '#04a4ff',
      fontSize: '0.9em',
      padding: '0.4em',
      textDecoration: 'none',
      color: 'white',
      borderRadius: '7px',
      fontWeight: '500',
      border: '2px solid #04a4ff',
      transition: 'all 0.2s ease-in'}} href='https://github.com/c-top-stack'>GitHub Repositories</a>
                </li>
              )}
            </ul>
            <img src={userData.avatar_url} alt="GitHub Avatar" className={styles.avatargit} />
          </div>
      </div>
      )}
    </div>
  );
};

export default GitHubProfile;
