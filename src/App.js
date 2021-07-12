import React, {Component} from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/pages/Home'
import './app.css'
import CreateIncome from './components/create_income/Income';
import CreateExpenditure from './components/create_expenditure/Expenditure';
import Incomedetails from './components/details_income/Incomedetails'
import Expendituredetails from './components/details_expenditure/Expendituredetails'
import Transactiondetails from './components/transaction_details/Transactiondetails'
import Signup from './components/auth/signup/Signup'
import Signin from './components/auth/signin/Signin'

function App(props) {
    const {auth} = props;
    // console.log(auth);
    return (
  
      <BrowserRouter> 
      
      {auth.uid ? 
        <div className="container">
          <Sidebar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>  
              <Route path="/income">
                <CreateIncome />
              </Route>           
              <Route path="/expenditure">
                <CreateExpenditure />
              </Route>          
              <Route path="/incomedetails">
                <Incomedetails />
              </Route>          
              <Route path="/expendituredetails">
                <Expendituredetails />
              </Route>            
              <Route path="/transactiondetails">
                <Transactiondetails />
              </Route>
            </Switch>
        </div> : <Signup />}  
             
      </BrowserRouter>
    );
  
}
const mapStateToProps=(state)=>{
  return{
      auth:state.firebase.auth
  }
}
export default connect(mapStateToProps)(App);
