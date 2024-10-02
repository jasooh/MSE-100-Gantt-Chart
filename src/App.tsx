// App.tsx
import './App.css';
import GanttChart from './components/GanttChart';

function App() {
  return (
    <article>
      <header className="App-header">
        <h1 className="font-bold text-6xl">MSE 100</h1>
        <h2 className="text-gray-400">Project Milestone Timeline</h2>
        <p className="mb-10 text-[0.8em] text-gray-500">Justin Abuyuan, 2024</p>
        <GanttChart/>
        <p className="mt-5 italic text-gray-400 text-[0.8em]">Hover over bars to see more details.</p>
      </header>
    </article>
  );
}

export default App;
