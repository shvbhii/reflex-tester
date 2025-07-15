// src/App.jsx
import { useState, useRef } from 'react';
import Footer from './components/Footer'; // Import the new Footer
import './main.css';

function App() {
  const [gameState, setGameState] = useState('start');
  const [scores, setScores] = useState([]);
  const [lastScore, setLastScore] = useState(0);
  const [targetPosition, setTargetPosition] = useState(null);

  const timerRef = useRef(null);
  const startTimeRef = useRef(0);

  const startTest = () => {
    setTargetPosition(null); // Hide previous target
    setGameState('waiting');
    const randomDelay = Math.random() * 3000 + 1000;
    
    timerRef.current = setTimeout(() => {
      // Set a random position for the target
      // The numbers subtract the target size to ensure it's fully visible
      const newX = Math.random() * (window.innerWidth - 80);
      const newY = Math.random() * (window.innerHeight - 200); // Keep it in the main area
      
      setTargetPosition({ x: newX, y: newY });
      startTimeRef.current = Date.now();
      setGameState('ready');
    }, randomDelay);
  };

  const handleScreenClick = () => {
    if (gameState === 'start' || gameState === 'result') {
      startTest();
    } else if (gameState === 'waiting') {
      clearTimeout(timerRef.current);
      setGameState('result');
      setLastScore('Too Soon!');
    }
  };

  const handleTargetClick = (e) => {
    e.stopPropagation(); // Prevents the screen click from firing
    if (gameState !== 'ready') return;

    const endTime = Date.now();
    const score = endTime - startTimeRef.current;
    setLastScore(score);
    setScores(prevScores => [score, ...prevScores.slice(0, 4)]);
    setTargetPosition(null); // Hide the target after click
    setGameState('result');
  };
  
  const getAverageScore = () => {
    const validScores = scores.filter(s => typeof s === 'number');
    if (validScores.length === 0) return 0;
    const sum = validScores.reduce((a, b) => a + b, 0);
    return Math.round(sum / validScores.length);
  };
  
  const renderContent = () => {
    switch (gameState) {
      case 'start':
        return { text: "Target Acquisition Test", instruction: "Click anywhere to begin." };
      case 'waiting':
        return { text: "Wait for the target...", instruction: "" };
      case 'ready':
        return { text: "", instruction: "" }; // Hide text when target is visible
      case 'result':
        return { 
          text: typeof lastScore === 'number' ? `${lastScore} ms` : lastScore, 
          instruction: "Click to go again." 
        };
      default:
        return {};
    }
  };

  const { text, instruction } = renderContent();

  return (
    <div className="app-wrapper">
      <div className="test-screen" onClick={handleScreenClick}>
        <h1>{text}</h1>
        <p>{instruction}</p>

        {gameState === 'ready' && targetPosition && (
          <div 
            className="target"
            style={{ top: `${targetPosition.y}px`, left: `${targetPosition.x}px` }}
            onClick={handleTargetClick}
          ></div>
        )}
      </div>
      
      <div className="scores-panel">
        <h3>Recent Scores</h3>
        {scores.length > 0 ? (
          <ul>
            {scores.map((score, index) => <li key={index}>{typeof score === 'number' ? `${score} ms` : 'Miss'}</li>)}
          </ul>
        ) : (
          <p className="no-scores">No scores yet.</p>
        )}
        <div className="average-score">
          <h4>Average</h4>
          <p>{getAverageScore()} ms</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;