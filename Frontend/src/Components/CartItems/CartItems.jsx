import React, { useContext,useState} from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const CartItems = () => {
  const { products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  const [email, setEmail] = useState(""); // State to hold user's email

  const handleCheckout = async () => {
    const options = {
      key: "rzp_test_trb7SopabtgZsI", // Replace with your actual Razorpay key ID
      amount: getTotalCartAmount() * 105, // Amount should be in paise (Indian currency)
      currency: "INR",
      name: "SHOPPER",
      description: "Clothes Bill",
      image: "data:image/png;base64,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", // URL of your company logo
      prefill: {
        email: email,
        contact:"0"
      },
      theme: {
        color: "#420A7E" // optional
      },
      handler: function (response) {
        // Handle success callback
        console.log(response);
        // You can update your frontend with payment details here if needed
      }
    };

    try {
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error in processing payment:", error);
    }
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e)=>{

        if(cartItems[e.id]>0)
        {
          return  <div>
                    <div className="cartitems-format">
                      <img className="cartitems-product-icon" src={e.image} alt="" />
                      <p cartitems-product-title>{e.name}</p>
                      <p>₹{e.new_price}</p>
                      <button className="cartitems-quatity">{cartItems[e.id]}</button>
                      <p>₹{e.new_price*cartItems[e.id]}</p>
                      <img onClick={()=>{removeFromCart(e.id)}} className="cartitems-remove-icon" src={cross_icon} alt="" />
                    </div>
                     <hr />
                  </div>;
        }
        return null;
      })}
      
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>GST (5%)</p>
              <p>
                ₹
                {(getTotalCartAmount() * 0.05).toFixed(2)}
              </p>
            </div>
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>                ₹
                {(
                  parseFloat(getTotalCartAmount()) +
                  parseFloat(getTotalCartAmount() * 0.05)
                ).toFixed(2)}</h3>
            </div>
          </div>
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
