import React from "react";

import "./App.css";

function App() {
  const date = new Date();

  return (
    <>
      <header role="banner">
        <h1>Le bon test</h1>
      </header>
      <main role="main">Content</main>
      <footer>{`© ${date.getFullYear()} Lebontest`}</footer>
    </>
  );
}

export default App;
