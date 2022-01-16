// 18 completed
import logo from './logo.svg';
import './App.css';
import react , {useState} from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import Footer from './Components/Footer';


function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (Message,type) =>{
  setAlert({
    msg: Message,
    type : type
  });
  }
  return (
  <>
 <Navbar title="TextUtils" aboutText="About"/>
 <Alert alert={alert}/>
 <TextForm showAlert={showAlert} />
 <Footer />
  </>
  );
}

export default App;
