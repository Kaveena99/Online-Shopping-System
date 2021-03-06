import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import image from '../../Images/product.png';

class Products extends Component{


  constructor(props) {
    super(props)
           this.state = {
            products: [],
          }
        }


      //retrieve data
      componentDidMount() {
        axios.get('/api/Cart/displayProduct/'+this.props.match.params.category)
        .then(res => {
            const products = res.data;
            this.setState({ products });
          })
      }
/*edit*/ 
render(){
  return(

    <div>
        <Navbar />

    <br></br>

    <div class="float-md-right">

        <Link to={"/cart/"+this.props.match.params.uid}> &nbsp; <i class="fas fa-cart-plus fa-2x"  style={{color:"black"}}>
        </i></Link>
    </div>
   
    
    <div>
    <center><div><h1 className="display-4" style={{alignItems:"center"}}>{this.props.match.params.category}</h1></div></center>
    

      { this.state.products.map(product =>
      
      // <div className="row">
      // <div className="col-10 mx-auto col-md-6 my-3">
      //    <img src= {image}/>
      <div style={{display:"inline-block",padding:"20px"}} >
      <div><img src={image}/>    
      <div>

      <div >
        <h2>{product.productName}</h2>
        <h6 className="text-blue"><strong>{product.price}.00</strong></h6>
        <h6 className="text-title text-uppercase text-muted mt-3 mb-2">Category: {product.categoryType}</h6>
        <p className="text-muted lead"><strong>Discount:{product.discount}<span>%</span></strong></p>
        <button class="btn btn-outline-success"><Link to={'/detail/'+product._id+'/'+this.props.match.params.uid}>More Details</Link></button>
      </div>
    
      </div>
      </div>
      </div>
      )}
        
   </div>

   <Footer />
   </div>
   
  )

  
}
}



export default Products