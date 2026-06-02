# 🐙 DevScope — GitHub Profile Analyzer

DevScope is a modern GitHub Profile Analyzer built with React.js that provides detailed insights into any GitHub profile.  
It analyzes repositories, followers, stars, activity, languages, and overall profile quality to generate a developer score and grade.

---

## 🚀 Live Demo

[DevScope Live Demo](https://dev-scope-bice.vercel.app/)

---

## ✨ Features

- 🔍 Search any GitHub username
- 🏆 GitHub profile score out of 100
- 🎓 Automatic developer grade system
- 📊 Language distribution visualization
- ⭐ Total stars earned across repositories
- 📁 Top repositories ranked by stars
- 👥 Followers and following statistics
- 📅 Account age and activity analysis
- 🌐 Profile completeness evaluation
- ⚡ Fast and responsive user interface

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
|----------|------------|
| Repositories | 20 pts |
| Stars Earned | 20 pts |
| Followers | 15 pts |
| Profile Completeness | 15 pts |
| Activity | 20 pts |
| Community | 10 pts |

---

## 🎓 Grade System

| Score Range | Grade | Label |
|-------------|-------|--------|
| 90 - 100 | A+ | GitHub Legend |
| 80 - 89 | A | Elite Developer |
| 70 - 79 | B+ | Rising Star |
| 60 - 69 | B | Solid Developer |
| 50 - 59 | C | Getting There |
| Below 50 | D | Just Getting Started |

---

## 📁 Project Structure

```bash
DevScope/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
├── index.html
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/bytesbydev/DevScope.git
cd DevScope
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_GITHUB_TOKEN=your_github_token_here
```

---

## 🔑 Generate GitHub Personal Access Token

1. Open GitHub Settings
2. Navigate to Developer Settings
3. Select Personal Access Tokens
4. Generate a new token (classic)
5. Enable:
   - `read:user`
   - `public_repo`
6. Copy the token into your `.env` file

> ⚠️ GitHub API rate limits may apply without a token.

---

## ▶️ Run the Project

```bash
npm run dev
```

Open in browser:

```bash
http://localhost:5173
```

---

## 🌍 Deployment

This project is deployed using Vercel.

Create a production build:

```bash
npm run build
```

---

## 💡 Why I Built This

I built DevScope to create a clean and interactive developer analytics dashboard that provides meaningful insights from GitHub profiles using real GitHub API data and visualizations.

---

## 🚀 Future Improvements

- 🌙 Dark / Light mode
- 📈 Contribution graph analysis
- 🤖 AI-based profile insights
- 📄 Export profile report as PDF
- ⚔️ Compare multiple GitHub profiles
- 🔥 Repository activity heatmaps

---

## 🤝 Contributing

Contributions are welcome.

You can:
- Fork the repository
- Create a feature branch
- Make improvements
- Submit a pull request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

**Devendra Rawat**

- GitHub: [@bytesbydev](https://github.com/bytesbydev)

---

⭐ If you found this project useful, consider giving it a star on GitHub.
