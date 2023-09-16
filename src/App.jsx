
import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import { context } from "msw";


function App({children}) {
  const providerValue = useMemeo(()=>({theme, handleChange}), [theme, handleChangeTheme]);
  return (
    <ThemeContext.Provider value = {providerValue}>
      <div className="App">
          <Navbar/>
          <Footer/>
          <Home/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
