import "./App.css";
import DigimonList from "./components/DigimonList";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">S5-09</header>
      <main>
        <Search />
        <DigimonList />
      </main>
    </div>
  );
}

export default App;
