import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
unsubcribeFromAuth = null
  componentDidMount() {
    this.unsubcribeFromAuth = onAuthStateChanged(auth, (user) => {
      this.setState({ currentUser: user });
      console.log(user) 
    });
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth()
  }

  render() {
    const {currentUser} = this.state
    return (
      <div>
        <Header currentUser = {currentUser}/>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/shop" Component={ShopPage} />
          <Route path="/signin" Component={SignInAndSignUpPage} />
        </Routes>
      </div>
    );
  }
}

export default App;
