import React from 'react';
import Todo from './components/todo.js'
import Header from './components/haeder.js'
import Footer from './components/footer.js'
import { useState, useEffect } from 'react';

function App() {
    const [completed, setCompleted] = useState();
    const [incomplete, setIncomplete] = useState();

    return(
    <React.Fragment>
        <Header completed={completed} incomplete={incomplete}/>
        
        <Todo 
        setCompletedProps={ (varCount) => setCompleted(varCount)} 
        setIncompleteProps={ (varCount) => setIncomplete(varCount)} 
        /> 

        <Footer />
    </React.Fragment>
    )
}

export default App;