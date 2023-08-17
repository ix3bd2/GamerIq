import { useEffect } from 'react';
import Home from './pages/Home';


function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Home />

    </div>
  );
}

export default App;