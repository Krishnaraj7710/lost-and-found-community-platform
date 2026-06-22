import Home from "./Pages/Home"
import Login from "./Pages/Login";
import MyItems from "./Pages/MyItems";
import Register from "./Pages/Register";
import ReportFound from "./Pages/ReportFound";
import ReportLost from "./Pages/ReportLost"
import ReportItem from "./Reportitem"
import { Routes, Route } from "react-router-dom";
import Itemdetails from "./Pages/Itemdetails";

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/ReportLost" element={<ReportLost />} />
      <Route path="/ReportFound" element={<ReportFound />} />
      <Route path="/myitems" element={<MyItems />} />
      <Route path="/itemdetails" element={<Itemdetails />} />
      
      

    </Routes>
    
    
      
    
  )
}

export default App
