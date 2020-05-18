
import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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
       <Container p={0} className={'emi-calci'} maxWidth="md">
          <h1 align={"center"} m={0}>Emi_Calculator  (Developed By Sunny Gupta)</h1>
          <Grid container spacing={1}>
            <Grid container xs={12} sm={4} md={4} spacing={4} item>
               <form class="form">
                    
                    <TextField id="outlined-basic"label="Enter_LoanAmount" color="secondary" name="loanAmount" onChange={this.inputHandleChange}/><br/>
                    <TextField id="standard-secondary" label="Enter_Tenure(Years)" color="secondary" name="tenure" onChange={this.inputHandleChange} /><br/>
                     <TextField id="standard-secondary" label="Enter_RateofInt(%)" color="secondary" name="rateOfInt" onChange={this.inputHandleChange}/>
                  
                     <div class="operation-btns">
                  <Button variant="contained" color="primary" onClick={this.calculateEmi}> Calculate </Button>
                      </div>
               </form> 
               </Grid>
               </Grid>
               </Container> 
            
            <div class="flex">
              
                <h4><span>LoanAmount(Rs):{loanAmount}</span></h4>
                <h4><span>Monthly_Emi(Rs):{monthlyEmiAmount}</span></h4>
                <h4><span>Interest_Amount Payable(Rs):{interestAmt}</span></h4>
                <h4><span>Total_Amount_Payable(Rs):{totalAmt}</span></h4>
             
            </div>
        
       
      </React.Fragment>
     )
  }
}
export default Frontpage;