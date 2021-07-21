import { BrowserRouter, Switch, Route } from "react-router-dom";
import loadable from '@loadable/component'
import Navbar from './layout/Navbar'
import ReactDOM from 'react-dom'
import React from 'react'


const LineChart = loadable(_ => import("./layout/LineChart"))
const Error404 = loadable(_ => import("./layout/Error404"))
const MapChart = loadable(_ => import("./layout/MapChart"))
const Main = loadable(_ => import("./layout/Main"))


function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/chart" component={LineChart} />
                    <Route exact path="/map" component={MapChart} />
                    <Route exact path="/" component={Main} />
                    <Route component={Error404} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"))
