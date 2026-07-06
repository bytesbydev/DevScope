🐙 DevScope — GitHub Profile Analyzer

DevScope is a modern GitHub Profile Analyzer built with React.js that transforms GitHub profile data into meaningful insights. Simply enter any GitHub username to explore repository statistics, programming languages, developer activity, profile quality, and an overall developer score with an automatically generated grade.

Designed with a clean, responsive interface, DevScope makes it easy to evaluate GitHub profiles for learning, portfolio reviews, or developer comparisons.


---

🚀 Live Demo

🔗 https://dev-scope-bice.vercel.app/


---

✨ Features

🔍 Search any public GitHub profile

🏆 Developer score out of 100

🎓 Automatic developer grading system

📊 Programming language distribution

⭐ Total stars earned across repositories

📁 Top repositories ranked by popularity

👥 Followers & following analytics

📅 Account age and activity insights

🌐 Profile completeness evaluation

⚡ Fast, responsive, and intuitive UI



---

📊 Developer Scoring System

DevScope evaluates multiple aspects of a GitHub profile to generate an overall score.

Category	Maximum Points

Repositories	20
Stars Earned	20
Followers	15
Profile Completeness	15
Activity	20
Community	10


Total Score: 100 Points


---

🎓 Grade Classification

Score	Grade	Title

90–100	A+	GitHub Legend 🏆
80–89	A	Elite Developer 🚀
70–79	B+	Rising Star ⭐
60–69	B	Solid Developer 💻
50–59	C	Getting There 📈
Below 50	D	Just Getting Started 🌱



---

🛠️ Tech Stack

⚛️ React.js

⚡ Vite

🎨 CSS

📈 Chart.js

🔗 GitHub REST API

📦 Axios



---

📂 Project Structure

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


---

⚙️ Getting Started

Clone the Repository

git clone https://github.com/bytesbydev/DevScope.git
cd DevScope

Install Dependencies

npm install

Configure Environment Variables

Create a .env file in the project root.

VITE_GITHUB_TOKEN=your_github_personal_access_token

Start the Development Server

npm run dev

Open your browser and visit:

http://localhost:5173


---

🔑 GitHub API Token

To avoid GitHub API rate limits, generate a Personal Access Token:

1. Go to GitHub → Settings


2. Open Developer Settings


3. Select Personal Access Tokens


4. Generate a new token (Classic)


5. Enable:

read:user

public_repo



6. Add the generated token to your .env file.



> Note: Without a token, GitHub's API rate limits may restrict the number of requests you can make.




---

🚀 Deployment

The application is deployed on Vercel.

Create a production build with:

npm run build


---

💡 Motivation

DevScope was built to provide developers with an interactive dashboard that goes beyond basic GitHub statistics. By combining GitHub's REST API with data visualization, the project offers a quick and engaging way to analyze developer profiles, showcase coding activity, and evaluate overall GitHub presence.


---

🚀 Future Enhancements

🌙 Dark & Light theme

📈 Contribution graph analysis

🤖 AI-powered profile insights

📄 Export analytics as PDF

⚔️ Compare multiple GitHub profiles

🔥 Repository activity heatmaps

📊 More advanced analytics



---

🤝 Contributing

Contributions are always welcome!

If you'd like to improve DevScope:

1. Fork the repository


2. Create a feature branch


3. Commit your changes


4. Open a Pull Request




---

📄 License

This project is licensed under the MIT License.


---

👨‍💻 Author

Devendra Rawat

GitHub: https://github.com/bytesbydev


---

⭐ If you found DevScope helpful, consider giving the repository a star—it helps support the project and encourages future improvements.

