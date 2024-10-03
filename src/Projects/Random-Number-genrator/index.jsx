import { Button } from "@mui/material";
import React, { useState } from "react";

function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState(0);

  const handleClick = () => {
    setRandomNumber(Math.floor(Math.random() * 100 + 1));
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-2xl m-10 ">Random Number Generator</h1>

      <div
        className="w-80 flex flex-col border border-gray-300  shadow-xl
 rounded-md p-6 gap-6 justify-between items-center"
      >
        <p>Generate a number between 0-100</p>
        <input
          className="w-8 border border-pink-500
           rounded-md outline-1 outline-blue-300 text-center text-blue-500
            outline-offset-2"
          type="number"
          value={randomNumber}
        />
        <Button
          onClick={handleClick}
          sx={{
            width: "60%",
            padding: "0.2 0em",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          variant="outlined"
        >
          Generate Now
        </Button>
      </div>
    </div>
  );
}

export default RandomNumberGenerator;
