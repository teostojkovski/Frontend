import { ThemeProvider } from '@emotion/react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import Home from './components/Home/Home';
import RestaurantDetails from './components/Restaurant/RestaurantDetails';

function App() {
  return (
    <div className="App">    
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Navbar/>
        {/* <Home/> */}
        <RestaurantDetails/>
      </ThemeProvider>
    </div>
  );
}

export default App;
