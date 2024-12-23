import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = (props , state) => {
  const pageSize = 30;
  const apiKey = process.env.REACT_APP_NEWS_API;

 
  

  const [progress , setProgress] = useState(0);
  
    return (

      
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
          />
          <Switch>
            <Route
              exact
              path="/business"
              render={() => (
                <News
                  setProgress={setProgress}
                  apiKey={ apiKey}
                  key="business"
                  pageSize={ pageSize}
                  country="us"
                  category="business"
                />
              )}
            />
            <Route
              exact
              path="/entertainment"
              render={() => (
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="entertainment"
                  pageSize={pageSize}
                  country="us"
                  category="entertainment"
                />
              )}
            />
            <Route
              exact
              path="/general"
              render={() => (
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  country="us"
                  category="general"
                />
              )}
            />
            <Route
              exact
              path="/health"
              render={() => (
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="health"
                  pageSize={pageSize}
                  country="us"
                  category="health"
                />
              )}
            />
            <Route
              exact
              path="/science"
              render={() => (
                <News
                  setProgress={setProgress}
                  apiKey={ apiKey}
                  key="science"
                  pageSize={ pageSize}
                  country="us"
                  category="science"
                />
              )}
            />
            <Route
              exact
              path="/sports"
              render={() => (
                <News
                  setProgress={setProgress}
                  apiKey={ apiKey}
                  key="sports"
                  pageSize={ pageSize}
                  country="us"
                  category="sports"
                />
              )}
            />
            <Route
              exact
              path="/technology"
              render={() => (
                <News
                  setProgress={setProgress}
                  apiKey={ apiKey}
                  key="technology"
                  pageSize={ pageSize}
                  country="us"
                  category="technology"
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
}

export default App;
