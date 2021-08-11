import React from "react";
import './Registration.css';
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import TextField from '@material-ui/core/TextField';


const App = () => {
  
  return (
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      <h3>How to create Date Picker in ReactJS?</h3>
      <TextField
        id="date"
        label="Choose your birthdate"
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{shrink: true,}}
      />
    </div>
  );
}

export default App;