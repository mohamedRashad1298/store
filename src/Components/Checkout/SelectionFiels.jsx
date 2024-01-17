import { InputLabel, Grid } from "@mui/material";
import { useState } from "react";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const SelectionFields = () => {

  const [selectCountry, setSelectCountry] = useState("");
  const [selectSubdivision, setSelectSubdivision] = useState("");
  const [selectOption, setSelectOption] = useState("");

  const handleCountryChange = (val) => {
    setSelectCountry(val);
    setSelectSubdivision(''); // Reset region when country changes
  };

  const handleRegionChange = (val) => {
    setSelectSubdivision(val);
  };

  // Dummy options for demonstration, replace with your actual data
  const dummyOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const countryWhitelist = ['US', 'CA', 'GB', 'IN','CH'];
  return (
    <>
      <Grid item xs={12} sm={6}>
        <InputLabel>Shipping Country</InputLabel>
        <CountryDropdown
          value={selectCountry}
          onChange={(val) => handleCountryChange(val)}
          style={{padding:"10px"}}
          whitelist={countryWhitelist}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputLabel>Shipping Subdivision</InputLabel>
        {selectCountry && (
          <RegionDropdown
            country={selectCountry}
            value={selectSubdivision}
            onChange={(val) => handleRegionChange(val)}
            style={{padding:"10px"}}
            defaultOptionLabel=""
          />
        )}
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputLabel>Shipping Option</InputLabel>
        <select
          value={selectOption}
          onChange={(e) => setSelectOption(e.target.value)}
          style={{padding:"10px"}}
        >
          <option value="">Select Option</option>
          {dummyOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Grid>
    </>
  );
}

export default SelectionFields;
