import React from "react";
import  Container  from 'react-bootstrap/Container';
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import  Nav  from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import  './Skills.css';
import Link from '../link/link';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useHistory } from "react-router-dom";

  class Skills extends React.Component{

    constructor()  // 1
    {
        super();
    }
     
    render()
    {
        console.log(this.props);

        return (
            <>
                <div className="back ">
                    <h2>Skills</h2>

                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ut explicabo commodi ipsam aut voluptas tempora, sequi dolores nesciunt. 
                        Asperiores molestiae aspernatur hic deserunt magni beatae provident quaerat at fugiat!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ut explicabo commodi ipsam aut voluptas tempora, sequi dolores nesciunt. 
                        Asperiores molestiae aspernatur hic deserunt magni beatae provident quaerat at fugiat!
                        
                    </span>

                    <div className=" container mx-5 mt-3">
                        <div className="row mx-5">
                                    <div className="col-md-3">
                                            <h2 className="text-light">More Skills</h2>
                                            <ul class="list-group">
                                                <li class="list-group-item active">Active item</li>
                                                <li class="list-group-item">Item</li>
                                                <li class="list-group-item disabled">Disabled item</li>
                                            </ul>
                                    </div>
                                    <div className="col-md-9">

                                         <ProgressBar now={60} />
 
                                          <Link url="#Home" name="Home"  className="m-2"/>
                                         
                                          <Link url="#Contact" name="Contact" className="m-2"/>

                                          <Link url="#about" name="about" className="m-2"/>

                                    </div>
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

  export default Skills;
