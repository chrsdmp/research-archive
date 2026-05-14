import React from "react";
import "./App.css";

function App() {
  return (
    <div className="article-box">

      <div className="article-card">

        <div className="article-icon">
          🕮
        </div>

        <div className="article-content">

          <h2 className="article-title">
            Artificial Intelligence in Modern Education
          </h2>

          <p className="article-text">
            This study explores how artificial intelligence improves
            personalized learning experiences for students in online environments.
          </p>

          <p className="article-text">
            Researchers analyzed different educational platforms and measured
            student engagement and academic performance.
          </p>

          <p className="article-text">
            Results show increased learning efficiency when adaptive systems
            are integrated into digital classrooms.
          </p>

          <div className="article-bottom">

            <div className="left-actions">

              <span className="save-btn">
                ⛉ Save
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
