import logo from './logo.svg';
import './App.css';
// import TextForm from './components/TextForm';
// import Profile1 from "./components/Profile1"
// import Button from './components/Button';
// import Counter from './components/Counter';
import {useSelector, useDispatch} from "react-redux";
import { addBird,likeBird } from "./redux/actions";


// import Navbar1 from './components/Navbar1';
// import About from "./components/About"

 
function App() {
  const birds=useSelector((state)=>state.birds);
  const dispatch=useDispatch();

  const handleAddBird=(event)=>{
    event.preventDefault();
    const birdName=event.target.elements.birdName.value;
    dispatch(addBird(birdName));
    event.target.reset();
  };

  const handleLikeBird=(birdName)=>{
    dispatch(likeBird(birdName));
  }
  return(
    <div className="App">
      {/* <Navbar1></Navbar1> */}
      {/* <About/> */}
      {/* <TextForm></TextForm> */}
      {/* <Profile1 image=""></Profile1>
      <Profile1/>
      <Profile1/> */}
      {/* <Button BtnName="Apple" color="red"></Button><br/>
      <Button BtnName="Mango" color="green"></Button><br/>
      <Button BtnName="Banana" color="orange"><h3>Hello bro kaisa hai?</h3></Button> */}

      {/* <Counter></Counter> */}

      <h1>Bird List</h1>
      <label htmlFor='birdName'>Add Bird:</label>
      <form onSubmit={handleAddBird}>
        <input type='text' id='birdName'/>
        <button type='submit'>Add</button>
      </form>

      <ul>
        {birds.map((bird)=>(
          <li key={bird.name}>
            {bird.name}-Likes:{bird.likes}
            <button onClick={()=>handleLikeBird(bird.name)}>Like</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
