import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { AuthContext, useAuthInit } from "./firebase/auth";
import { FormDataProvider } from "./context/FormData";

import Home from "./pages/Home";
import About from "./pages/About";
import DataAnal from "./pages/DataAnal";
import Security from "./pages/Security";
import LoginPage from "./pages/LoginPage";
import Logout from "./pages/Logout";
import Contact from "./pages/Contact";

function App() {
  const authState = useAuthInit();
  return (
    <AuthContext.Provider value={{ loggedIn: authState.loggedIn }}>
      <FormDataProvider>
        <HashRouter>
          <>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/security" component={Security}></Route>
            <Route path="/data" component={DataAnal}></Route>
            <Route path="/contact" component={Contact}></Route>
          </>
        </HashRouter>
      </FormDataProvider>
    </AuthContext.Provider>
  );
}

export default App;
