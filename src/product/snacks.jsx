import "../styles.css"
import React, { useEffect, useState } from 'react';
import { database as auth, db } from '../account/config';
import { doc, getDoc } from 'firebase/firestore';
import product1 from "../images/Bakery-Biscuit.jpg";
import product2 from "../images/Bakery-Biscuit-2.jpg";
import product3 from "../images/Bakery-Biscuit-3.jpg";
import product4 from "../images/Burger.jpg";
import product5 from "../images/Candy.jpg";
import product6 from "../images/chicken-strips.jpg";
import product7 from "../images/chips-1.jpg";
import product8 from "../images/chips-2.jpg";
import product9 from "../images/chips-souce.jpg";
import product10 from "../images/choco-ticks.jpg";
import product11 from "../images/chips-juice.jpg";
import product12 from "../images/coffee.jpg";
import product13 from "../images/cup cake.jpg";
import product14 from "../images/donuts.jpg";
import product15 from "../images/donuts-2.jpg";
import product16 from "../images/dritos.jpg";
import product17 from "../images/dumblings.jpg";
import product18 from "../images/fries.jpg";
import product19 from "../images/oreo.jpg";
import product20 from "../images/popcorn.jpg";
import product21 from "../images/potato-chips.jpg";
import product22 from "../images/samosa.jpg";
import product23 from "../images/sanwitch.jpg";
import product24 from "../images/stick ice.jpg";
import product25 from "../images/tea.jpg";
import product26 from "../images/ulundhu vada.jpg";
import product27 from "../images/vadai.jpg";
import product28 from "../images/vadai-2.jpg";
import product29 from "../images/watermilon.jpg";
import cart from "../images/cart.jpg";
const Snacks = () => {

  const [user, setUser] = useState(null);
  const [val, setVal] = useState(false);

  let BakeryBiscuit1 = "Bakery Biscuit"
  const [price1, setPrice1] = useState(0)
  const [stock1, setStock1] = useState(10)
  const [quantity1, setQuantity1] = useState(0)

  let BakeryBiscuit2 = "Bakery Biscuit"
  const [price2, setPrice2] = useState(0)
  const [stock2, setStock2] = useState(10)
  const [quantity2, setQuantity2] = useState(0)

  let BakeryBiscuit3 = "Bakery Biscuit"
  const [price3, setPrice3] = useState(0)
  const [stock3, setStock3] = useState(10)
  const [quantity3, setQuantity3] = useState(0)

  let Burger = "Burger"
  const [price4, setPrice4] = useState(0)
  const [stock4, setStock4] = useState(10)
  const [quantity4, setQuantity4] = useState(0)

  let Candy = "Candy"
  const [price5, setPrice5] = useState(0)
  const [stock5, setStock5] = useState(10)
  const [quantity5, setQuantity5] = useState(0)

  let chickenstrips = "Chicken strips"
  const [price6, setPrice6] = useState(0)
  const [stock6, setStock6] = useState(10)
  const [quantity6, setQuantity6] = useState(0)

  let chips1 = "Chips"
  const [price7, setPrice7] = useState(0)
  const [stock7, setStock7] = useState(10)
  const [quantity7, setQuantity7] = useState(0)

  let chips2 = "Chips"
  const [price8, setPrice8] = useState(0)
  const [stock8, setStock8] = useState(10)
  const [quantity8, setQuantity8] = useState(0)

  let chipssouce = "Chips & souce"
  const [price9, setPrice9] = useState(0)
  const [stock9, setStock9] = useState(10)
  const [quantity9, setQuantity9] = useState(0)

  let chocosticks = "Choco sticks"
  const [price10, setPrice10] = useState(0)
  const [stock10, setStock10] = useState(10)
  const [quantity10, setQuantity10] = useState(0)

  let chipsjuice = "Chips & juice"
  const [price11, setPrice11] = useState(0)
  const [stock11, setStock11] = useState(10)
  const [quantity11, setQuantity11] = useState(0)

  let coffee = "Coffee"
  const [price12, setPrice12] = useState(0)
  const [stock12, setStock12] = useState(10)
  const [quantity12, setQuantity12] = useState(0)

  let cupcake = "Cupcake"
  const [price13, setPrice13] = useState(0)
  const [stock13, setStock13] = useState(10)
  const [quantity13, setQuantity13] = useState(0)

  let donuts = "Donuts"
  const [price14, setPrice14] = useState(0)
  const [stock14, setStock14] = useState(10)
  const [quantity14, setQuantity14] = useState(0)

  let donuts2 = "Donuts"
  const [price15, setPrice15] = useState(0)
  const [stock15, setStock15] = useState(10)
  const [quantity15, setQuantity15] = useState(0)

  let doritos = "Doritos"
  const [price16, setPrice16] = useState(0)
  const [stock16, setStock16] = useState(10)
  const [quantity16, setQuantity16] = useState(0)

  let dumblings = "Dumblings"
  const [price17, setPrice17] = useState(0)
  const [stock17, setStock17] = useState(10)
  const [quantity17, setQuantity17] = useState(0)

  let fries = "Fries"
  const [price18, setPrice18] = useState(0)
  const [stock18, setStock18] = useState(10)
  const [quantity18, setQuantity18] = useState(0)

  let oreo = "Oreo"
  const [price19, setPrice19] = useState(0)
  const [stock19, setStock19] = useState(10)
  const [quantity19, setQuantity19] = useState(0)

  let popcorn = "Popcorn"
  const [price20, setPrice20] = useState(0)
  const [stock20, setStock20] = useState(10)
  const [quantity20, setQuantity20] = useState(0)

  let potatochips = "Potato chips"
  const [price21, setPrice21] = useState(0)
  const [stock21, setStock21] = useState(10)
  const [quantity21, setQuantity21] = useState(0)

  let samosa = "Samosa"
  const [price22, setPrice22] = useState(0)
  const [stock22, setStock22] = useState(10)
  const [quantity22, setQuantity22] = useState(0)

  let sanwitch = "Sanwitch"
  const [price23, setPrice23] = useState(0)
  const [stock23, setStock23] = useState(10)
  const [quantity23, setQuantity23] = useState(0)

  let stickice = "Stick Ice"
  const [price24, setPrice24] = useState(0)
  const [stock24, setStock24] = useState(10)
  const [quantity24, setQuantity24] = useState(0)

  let tea = "Tea"
  const [price25, setPrice25] = useState(0)
  const [stock25, setStock25] = useState(10)
  const [quantity25, setQuantity25] = useState(0)

  let ulundhuvada = "Ulundhuvada"
  const [price26, setPrice26] = useState(0)
  const [stock26, setStock26] = useState(10)
  const [quantity26, setQuantity26] = useState(0)

  let vadai = "Vadai"
  const [price27, setPrice27] = useState(0)
  const [stock27, setStock27] = useState(10)
  const [quantity27, setQuantity27] = useState(0)

  let vadai2 = "Vadai"
  const [price28, setPrice28] = useState(0)
  const [stock28, setStock28] = useState(10)
  const [quantity28, setQuantity28] = useState(0)

  let watermilon = "Watermilon"
  const [price29, setPrice29] = useState(0)
  const [stock29, setStock29] = useState(10)
  const [quantity29, setQuantity29] = useState(0)

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
        let temp2 = price1 - 20;
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
        let temp2 = price2 - 30;
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
        let temp2 = price3 - 15;
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
        let temp2 = price4 - 80;
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
        let temp2 = price5 - 20;
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
        let temp2 = price6 - 155;
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
        let temp2 = price7 - 35;
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
        let temp2 = price8 - 15;
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
        let temp2 = price9 - 25;
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
        let temp2 = price10 - 60;
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
        let temp2 = price11 - 120;
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
        let temp2 = price12 - 18;
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
        let temp2 = price13 - 15;
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
        let temp2 = price14 - 25;
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
        let temp2 = price15 - 20;
        let temp3 = stock15 + 1;
        setQuantity15(temp1);
        setPrice15(temp2);
        setStock15(temp3); 4
      }
      else {
        alert("Limit Reached");
      }
    }
    else if (event.target.id === "product16") {
      if (stock16 >= 0 && stock16 < 10) {
        let temp1 = quantity16 - 1;
        let temp2 = price16 - 10;
        let temp3 = stock16 + 1;
        setQuantity16(temp1);
        setPrice16(temp2);
        setStock16(temp3);
      }
      else {
        alert("Limit Reached");
      }
    }
    else if (event.target.id === "product17") {
      if (stock17 >= 0 && stock17 < 10) {
        let temp1 = quantity17 - 1;
        let temp2 = price17 - 60;
        let temp3 = stock17 + 1;
        setQuantity17(temp1);
        setPrice17(temp2);
        setStock17(temp3);
      }
      else {
        alert("Limit Reached");
      }
    }
    else if (event.target.id === "product18") {
      if (stock18 >= 0 && stock18 < 10) {
        let temp1 = quantity18 - 1;
        let temp2 = price18 - 50;
        let temp3 = stock18 + 1;
        setQuantity18(temp1);
        setPrice18(temp2);
        setStock18(temp3);
      }
      else {
        alert("Limit Reached");
      }
    }
    else if (event.target.id === "product19") {
      if (stock19 >= 0 && stock19 < 10) {
        let temp1 = quantity19 - 1;
        let temp2 = price19 - 5;
        let temp3 = stock19 + 1;
        setQuantity19(temp1);
        setPrice19(temp2);
        setStock19(temp3);
      }
      else {
        alert("Limit Reached");
      }
    }
    else if (event.target.id === "product20") {
      if (stock20 >= 0 && stock20 < 10) {
        let temp1 = quantity20 - 1;
        let temp2 = price20 - 75;
        let temp3 = stock20 + 1;
        setQuantity20(temp1);
        setPrice20(temp2);
        setStock20(temp3);
      }
      else {
        alert("Limit Reached");
      }
    }
    else if (event.target.id === "product21") {
      if (stock21 >= 0 && stock21 < 10) {
        let temp1 = quantity21 - 1;
        let temp2 = price21 - 10;
        let temp3 = stock21 + 1;
        setQuantity21(temp1);
        setPrice21(temp2);
        setStock21(temp3);
      }
      else {
        alert("Limit Reached");
      }
    }
    else if (event.target.id === "product22") {
      if (stock22 >= 0 && stock22 < 10) {
        let temp1 = quantity22 - 1;
        let temp2 = price22 - 15;
        let temp3 = stock22 + 1;
        setQuantity22(temp1);
        setPrice22(temp2);
        setStock22(temp3);
      }
      else {
        alert("Limit Reached");
      }
    }
    else if (event.target.id === "product23") {
      if (stock23 >= 0 && stock23 < 10) {
        let temp1 = quantity23 - 1;
        let temp2 = price23 - 40;
        let temp3 = stock23 + 1;
        setQuantity23(temp1);
        setPrice23(temp2);
        setStock23(temp3);
      }
      else {
        alert("Limit Reached");
      }
    }
    else if (event.target.id === "product24") {
      if (stock24 >= 0 && stock24 < 10) {
        let temp1 = quantity24 - 1;
        let temp2 = price24 - 30;
        let temp3 = stock24 + 1;
        setQuantity24(temp1);
        setPrice24(temp2);
        setStock24(temp3);
      }
      else {
        alert("Limit Reached");
      }
    }
    else if (event.target.id === "product25") {
      if (stock25 >= 0 && stock25 < 10) {
        let temp1 = quantity25 - 1;
        let temp2 = price25 - 15
        let temp3 = stock25 + 1;
        setQuantity25(temp1);
        setPrice25(temp2);
        setStock25(temp3);
      }
      else {
        alert("Limit Reached");
      }
    }
    else if (event.target.id === "product26") {
      if (stock26 >= 0 && stock26 < 10) {
        let temp1 = quantity26 - 1;
        let temp2 = price1 - 8;
        let temp3 = stock26 + 1;
        setQuantity26(temp1);
        setPrice26(temp2);
        setStock26(temp3);
      }
      else {
        alert("Limit Reached");
      }
    }
    else if (event.target.id === "product27") {
      if (stock27 >= 0 && stock27 < 10) {
        let temp1 = quantity27 - 1;
        let temp2 = price27 - 8;
        let temp3 = stock27 + 1;
        setQuantity27(temp1);
        setPrice27(temp2);
        setStock27(temp3);
      }
      else {
        alert("Limit Reached");
      }
    }
    else if (event.target.id === "product28") {
      if (stock28 >= 0 && stock28 < 10) {
        let temp1 = quantity28 - 1;
        let temp2 = price28 - 8;
        let temp3 = stock28 + 1;
        setQuantity28(temp1);
        setPrice28(temp2);
        setStock28(temp3);
      }
      else {
        alert("Limit Reached");
      }
    }
    else if (event.target.id === "product29") {
      if (stock29 >= 0 && stock29 < 10) {
        let temp1 = quantity29 - 1;
        let temp2 = price29 - 20;
        let temp3 = stock29 + 1;
        setQuantity29(temp1);
        setPrice29(temp2);
        setStock29(temp3);
      }
      else {
        alert("Limit Reached");
      }
    }
  }
  function handleValueAdd(event) {
    setTotals(false);
    if (event.target.id === "product1") {
      if (stock1 > 0) {
        let temp1 = quantity1 + 1;
        let temp2 = price1 + 20;
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
        let temp2 = price2 + 30;
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
        let temp2 = price3 + 15;
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
        let temp2 = price4 + 80;
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
        let temp2 = price5 + 20;
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
        let temp2 = price6 + 155;
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
        let temp2 = price7 + 35;
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
        let temp2 = price8 + 15;
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
        let temp2 = price9 + 25;
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
        let temp2 = price10 + 60;
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
        let temp2 = price11 + 120;
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
        let temp2 = price12 + 18;
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
        let temp2 = price13 + 15;
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
        let temp2 = price14 + 25;
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
        let temp2 = price15 + 20;
        let temp3 = stock15 - 1;
        setQuantity15(temp1);
        setPrice15(temp2);
        setStock15(temp3); 4
      }
      else {
        alert("Out of Stock");
      }
    }
    else if (event.target.id === "product16") {
      if (stock16 > 0) {
        let temp1 = quantity16 + 1;
        let temp2 = price16 + 10;
        let temp3 = stock16 - 1;
        setQuantity16(temp1);
        setPrice16(temp2);
        setStock16(temp3);
      }
      else {
        alert("Out of Stock");
      }
    }
    else if (event.target.id === "product17") {
      if (stock17 > 0) {
        let temp1 = quantity17 + 1;
        let temp2 = price17 + 60;
        let temp3 = stock17 - 1;
        setQuantity17(temp1);
        setPrice17(temp2);
        setStock17(temp3);
      }
      else {
        alert("Out of Stock");
      }
    }
    else if (event.target.id === "product18") {
      if (stock18 > 0) {
        let temp1 = quantity18 + 1;
        let temp2 = price18 + 50;
        let temp3 = stock18 - 1;
        setQuantity18(temp1);
        setPrice18(temp2);
        setStock18(temp3);
      }
      else {
        alert("Out of Stock");
      }
    }
    else if (event.target.id === "product19") {
      if (stock19 > 0) {
        let temp1 = quantity19 + 1;
        let temp2 = price19 + 5;
        let temp3 = stock19 - 1;
        setQuantity19(temp1);
        setPrice19(temp2);
        setStock19(temp3);
      }
      else {
        alert("Out of Stock");
      }
    }
    else if (event.target.id === "product20") {
      if (stock20 > 0) {
        let temp1 = quantity20 + 1;
        let temp2 = price20 + 75;
        let temp3 = stock20 - 1;
        setQuantity20(temp1);
        setPrice20(temp2);
        setStock20(temp3);
      }
      else {
        alert("Out of Stock");
      }
    }
    else if (event.target.id === "product21") {
      if (stock21 > 0) {
        let temp1 = quantity21 + 1;
        let temp2 = price21 + 10;
        let temp3 = stock21 - 1;
        setQuantity21(temp1);
        setPrice21(temp2);
        setStock21(temp3);
      }
      else {
        alert("Out of Stock");
      }
    }
    else if (event.target.id === "product22") {
      if (stock22 > 0) {
        let temp1 = quantity22 + 1;
        let temp2 = price22 + 15;
        let temp3 = stock22 - 1;
        setQuantity22(temp1);
        setPrice22(temp2);
        setStock22(temp3);
      }
      else {
        alert("Out of Stock");
      }
    }
    else if (event.target.id === "product23") {
      if (stock23 > 0) {
        let temp1 = quantity23 + 1;
        let temp2 = price23 + 40;
        let temp3 = stock23 - 1;
        setQuantity23(temp1);
        setPrice23(temp2);
        setStock23(temp3);
      }
      else {
        alert("Out of Stock");
      }
    }
    else if (event.target.id === "product24") {
      if (stock24 > 0) {
        let temp1 = quantity24 + 1;
        let temp2 = price24 + 30;
        let temp3 = stock24 - 1;
        setQuantity24(temp1);
        setPrice24(temp2);
        setStock24(temp3);
      }
      else {
        alert("Out of Stock");
      }
    }
    else if (event.target.id === "product25") {
      if (stock25 > 0) {
        let temp1 = quantity25 + 1;
        let temp2 = price25 + 15
        let temp3 = stock25 - 1;
        setQuantity25(temp1);
        setPrice25(temp2);
        setStock25(temp3);
      }
      else {
        alert("Out of Stock");
      }
    }
    else if (event.target.id === "product26") {
      if (stock26 > 0) {
        let temp1 = quantity26 + 1;
        let temp2 = price1 + 8;
        let temp3 = stock26 - 1;
        setQuantity26(temp1);
        setPrice26(temp2);
        setStock26(temp3);
      }
      else {
        alert("Out of Stock");
      }
    }
    else if (event.target.id === "product27") {
      if (stock27 > 0) {
        let temp1 = quantity27 + 1;
        let temp2 = price27 + 8;
        let temp3 = stock27 - 1;
        setQuantity27(temp1);
        setPrice27(temp2);
        setStock27(temp3);
      }
      else {
        alert("Out of Stock");
      }
    }
    else if (event.target.id === "product28") {
      if (stock28 > 0) {
        let temp1 = quantity28 + 1;
        let temp2 = price28 + 8;
        let temp3 = stock28 - 1;
        setQuantity28(temp1);
        setPrice28(temp2);
        setStock28(temp3);
      }
      else {
        alert("Out of Stock");
      }
    }
    else if (event.target.id === "product29") {
      if (stock29 > 0) {
        let temp1 = quantity29 + 1;
        let temp2 = price29 + 20;
        let temp3 = stock29 - 1;
        setQuantity29(temp1);
        setPrice29(temp2);
        setStock29(temp3);
      }
      else {
        alert("Out of Stock");
      }
    }
  }
  function handleBuy() {
    let temp = price1 + price2 + price3 + price4 + price5 + price6 + price7 + price8 + price9 + price10 + price11 + price12 + price13 + price14 + price15 + price16 + price17 + price18 + price19 + price20 + price21 + price22 + price23 + price24 + price25 + price26 + price27 + price28 + price29;
    settotal(temp);
  }
  function checkout() {
    alert("Update Comming Soon")
  }
  function Totalcount() {
    handleBuy();
    setTotals(true);
  }
  return (<div>{ user && (
    <div>
      <h1 style={{
        display: "flex", color:"blue",justifyContent: "center", paddingTop: "3%", backgroundColor: "#f6f0f0",
        backgroundImage: "url(http://transparenttextures.com/patterns/diamond-upholstery.png)"
    }}>Welcome {user.username}</h1>
      <h1 style={{
      display: "flex", justifyContent: "center", paddingTop: "3%", backgroundColor: "#f6f0f0",
      backgroundImage: "url(http://transparenttextures.com/patterns/diamond-upholstery.png)"
    }}>Snacks</h1>
      <div id='product' className='product'>
        <div className='card'>
          <img src={product1}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{BakeryBiscuit1}</h2>
            <h3 className='stock'>Stock {"("}{stock1}{")"}</h3>
            <h3 className='price'>Price ₹20 | Total ₹ {"("}{price1}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity <b className='add' id='product1' onClick={handleValueAdd}>+</b> {quantity1} <b className='minus' id='product1' onClick={handleValueMinus} >-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart1' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product2}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{BakeryBiscuit2}</h2>
            <h3 className='stock'>Stock {"("}{stock2}{")"}</h3>
            <h3 className='price'>Price ₹30 | Total ₹ {"("}{price2}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product2' onClick={handleValueAdd}>+</b> {quantity2} <b className='minus' id='product2' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart2' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product3}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{BakeryBiscuit3}</h2>
            <h3 className='stock'>Stock {"("}{stock3}{")"}</h3>
            <h3 className='price'>Price ₹15 | Total ₹ {"("}{price3}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product3' onClick={handleValueAdd}>+</b> {quantity3} <b className='minus' id='product3' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart3' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product4}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{Burger}</h2>
            <h3 className='stock'>Stock {"("}{stock4}{")"}</h3>
            <h3 className='price'>Price ₹80 | Total ₹ {"("}{price4}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product4' onClick={handleValueAdd}>+</b> {quantity4} <b className='minus' id='product4' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart4' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product5}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{Candy}</h2>
            <h3 className='stock'>Stock {"("}{stock5}{")"}</h3>
            <h3 className='price'>Price ₹20 | Total ₹ {"("}{price5}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product5' onClick={handleValueAdd}>+</b> {quantity5} <b className='minus' id='product5' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart5' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product6}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{chickenstrips}</h2>
            <h3 className='stock'>Stock {"("}{stock6}{")"}</h3>
            <h3 className='price'>Price ₹150 | Total ₹ {"("}{price6}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product6' onClick={handleValueAdd}>+</b> {quantity6} <b className='minus' id='product6' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart6' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product7}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{chips1}</h2>
            <h3 className='stock'>Stock {"("}{stock7}{")"}</h3>
            <h3 className='price'>Price ₹35 | Total ₹ {"("}{price7}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product7' onClick={handleValueAdd}>+</b> {quantity7} <b className='minus' id='product7' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart7' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product8}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{chips2}</h2>
            <h3 className='stock'>Stock {"("}{stock8}{")"}</h3>
            <h3 className='price'>Price ₹15 | Total ₹ {"("}{price8}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product8' onClick={handleValueAdd}>+</b> {quantity8} <b className='minus' id='product8' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='product8' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product9}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{chipssouce}</h2>
            <h3 className='stock'>Stock {"("}{stock9}{")"}</h3>
            <h3 className='price'>Price ₹25 | Total ₹ {"("}{price9}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product9' onClick={handleValueAdd}>+</b> {quantity9} <b className='minus' id='product9' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart9' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product10}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{chocosticks}</h2>
            <h3 className='stock'>Stock {"("}{stock10}{")"}</h3>
            <h3 className='price'>Price ₹60 | Total ₹ {"("}{price10}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product10' onClick={handleValueAdd}>+</b> {quantity10} <b className='minus' id='product10' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart10' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product11}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{chipsjuice}</h2>
            <h3 className='stock'>Stock {"("}{stock11}{")"}</h3>
            <h3 className='price'>Price ₹120 | Total ₹ {"("}{price11}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product11' onClick={handleValueAdd}>+</b> {quantity11} <b className='minus' id='product11' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart11' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product12}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{coffee}</h2>
            <h3 className='stock'>Stock {"("}{stock12}{")"}</h3>
            <h3 className='price'>Price ₹18 | Total ₹ {"("}{price12}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product12' onClick={handleValueAdd}>+</b> {quantity12} <b className='minus' id='product12' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart12' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product13}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{cupcake}</h2>
            <h3 className='stock'>Stock {"("}{stock13}{")"}</h3>
            <h3 className='price'>Price ₹15 | Total ₹ {"("}{price13}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product13' onClick={handleValueAdd}>+</b> {quantity13} <b className='minus' id='product13' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart13' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product14}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{donuts}</h2>
            <h3 className='stock'>Stock {"("}{stock14}{")"}</h3>
            <h3 className='price'>Price ₹25 | Total ₹ {"("}{price14}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product14' onClick={handleValueAdd}>+</b> {quantity14} <b className='minus' id='product14' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart14' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product15}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{donuts2}</h2>
            <h3 className='stock'>Stock {"("}{stock15}{")"}</h3>
            <h3 className='price'>Price ₹20 | Total ₹ {"("}{price15}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product15' onClick={handleValueAdd}>+</b> {quantity15} <b className='minus' id='product15' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart15' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product16}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{doritos}</h2>
            <h3 className='stock'>Stock {"("}{stock16}{")"}</h3>
            <h3 className='price'>Price ₹10 | Total ₹ {"("}{price16}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product16' onClick={handleValueAdd}>+</b> {quantity16} <b className='minus' id='product16' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart16' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product17}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{dumblings}</h2>
            <h3 className='stock'>Stock {"("}{stock17}{")"}</h3>
            <h3 className='price'>Price ₹60 | Total ₹ {"("}{price17}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product17' onClick={handleValueAdd}>+</b> {quantity17} <b className='minus' id='product17' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart17' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product18}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{fries}</h2>
            <h3 className='stock'>Stock {"("}{stock18}{")"}</h3>
            <h3 className='price'>Price ₹50 | Total ₹ {"("}{price18}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product18' onClick={handleValueAdd}>+</b> {quantity18} <b className='minus' id='product18' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart18' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product19}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{oreo}</h2>
            <h3 className='stock'>Stock {"("}{stock19}{")"}</h3>
            <h3 className='price'>Price ₹5 | Total ₹ {"("}{price19}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product19' onClick={handleValueAdd}>+</b> {quantity19} <b className='minus' id='product19' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart19' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product20}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{popcorn}</h2>
            <h3 className='stock'>Stock {"("}{stock20}{")"}</h3>
            <h3 className='price'>Price ₹75 | Total ₹ {"("}{price20}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product20' onClick={handleValueAdd}>+</b> {quantity20} <b className='minus' id='product20' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart20' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product21}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{potatochips}</h2>
            <h3 className='stock'>Stock {"("}{stock21}{")"}</h3>
            <h3 className='price'>Price ₹10 | Total ₹ {"("}{price21}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product21' onClick={handleValueAdd}>+</b> {quantity21} <b className='minus' id='product21' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart21' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product22}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{samosa}</h2>
            <h3 className='stock'>Stock {"("}{stock22}{")"}</h3>
            <h3 className='price'>Price ₹15 | Total ₹ {"("}{price22}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product22' onClick={handleValueAdd}>+</b> {quantity22} <b className='minus' id='product22' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart22' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product23}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{sanwitch}</h2>
            <h3 className='stock'>Stock {"("}{stock23}{")"}</h3>
            <h3 className='price'>Price ₹40 | Total ₹ {"("}{price23}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product23' onClick={handleValueAdd}>+</b> {quantity23} <b className='minus' id='product23' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart23' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product24}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{stickice}</h2>
            <h3 className='stock'>Stock {"("}{stock24}{")"}</h3>
            <h3 className='price'>Price ₹30 | Total ₹ {"("}{price24}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product24' onClick={handleValueAdd}>+</b> {quantity24} <b className='minus' id='product24' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart24' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product25}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{tea}</h2>
            <h3 className='stock'>Stock {"("}{stock25}{")"}</h3>
            <h3 className='price'>Price ₹15 | Total ₹ {"("}{price25}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product25' onClick={handleValueAdd}>+</b> {quantity25} <b className='minus' id='product25' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart25' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product26}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{ulundhuvada}</h2>
            <h3 className='stock'>Stock {"("}{stock26}{")"}</h3>
            <h3 className='price'>Price ₹8 | Total ₹ {"("}{price26}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product26' onClick={handleValueAdd}>+</b> {quantity26} <b className='minus' id='product26' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart26' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product27}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{vadai}</h2>
            <h3 className='stock'>Stock {"("}{stock27}{")"}</h3>
            <h3 className='price'>Price ₹8 | Total ₹ {"("}{price27}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product27' onClick={handleValueAdd}>+</b> {quantity27} <b className='minus' id='product27' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart27' onClick={handleBuy}>Add</button></div>
          </div>
        </div>
        <div className='card'>
          <img src={product29}></img>
          <div className='pricing' style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <h2 style={{ paddingBottom: "10px" }}>{watermilon}</h2>
            <h3 className='stock'>Stock {"("}{stock29}{")"}</h3>
            <h3 className='price'>Price ₹20 | Total ₹ {"("}{price29}{")"}</h3>
            <h3 style={{ paddingBottom: "5px", color: "white" }}>Quantity  <b className='add' id='product29' onClick={handleValueAdd}>+</b> {quantity29} <b className='minus' id='product29' onClick={handleValueMinus}>-</b></h3>
            <div style={{ display: 'flex', justifyContent: "center" }}><button className='bton' id='cart29' onClick={handleBuy}>Add</button></div>
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
              {quantity1 !== 0 && (<h3>{BakeryBiscuit1} | Quantity - {quantity1}   |  ₹ = {price1}</h3>)}
              {quantity2 !== 0 && (<h3>{BakeryBiscuit2} | Quantity - {quantity2}   |  ₹ = {price2}</h3>)}
              {quantity3 !== 0 && (<h3>{BakeryBiscuit3} | Quantity - {quantity3}   |  ₹ = {price3}</h3>)}
              {quantity4 !== 0 && (<h3>{Burger}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity4}   |  ₹ = {price4}</h3>)}
              {quantity5 !== 0 && (<h3>{Candy}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Quantity - {quantity5}   |  ₹ = {price5}</h3>)}
              {quantity6 !== 0 && (<h3>{chickenstrips}&nbsp;| Quantity - {quantity6}   |  ₹ = {price6}</h3>)}
              {quantity7 !== 0 && (<h3>{chips1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Quantity - {quantity7}   |  ₹ = {price7}</h3>)}
              {quantity8 !== 0 && (<h3>{chips2}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Quantity - {quantity8}   |  ₹ = {price8}</h3>)}
              {quantity9 !== 0 && (<h3>{chipssouce}&nbsp;| Quantity - {quantity9}   |  ₹ = {price9}</h3>)}
              {quantity10 !== 0 && (<h3>{chocosticks}&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity10} |  ₹ = {price10}</h3>)}
              {quantity11 !== 0 && (<h3>{chipsjuice}&nbsp;&nbsp;&nbsp;| Quantity - {quantity11} |  ₹ = {price11}</h3>)}
              {quantity12 !== 0 && (<h3>{coffee}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Quantity - {quantity12} |  ₹ = {price12}</h3>)}
              {quantity13 !== 0 && (<h3>{cupcake}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity13} |  ₹ = {price13}</h3>)}
              {quantity14 !== 0 && (<h3>{donuts}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity14} |  ₹ = {price14}</h3>)}
              {quantity15 !== 0 && (<h3>{donuts2}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity15} |  ₹ = {price15}</h3>)}
              {quantity16 !== 0 && (<h3>{doritos}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity16} |  ₹ = {price16}</h3>)}
              {quantity17 !== 0 && (<h3>{dumblings}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity17} |  ₹ = {price17}</h3>)}
              {quantity18 !== 0 && (<h3>{fries}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity18} |  ₹ = {price18}</h3>)}
              {quantity19 !== 0 && (<h3>{oreo}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity19} |  ₹ = {price19}</h3>)}
              {quantity20 !== 0 && (<h3>{popcorn}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity20} |  ₹ = {price20}</h3>)}
              {quantity21 !== 0 && (<h3>{potatochips}&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity21} |  ₹ = {price21}</h3>)}
              {quantity22 !== 0 && (<h3>{samosa}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity22} |  ₹ = {price22}</h3>)}
              {quantity23 !== 0 && (<h3>{sanwitch}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity23} |  ₹ = {price23}</h3>)}
              {quantity24 !== 0 && (<h3>{stickice}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity24} |  ₹ = {price24}</h3>)}
              {quantity25 !== 0 && (<h3>{tea}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity25} |  ₹ = {price25}</h3>)}
              {quantity26 !== 0 && (<h3>{ulundhuvada}&nbsp;&nbsp;&nbsp;| Quantity - {quantity26} |  ₹ = {price26}</h3>)}
              {quantity27 !== 0 && (<h3>{vadai}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity27} |  ₹ = {price27}</h3>)}
              {quantity29 !== 0 && (<h3>{watermilon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Quantity - {quantity29} |  ₹ = {price29}</h3>)}
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

export default Snacks;