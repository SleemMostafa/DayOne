import Header from './Navbar/Header';
import Slide from './Slide/Slide';
import Skills from './Skills/Skills';
import Protfolio from './Protfolio/Protfolio';
import Footer from './Footer/Footer';
import AddUsre from './From/From';
import Product from './Product/Product';
import ProductDetails from './ProductDetails/ProductDetails';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
         <div className="container">
                <Router>
                <Header/>
                    <Switch>
                        <Route path="/" exact component={Slide} />
                        <Route path="/Skills" exact component={Skills}/> 
                        <Route path="/Protfolio" exact component={Protfolio}/>
                        <Route path="/Product" exact component={Product}/>
                        <Route path="/AddUsre" exact component={AddUsre}/>
                        <Route path="/ProductDetails/:id" exact component={ProductDetails}/>
                    </Switch>
                </Router>
          </div>
   </>
  );
}

export default App;
