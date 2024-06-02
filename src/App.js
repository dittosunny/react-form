import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Container">
      <div className="form">
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="phone" placeholder="Phone" />
          <input type="text" name="address" placeholder="Address" />
          <input type="text" name="city" placeholder="City" />
          <input type="text" name="state" placeholder="State" />
          <input type="text" name="zip" placeholder="Zip" />
          <input type="text" name="country" placeholder="Country" />
          <input type="text" name="password" placeholder="Password" />
          <input type="text" name="cpassword" placeholder="Confirm Password" />
          <input type="submit" value="Submit" />
        </form>
  
      </div>
    </div>
  );
}

export default App;
