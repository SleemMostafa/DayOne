import React from "react";
import  Container  from 'react-bootstrap/Container';
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import  Nav  from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import  './Slide.css';
  class Slide extends React.Component{

    constructor()  // 1
    {
        super();
    }

    render()
    {
        console.log(this.props);
        return (
            <>
                <div className="container back bg-info">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className="text-center">Title Name</h1>
                            <span className="lead mx-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus velit amet eius optio incidunt dicta reiciendis obcaecati quos inventore placeat laborum 
                                facere doloribus commodi odit, voluptatum nobis similique, illum at?</span>
                                <br/>
                                <a name="" id="" class="btn btn-primary w-100 m-2" href="#" role="button">click</a>
                        </div>
                        <div className="col-md-8">
                            wqkjekqwhyekjqhj
                            qwlkjeklq
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row mt-3">
                    <div className="col-md-3">
                            <h3>About Me</h3>
                    </div> 
                    <div className="col-md-9 ">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde adipisci perferendis voluptates repellat velit sed facilis itaque nisi ullam dolorum aliquam,
                             recusandae consequatur repudiandae exercitationem at molestiae odio aut dicta!</span>

                        <button type="button" class="btn btn-outline-primary w-100 m-3">Click</button>
               
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
  

  export default Slide;
