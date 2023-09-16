import { Children } from "react";
import { themeContext } from "./themeContext";

const themeProvider = ({Children}) => {

    const[theme, setTheme] = useState("day")
    
    const newTheme = () => 'day' ? 'night' : 'day';
    
    useEffect(()=>{
        if(state.theme === 'night'){
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [state.theme])


    return(

    <themeContext.Provider>
        value={{
            theme,
            newTheme
        }}
        {Children}
    </themeContext.Provider>

    )
}