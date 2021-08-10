import './App.css'
import { Switch, Route } from "react-router-dom"
import RadioPage from './pages/RadioPage'
// import InfoBox from './components/InfoBox'
import { radioList } from './data'

function App() {
  
  return (
    <div id='main-container' className='App'>
      {/* <InfoBox /> */}
      {
        radioList.map((item, index) => {
          return (
            <Switch key={index}>
              <Route exact path={item.path}>
                <RadioPage index={index} data={item}  />
              </Route>
            </Switch>
          )
        })
      }
    </div>
  )
}

export default App
