import React, { useEffect, useState } from "react";
import styles from "../../common/colors/common-colors.module.css";
function Calculator() {
  const [value, setValue] = useState(0);

  const handleClickForNumber = (e) => {
    value != 0
      ? setValue(value + e.target.innerText)
      : setValue(e.target.innerText);
  };
  const handleClickForOperator = (e) => {
    value[value.length - 1] === "*" ||
    value[value.length - 1] === "/" ||
    value[value.length - 1] === "+" ||
    value[value.length - 1] === "%" ||
    value[value.length - 1] === "-"
      ? setValue(value.slice(0, -1) + e.target.innerText)
      : setValue(value + e.target.innerText);
  };

  const handleClickForEqual = () => {
    const result = eval(value);
    setValue(result);
  };

  const handleClickForDelete = () => {
    setValue(value.slice(0, -1));
  };
  const handleClickForClear = () => {
    setValue("");
  };

  return (
    <div className="main flex flex-col align-center justify-center sm:p-20">
      <h1 className="text-center text-2xl">Calculator</h1>
      <div className="calculator-container shadow-lg p-6 sm:m-10 bg-black rounded-md">
        <input
          style={{ caretColor: "red" }}
          value={value}
          onChange={handleClickForEqual}
          className="w-full p-6 mb-4 rounded-md"
        />

        <div className="Calculator-column flex flex-col gap-2">
          <div className="calculator-row flex gap-2 justify-around">
            <button onClick={handleClickForClear} className={styles.bgYellow}>
              AC
            </button>
            <button onClick={handleClickForDelete} className={styles.bgYellow}>
              DEL
            </button>
            <button onClick={handleClickForOperator} className={styles.bgGreen}>
              %
            </button>
            <button onClick={handleClickForOperator} className={styles.bgGreen}>
              /
            </button>
          </div>
          <div className="calculator-row flex gap-2 justify-around">
            <button onClick={handleClickForNumber}>7</button>
            <button onClick={handleClickForNumber}>8</button>
            <button onClick={handleClickForNumber}>9</button>
            <button
              onClick={handleClickForOperator}
              className={styles.bgPurple}
            >
              *
            </button>
          </div>
          <div className="calculator-row flex gap-2 justify-around">
            <button onClick={handleClickForNumber}>6</button>
            <button onClick={handleClickForNumber}>5</button>
            <button onClick={handleClickForNumber}>4</button>
            <button
              onClick={handleClickForOperator}
              className={styles.bgPurple}
            >
              -
            </button>
          </div>
          <div className="calculator-row flex gap-2 justify-around">
            <button onClick={handleClickForNumber}>3</button>
            <button onClick={handleClickForNumber}>2</button>
            <button onClick={handleClickForNumber}>1</button>
            <button
              onClick={handleClickForOperator}
              className={styles.bgYellow}
            >
              +
            </button>
          </div>
          <div className="calculator-row flex gap-2 justify-around">
            <button onClick={handleClickForNumber}>00</button>
            <button onClick={handleClickForNumber}>0</button>
            <button onClick={handleClickForNumber}>.</button>
            <button onClick={handleClickForEqual} className={styles.bgYellow}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
