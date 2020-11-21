import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Toggle from './components/button';
import withListLoading from './components/withListLoading';
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  // kubectl port-forward --namespace scheduler-staging service/scheduler-api 4000:8080

  useEffect(() => {
    setAppState({ loading: true });
   // const apiUrl = `http://localhost:4000/apptrqst`;
     const apiUrl = `api/apptrqst`;

    
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>Hitting API</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>

      <Toggle></Toggle>

      
      <footer>
        <div className='footer'>
          Built with <span role='img' aria-label='love'>
            💚
          </span>{' '} by Mike Begley
        </div>
      </footer>
    </div>
  );
}
export default App;