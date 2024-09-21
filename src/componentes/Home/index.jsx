import { Route, useNavigate } from "react-router-dom";
import config from "../../config/config";
import { Box, Button } from "@mui/material";

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{border:'1px solid red' ,width:'90%', height:'100vh',margin:'0 auto', padding: '20px', textAlign: 'center',}}>
      <h1 style={{marginBottom:'20px'}}>Welcom To Mini App</h1>

      <div style={{padding:'20px', border:'1px solid grey', width:'80%', display: 'flex',justifyContent:'space-around',flexWrap:'wrap', gap:'20px',margin:'0 auto'}}>
        {config.map((item) => (
          <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>

            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Button sx={{margin: '10px', padding: '2px',fontSize: '10px', borderRadius: '5px', cursor: 'pointer'}} variant="outlined" onClick={() => navigate(item.link)}>Go to {item.title}</Button>
          </Box>
        ))}


      </div>
    </div>
  );
}

export default Home;
