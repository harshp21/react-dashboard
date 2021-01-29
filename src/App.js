import logo from './logo.svg';
import './App.css';
import Sidebar from './component/sidebar/Sidebar';
import Navbar from './component/navbar/Navbar';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Dashboard from './component/dashboard/Dashboard';
import Reports from './component/reports/Reports';

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />

            <Switch>
              <Route path="/reports" component={Reports} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/" component={Dashboard} />
            </Switch>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
