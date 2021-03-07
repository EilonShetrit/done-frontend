// import './App.css';
import './style/style.scss'
import { AppHeader } from './cmps/AppHeader/AppHeader'
import { AppFooter } from './cmps/AppFooter/AppFooter'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { ListPage } from './pages/ListPage/ListPage';
// import { EditTodo } from './pages/EditTodo/EditTodo';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <AppHeader />
        </header>
        {/* main-container */}
        <main className="main">
          <Switch>
            {/* <Route exact path="/edit" component={EditTodo} /> */}
            <Route exact path="/board" component={ListPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </main>
        <footer>
          <AppFooter />
        </footer>
      </Router>
    </div>
  );
}

export default App;
