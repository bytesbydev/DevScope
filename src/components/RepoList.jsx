
import "./RepoList.css";

const langColors = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
};

const RepoList = ({ topRepos }) => {
  return (
    <div className="repo-card">
      <p className="repo-title">Top Repositories</p>

      <div className="repo-list">
        {topRepos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="repo-item"
          >
            <div className="repo-left">
              <div className="repo-name">{repo.name}</div>
              {repo.description && (
                <div className="repo-desc">{repo.description}</div>
              )}
              <div className="repo-tags">
                {repo.language && (
                  <span className="repo-lang">
                    <span
                      className="lang-dot"
                      style={{
                        background: langColors[repo.language] || "#aaa",
                      }}
                    />
                    {repo.language}
                  </span>
                )}
                {repo.topics?.slice(0, 2).map((topic) => (
                  <span key={topic} className="repo-topic">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="repo-right">
              <div className="repo-stat">
                <span>⭐</span>
                <span>{repo.stargazers_count}</span>
              </div>
              <div className="repo-stat">
                <span>🍴</span>
                <span>{repo.forks_count}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RepoList;