import { useEffect, useRef } from "react";
import "./ProfileScore.css";

const ProfileScore = ({ score, grade, label, color, breakdown }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    if (circleRef.current) {
      const radius = 50;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (score / 100) * circumference;

      circleRef.current.style.strokeDasharray = circumference;
      circleRef.current.style.strokeDashoffset = circumference;

      setTimeout(() => {
        circleRef.current.style.transition =
          "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)";
        circleRef.current.style.strokeDashoffset = offset;
      }, 100);
    }
  }, [score]);

  return (
    <div className="score-card">
      <p className="score-title">Profile Score</p>

      <div className="score-wrapper">
        <div className="ring-wrap">
          <svg
            className="ring-svg"
            viewBox="0 0 120 120"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#2a2a3a"
              strokeWidth="8"
            />
            <circle
              ref={circleRef}
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke={color}
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>

          <div className="ring-center">
            <span className="score-number">{score}</span>
            <span className="score-total">/ 100</span>
          </div>
        </div>

        <div className="score-info">
          <div className="grade-badge" style={{ color }}>
            {grade}
          </div>
          <div className="grade-label">{label}</div>
          <div className="breakdown-wrap">
            {breakdown.map((item) => (
              <div
                key={item.label}
                className="breakdown-pill"
                style={{ color, borderColor: color }}
              >
                {item.label}: {item.score}/{item.max}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScore;