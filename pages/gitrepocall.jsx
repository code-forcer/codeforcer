import { useState } from 'react';
import { fetchGitHubRepos } from '../utils/gitrepos';
import styles from '../public/assets/index.module.css';

const GitHubRepo = () => {
  const [reposData, setReposData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const username = 'code-forcer'; // Replace with your GitHub username

  const toggleDropdown = async () => {
    if (!reposData) {
      try {
        const data = await fetchGitHubRepos(username);
        setReposData(data);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error.message);
      }
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.cardgit}>
      <button style={{background: '#04a4ff',
      fontSize: '0.9em',
      padding: '0.4em',
      textDecoration: 'none',
      color: 'white',
      borderRadius: '7px',
      fontWeight: '500',
      border: '2px solid #04a4ff',
      transition: 'all 0.2s ease-in'}} onClick={toggleDropdown}>Click to show</button>
      {isOpen && reposData && (
        <div>
          <p>Repository Links:</p>
          <ul>
            {reposData.map(repo => (
              <li key={repo.id}>
                <a style={{color:'#ce1212'}} href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name} <i className="bi bi-box-arrow-up-right"></i></a>
              </li>
            ))}
            {reposData.length === 10 && (
              <li><br/>
                <a style={{background: '#04a4ff',
      fontSize: '0.9em',
      padding: '0.4em',
      textDecoration: 'none',
      color: 'white',
      borderRadius: '7px',
      fontWeight: '500',
      border: '2px solid #04a4ff',
      transition: 'all 0.2s ease-in'}} href={`https://github.com/${username}?tab=repositories`} target="_blank" rel="noopener noreferrer">View All Repositories</a>
              </li>
            )}
          </ul>
          
        </div>
      )}
    </div>
  );
};

export default GitHubRepo;
