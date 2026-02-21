import { useState } from "react";
import axios from "axios";

const BASE_URL = "https://api.github.com";

const useGitHub = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  };
  const fetchUser = async (username) => {
    // Reset previous state
    setUser(null);
    setRepos([]);
    setError(null);
    setLoading(true);

    try {
      // Fetch user profile and repos at the same time
      const [userRes, reposRes] = await Promise.all([
        axios.get(`${BASE_URL}/users/${username}`, { headers }),
        axios.get(`${BASE_URL}/users/${username}/repos?per_page=100&sort=stars`, { headers }),
      ]);

      setUser(userRes.data);
      setRepos(reposRes.data);

    } catch (err) {
      if (err.response?.status === 404) {
        setError("User not found. Please check the username.");
      } else if (err.response?.status === 403) {
        setError("API rate limit exceeded. Please add a GitHub token.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // --- Helper Data ---

  // Total stars across all repos
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

  // Total forks across all repos
  const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);

  // Top 5 repos sorted by stars
  const topRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);

  // Language count from all repos
  const languageMap = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});

  // Most used language
  const topLanguage = Object.keys(languageMap).reduce(
    (a, b) => (languageMap[a] > languageMap[b] ? a : b),
    ""
  );

  return {
    user,
    repos,
    loading,
    error,
    fetchUser,
    totalStars,
    totalForks,
    topRepos,
    languageMap,
    topLanguage,
  };
};

export default useGitHub;