import React from "react";
import Header from "./components/header/Header";
import Main from "./components/Main";

const App = () => {
  console.log("API key:", process.env.REACT_APP_TMDB_API_KEY);
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default App;
