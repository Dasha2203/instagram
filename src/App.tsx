import React from 'react';
import {Theme} from "./theme/Theme";
import {lightTheme} from "./theme/light";
import {Provider} from "react-redux";
import store from "./store/store";
import ToolBar from "./components/ToolBar/ToolBar";
import {Route, Routes} from "react-router";
import Profile from "./pages/Profile/Profile";
import PostsGallery from "./components/PostsGallery/PostsGallery";

function App() {
  return (
      <Theme theme={lightTheme}>
          <Provider store={store}>
              <ToolBar/>
              <Routes>
                  <Route path={"profile"} element={<Profile/>}>
                      <Route path={"posts"} element={<PostsGallery/>}></Route>
                      <Route path={"reels"} element={<PostsGallery/>}></Route>
                      <Route path={"saved-posts"} element={<PostsGallery/>}></Route>
                  </Route>
              </Routes>
          </Provider>
      </Theme>
  );
}

export default App;
