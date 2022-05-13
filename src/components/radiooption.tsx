import {
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
  } from "@mui/material";
  import React from "react";
  
  type radiooptionProps = {
    options: string[];
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  
  const RadioOption = ({ options, value, handleChange }: radiooptionProps) => {
    return (
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
  };
  
  export default RadioOption;