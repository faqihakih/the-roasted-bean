import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;
