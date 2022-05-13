import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

type checkboxoptionsProps = {
  options: any;
  handleChange: any;
};

const CheckBoxOption = ({ options, handleChange }: checkboxoptionsProps) => {
  return (
    <FormGroup>
      {options.map((option: any) => (
        <FormControlLabel
          key={option.option}
          name={option.option}
          onChange={handleChange}
          control={<Checkbox checked={option.value || false} />}
          label={option.option}
        />
      ))}
    </FormGroup>
  );
};

export default CheckBoxOption;