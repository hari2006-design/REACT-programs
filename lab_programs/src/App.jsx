
import './App.css'
import RegistrationForm from './components/Registration Form/registertion'
import ColorPicker from './components/ColorPicker/ColorPicker'
import Greetings from './components/welcome/greetings'

function App() {
  return (
    <div className="App">
      <Greetings />
      <RegistrationForm />
      <ColorPicker />
    </div>
  );
}

export default App
