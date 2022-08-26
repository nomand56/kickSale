import { Container } from "@mui/material";
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from "./components/Cards"
import Planet from "./components/Planet";
import BasicTable from "./components/Table";
import FAQ from "./components/FAQ";
function App() {
  return (

    <div style={{ maxWidth: "1520px", margin: "auto" }}>


      < Navbar />
      <Hero />
      <Card />
      <Planet />
      <BasicTable />
      <FAQ />

    </div>

  );
}

export default App;