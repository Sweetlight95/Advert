import Subscribe from "./Subscribe";
import { Route, Routes } from "react-router-dom";
import Advert from "./Advert"

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path= "/" element={   <Subscribe/> }/>
        <Route path= "/advert" element={<Advert/>} />
    </Routes>
    </div>
  );
}

export default App;
