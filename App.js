import User from './User';
import './App.css';
import { useState } from 'react';

function App() {
  const [addItem, setAddItem] = useState([]);

  const checkPassword = (password) => {
    if(password.length < 8){
      alert("password Length")
      return false
    }
    if(!/(?=.*[a-z])/.test(password)){
      alert("lowerCase")
      return false
    }if(!/(?=.*[A-Z])/.test(password)){
      alert("UpperrCase")
      return false
    }if(!/(?=.*[!@#$%^&*()_+-=])/.test(password)){
      alert("SpecialCase")
      return false
    }if(!/(?=.*\d)/.test(password)){
      alert("Number")
      return false
    }
    return true
  }
  
  const checkUser = (user) =>{
    if(!user.endsWith("@gmail.com")){
      const data = document.getElementById('user').innerHTML="it ends with @gmail.com"
      return data
    }return true
    
  }

  const checkActive = ()=>{
    if (checkPassword && checkUser){
      return false
    }else {
      return true
    }
  }

  const handleButton = (e) => {
    e.preventDefault();
    
    // value stored in addItem 
    const passwordSet = checkPassword(addItem.password);
    const userSet= checkUser(addItem.user)

    if (userSet && passwordSet) {
      const id = addItem.length ? addItem[addItem.length - 1].id +1 : 1;
      setAddItem((addItem) => [...addItem, {id, user: addItem.user, password: addItem.password}]);
      alert("User Submitted")
      return true
    } else {
      alert("Invalid User Submitted")
      return false
      
    }
  };
  
return (
  <div>
    <User 
    addItem={addItem}
    setAddItem={setAddItem}
    handleButton={handleButton}/>
    <div>
      <li className='list' key={addItem.id}>
          <li>UserName: {addItem.user}</li>
          <li>Password: {addItem.password}</li>
    </li>
    </div>
  </div>
)
}
export default App;
