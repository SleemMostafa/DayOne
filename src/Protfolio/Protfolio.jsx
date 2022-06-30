         
import React from "react";
import { useHistory } from "react-router-dom";

const Protfolio = (props) => {
  //   console.log(props);
  const history = useHistory();
  const handelredirect = () => {
    // props.history.push("/about");//1
    console.log(history);
    history.push("/"); //2
  };

  return (
    <>
     <div className="container m-5 p-3 text-center">
            <div className="row">

            <div class="card col-4">
                    <div class="card-body">
                        <h4 class="card-title">Title</h4>
                        <p class="card-text">Text</p>
                    </div>
                </div> 
                <div class="card col-4">
                    <div class="card-body">
                        <h4 class="card-title">Title</h4>
                        <p class="card-text">Text</p>
                    </div>
                </div>

                <div class="card col-4">
                    <div class="card-body">
                        <h4 class="card-title">Title</h4>
                        <p class="card-text">Text</p>
                    </div>
                </div>

                  <div class="card col-4">
                    <div class="card-body">
                        <h4 class="card-title">Title</h4>
                        <p class="card-text">Text</p>
                    </div>
                </div>

                <div class="card col-4">
                    <div class="card-body">
                        <h4 class="card-title">Title</h4>
                        <p class="card-text">Text</p>
                    </div>
                </div>



                <div class="card col-4">
                    <div class="card-body">
                        <h4 class="card-title">Title</h4>
                        <p class="card-text">Text</p>
                    </div>
                </div>

                
            </div>


        </div>
                <div className="container">
                 <button onClick={()=>{handelredirect()}} type="button" class="btn btn-primary">retdirect to home</button>
              </div>
    </>
  );
};

export default Protfolio;
