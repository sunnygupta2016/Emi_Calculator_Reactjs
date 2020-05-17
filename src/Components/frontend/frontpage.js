/*import React from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import ResultBlock from '../Result/resultBlock';


const monthlyEmi = (loanAmount, interest, tenure) => {
  let rateOfInt = interest/100/12;
  let paymentTenure = tenure*12;
  let length = Math.pow(1+rateOfInt, paymentTenure);
  let monthlyPayable = Math.floor((loanAmount*length*rateOfInt)/(length-1));
  return monthlyPayable;
}

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: '',
      tenure: '',
      rateOfInt: '',
      monthlyEmiAmount: ''
    }
    this.calculateEmi = this.calculateEmi.bind(this);
    this.inputHandleChange = this.inputHandleChange.bind(this);
    
  }

  // On input change
  inputHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  // On calculate Btn click
  calculateEmi = (e) => {
    e.preventDefault();
    
     const loanAmount=this.state.loanAmount;
     const tenure=this.state.tenure;
     const rateOfInt=this.state.rateOfInt;
    

    this.setState({
      monthlyEmiAmount: monthlyEmi(loanAmount, rateOfInt, tenure),
    });
  }

  // Number formatting 
 // numberFormat = (num) => {
 //   return num.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
    // return num.replace(/['"]+/g, '');
//  }

  // Reset input fields
 

  render() {
    const loanAmount=this.state.loanAmount;
     const tenure=this.state.tenure;
     const monthlyEmiAmount=this.state.monthlyEmiAmount;
    

   let resultNumbers = {}
  //  let resultChartNumbers = {}

    const totalAmt = Math.floor(monthlyEmiAmount ? monthlyEmiAmount * (tenure*12) : 0);
    const interestAmt = Math.floor(totalAmt ? totalAmt - loanAmount : 0);

    // Formatting numbers and assiging to an object
    resultNumbers = Object.assign(resultNumbers, {
      loanAmt: loanAmount,
      formatMonthlyEmi:monthlyEmiAmount,
      formatTotalAmt: totalAmt,
      formatinterestAmt:interestAmt
    });
 

    return (
      <React.Fragment>
        <Container p={0} className={'emi-calci'} maxWidth="md">
          <h1 align={"center"} m={0}>Personal Loan EMI calci</h1>
          <Grid container spacing={1}>
            <Grid container xs={12} sm={4} md={4} spacing={4} item>
              <form noValidate autoComplete="off">
                <TextField 
                  id="standard-secondary"
                  label="Loan Amount" 
                  color="secondary"
                  name="loanAmount"
                  onChange={this.inputHandleChange}
                />
                <TextField
                  id="standard-secondary"
                  label="Tenure (Years)" 
                  color="secondary"
                  name="tenure"
                  onChange={this.inputHandleChange}
                />
                <TextField
                  id="standard-secondary"
                  label="Rate on Interest (%)" 
                  color="secondary"
                  name="rateOfInt"
                  onChange={this.inputHandleChange}
                />
                <div className={'operation-btns'}>
                  <Button variant="contained"
                    color="primary"
                    onClick={this.calculateEmi}
                  >
                    Calculate
                  </Button>
                  
                </div>
              </form>
            </Grid>
            <ResultBlock resultNumbers={resultNumbers} />
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}

export default LandingPage;*/

import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const monthlyEmi = (loanAmount, interest, tenure) => {
  let rateOfInt = interest/100/12;
  let paymentTenure = tenure*12;
  let length = Math.pow(1+rateOfInt, paymentTenure);
  let monthlyPayable = Math.floor((loanAmount*length*rateOfInt)/(length-1));
  return monthlyPayable;
}



class Frontpage extends React.Component{
   constructor(props) {
    super(props);
    this.state = {
      loanAmount: '',
      tenure: '',
      rateOfInt: '',
      monthlyEmiAmount: ''
    }
    this.calculateEmi = this.calculateEmi.bind(this);
    this.inputHandleChange = this.inputHandleChange.bind(this);
  }
  inputHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  calculateEmi = (e) => {
    e.preventDefault();
    
     const loanAmount=this.state.loanAmount;
     const tenure=this.state.tenure;
     const rateOfInt=this.state.rateOfInt;
     
    this.setState({
      monthlyEmiAmount: monthlyEmi(loanAmount, rateOfInt, tenure),
    });
  }

  render(){
    const loanAmount=this.state.loanAmount;
     const tenure=this.state.tenure;
     const monthlyEmiAmount=this.state.monthlyEmiAmount;
        let resultNumbers = {}


     const totalAmt = Math.floor(monthlyEmiAmount ? monthlyEmiAmount * (tenure*12) : 0);
    const interestAmt = Math.floor(totalAmt ? totalAmt - loanAmount : 0);

     resultNumbers = Object.assign(resultNumbers, {
      loanAmt: loanAmount,
      formatMonthlyEmi:monthlyEmiAmount,
      formatTotalAmt: totalAmt,
      formatinterestAmt:interestAmt
    })

    return(
      <React.Fragment>
      <h3>EMI Calculator </h3>
      <h6>Developed By Sunny Gupta </h6>
       <div class="container-fluid">
         <div class="row">
           <div class="col-sm-6">
               <form class="form">
                    
                    <TextField id="outlined-basic"label="Enter_LoanAmount" color="secondary" name="loanAmount" onChange={this.inputHandleChange}/><br/>
                    <TextField id="standard-secondary" label="Enter_Tenure(Years)" color="secondary" name="tenure" onChange={this.inputHandleChange} /><br/>
                     <TextField id="standard-secondary" label="Enter_RateofInt(%)" color="secondary" name="rateOfInt" onChange={this.inputHandleChange}/>
                  
                     <div class="operation-btns">
                  <Button variant="contained" color="primary" onClick={this.calculateEmi}> Calculate </Button>
                      </div>
               </form>  
            </div>
            <div class="col-sm-6">
              <div id="result">
                <h2><span class="badge badge-success">LoanAmount(Rs):{loanAmount}</span></h2>
                <h2><span class="badge badge-success">Monthly_Emi(Rs):{monthlyEmiAmount}</span></h2>
                <h2><span class="badge badge-success">Interest_Amount Payable(Rs):{interestAmt}</span></h2>
                <h2><span class="badge badge-success">Total_Amount_Payable(Rs):{totalAmt}</span></h2>
             </div>
            </div>
         </div>
       </div>
      </React.Fragment>
     )
  }
}
export default Frontpage;