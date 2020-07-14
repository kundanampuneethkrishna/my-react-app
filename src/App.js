import React from 'react';
// import Logo from './logo.svg';
import './App.css';
// import Hello from "./Hello";
// import logo from "./logo.svg";
import img from "./profile.png";
// import Wish from "./Wish";
// import Greeting from "./components/Greeting";
// import Welcome from "./components/Welcome";
// import States from "./components/State";
//import ClassState from "./components/classState";
//import Hooks from "./components/Hooks";
import data from "./data/data.json";
import Resume from "./components/Resume";
import { Route ,Link,BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
   {/*} <ClassState></ClassState>
     <h1>Using Hooks()</h1>
     <Hooks></Hooks>
    <h1>APSSDC</h1>
  <h2>Puneeth</h2>*/}
    
     {/*<Home/>*/}
     {/*<Hello/>*/}
     {/*<Wish />*/}

{/*<Greeting name="Puneeth" mail="puneeth@gmail.com">
 <img src={logo} style={{width:"200px"}}/>
 </Greeting>
 <Greeting name="Ravi" mail="ravi@gmail.com">
 <p> Hello APSSDC</p>
 <p> Hello Puneeth</p>
 </Greeting>
 <h1>We are creating Class Component & pass the pops</h1>
 <Welcome></Welcome>
 <Welcome></Welcome>*/}
{/*states*/}
{/*<States/>*/}
<BrowserRouter>
<Route exact path="/" component={Home}/>
<Route exact path="/resume" component={Resume}/>
  </BrowserRouter>
{/*<Home />*/}
</div>

          );
 }

 let Home=()=>{
    let profile=data.profiles;
    console.log(profile);
    return(
        <div className="row justify-content-center">
        {
            profile.map((value,index)=>(
            <div className="col-sm-10 col-md-4 col-lg-4 mt-1"key={index}>
            <div className="card">
            <div className="card-body">
            <h1>{value.basic.name}</h1>
            <img src={img} alt="Profile Icon" style={{width:"15em"}}/>
            
            <Link to={{pathname:"/Resume", data:{i:index}}} className="btn btn-primary">profile</Link>
            </div>
            </div>
            </div>
            ))
 }
        </div>
);
}

export default App;