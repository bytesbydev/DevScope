import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import StatsCard from "./components/StatsCard";
import RepoList from "./components/RepoList";
import LanguageChart from "./components/LanguageChart";
import ProfileScore from "./components/ProfileScore";
import useGitHub from "./hooks/useGitHub";
import calculateScore from "./utils/calculateScore";
import "./App.css";

const App = () => {
  const {
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
  } = useGitHub();

  const scoreData = user ? calculateScore(user, repos, totalStars) : null;

  return (
    <div className="app">
      <div className="app-container">
        <Navbar />

        <SearchBar onSearch={fetchUser} loading={loading} />

        {error && (
          <div className="app-error">{error}</div>
        )}

        {loading && (
          <div className="app-loader">
            <div className="loader-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="loader-text">Fetching profile data...</p>
          </div>
        )}

        {user && !loading && (
          <div className="app-results">
            <ProfileScore
              score={scoreData.score}
              grade={scoreData.grade}
              label={scoreData.label}
              color={scoreData.color}
              breakdown={scoreData.breakdown}
            />

            <div className="grid-main">
              <ProfileCard user={user} />

              <div className="grid-right">
                <StatsCard
                  user={user}
                  totalStars={totalStars}
                  totalForks={totalForks}
                  topLanguage={topLanguage}
                />
                <LanguageChart languageMap={languageMap} />
              </div>
            </div>

            <RepoList topRepos={topRepos} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
