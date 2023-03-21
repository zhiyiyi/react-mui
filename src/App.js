import './App.css';
import App2 from './App2.js'
import App3 from './App3.js'
import App4 from './App4.js'
import { Button, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";

function App() {

  const MyCustomButton = styled(Button)({
    padding: 10
  })
  
  return (
    <div className="App">
      <Typography variant='myVariant'>You are the best</Typography>
      <Typography sx={{color: 'myCustomColor.superDark'}}>You are so loved</Typography>
      <Button sx={{ m:2}} color='secondary' variant='contained'>Zhiyi</Button>
      <MyCustomButton variant='contained'>Hello Button</MyCustomButton>
      <App2 />
      <App3 />
      <App4 />
    </div>

  );
}

export default App;
