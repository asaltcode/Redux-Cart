import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import { API_URL } from "../App";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import {saveAllCart } from "./redux/CardSlicer";

const ProductCard = () => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.product)


  let [product, setProduct] = useState([]);
  const getData = async () => {
    try {
      let res = await axios.get(API_URL);
      
      if (res.status === 200) {
        dispatch(saveAllCart(res.data))
        setProduct(res.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container-fulid pb-5 mt-5  addToCart">
        <div className="container">
          <div className="row row-cols-2 row-cols-sm-1 row-cols-md-2">
            {
              products.map((e,i)=>{
                return <Cart  dispatch={dispatch} title={e.title} description={e.description} thumbnail={e.thumbnail} price={e.price} stock={e.stock} id={e.id} key={e.id} products={products} />
              })
            }
            </div>
        </div>
        <div className="container">
          <div className="total-amount">
            <div className="subTotal">
              <p className="text-light">SUBTOTSL :</p>
              <p>$.hoolTotal</p>
            </div>
            <div className="shipping">
              <p className="text-light">SHIPPING :</p>
              <p>FREE</p>
            </div>
            <hr />
            <div className="total">
              <p className="fw-bold">TOTAL : </p>
              <p>$.hoolTotal</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
