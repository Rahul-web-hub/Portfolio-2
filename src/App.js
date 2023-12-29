import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoaderHome from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  // Simulate data loading
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when data is loaded
    }, 6000);
  }, []);
  return (
    <div className="App">
      {isLoading ? <LoaderHome /> : null}
    </div>
  );
}

export default App;
