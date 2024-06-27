// utils/github.js
export const fetchGitHubRepos = async (username) => {
    const reposUrl = `https://api.github.com/users/${username}/repos?per_page=10`;
  
    const reposResponse = await fetch(reposUrl);
  
    if (!reposResponse.ok) {
      throw new Error(`GitHub API request failed: ${reposResponse.statusText}`);
    }
  
    const reposData = await reposResponse.json();
    return reposData;
  };
  