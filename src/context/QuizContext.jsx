const {createContext, useState} = require('react')

const QuizContext = createContext();

const Provider = ({children})=>{
    const [loggedIn,setLoggedIn] = useState();

const value = 
{
loggedIn
}
return (<QuizContext.Provider value={value}>{children}</QuizContext.Provider>)
};
export {Provider};

export default QuizContext;