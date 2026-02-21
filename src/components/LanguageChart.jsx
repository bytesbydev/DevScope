import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./LanguageChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

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

const LanguageChart = ({ languageMap }) => {
  const labels = Object.keys(languageMap);
  const values = Object.values(languageMap);
  const colors = labels.map((lang) => langColors[lang] || "#aaaaaa");

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderColor: "#16161f",
        borderWidth: 3,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#6b6b80",
          font: {
            family: "Space Mono",
            size: 11,
          },
          padding: 16,
          boxWidth: 12,
          boxHeight: 12,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const total = values.reduce((a, b) => a + b, 0);
            const percentage = ((context.parsed / total) * 100).toFixed(1);
            return ` ${context.label}: ${percentage}%`;
          },
        },
        backgroundColor: "#1e1e2e",
        titleColor: "#e8e8f0",
        bodyColor: "#6b6b80",
        borderColor: "#2a2a3a",
        borderWidth: 1,
        padding: 12,
      },
    },
  };

  if (labels.length === 0) {
    return (
      <div className="chart-card">
        <p className="chart-title">Languages</p>
        <div className="chart-empty">No language data available</div>
      </div>
    );
  }

  return (
    <div className="chart-card">
      <p className="chart-title">Languages</p>
      <div className="chart-wrap">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default LanguageChart;