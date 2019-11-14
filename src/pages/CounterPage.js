import Counter from "../components/Counter";
import React from "react";
import Header from "../components/Header";


export default function CounterPage() {
  return (
    <div className="App">
      <Header/>

      <header className="App-header">
        <Counter/>
      </header>
    </div>
  );
}
