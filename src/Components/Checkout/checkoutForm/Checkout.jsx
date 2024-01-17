import {
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Divider
} from "@mui/material";
import PaymentForm from "../PaymentForm";
import AddressForm from "../AddressForm";
import useStyle from "./styles";
import { useState } from "react";
import {Link} from 'react-router-dom'

const step = ["Shipping address", "Payment details"];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const classes = useStyle();

  const ConfirmForm = () => <>
      <div>
        <Typography variant="h5">Thank you for your purchase</Typography>
        <Divider className={classes.divider} />
        
      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
    </>;

  const nextStep = () => {
    setActiveStep((previous) => previous + 1);
  };
  const backStep = () => {
    setActiveStep((previous) => previous - 1);
  };

  const Next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm next={Next} />
    ) : (
      <PaymentForm back={backStep} data={shippingData} nextStep={nextStep} />
    );

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography varient="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {step.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === step.length ? <ConfirmForm /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
