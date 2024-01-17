
import './App.css';
import Header from "./components/header"
import Body from "./components/body"
import 
{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path='/' element={<Body/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
