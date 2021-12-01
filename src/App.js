import { Switch, Route } from "react-router-dom";
import RadioPage from "./pages/RadioPage";
import { radioList } from "./data";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import "./responsive.css";
// import { useState } from "react";

function App() {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 800px)",
  });
  // const [renderDelay, setRenderDelay] = useState(false)

  setTimeout(() => {
    // setRenderDelay(true)
    // window.location.reload(false);
  }, 2000)


  return (
    <div id="main-container" className="App">
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
        );
      })}
    </div>
  );
}

export default App;
