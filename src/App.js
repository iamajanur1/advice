
import { Routes, Route} from "react-router-dom";
import About from "./routes/about";
import GetAdvice from "./routes/Advice";
import Home from "./routes/home";
import Navbar from './navbar';
import "./App.css";

function App() {
  return (
    <>
 
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/advice" element={<GetAdvice />} />
        <Route  path="/about" element={<About />} />
       
      </Routes>
    </>
  );
}

export default App;

// export default function App() {
//   const [advice, setAdvice] = useState("");

//   async function getAdvice() {
//     const res = await fetch("https://api.adviceslip.com/advice");
//     const data = await res.json();
//     const slip = data.slip;
//     console.log(slip);
//     document.getElementById("slip").innerHTML = slip;
//   }

//   return (
//     <div>
//       <h1>Hello World </h1>
//       <button onClick={getAdvice}>Get Advice</button>
//       <h3 id="slip"> Advices are : {getAdvice.slip} </h3>
//     </div>
//   );
// }
