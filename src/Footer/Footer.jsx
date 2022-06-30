import React from "react";
import  Container  from 'react-bootstrap/Container';
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import  Nav  from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

  class Footer extends React.Component{

    constructor()  // 1
    {
        super();
    }

    render()
    {
        console.log(this.props);
        return (
            <>
        
        <div className="container bg-dark p-3">
                      <div className="row">
                            <div className="col-4 text-light">
                                    <h2>Get In Touch</h2>
                                    <p> @ Gmail_tset@.com</p>
                                    <p> Tel 010000000000</p>
                            </div> 
                            <div className="col-4">
                                     <button type="button" class="btn btn-outline-light">Contact We</button>
                            </div>
                            <div className="col-4 text-light">
                                   <div className="row">
                                   <p className="col"><i class="fab fa-facebook-f"></i> FaceBook</p>
                                    <p className="col"> LinkedIn</p>
                                   </div>


                            <h4>Copy Right @2022</h4>

                            </div>
                      </div>
                  </div>
            </>
            )
            
    }
      // 3 use By Api
      componentDidMount()
      { 
          return(
            <>
       
          </>
          );
      }
  
  
      // 4 Dispose As like C# when dead Compnent
      componentWillUnmount()
      {
  
      }
  
  } 
  

  export default Footer;
