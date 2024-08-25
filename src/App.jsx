import { BrowserRouter, Routes, Route} from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import './App.css'
import AddCreator from "./pages/AddCreator";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";

//Notes on how this might be improved
//State Management is kind of jumbled
//1. The information for View Creator is held in the PersonCard component
//2. State management is using non-unique variable that stores creator 
//   information when view creator is clicked
//      a) This means if you click on one creator and then navigate 
//         back to ShowCreators and then paste the url for ViewCreators
//         you will be loaded to the last creator you opened
// Possible solution unique url based on username? 
// Also need way to store which viewer being opened after opening another page
// Perhaps change URL based on username then fetch the username from database using the url
// on the navigated page

function App() {
 
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index element = {<ShowCreators />}></Route>
          <Route path="/ShowCreators" element={<ShowCreators />} />
          <Route path="/AddCreator" element={<AddCreator />} />
          <Route path="/ViewCreator" element={<ViewCreator />} />
          <Route path="/EditCreator" element={<EditCreator />} />

        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
