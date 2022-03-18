import React from 'react'
import Layer from './components/Layer'
import Profile from './components/Profile'

// Styles
import "./styles/home.css"

function App() {
    return (
        <>
            <div class="all">
                <Layer backgroundImage={"./images/mtn.jpg"}/>
                <Profile />
            </div>
        </>
    )
}

export default App