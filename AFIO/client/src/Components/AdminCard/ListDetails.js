import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import Footer from '../layouts/Footer';

export default class ListDetails extends Component { //implemented class component

    constructor(props) {
        super(props);
    
        this.state = {
        loyaltycardadds: [],
        } //gonna one item
    }

     //get the all vouchers from database
     componentDidMount() {
        axios.get('/api/LoyaltyCard/display')
          .then(res => {
            const loyaltycardadds = res.data;
            this.setState({ loyaltycardadds });
          })
          .catch(function(error){
                console.log(error);
          })
    }

    //delete() method
    delete(id) {
        axios.post('/api/LoyaltyCard/delete/'+id) // meke e kalla ghpu thana ko
        .then(response => {
          alert("Deleted successfully");
          this.componentDidMount();
        });
    }
    
    

    render() {
        return(
            <div>
               <NavBar /> <br></br><br></br><br></br><br></br>
                <h3 className = 'header2'>
                    <center>
                        <b>CHECKOUT !</b>
                    </center>
                </h3>

                <table className="table table-striped">
                <thead className="table-active">
                    <tr>
                    <th>Type of card</th>
                    <th>Discount</th>
                    
                    </tr>
                </thead>

                { this.state.loyaltycardadds.map( loyaltycardadds =>
                  <tr>
                    <td>{ loyaltycardadds.cardType}</td>
                    <td>{loyaltycardadds.discount}</td>
                    <td><button className="btn btn-warning"><i className="fas fa-edit"></i><Link  to={"/updateLoyalty/"+loyaltycardadds._id }>&nbsp;Update</Link></button></td>
                    <td><button className="btn btn-danger" onClick={() =>this.delete(loyaltycardadds._id)}>Remove</button></td>

                  </tr>

                )}
                </table>


              <br/><br/>
                    <Footer/>
            </div>



        )
    }
}