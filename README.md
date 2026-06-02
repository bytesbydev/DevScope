---
# 🐙 DevScope — GitHub Profile Analyzer

**DevScope** is a sleek, modern, and insightful GitHub profile analyzer built with React.js. It delivers comprehensive analytics on any GitHub user — including repositories, contributions, stars, activity, and technical influence — culminating in a **Developer Score** and professional **grade**.

---

## 🚀 Live Demo

**[View Live Demo](https://dev-scope-bice.vercel.app/)**

---

## ✨ Features

- 🔍 Search any public GitHub username
- 🏆 Comprehensive **Developer Score** (out of 100)
- 🎓 Intelligent automatic grading system
- 📊 Interactive language distribution chart
- ⭐ Total stars and repository impact analysis
- 📁 Ranked list of top repositories
- 👥 Followers, following & community engagement metrics
- 📅 Account age and activity level evaluation
- 🌐 Profile completeness assessment
- ⚡ Fast, responsive, and intuitive UI

---

## 🧰 Tech Stack

- **Frontend**: React.js + Vite
- **Styling**: CSS
- **Visualization**: Chart.js
- **HTTP Client**: Axios
- **API**: GitHub REST API

---

## 🏆 Scoring System

| Category              | Max Points |
|-----------------------|------------|
| Repositories          | 20 pts     |
| Stars Earned          | 20 pts     |
| Followers             | 15 pts     |
| Profile Completeness  | 15 pts     |
| Activity              | 20 pts     |
| Community             | 10 pts     |

**Total**: 100 points

---

## 🎓 Grade System

| Score Range   | Grade | Label                |
|---------------|-------|----------------------|
| 90 - 100      | A+    | GitHub Legend        |
| 80 - 89       | A     | Elite Developer      |
| 70 - 79       | B+    | Rising Star          |
| 60 - 69       | B     | Solid Developer      |
| 50 - 59       | C     | Getting There        |
| Below 50      | D     | Just Getting Started |

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

### 1. Clone the Repository

```bash
git clone https://github.com/bytesbydev/DevScope.git
cd DevScope
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GITHUB_TOKEN=your_github_personal_access_token
```

---

## 🔑 Generate GitHub Personal Access Token

1. Go to **GitHub Settings** → **Developer settings** → **Personal access tokens**
2. Click **Generate new token (classic)**
3. Select the following scopes:
   - `read:user`
   - `public_repo`
4. Generate and copy the token

> **Note**: Using a token significantly increases API rate limits.

---

## ▶️ Running the Project

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌍 Deployment

This project is deployed on **Vercel**.

To create a production build:

```bash
npm run build
```

---

## 💡 Why This Project Was Built

DevScope was created to provide developers with clear, visual, and actionable insights into their GitHub presence. It transforms raw GitHub data into meaningful metrics that help developers understand their public profile strength and areas for growth.

---

## 🚀 Future Enhancements

- 🌙 Dark / Light mode toggle
- 📈 Deep contribution graph analysis
- 🤖 AI-powered profile insights and recommendations
- 📄 PDF report export
- ⚔️ Side-by-side profile comparison
- 🔥 Repository activity heatmaps

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Devendra Rawat**

- GitHub: [@bytesbydev](https://github.com/bytesbydev)

---

⭐ If you found this project valuable, please consider giving it a star!

---
