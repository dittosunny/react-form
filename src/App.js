import "./App.css";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import FormHelperText from '@mui/material/FormHelperText';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

function App() {

  const initialFormData = {
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setFormError({
      ...formError,
      [name]: false
    });
  };

  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: '',
  });

  const [formError, setFormError] = useState({
    gender: false
  });

  const validatePasswords = () => {
    let valid = true;
    let errors = {};

    if (formData.password !== formData.confirmPassword) {
      valid = false;
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = validatePasswords();

    if (!formData.gender) {
      isValid = false;
      setFormError({
        ...formError,
        gender: true
      });
    }

    if (isValid) {
      console.log(formData);
      resetForm();
      // You can add further form submission logic here
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({
      password: '',
      confirmPassword: '',
    });
    setFormError({
      gender: false
    });
  };

  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
  <div className="Container">
    <div className="loginbutton">
    <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={() => setDarkMode(!darkMode)}  // Toggle dark mode on button click
            >
              Toggle Dark Mode
    </Button>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1 className="title">Register Form</h1>
          <div className="fields">
            <div>
              <TextField
                type="text"
                color="warning"
                id="outlined-basic"
                label="Username"
                variant="outlined"
                required
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="outlined-password-input"
                color="warning"
                label="Password"
                type="password"
                autoComplete="current-password"
                required
                name="password"
                value={formData.password}
                onChange={handleChange}
                inputProps={{ minLength: 4, maxLength: 8 }}
                error={!!errors.password}
                helperText={errors.password}
              />
            </div>
            <div>
              <TextField
                id="outlined-confirm-password-input"
                color="warning"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                required
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                inputProps={{ minLength: 4, maxLength: 8 }}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
            </div>
            <div>
              <FormLabel className="genderlabel" id="genderlabel" required>
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
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
              {formError.gender && <FormHelperText error>Please select your gender.</FormHelperText>}
            </div>
            <div className="submit">
              <Button
                variant="contained"
                color="warning"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </ThemeProvider>

  );
}

export default App;
