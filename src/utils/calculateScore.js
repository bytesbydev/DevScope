const calculateScore = (user, repos, totalStars) => {

  let score = 0;
  const breakdown = [];

  const repoCount = user.public_repos;
  let repoScore = 0;

  if (repoCount >= 30)       repoScore = 20;
  else if (repoCount >= 16)  repoScore = 15;
  else if (repoCount >= 6)   repoScore = 10;
  else if (repoCount >= 1)   repoScore = 5;

  score += repoScore;
  breakdown.push({ label: "Repos", score: repoScore, max: 20 });


  let starsScore = 0;

  if (totalStars >= 200)      starsScore = 20;
  else if (totalStars >= 51)  starsScore = 15;
  else if (totalStars >= 11)  starsScore = 10;
  else if (totalStars >= 1)   starsScore = 5;

  score += starsScore;
  breakdown.push({ label: "Stars", score: starsScore, max: 20 });


  const followers = user.followers;
  let followersScore = 0;

  if (followers >= 200)      followersScore = 15;
  else if (followers >= 51)  followersScore = 12;
  else if (followers >= 11)  followersScore = 8;
  else if (followers >= 1)   followersScore = 5;

  score += followersScore;
  breakdown.push({ label: "Followers", score: followersScore, max: 15 });


  let bioScore = 0;

  if (user.avatar_url)  bioScore += 3;  
  if (user.bio)         bioScore += 4;  
  if (user.location)    bioScore += 4; 
  if (user.blog)        bioScore += 4;  

  score += bioScore;
  breakdown.push({ label: "Profile", score: bioScore, max: 15 });

  
  let activityScore = 0;

  const lastActive = new Date(user.updated_at);
  const now = new Date();
  const monthsDiff = (now - lastActive) / (1000 * 60 * 60 * 24 * 30);

  if (monthsDiff <= 1)       activityScore = 20;
  else if (monthsDiff <= 3)  activityScore = 15;
  else if (monthsDiff <= 6)  activityScore = 10;
  else if (monthsDiff <= 12) activityScore = 5;
  else                       activityScore = 0;

  score += activityScore;
  breakdown.push({ label: "Activity", score: activityScore, max: 20 });

  let communityScore = 0;

  const forkedRepos = repos.filter((repo) => repo.fork).length;

  if (user.following >= 10)  communityScore += 5;  
  if (forkedRepos >= 5)      communityScore += 5;  

  score += communityScore;
  breakdown.push({ label: "Community", score: communityScore, max: 10 });


  let grade = "";
  let label = "";
  let color = "";

  if (score >= 90) {
    grade = "A+";
    label = "GitHub Legend";
    color = "#ffd166";
  } else if (score >= 80) {
    grade = "A";
    label = "Elite Developer";
    color = "#7c6aff";
  } else if (score >= 70) {
    grade = "B+";
    label = "Rising Star";
    color = "#6affda";
  } else if (score >= 60) {
    grade = "B";
    label = "Solid Developer";
    color = "#ff6a9b";
  } else if (score >= 50) {
    grade = "C";
    label = "Getting There";
    color = "#f4a261";
  } else {
    grade = "D";
    label = "Just Getting Started";
    color = "#aaa";
  }


  return {
    score,        
    grade,       
    label,       
    color,       
    breakdown,    
  };
};

export default calculateScore;