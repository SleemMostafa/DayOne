import React from "react";
import {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import axioxInstance from "../axioxConfic/axioxConfic";

const Product = (props) => {
  //   console.log(props);
  const history = useHistory();
  const handelredirect = () => {
    // props.history.push("/about");//1
    console.log(history);
    history.push("/"); //2
  };


     const [Products,setProdect]=useState([
    //     {id:1,name:"one", age:20},
    //     {id:2,name:"two", age:22},
    //     {id:3,name:"four", age:24},
    //     {id:4,name:"five", age:25},
    //     {id:5,name:"six", age:26},
    //     {id:6,name:"seven", age:29},
    ]);
    //call Api
    useEffect(() => {
      axioxInstance
        .get("products")
        .then((res) => {
          console.log(res.data);
          setProdect(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    //post data
    // axios.post("https://fakestoreapi.com/products",{id:1,name:"one", age:20},{header_Token}).then().catch();
  return (
    <>
    <div>
    <h3>Products</h3>
        <div>
            {/* //get all data by loop */}
            { Products.map((pro,index)=>{
                return <ul>
                <Link className="btn" to={`/product-details/${pro.id}`} key={index}>
                    Id : {pro.id} <span>name : {pro.title}</span>
                     <span className="text-primary"> price : {pro.price}</span></Link>
                </ul>  
            })}
        </div>

</div>


      <div className="container">
        <button
          onClick={() => {
            handelredirect();
          }}
          type="button"
          class="btn btn-primary"
        >
          retdirect to home
        </button>
      </div>
    </>
  );
};

export default Product;
