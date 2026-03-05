import React from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  const [result, setResult] = React.useState(0);

  /* You will need some function to handle the key pressed and button events */
  const onA = (event) => {
    setA(parseFloat(event.target.value));
  };

  const onB = (event) => {
    setB(parseFloat(event.target.value));
  };

  const computeSum = () => {
    if (isNaN(a)||isNaN(b)) {
      setResult("Please enter valid numbers");
    } else {
      setResult(a + b);
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input value={result} className={result === "Please enter valid numbers" ? "error" : ""} disabled />
      <button onClick={computeSum}>Compute</button>
    </main>
  );
}

export default App;
