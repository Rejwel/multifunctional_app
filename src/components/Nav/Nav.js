import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import './Nav.css'
import Calculator from '../Calculator/Calculator.js'

class Nav extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <button className="burger" onClick={() => {
                            document.querySelector('.burger').classList.toggle('burger--active');
                            document.querySelector('.nav').classList.toggle('nav--active');
                        }}></button>
                    </div>
                    <div className="nav">
                        <ul className="navList">
                            <li className="navItem"><Link to='/'>Home</Link></li>
                            <li className="navItem"><Link to='/calculator'>Calculator</Link></li>
                            <li className="navItem"><Link to='/'>3</Link></li>
                            <li className="navItem"><Link to='/'>4</Link></li>
                        </ul>
                    </div>
                </div>

                <Switch>
                    <Route path="/calculator">
                        <Calculator />
                    </Route>
                </Switch>


            </Router>
        )
    }


}

export default Nav;