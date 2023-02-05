import React from 'react';
import {Theme} from "./theme/Theme";
import {lightTheme} from "./theme/light";
import {Provider, useSelector} from "react-redux";
import store from "./store/store";
import Test from "./components/Test";
import ToolBar from "./components/ToolBar/ToolBar";
import {Route, Routes} from "react-router";
import Profile from "./pages/Profile/Profile";
function App() {


  return (
      <Theme theme={lightTheme}>
          <Provider store={store}>
              <ToolBar/>
              <Routes>
                  <Route path={"profile"} element={<Profile/>}/>
              </Routes>
          </Provider>

      </Theme>
  );
}

export default App;
