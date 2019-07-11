import React, { Component } from 'react';
import {connect} from 'react-redux';
class UserContainer extends Component {
   render(){
       return(
           <div>
               <p>welcome to world</p>
           </div>
       )
   }
}

export default connect()(UserContainer);