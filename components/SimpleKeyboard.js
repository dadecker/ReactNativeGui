import React, { Component } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'; 
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import { red } from '@material-ui/core/colors';
import Alert from '@material-ui/lab/Alert';
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Collapse from '@material-ui/core/Collapse';


  const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #ffffff 40%, #d1d1cd 70%)',
    padding: 5,
    margin: 5,
    border: 0,
    width: "100%",
    height: "100%",
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(183, 237, 191, .3)',
    color: 'black',
    type: 'submit',
    fontSize: '1.25rem',
  });

  const EnterButton = styled(Button)({
    background: 'linear-gradient(45deg, #b1ff99 20%, #6dfc42 60%)',
    padding: 5,
    margin: 5,
    border: 0,
    width: "100%",
    height: "100%",
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(183, 237, 191, .3)',
    color: 'black',
    type: 'submit',
    fontSize: '1.25rem',
  });

  const ResetButton = styled(Button)({
    background: 'linear-gradient(45deg, #fac8ca 10%, #fc8187 70%)',
    padding: 5,
    margin: 5,
    border: 0,
    width: "100%",
    height: "100%",
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(183, 237, 191, .3)',
    color: 'black',
    type: 'submit',
    fontSize: '1.25rem',
  }); 

  const MyLabel = styled(FormLabel) ({
    color: 'red',
  });

 const MyTextBox = styled(TextField) ({
    backgroundColor: "#c6f3f5",
    width: "100%",
    color: "#fa0714",
    borderRadius: "8px",
    margin: 5,
    height: "100%",
    inputStyle: {fontSize: "3.6rem"},
  })


  class SimpleKeyboard extends Component
  {
   constructor(props){
      super(props);

      this.state = {
        number: "",
        opensuccess: false,
        warningTooFew: false,
        warningTooMany: false,
      }
   } 
   
   
   handleClick = (singleNumber) => {
     if(this.state.number.length < 16)
     {
          if(this.state.number.length == 2 || this.state.number.length == 8)
          {
          this.setState({number: this.state.number + singleNumber + " - ", opensuccess:false, warningTooFew:false, warningTooMany:false})
          }
          else
          {
          this.setState({number: this.state.number + singleNumber, opensuccess: false, warningTooFew: false, warningTooMany: false})
          }
     }
      else
      {
        this.setState({ opensuccess: false, warningTooFew: false, warningTooMany: true})
      }
   }

   handleReturnClick = () => {
        if(this.state.number.length < 16)
            this.setState({opensuccess: false, warningTooFew: true, warningTooMany: false})
        else if(this.state.number.length == 16)
            this.setState({number: "", opensuccess: true, warningTooFew: false, warningTooMany: false})
   }

   handleResetClick = () => {
     this.setState({number: "", opensuccess: false, warningTooFew: false, warningTooMany: false})
   }
        
    render()
    {
        return(
           <Grid>
               <div>
               <Collapse in={this.state.warningTooMany}>
                   <Alert severity="warning">
                       <AlertTitle>So Many Numbers!</AlertTitle>
                       Keep it to 10 buddy
                   </Alert>
               </Collapse>
                <Collapse in={this.state.warningTooFew}>
                    <Alert severity="warning">
                        <AlertTitle>Not Enough Numbers</AlertTitle>
                        Please enter a 10 digit number, which includes Area Code
                    </Alert>
                </Collapse>
                <Collapse in={this.state.opensuccess}>
                    <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        You have been added to the awesome list!
                    </Alert>
                </Collapse>
               <MyTextBox value={this.state.number}   label="Enter Your Number" variant="filled" />
               </div>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                    <MyButton  onClick={() => this.handleClick("1")}>1</MyButton>
                    </Grid>
                    <Grid item xs={4}>
                    <MyButton onClick={() => this.handleClick("2")}>2</MyButton>
                    </Grid>
                    <Grid item xs={4}>
                    <MyButton onClick={() => this.handleClick("3")}>3</MyButton>
                    </Grid>
                    <Grid item xs={4}>
                    <MyButton onClick={() => this.handleClick("4")}>4</MyButton>
                    </Grid>
                    <Grid item xs={4}>
                    <MyButton onClick={() => this.handleClick("5")}>5</MyButton>
                    </Grid>
                    <Grid item xs={4}>
                    <MyButton onClick={() => this.handleClick("6")}>6</MyButton>
                    </Grid>
                    <Grid item xs={4}>
                    <MyButton onClick={() => this.handleClick("7")}>7</MyButton>
                    </Grid>
                    <Grid item xs={4}>
                    <MyButton onClick={() => this.handleClick("8")}>8</MyButton>
                    </Grid>
                    <Grid item xs={4}>
                    <MyButton onClick={() => this.handleClick("9")}>9</MyButton>
                    </Grid>
                    <Grid item xs={4}>
                    <MyButton onClick={() => this.handleClick("0")}>0</MyButton>
                    </Grid>
                    <Grid item xs={4}>
                    <EnterButton onClick={() => this.handleReturnClick()}>Enter</EnterButton>
                    </Grid>
                    <Grid item xs={4}>
                    <ResetButton  onClick={() => this.handleResetClick()}>Reset</ResetButton>
                    </Grid>
                </Grid>
           </Grid>
        )
    }
        
  }

  export default SimpleKeyboard