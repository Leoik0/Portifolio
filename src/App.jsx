import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Navbar />
      <div className="w-full max-w-4xl px-4 sm:px-6 md:px-8">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
