import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import Screen from "./components/Screen";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addInput = (val) => {
    const operators = ["/", "*", "+", "-", "."];

    //No permite ingresar / o * si no se ha puesto un numero antes
    if (
      (input.length === 0 && val === "/") ||
      (input.length === 0 && val === "*")
    )
      return;

    //No permite ingresar / * + - si hay otro operador antes
    for (let i = 0; i < operators.length; i++) {
      for (let j = 0; j < operators.length; j++) {
        if (input.endsWith(operators[i]) && val.endsWith(operators[j])) return;
      }
    }
    // if (
    //   (input.endsWith("/") && val === "/") ||
    //   (input.endsWith("/") && val === "*") ||
    //   (input.endsWith("/") && val === "-") ||
    //   (input.endsWith("/") && val === "+") ||
    //   (input.endsWith("*") && val === "/") ||
    //   (input.endsWith("*") && val === "*") ||
    //   (input.endsWith("*") && val === "-") ||
    //   (input.endsWith("*") && val === "+") ||
    //   (input.endsWith("-") && val === "/") ||
    //   (input.endsWith("-") && val === "*") ||
    //   (input.endsWith("-") && val === "-") ||
    //   (input.endsWith("-") && val === "+") ||
    //   (input.endsWith("+") && val === "/") ||
    //   (input.endsWith("+") && val === "*") ||
    //   (input.endsWith("+") && val === "-") ||
    //   (input.endsWith("+") && val === "+")
    // )
    //   return;
    let inputScreen = input + val;
    console.log(inputScreen);
    console.log(inputScreen.slice(0, "+"));

    setInput(input + val);
  };

  const clear = () => {
    setInput("");
  };

  const clearEnd = () => {
    if (input === "") return;
    //console.log(input.length);
    let newValue = input.slice(0, input.length - 1);

    setInput(newValue);
  };

  const calc = () => {
    if (input) {
      setInput(evaluate(input).toString());
    }
  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Screen input={input} />
        <Button handleClick={clear} type="operatorNegative">
          C
        </Button>
        <Button handleClick={clearEnd} type="operatorNegative">
          CE
        </Button>
        <Button type="operatorPositive" handleClick={addInput}>
          /
        </Button>
        <Button type="operatorPositive" handleClick={addInput}>
          *
        </Button>

        <Button type="number" handleClick={addInput}>
          7
        </Button>
        <Button type="number" handleClick={addInput}>
          8
        </Button>
        <Button type="number" handleClick={addInput}>
          9
        </Button>
        <Button type="operatorPositive" handleClick={addInput}>
          +
        </Button>

        <Button type="number" handleClick={addInput}>
          4
        </Button>
        <Button type="number" handleClick={addInput}>
          5
        </Button>
        <Button type="number" handleClick={addInput}>
          6
        </Button>
        <Button type="operatorPositive" handleClick={addInput}>
          -
        </Button>

        <Button type="number" handleClick={addInput}>
          1
        </Button>
        <Button type="number" handleClick={addInput}>
          2
        </Button>
        <Button type="number" handleClick={addInput}>
          3
        </Button>

        <Button handleClick={calc} type="equals">
          =
        </Button>
        <Button type="number" handleClick={addInput}>
          0
        </Button>
        <Button type="number" handleClick={addInput}>
          .
        </Button>
      </div>
    </div>
  );
}

export default App;
