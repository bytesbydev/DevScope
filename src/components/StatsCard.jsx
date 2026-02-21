import "./StatsCard.css";

const StatsCard = ({ user, totalStars, totalForks, topLanguage }) => {
  const stats = [
    { label: "Public Repos", value: user.public_repos, icon: "📁" },
    { label: "Total Stars", value: totalStars, icon: "⭐" },
    { label: "Total Forks", value: totalForks, icon: "🍴" },
    { label: "Followers", value: user.followers, icon: "👥" },
    { label: "Following", value: user.following, icon: "➕" },
    { label: "Top Language", value: topLanguage || "N/A", icon: "💻" },
  ];

  return (
    <div className="stats-card">
      <p className="stats-title">Statistics</p>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-box" key={stat.label}>
            <span className="stat-icon">{stat.icon}</span>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;