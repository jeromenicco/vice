import React, { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import RadioPage from './pages/RadioPage'
import Landing from './pages/Landing'
import { radioList } from './data'
import { useMediaQuery } from 'react-responsive'
import './App.css'
import './responsive.css'



function App() {
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 1280px)',
  });

  const history = useHistory()

  // console.log(history.location)

  useEffect(() => {
    window.addEventListener('load', function(event) {
      history.push('/')
    })
 },[]) 

  return (
    <div id='main-container' className='App'>
      <Switch>
        <Route exact path={'/'}>
          <Landing />
        </Route>
      </Switch>
      {
        radioList.map((item, index) => {
        return (
          <Switch key={index}>
            <Route exact path={item.path}>
              <RadioPage
                index={index}
                data={item}
                isMobileDevice={isMobileDevice}
              />
            </Route>
          </Switch>
        )
      })}
    </div>
  )
}

export default App
