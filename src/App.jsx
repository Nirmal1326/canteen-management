import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react';
import { database as auth, db } from './account/config';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import "./styles.css"
import homeWallpaper from "./images/Wallpaper.jpg";
import snacks from "./images/wallpaper-1.jpg"
import hotandcold from "./images/wallpaper-2.jpg";
import HotandCold from './product/HotandCold';
import Snacks from './product/snacks';
function App() {

  const [user, setUser] = useState(null);
  const [val, setVal] = useState(false);

  function clicks() {
    setVal(prevVal => !prevVal);
  }
  function handlesnacks(){
    history('/snacks');
  }
  function handleHotandcold(){
    history('/hotandcold');
  }
  useEffect(() => {
    const fetchData = async () => {
      auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userDoc = doc(db, 'users', userAuth.uid);
          const userSnapshot = await getDoc(userDoc);
          if (userSnapshot.exists()) {
            setUser(userSnapshot.data());
          }
        }
      });
    };

    fetchData();
  }, []);

  const history = useNavigate();
  const handleClick = () => {
    signOut(auth).then(val => {
      history("/")
    })
  }

  return (
    <div>
      {user && (<div className="containere">
        <nav>
          <div className="logo"><b href="/">KGC<b style={{ color: "red" }}>A</b>S</b></div>
          <div className="hamburger" onClick={clicks}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          {val ? (<ul className="navItem active">
            <li><a href="#home">Home</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>) : <ul className="navItem">
            <li><a href="#home">Home</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>}
          <div className="social">
            {user && (<div style={{ display: "flex" }}>
              <h2 style={{ color: "Green", paddingRight: "10px" }}>{user.username}</h2>
              <div><button style={{ padding: "10px", backgroundColor: "#5321db", border: "none", cursor: "pointer" }} onClick={handleClick}>Sign Out</button></div>
            </div>)}
          </div>
        </nav>
      </div>)}
      {user && (<div id='home'>
        <img src={homeWallpaper} style={{ height: '100vh', width: "100vw"}}></img>
      </div>)}
      {user && (<div><h1 style={{
        display: "flex", justifyContent: "center", paddingTop: "3%", backgroundColor: "#f6f0f0",
        backgroundImage: "url(http://transparenttextures.com/patterns/diamond-upholstery.png)"
      }}>Products</h1><div id='product' className='product-1'>  
          <div className='card-1'>
            <img src={snacks}></img>
              <h2 style={{ paddingBottom: "10px" , fontSize:"30px"}}>Snacks</h2>
              <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' onClick={handlesnacks}>Add</button></div>
          </div>
          <div className='card-1'>
            <img src={hotandcold}></img>
              <h2 style={{ paddingBottom: "10px" , fontSize:"30px"}}>Hot & Cold</h2>
              <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' onClick={handleHotandcold}>Add</button></div>
          </div></div></div>)}
      {user && (<div className="bottom" >
        <footer id="contact">
          <h2 style={{paddingBottom:"1%"}}>Contact</h2>
          <div className="social2">
            <a href="https://www.linkedin.com/company/kgcasofficial" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.facebook.com/kgcas.college" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/kgcasofficial/" target="_blank" rel="noreferrer"><i className="fab fa-instagram-square"></i></a>
            <a href="https://twitter.com/Kgcascollege" target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"></i></a>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div>
            <h2 style={{padding:"5%", color:"green"}}>{user.username} & {user.email}</h2>
            <button className='bton' onClick={handleClick}>SignOut</button>
          </div>
        </div>
        </footer>
      </div>)}
      {!user && (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "300px" }}>
          <div>
            <p>Please go to the login page.</p>
            <button onClick={handleClick}>Back to Login</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
