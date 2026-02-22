# 🐙 DevScope — GitHub Profile Analyzer

A powerful GitHub Profile Analyzer built with React.js that gives any developer a complete analysis of their GitHub profile with a score, grade, and detailed statistics.

---

## 🚀 Live Demo
Coming soon...

---

## 📸 Screenshots
<!-- Add your screenshots here -->

---

## ✨ Features

- 🔍 Search any GitHub username
- 🏆 Profile score out of 100 with a grade
- 📊 Language breakdown with pie chart
- ⭐ Total stars earned across all repos
- 📁 Top repositories by stars
- 👥 Followers and following stats
- 📅 Account age and activity tracking
- 🌐 Profile completeness check

---

## 🧰 Tech Stack

- ⚛️ React.js
- ⚡ Vite
- 🎨 CSS
- 📈 Chart.js
- 🔗 GitHub REST API
- 📦 Axios

---

## 🏆 Scoring System

| Category | Max Points |
|---|---|
| Repositories | 20 pts |
| Stars Earned | 20 pts |
| Followers | 15 pts |
| Profile Completeness | 15 pts |
| Activity | 20 pts |
| Community | 10 pts |

## 🎓 Grade System

| Score | Grade | Label |
|---|---|---|
| 90 - 100 | A+ | GitHub Legend |
| 80 - 89 | A | Elite Developer |
| 70 - 79 | B+ | Rising Star |
| 60 - 69 | B | Solid Developer |
| 50 - 59 | C | Getting There |
| Below 50 | D | Just Getting Started |

---

## 📁 Project Structure
github-analyzer/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── StatsCard.jsx
│   │   ├── RepoList.jsx
│   │   ├── LanguageChart.jsx
│   │   └── ProfileScore.jsx
│   ├── hooks/
│   │   └── useGitHub.js
│   ├── utils/
│   │   └── calculateScore.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
└── package.json
---

## ⚙️ Installation & Setup

**1. Clone the repository**
```bash
git clone https://github.com/yourusername/devscope.git
cd devscope
2. Install dependencies
npm install
3. Create a .env file in the root folder
VITE_GITHUB_TOKEN=your_github_token_here
4. Get your GitHub Token
Go to GitHub → Settings
Developer Settings → Personal Access Tokens
Generate new token (classic)
Select read:user and public_repo
Copy and paste into .env
5. Run the project
npm run dev
6. Open in browser
http://localhost:5173
🔑 Environment Variables
Variable
Description
VITE_GITHUB_TOKEN
Your GitHub Personal Access Token
📦 Dependencies
Package
Version
react
^18.2.0
react-dom
^18.2.0
chart.js
^4.4.0
react-chartjs-2
^5.2.0
axios
^1.6.0
vite
^5.0.0
🤝 Contributing
Contributions are welcome! Feel free to:
Fork the repository
Create a new branch
Make your changes
Submit a pull request
📄 License
This project is open source and available under the MIT License.
👤 Author
Your Name
GitHub: @yourusername
LinkedIn: Your LinkedIn
⭐ If you found this project useful please give it a star on GitHub!