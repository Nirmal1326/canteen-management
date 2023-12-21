import "../styles.css"
import React, { useEffect, useState } from 'react';
import { database as auth, db } from '../account/config';
import { doc, getDoc } from 'firebase/firestore';
import product1 from "../Image-2/BadhamMilk.jpg"
import product2 from "../Image-2/Bananaa.jpg"
import product3 from "../Image-2/ChickenBiriyani.jpg"
import product4 from "../Image-2/ChickenNoodles.jpg"
import product5 from "../Image-2/ChickenRice.jpg"
import product6 from "../Image-2/EggBiriyani.jpg"
import product7 from "../Image-2/EggNoodles.jpg"
import product8 from "../Image-2/EggPuffs.jpg"
import product9 from "../Image-2/Mango.jpg"
import product10 from "../Image-2/OrangeJuice.jpg"
import product11 from "../Image-2/pomegranate.jpg"
import product12 from "../Image-2/RoseMilk.jpg"
import product13 from "../Image-2/Strawberry.jpg"
import product14 from "../Image-2/VegNoodles.jpg"
import product15 from "../Image-2/VegRice.jpg"
import cart from "../images/cart.jpg"
const HotandCold = () => {

    const [user, setUser] = useState(null);
    const [val, setVal] = useState(false);

    let BadhamMilk = "Badham Milk"
    const [price1, setPrice1] = useState(0)
    const [stock1, setStock1] = useState(10)
    const [quantity1, setQuantity1] = useState(0)

    let Banana = "Banana Milk Shake"
    const [price2, setPrice2] = useState(0)
    const [stock2, setStock2] = useState(10)
    const [quantity2, setQuantity2] = useState(0)

    let ChickenBiriyani = "Chicken Biriyani"
    const [price3, setPrice3] = useState(0)
    const [stock3, setStock3] = useState(10)
    const [quantity3, setQuantity3] = useState(0)

    let ChickenNoodles = "Chicken Noodles"
    const [price4, setPrice4] = useState(0)
    const [stock4, setStock4] = useState(10)
    const [quantity4, setQuantity4] = useState(0)

    let ChickenRice = "Chicken Rice"
    const [price5, setPrice5] = useState(0)
    const [stock5, setStock5] = useState(10)
    const [quantity5, setQuantity5] = useState(0)

    let EggBiriyani = "Egg Biriyani"
    const [price6, setPrice6] = useState(0)
    const [stock6, setStock6] = useState(10)
    const [quantity6, setQuantity6] = useState(0)

    let EggNoodles = "Egg Noodles"
    const [price7, setPrice7] = useState(0)
    const [stock7, setStock7] = useState(10)
    const [quantity7, setQuantity7] = useState(0)

    let EggPuffs = "Egg Puffs"
    const [price8, setPrice8] = useState(0)
    const [stock8, setStock8] = useState(10)
    const [quantity8, setQuantity8] = useState(0)

    let Mango = "Mango Shake"
    const [price9, setPrice9] = useState(0)
    const [stock9, setStock9] = useState(10)
    const [quantity9, setQuantity9] = useState(0)

    let OrangeJuice = "Orange Juice"
    const [price10, setPrice10] = useState(0)
    const [stock10, setStock10] = useState(10)
    const [quantity10, setQuantity10] = useState(0)

    let Pomegranate = "Pomegranate"
    const [price11, setPrice11] = useState(0)
    const [stock11, setStock11] = useState(10)
    const [quantity11, setQuantity11] = useState(0)

    let RoseMilk = "Rose Milk"
    const [price12, setPrice12] = useState(0)
    const [stock12, setStock12] = useState(10)
    const [quantity12, setQuantity12] = useState(0)

    let Strawberry = "Strawberry"
    const [price13, setPrice13] = useState(0)
    const [stock13, setStock13] = useState(10)
    const [quantity13, setQuantity13] = useState(0)

    let VegNoodles = "Veg Noodles"
    const [price14, setPrice14] = useState(0)
    const [stock14, setStock14] = useState(10)
    const [quantity14, setQuantity14] = useState(0)

    let VegRice = "Veg Rice"
    const [price15, setPrice15] = useState(0)
    const [stock15, setStock15] = useState(10)
    const [quantity15, setQuantity15] = useState(0)

    const [total, settotal] = useState(0)
    const [totals, setTotals] = useState(false);
    function handleClick(){
        window.location.href ='/';
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

    function handleValueMinus(event) {
        setTotals(false);
        if (event.target.id === "product1") {
            if (stock1 >= 0 && stock1 < 10) {
                let temp1 = quantity1 - 1;
                let temp2 = price1 - 60;
                let temp3 = stock1 + 1;
                setQuantity1(temp1);
                setPrice1(temp2);
                setStock1(temp3);
            }
            else {
                alert("Limit Reached");
            }
        }
        else if (event.target.id === "product2") {
            if (stock2 >= 0 && stock2 < 10) {
                let temp1 = quantity2 - 1;
                let temp2 = price2 - 40;
                let temp3 = stock2 + 1;
                setQuantity2(temp1);
                setPrice2(temp2);
                setStock2(temp3);
            }
            else {
                alert("Limit Reached");
            }
        }
        else if (event.target.id === "product3") {
            if (stock3 >= 0 && stock3 < 10) {
                let temp1 = quantity3 - 1;
                let temp2 = price3 - 130;
                let temp3 = stock3 + 1;
                setQuantity3(temp1);
                setPrice3(temp2);
                setStock3(temp3);
            }
            else {
                alert("Limit Reached");
            }
        }
        else if (event.target.id === "product4") {
            if (stock4 >= 0 && stock4 < 10) {
                let temp1 = quantity4 - 1;
                let temp2 = price4 - 90;
                let temp3 = stock4 + 1;
                setQuantity4(temp1);
                setPrice4(temp2);
                setStock4(temp3);
            }
            else {
                alert("Limit Reached");
            }
        }
        else if (event.target.id === "product5") {
            if (stock5 >= 0 && stock5 < 10) {
                let temp1 = quantity5 - 1;
                let temp2 = price5 - 90;
                let temp3 = stock5 + 1;
                setQuantity5(temp1);
                setPrice5(temp2);
                setStock5(temp3);
            }
            else {
                alert("Limit Reached");
            }
        }
        else if (event.target.id === "product6") {
            if (stock6 >= 0 && stock6 < 10) {
                let temp1 = quantity6 - 1;
                let temp2 = price6 - 80;
                let temp3 = stock6 + 1;
                setQuantity6(temp1);
                setPrice6(temp2);
                setStock6(temp3);
            }
            else {
                alert("Limit Reached");
            }
        }
        else if (event.target.id === "product7") {
            if (stock7 >= 0 && stock7 < 10) {
                let temp1 = quantity7 - 1;
                let temp2 = price7 - 75;
                let temp3 = stock7 + 1;
                setQuantity7(temp1);
                setPrice7(temp2);
                setStock7(temp3);
            }
            else {
                alert("Limit Reached");
            }
        }
        else if (event.target.id === "product8") {
            if (stock8 >= 0 && stock8 < 10) {
                let temp1 = quantity8 - 1;
                let temp2 = price8 - 20;
                let temp3 = stock8 + 1;
                setQuantity8(temp1);
                setPrice8(temp2);
                setStock8(temp3);
            }
            else {
                alert("Limit Reached");
            }
        }
        else if (event.target.id === "product9") {
            if (stock9 >= 0 && stock9 < 10) {
                let temp1 = quantity9 - 1;
                let temp2 = price9 - 45;
                let temp3 = stock9 + 1;
                setQuantity9(temp1);
                setPrice9(temp2);
                setStock9(temp3);
            }
            else {
                alert("Limit Reached");
            }
        }
        else if (event.target.id === "product10") {
            if (stock10 >= 0 && stock10 < 10) {
                let temp1 = quantity10 - 1;
                let temp2 = price10 - 30;
                let temp3 = stock10 + 1;
                setQuantity10(temp1);
                setPrice10(temp2);
                setStock10(temp3);
            }
            else {
                alert("Limit Reached");
            }
        }
        else if (event.target.id === "product11") {
            if (stock11 >= 0 && stock11 < 10) {
                let temp1 = quantity11 - 1;
                let temp2 = price11 - 35;
                let temp3 = stock11 + 1;
                setQuantity11(temp1);
                setPrice11(temp2);
                setStock11(temp3);
            }
            else {
                alert("Limit Reached");
            }
        }
        else if (event.target.id === "product12") {
            if (stock12 >= 0 && stock12 < 10) {
                let temp1 = quantity12 - 1;
                let temp2 = price12 - 40;
                let temp3 = stock12 + 1;
                setQuantity12(temp1);
                setPrice12(temp2);
                setStock12(temp3);
            }
            else {
                alert("Limit Reached");
            }
        }
        else if (event.target.id === "product13") {
            if (stock13 >= 0 && stock13 < 10) {
                let temp1 = quantity13 - 1;
                let temp2 = price13 - 60;
                let temp3 = stock13 + 1;
                setQuantity13(temp1);
                setPrice13(temp2);
                setStock13(temp3);
            }
            else {
                alert("Limit Reached");
            }
        }
        else if (event.target.id === "product14") {
            if (stock14 >= 0 && stock14 < 10) {
                let temp1 = quantity14 - 1;
                let temp2 = price14 - 70;
                let temp3 = stock14 + 1;
                setQuantity14(temp1);
                setPrice14(temp2);
                setStock14(temp3);
            }
            else {
                alert("Limit Reached");
            }
        }
        else if (event.target.id === "product15") {
            if (stock15 >= 0 && stock15 < 10) {
                let temp1 = quantity15 - 1;
                let temp2 = price15 - 70;
                let temp3 = stock15 + 1;
                setQuantity15(temp1);
                setPrice15(temp2);
                setStock15(temp3);
            }
            else {
                alert("Limit Reached");
            }
        }
    }

    function handleValueAdd(event) {
        setTotals(false)
        if (event.target.id === "product1") {
            if (stock1 > 0) {
                let temp1 = quantity1 + 1;
                let temp2 = price1 + 60;
                let temp3 = stock1 - 1;
                setQuantity1(temp1);
                setPrice1(temp2);
                setStock1(temp3);
            }
            else {
                alert("Out of Stock");
            }
        }
        else if (event.target.id === "product2") {
            if (stock2 > 0) {
                let temp1 = quantity2 + 1;
                let temp2 = price2 + 40;
                let temp3 = stock2 - 1;
                setQuantity2(temp1);
                setPrice2(temp2);
                setStock2(temp3);
            }
            else {
                alert("Out of Stock");
            }
        }
        else if (event.target.id === "product3") {
            if (stock3 > 0) {
                let temp1 = quantity3 + 1;
                let temp2 = price3 + 130;
                let temp3 = stock3 - 1;
                setQuantity3(temp1);
                setPrice3(temp2);
                setStock3(temp3);
            }
            else {
                alert("Out of Stock");
            }
        }
        else if (event.target.id === "product4") {
            if (stock4 > 0) {
                let temp1 = quantity4 + 1;
                let temp2 = price4 + 90;
                let temp3 = stock4 - 1;
                setQuantity4(temp1);
                setPrice4(temp2);
                setStock4(temp3);
            }
            else {
                alert("Out of Stock");
            }
        }
        else if (event.target.id === "product5") {
            if (stock5 > 0) {
                let temp1 = quantity5 + 1;
                let temp2 = price5 + 90;
                let temp3 = stock5 - 1;
                setQuantity5(temp1);
                setPrice5(temp2);
                setStock5(temp3);
            }
            else {
                alert("Out of Stock");
            }
        }
        else if (event.target.id === "product6") {
            if (stock6 > 0) {
                let temp1 = quantity6 + 1;
                let temp2 = price6 + 80;
                let temp3 = stock6 - 1;
                setQuantity6(temp1);
                setPrice6(temp2);
                setStock6(temp3);
            }
            else {
                alert("Out of Stock");
            }
        }
        else if (event.target.id === "product7") {
            if (stock7 > 0) {
                let temp1 = quantity7 + 1;
                let temp2 = price7 + 75;
                let temp3 = stock7 - 1;
                setQuantity7(temp1);
                setPrice7(temp2);
                setStock7(temp3);
            }
            else {
                alert("Out of Stock");
            }
        }
        else if (event.target.id === "product8") {
            if (stock8 > 0) {
                let temp1 = quantity8 + 1;
                let temp2 = price8 + 20;
                let temp3 = stock8 - 1;
                setQuantity8(temp1);
                setPrice8(temp2);
                setStock8(temp3);
            }
            else {
                alert("Out of Stock");
            }
        }
        else if (event.target.id === "product9") {
            if (stock9 > 0) {
                let temp1 = quantity9 + 1;
                let temp2 = price9 + 45;
                let temp3 = stock9 - 1;
                setQuantity9(temp1);
                setPrice9(temp2);
                setStock9(temp3);
            }
            else {
                alert("Out of Stock");
            }
        }
        else if (event.target.id === "product10") {
            if (stock10 > 0) {
                let temp1 = quantity10 + 1;
                let temp2 = price10 + 30;
                let temp3 = stock10 - 1;
                setQuantity10(temp1);
                setPrice10(temp2);
                setStock10(temp3);
            }
            else {
                alert("Out of Stock");
            }
        }
        else if (event.target.id === "product11") {
            if (stock11 > 0) {
                let temp1 = quantity11 + 1;
                let temp2 = price11 + 35;
                let temp3 = stock11 - 1;
                setQuantity11(temp1);
                setPrice11(temp2);
                setStock11(temp3);
            }
            else {
                alert("Out of Stock");
            }
        }
        else if (event.target.id === "product12") {
            if (stock12 > 0) {
                let temp1 = quantity12 + 1;
                let temp2 = price12 + 40;
                let temp3 = stock12 - 1;
                setQuantity12(temp1);
                setPrice12(temp2);
                setStock12(temp3);
            }
            else {
                alert("Out of Stock");
            }
        }
        else if (event.target.id === "product13") {
            if (stock13 > 0) {
                let temp1 = quantity13 + 1;
                let temp2 = price13 + 60;
                let temp3 = stock13 - 1;
                setQuantity13(temp1);
                setPrice13(temp2);
                setStock13(temp3);
            }
            else {
                alert("Out of Stock");
            }
        }
        else if (event.target.id === "product14") {
            if (stock14 > 0) {
                let temp1 = quantity14 + 1;
                let temp2 = price14 + 70;
                let temp3 = stock14 - 1;
                setQuantity14(temp1);
                setPrice14(temp2);
                setStock14(temp3);
            }
            else {
                alert("Out of Stock");
            }
        }
        else if (event.target.id === "product15") {
            if (stock15 > 0) {
                let temp1 = quantity15 + 1;
                let temp2 = price15 + 70;
                let temp3 = stock15 - 1;
                setQuantity15(temp1);
                setPrice15(temp2);
                setStock15(temp3);
            }
            else {
                alert("Out of Stock");
            }
        }
    }
    function handleBuy() {
        let temp = price1 + price2 + price3 + price4 + price5 + price6 + price7 + price8 + price9 + price10 + price11 + price12 + price13 + price14 + price15;
        settotal(temp);
    }
    function checkout() {
        alert("Update Comming Soon")
    }
    function Totalcount() {
        handleBuy();
        setTotals(true);
    }
    return (<div>{ user && (<div>
        <h1 style={{
        display: "flex", color:"blue",justifyContent: "center", paddingTop: "3%", backgroundColor: "#f6f0f0",
        backgroundImage: "url(http://transparenttextures.com/patterns/diamond-upholstery.png)"
    }}>Welcome {user.username}</h1>
    <h1 style={{
        display: "flex", justifyContent: "center", paddingTop: "3%", backgroundColor: "#f6f0f0",
        backgroundImage: "url(http://transparenttextures.com/patterns/diamond-upholstery.png)"
    }}>Hot and Cold</h1>
        <div id='product' className='product'>
            <div className='card'>
                <img src={product1}></img>
                <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <h2 style={{ paddingBottom: "10px" }}>{BadhamMilk}</h2>
                    <h3 className='stock'>Stock {"("}{stock1}{")"}</h3>
                    <h3 className='price'>Price ₹60 | Total ₹ {"("}{price1}{")"}</h3>
                    <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity <b className='add' id='product1' onClick={handleValueAdd}>+</b> {quantity1} <b className='minus' id='product1' onClick={handleValueMinus} >-</b></h3>
                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart1' onClick={handleBuy}>Add</button></div>
                </div>
            </div>
            <div className='card'>
                <img src={product2}></img>
                <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <h2 style={{ paddingBottom: "10px" }}>{Banana}</h2>
                    <h3 className='stock'>Stock {"("}{stock2}{")"}</h3>
                    <h3 className='price'>Price ₹40 | Total ₹ {"("}{price2}{")"}</h3>
                    <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product2' onClick={handleValueAdd}>+</b> {quantity2} <b className='minus' id='product2' onClick={handleValueMinus}>-</b></h3>
                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart2' onClick={handleBuy}>Add</button></div>
                </div>
            </div>
            <div className='card'>
                <img src={product3}></img>
                <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <h2 style={{ paddingBottom: "10px" }}>{ChickenBiriyani}</h2>
                    <h3 className='stock'>Stock {"("}{stock3}{")"}</h3>
                    <h3 className='price'>Price ₹130 | Total ₹ {"("}{price3}{")"}</h3>
                    <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product3' onClick={handleValueAdd}>+</b> {quantity3} <b className='minus' id='product3' onClick={handleValueMinus}>-</b></h3>
                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart3' onClick={handleBuy}>Add</button></div>
                </div>
            </div>
            <div className='card'>
                <img src={product4}></img>
                <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <h2 style={{ paddingBottom: "10px" }}>{ChickenNoodles}</h2>
                    <h3 className='stock'>Stock {"("}{stock4}{")"}</h3>
                    <h3 className='price'>Price ₹90 | Total ₹ {"("}{price4}{")"}</h3>
                    <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product4' onClick={handleValueAdd}>+</b> {quantity4} <b className='minus' id='product4' onClick={handleValueMinus}>-</b></h3>
                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart4' onClick={handleBuy}>Add</button></div>
                </div>
            </div>
            <div className='card'>
                <img src={product5}></img>
                <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <h2 style={{ paddingBottom: "10px" }}>{ChickenRice}</h2>
                    <h3 className='stock'>Stock {"("}{stock5}{")"}</h3>
                    <h3 className='price'>Price ₹90 | Total ₹ {"("}{price5}{")"}</h3>
                    <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product5' onClick={handleValueAdd}>+</b> {quantity5} <b className='minus' id='product5' onClick={handleValueMinus}>-</b></h3>
                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart5' onClick={handleBuy}>Add</button></div>
                </div>
            </div>
            <div className='card'>
                <img src={product6}></img>
                <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <h2 style={{ paddingBottom: "10px" }}>{EggBiriyani}</h2>
                    <h3 className='stock'>Stock {"("}{stock6}{")"}</h3>
                    <h3 className='price'>Price ₹80 | Total ₹ {"("}{price6}{")"}</h3>
                    <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product6' onClick={handleValueAdd}>+</b> {quantity6} <b className='minus' id='product6' onClick={handleValueMinus}>-</b></h3>
                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart6' onClick={handleBuy}>Add</button></div>
                </div>
            </div>
            <div className='card'>
                <img src={product7}></img>
                <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <h2 style={{ paddingBottom: "10px" }}>{EggNoodles}</h2>
                    <h3 className='stock'>Stock {"("}{stock7}{")"}</h3>
                    <h3 className='price'>Price ₹75 | Total ₹ {"("}{price7}{")"}</h3>
                    <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product7' onClick={handleValueAdd}>+</b> {quantity7} <b className='minus' id='product7' onClick={handleValueMinus}>-</b></h3>
                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart7' onClick={handleBuy}>Add</button></div>
                </div>
            </div>
            <div className='card'>
                <img src={product8}></img>
                <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <h2 style={{ paddingBottom: "10px" }}>{EggPuffs}</h2>
                    <h3 className='stock'>Stock {"("}{stock8}{")"}</h3>
                    <h3 className='price'>Price ₹20 | Total ₹ {"("}{price8}{")"}</h3>
                    <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product8' onClick={handleValueAdd}>+</b> {quantity8} <b className='minus' id='product8' onClick={handleValueMinus}>-</b></h3>
                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='product8' onClick={handleBuy}>Add</button></div>
                </div>
            </div>
            <div className='card'>
                <img src={product9}></img>
                <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <h2 style={{ paddingBottom: "10px" }}>{Mango}</h2>
                    <h3 className='stock'>Stock {"("}{stock9}{")"}</h3>
                    <h3 className='price'>Price ₹45 | Total ₹ {"("}{price9}{")"}</h3>
                    <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product9' onClick={handleValueAdd}>+</b> {quantity9} <b className='minus' id='product9' onClick={handleValueMinus}>-</b></h3>
                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart9' onClick={handleBuy}>Add</button></div>
                </div>
            </div>
            <div className='card'>
                <img src={product10}></img>
                <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <h2 style={{ paddingBottom: "10px" }}>{OrangeJuice}</h2>
                    <h3 className='stock'>Stock {"("}{stock10}{")"}</h3>
                    <h3 className='price'>Price ₹30 | Total ₹ {"("}{price10}{")"}</h3>
                    <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product10' onClick={handleValueAdd}>+</b> {quantity10} <b className='minus' id='product10' onClick={handleValueMinus}>-</b></h3>
                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart10' onClick={handleBuy}>Add</button></div>
                </div>
            </div>
            <div className='card'>
                <img src={product11}></img>
                <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <h2 style={{ paddingBottom: "10px" }}>{Pomegranate}</h2>
                    <h3 className='stock'>Stock {"("}{stock11}{")"}</h3>
                    <h3 className='price'>Price ₹35 | Total ₹ {"("}{price11}{")"}</h3>
                    <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product11' onClick={handleValueAdd}>+</b> {quantity11} <b className='minus' id='product11' onClick={handleValueMinus}>-</b></h3>
                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart11' onClick={handleBuy}>Add</button></div>
                </div>
            </div>
            <div className='card'>
                <img src={product12}></img>
                <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <h2 style={{ paddingBottom: "10px" }}>{RoseMilk}</h2>
                    <h3 className='stock'>Stock {"("}{stock12}{")"}</h3>
                    <h3 className='price'>Price ₹40 | Total ₹ {"("}{price12}{")"}</h3>
                    <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product12' onClick={handleValueAdd}>+</b> {quantity12} <b className='minus' id='product12' onClick={handleValueMinus}>-</b></h3>
                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart12' onClick={handleBuy}>Add</button></div>
                </div>
            </div>
            <div className='card'>
                <img src={product13}></img>
                <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <h2 style={{ paddingBottom: "10px" }}>{Strawberry}</h2>
                    <h3 className='stock'>Stock {"("}{stock13}{")"}</h3>
                    <h3 className='price'>Price ₹60 | Total ₹ {"("}{price13}{")"}</h3>
                    <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product13' onClick={handleValueAdd}>+</b> {quantity13} <b className='minus' id='product13' onClick={handleValueMinus}>-</b></h3>
                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart13' onClick={handleBuy}>Add</button></div>
                </div>
            </div>
            <div className='card'>
                <img src={product14}></img>
                <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <h2 style={{ paddingBottom: "10px" }}>{VegNoodles}</h2>
                    <h3 className='stock'>Stock {"("}{stock14}{")"}</h3>
                    <h3 className='price'>Price ₹70 | Total ₹ {"("}{price14}{")"}</h3>
                    <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product14' onClick={handleValueAdd}>+</b> {quantity14} <b className='minus' id='product14' onClick={handleValueMinus}>-</b></h3>
                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart14' onClick={handleBuy}>Add</button></div>
                </div>
            </div>
            <div className='card'>
                <img src={product15}></img>
                <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <h2 style={{ paddingBottom: "10px" }}>{VegRice}</h2>
                    <h3 className='stock'>Stock {"("}{stock15}{")"}</h3>
                    <h3 className='price'>Price ₹70 | Total ₹ {"("}{price15}{")"}</h3>
                    <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product15' onClick={handleValueAdd}>+</b> {quantity15} <b className='minus' id='product15' onClick={handleValueMinus}>-</b></h3>
                    <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart15' onClick={handleBuy}>Add</button></div>
                </div>
            </div>
        </div>
        <div>
            <h1 style={{
                display: "flex", justifyContent: "center", paddingTop: "3%", backgroundColor: "#f6f0f0",
                backgroundImage: "url(http://transparenttextures.com/patterns/diamond-upholstery.png)"
            }}>Cart</h1>
            <div id='cart' className='product'>
                <div className='cart'>
                    <img src={cart}></img>
                    <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                        <h2 style={{ paddingBottom: "10px" }}>Recipt</h2>
                        {quantity1 !== 0 && (<h3>{BadhamMilk} | Quantity - {quantity1}   |  ₹ = {price1}</h3>)}
                        {quantity2 !== 0 && (<h3>{Banana} | Quantity - {quantity2}   |  ₹ = {price2}</h3>)}
                        {quantity3 !== 0 && (<h3>{ChickenBiriyani} | Quantity - {quantity3}   |  ₹ = {price3}</h3>)}
                        {quantity4 !== 0 && (<h3>{ChickenNoodles}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity4}   |  ₹ = {price4}</h3>)}
                        {quantity5 !== 0 && (<h3>{ChickenRice}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Quantity - {quantity5}   |  ₹ = {price5}</h3>)}
                        {quantity6 !== 0 && (<h3>{EggBiriyani}&nbsp;| Quantity - {quantity6}   |  ₹ = {price6}</h3>)}
                        {quantity7 !== 0 && (<h3>{EggNoodles}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Quantity - {quantity7}   |  ₹ = {price7}</h3>)}
                        {quantity8 !== 0 && (<h3>{EggPuffs}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Quantity - {quantity8}   |  ₹ = {price8}</h3>)}
                        {quantity9 !== 0 && (<h3>{Mango}&nbsp;| Quantity - {quantity9}   |  ₹ = {price9}</h3>)}
                        {quantity10 !== 0 && (<h3>{OrangeJuice}&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity10} |  ₹ = {price10}</h3>)}
                        {quantity11 !== 0 && (<h3>{Pomegranate}&nbsp;&nbsp;&nbsp;| Quantity - {quantity11} |  ₹ = {price11}</h3>)}
                        {quantity12 !== 0 && (<h3>{RoseMilk}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Quantity - {quantity12} |  ₹ = {price12}</h3>)}
                        {quantity13 !== 0 && (<h3>{Strawberry}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity13} |  ₹ = {price13}</h3>)}
                        {quantity14 !== 0 && (<h3>{VegNoodles}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity14} |  ₹ = {price14}</h3>)}
                        {(quantity15 !== 0 && total !== 0) && (<h3>{VegRice}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity15} |  ₹ = {price15}</h3>)}
                        <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' onClick={Totalcount}>Calculate</button></div>
                        {totals === true && (<div style={{ display: "flex" }}>
                            <h2 style={{ paddingTop: "13%", paddingRight: "2%", color: "green", float: 'left' }}>Total Amount = {total}</h2>
                            <div style={{ paddingTop: "5%", float: "right", paddingLeft: '15%' }}><button className='bton' onClick={checkout} style={{ padding: "60%", fontSize: "20px" }}>Buy</button></div>
                        </div>)}

                    </div>
                </div></div></div>
    </div>)}{!user && (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "300px" }}>
          <div>
            <p>Please go to the login page.</p>
            <button onClick={handleClick}>Back to Login</button>
          </div>
        </div>
      )}</div>
    );
}

export default HotandCold;