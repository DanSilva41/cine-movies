import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Header } from "./components/Header";
import { About } from "./views/About";
import { Home } from "./views/Home";
import { MovieDetail } from "./views/MovieDetail";

function App() {

  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
