import logo from "./logo.svg";
import "./App.css";
import photocar from "./photocar.png"
import './style.css'
function App() {
  return (
    <div className="App">
        <h1 className="title red">Your name here</h1>
        <h1>Hello</h1>
        <br />
        <div style={{border:'solid 1px black' ,maxWidth:'100px'}}>

        <img src={photocar} />
 
        <br />
        <img src="/tree.jpg" /> 
      </div>

     {/*  <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video> */}
    </div> 
    
  );
}

export default App;
