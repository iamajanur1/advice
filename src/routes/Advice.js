
import React, { useState } from "react";
import "../../src/App.css";

const GetAdvice = () => {
  const [advice, setAdvice] = useState("Hello from Ajanur the First Advice");
  const [adviceId, setAdviceId] = useState(1);



  async function newAdvice() {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      const slip = data.slip;
      setAdvice(slip.advice);
      setAdviceId(slip.id);
      console.log(slip);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  }
  

  function resetAdvice() {
    setAdvice("");
    setAdviceId(null);
  }

  return (
    <div className="card-container">
      <h1 className="title">Random Advices from Api</h1>
      <button className="action-button" onClick={newAdvice}>
        Get Advice
      </button>
      <button className="action-button" onClick={resetAdvice}>
        Reset
      </button>
      <div className="advice-container">
        <p className="advice-id">ID: {adviceId}</p>
        <h4 className="advice-text"> Advice:{advice}</h4>
      </div>
    </div>
  );
}

export default GetAdvice;