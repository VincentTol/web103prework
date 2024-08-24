import { BrowserRouter, Routes, Route} from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import './App.css'
import AddCreator from "./pages/AddCreator";

function App() {
 
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index element = {<ShowCreators />}></Route>
          <Route path="/ShowCreators" element={<ShowCreators />} />
          <Route path="/AddCreator" element={<AddCreator />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
