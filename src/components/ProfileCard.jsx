import "./ProfileCard.css";

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <p className="profile-title">Profile</p>

      <img
        className="profile-avatar"
        src={user.avatar_url}
        alt={user.login}
      />

      <h2 className="profile-name">{user.name || user.login}</h2>
      <p className="profile-login">@{user.login}</p>

      {user.bio && (
        <p className="profile-bio">{user.bio}</p>
      )}

      <div className="profile-meta">
        {user.location && (
          <div className="meta-item">
            <span>📍</span>
            <span>{user.location}</span>
          </div>
        )}
        {user.blog && (
          <div className="meta-item">
            <span>🌐</span>
            <a href={user.blog} target="_blank" rel="noreferrer">
              {user.blog}
            </a>
          </div>
        )}
        {user.company && (
          <div className="meta-item">
            <span>🏢</span>
            <span>{user.company}</span>
          </div>
        )}
        {user.twitter_username && (
          <div className="meta-item">
            <span>🐦</span>
            <a
              href={`https://twitter.com/${user.twitter_username}`}
              target="_blank"
              rel="noreferrer"
            >
              @{user.twitter_username}
            </a>
          </div>
        )}
        <div className="meta-item">
          <span>👥</span>
          <span>{user.followers} followers · {user.following} following</span>
        </div>
        <div className="meta-item">
          <span>📅</span>
          <span>Joined {new Date(user.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
          })}</span>
        </div>
      </div>

      <a
        className="profile-btn"
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
      >
        View on GitHub →
      </a>
    </div>
  );
};

export default ProfileCard;