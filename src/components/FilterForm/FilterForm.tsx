import style from './FilterForm.module.scss'
import { FormControlLabel, Checkbox, Radio, RadioGroup, FormGroup } from "@mui/material";

interface FormProps {
  options: string[];
  selectedOption: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isCheckboxForm: boolean;
}

const FilterForm: React.FC<FormProps> = ({ options, selectedOption, onChange, isCheckboxForm}) => {
  const FormComponent = isCheckboxForm ? Checkbox : Radio;

  return (
    <FormGroup className={style.container_options}>
      <RadioGroup value={selectedOption} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={<FormComponent />}
            label={option}
          />
        ))}
      </RadioGroup>
    </FormGroup>
  );
};

export default FilterForm;
