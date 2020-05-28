import React from 'react';
import Header from './components/haeder.js'
import Todo from './components/todo.js'
import Footer from './components/footer.js'

function App() {
    return(
    <React.Fragment>
        <Header />
        <Todo />
        <Footer />
    </React.Fragment>
    )
}

export default App;