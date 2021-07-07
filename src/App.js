import { useState } from "react";
import "./App.css";
import { completeList } from "./problem1";
import { policy1__counter, policy2__counter } from "./problem2";

const App = () => {
  // utilizo el state del componente para controlar una varible que determine qué solución quiero renderizar
  const [problem, setProblem] = useState("problem_1");

  return (
    <>
      <h1>Prueba técnica - Leandro Loiacono</h1>
      <div className="container">
        <div className="btn_container">
          <button onClick={() => setProblem("problem_1")} className="btn">
            Problema 1
          </button>
          <button onClick={() => setProblem("problem_2")} className="btn">
            Problema 2
          </button>
        </div>
        <div className="solution_container">
          {problem === "problem_1" ? (
            <ol id="ordered_list">
              {completeList.map((li) => {
                return (
                  <li className="li_item" key={Math.random()}>
                    {li.innerHTML}
                  </li>
                );
              })}
            </ol>
          ) : (
            <div className="policy_result">
              <h1>Resultados: </h1>
              <h3>
                Las contraseñas que cumplen con la política 1 son:{" "}
                <span id="resultado__policy1">{policy1__counter}</span>
              </h3>
              <h3>
                Las contraseñas que cumplen con la política 2 son:{" "}
                <span id="resultado__policy2">{policy2__counter}</span>
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
