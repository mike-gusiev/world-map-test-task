import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header/index'
import Background from './components/Background/index'
import RegionsPage from './pages/regions'
import Countries from './pages/countries'

import theme from './styles/theme'
import { regionsList } from './utils/constants'
import './App.css'

const App = () => (
    <ThemeProvider theme={theme}>
        <Fragment>
            <Header />
            <Background />
            <Switch>
                <Route path='/' exact render={(props) => <RegionsPage regionsList={regionsList} {...props} />}/>
                <Route path='/:region' component={Countries} />
            </Switch>
        </Fragment>
    </ThemeProvider> 
);

export default App;
