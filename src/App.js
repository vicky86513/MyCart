import './App.css';
import logo from '../src/components/images/logo.gif'
import Cart from './components/Cart/Cart'
import List from './components/List/List'
import {BrowserRouter as Router, Switch,Route,Link} from'react-router-dom'
import Login from './components/Login/Login';
import React  from 'react';
import { CartContext, CartProvider } from "./components/context/cartContext"



function App() {
  const [name, setName] = React.useState("");
  const [theme, setTheme] = React.useState("light");
  const [userData, setUserData] = React.useState(
    JSON.parse(localStorage.getItem("userData")) || null
  );
  function changeData(data) {
    localStorage.setItem("userData", JSON.stringify(data));
    setUserData(data);
  }
  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  function handleLogout() {
    localStorage.removeItem("userData");
    setUserData(null);
  }
  
  return (
    <CartProvider>
    
    <div className={`App ${theme}`}>
    {userData ? (
          <>
      <header className="App-header">
        <img className="logo" src={logo} alt="Ekart" />
        <div className="right-header">
          <div className="words"><span>{`Hi,${userData}`}</span></div>
            <Cart />
            <label className="switch">
              <input type="checkbox" onChange={changeTheme} />
              <span className="slider round"></span>
            </label>
            <button
                  href=""
                  className="logout-linkButton"
                  onClick={handleLogout}
                >
                  Logout
                </button>
          </div>
        </header>
        <div className="body-container">
          <List />
        </div>
        </>
        ) : (
        <Login changeData={changeData} />
        )}
      </div>
    </CartProvider>
    
  );
}


export default App;
