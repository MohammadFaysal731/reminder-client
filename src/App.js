import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddItem from "./pages/AddItem";
import Home from "./pages/Home/Home";
import Items from "./pages/Items";
import Login from "./pages/Login";
import ManageItems from "./pages/ManageItems";
import NotFound from "./pages/NotFound";
import Registration from "./pages/Registration";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/"element={ <Home/>}/>
        <Route path="/add-item"element={ <AddItem/>}/>
        <Route path="/items"element={ <Items/>}/>
        <Route path="/manage-items"element={ <ManageItems/>}/>
        <Route path="/registration"element={ <Registration/>}/>
        <Route path="/login"element={ <Login/>}/>
        <Route path="*"element={ <NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
