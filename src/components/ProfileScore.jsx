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
        circleRef.current.style.transition = "stroke-dashoffset 1.6s cubic-bezier(0.4,0,0.2,1)";
        circleRef.current.style.strokeDashoffset = offset;
      }, 120);
    }
  }, [score]);

  const gradId = `scoreGrad-${score}`;

  return (
    <div className="score-card">
      <p className="score-title">Profile Score</p>

      <div className="score-wrapper">

        {/* Animated ring */}
        <div className="ring-wrap">
          <svg className="ring-svg" viewBox="0 0 120 120" style={{ transform: "rotate(-90deg)" }}>
            <defs>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#8B5CF6" />
                <stop offset="33%"  stopColor="#EC4899" />
                <stop offset="66%"  stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
            {/* Track */}
            <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="9" />
            {/* Progress */}
            <circle
              ref={circleRef}
              cx="60" cy="60" r="50"
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth="9"
              strokeLinecap="round"
            />
          </svg>
          <div className="ring-center">
            <span className="score-number">{score}</span>
            <span className="score-total">/ 100</span>
          </div>
        </div>

        {/* Info */}
        <div className="score-info">
          <div className="grade-badge" style={{ color }}>{grade}</div>
          <div className="grade-label">{label}</div>

          <div className="breakdown-wrap">
            {breakdown.map((item, i) => (
              <div key={item.label} className={`breakdown-pill pill-${i}`}>
                <span className="pill-label">{item.label}</span>
                <span className="pill-score">{item.score}<span className="pill-max">/{item.max}</span></span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileScore;