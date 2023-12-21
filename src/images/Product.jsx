import Biscuit from "./Bakery-biscuit-2.jpg"
import "../styles.css"
const Product = (props) => {
    return ( 
            <div id='Product' className='product'>
        <div className='card'>
            <img src={Biscuit}></img>
            <div className='pricing' style={{paddingLeft:"30px", paddingRight:"30px"}}>
              <h2 style={{paddingBottom:"10px"}}>Biscuit</h2>
              <h3>Stock</h3>
              <h3>Price</h3>
              <h3 style={{paddingBottom:"5px"}}>Quantity</h3>
              <div style={{display:'flex', justifyContent:"center"}}><button>Buy</button></div>
            </div>
        </div>
        </div>
     );
}
 
export default Product;