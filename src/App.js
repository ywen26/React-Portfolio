// import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper"
import About from "./pages/About";
import Contact from "./components/ContactList";
import Projects from "./pages/Projects";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Wrapper>
        <hr />
        <div>
          <Contact />
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
