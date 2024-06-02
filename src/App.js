import "./App.css";
// import FormControl from "@mui/joy/FormControl";
// import FormLabel from "@mui/joy/FormLabel";
// import FormHelperText from "@mui/joy/FormHelperText";
// import Input from "@mui/joy/Input";
// import Radio from "@mui/joy/Radio";
// import RadioGroup from "@mui/joy/RadioGroup";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';



function App() {
  return (
    <div className="Container">
      <div className="form">
        <form>
          <h1 className="title">Register Form</h1>
          <div className="fields">
            <div>
              <TextField
                type="text"
                color="warning"
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="outlined-password-input"
                color="warning"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </div>
            <div>
              <TextField
                id="outlined-password-input"
                color="warning"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
              />
            </div>
            <div>
              <FormLabel className="genderlabel" id="genderlabel">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
