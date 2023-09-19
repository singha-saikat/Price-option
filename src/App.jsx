import LineChart from "./components/LineChart/LineChart";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Price_Options from "./components/Price options/Price_Options";

function App() {
  return (
    <>
      
      <Navbar/>
      <Price_Options/>
      <LineChart></LineChart>
      
    </>
  );
}

export default App;
