import "./App.css";
import { Switch, Route } from "react-router-dom";
import RadioPage from "./pages/RadioPage";
// import InfoBox from './components/InfoBox'
import { radioList } from "./data";
import { useMediaQuery } from "react-responsive";
import "./responsive.css";

function App() {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 1280px)",
  });

  // console.log(isMobileDevice === true);

  return (
    <div id="main-container" className="App">
      {/* <InfoBox /> */}
      {radioList.map((item, index) => {
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
