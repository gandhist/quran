import React, {Component} from 'react'
import ListSurah from "./ListSurah";
import BacaSurah from "./BacaSurah";
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component{

    render () {
            return (
                <div >
                    <BrowserRouter>
                        <Route path='/' exact component={ListSurah} />
                        <Route path='/surah/:idsurah' exact component={BacaSurah} />
                    </BrowserRouter>
                </div>
            )
    }

}



export default App