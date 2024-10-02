import { Route, useNavigate } from "react-router-dom";
import config from "../../config/config";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";

function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        
        width: "90%",
        padding: "0.2rem",
        minHeight: "100vh",
        margin: "0 auto",
        padding: "0.5rem",
        textAlign: "center",
      }}
    >
      <h1 className="my-4 sm:text-2xl font-mono font-extrabold tracking-tigh">
        Welcome To Mini App
      </h1>

      <div className="flex border-solid border-2 flex-wrap p-4 gap-4 justify-around">
        {config.map((item) => (
          <div
            key={item.id}
            className="w-80 sm:w-80 p-6 bg-slate-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h2 className="sm:text-xl font-mono font-extrabold tracking-tight">
              {item.title}
            </h2>
            <p>{item.description}</p>
            <Button className="hover:bg-cyan-200 rounded-sm"
              sx={{
                margin: "0.1rem",
                padding: "0.1rem",
                fontSize: "0.5rem",
                borderRadius: "5px",
                cursor: "pointer",
                transition:'all ease-in'
              }}
              variant="outlined"
              onClick={() => navigate(item.link)}
            >
              Go to {item.title}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
