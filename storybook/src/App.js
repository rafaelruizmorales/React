import logo from './logo.svg';
import './App.css';

import { Button } from './stories/Button';
import { Header } from './stories/Header';

export default function App() {

  const handleLoggin = () => alert("Login!!!")
  const handleSignup = () => alert("Creating Acount!!!")

  return (
    <div className="App">
      <Header onLogin={handleLoggin} onCreateAccount={handleSignup} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <Button label="Learn React" size="s" primary/>
    </div>
  );
}
