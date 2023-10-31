import Article from "./components/layout/article/Article";
import Header from "./components/layout/header/Header";
import './App.css';


function App() {
  return (
    <div className="root">
      <Header title="News"/>
      <div className="main">
        <Article articletitle="Article 1" articletext="Contents 1"/>
        <Article articletitle="Article 2" articletext="Contents 2"/>
        <Article articletitle="Article 3" articletext="Contents 3"/>
      </div>
    </div>
  );
}

export default App;
