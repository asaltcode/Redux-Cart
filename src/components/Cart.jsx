import React, {useState, useRef, useEffect } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

const Cart = ({title, description, thumbnail, price, stock}) => {
  
  let [count,setcount] = useState(1)

  let handleCount = ({type}) =>{
    if(count < stock && type === "INCREMENT"){
      console.log(stock)
     setcount(count + 1)
    }
    if(count > 1 && type === "DECREMENT"){
      setcount(count - 1)
    }

  }
  // description scroll effects
  const scrollContainerRef = useRef(null);
  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollTop = container.scrollHeight - container.clientHeight;
    }
  };
  return (
   <>
   <div className="col col-12 cart-container  col-md-8 mb-4">
        <div className="row  cart-content  dataCard">
            <div className="col col-sm-4  col-md-3 mt-3">
                <img src={thumbnail} alt={title} />
            </div>
            <div className="col  text-content" ref={scrollContainerRef} style={{ height: "150px" ,overflowY: "scroll" , }}>
                <div className="arrow Top">
                    <span onClick={scrollToTop}>
                        <FaAngleDown />
                    </span>
                </div>
                <h5 className="">{title}</h5>
                <p>{description}</p>
                <div className="arrow Down">
                    <span onClick={scrollToBottom}>
                        <FaAngleDown />
                    </span>
                </div>
            </div>
        </div>
    </div>

      <div className="col col-12 col-md-4">
        <div className="quantity m-2">
          <div className="quantity-box">
          <div><button onClick={()=> handleCount({type: "DECREMENT"})} className='btn btn-primary'><RiSubtractFill /></button>&nbsp;<span className="quantity-value btn btn-warning">{count}</span>&nbsp;<button onClick={()=> handleCount({type: "INCREMENT"})} className='btn btn-primary'><IoMdAdd /></button></div>
          </div>
          
          <p>$ {price}</p>
        </div>
        <div className="totalQuantity">
          <p className="fw-bold">Total Price :</p>
          <p>temp</p>
        </div>
        <div className="removeCart" >
          <p>Remove</p>
        </div>
      </div>
   </>
  )
}

export default Cart