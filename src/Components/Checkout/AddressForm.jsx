import { Button, Grid, Typography } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./customTextField";
import SelectionFields from "./SelectionFiels";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const AddressForm = ({ next }) => {
  const methods = useForm();

  const [selectCountry, setSelectCountry] = useState("");
  const [selectSubdivision, setSelectSubdivision] = useState("");
  const [selectOption, setSelectOption] = useState("");

  return (
    <>
      <Typography varient="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({ ...data, selectCountry, selectSubdivision, selectOption })
          )}
        >
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First Name" />
            <FormInput required name="lastName" label="Last Name" />
            <FormInput required name="emai" label="Email" />
            <FormInput required name="Phone " label="Phone Number" />
            <FormInput required name="adress" label="Adress" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Zip / Postal code" />
            <SelectionFields
              selectCountry={selectCountry}
              setSelectCountry={setSelectCountry}
              selectSubdivision={selectSubdivision}
              setSelectSubdivision={setSelectSubdivision}
              selectOption={selectOption}
              setSelectOption={setSelectOption}
            />
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button component={Link} to="/cart" variant="outlined">
              Back to Cart
            </Button>
            <Button
              type="submit"
              varient="contained"
              style={{
                backgroundColor: "blue",
                fontWeight: "bold",
                color: "White",
              }}
            >
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
