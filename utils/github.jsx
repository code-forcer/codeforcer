// utils/github.js
export const fetchGitHubData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.statusText}`);
  }
  return await response.json();
};
