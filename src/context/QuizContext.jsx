const {createContext, useState} = require('react')

const QuizContext = createContext();

const Provider = ({children})=>{
    const [isAuthenticated,setIsAuthenticated] = useState();
    const [selectedMenu,setSelectedMenu] = useState(1);
const value = 
{
selectedMenu,
setSelectedMenu,
isAuthenticated,
setIsAuthenticated
}
return (<QuizContext.Provider value={value}>{children}</QuizContext.Provider>)
};
export {Provider};

export default QuizContext;