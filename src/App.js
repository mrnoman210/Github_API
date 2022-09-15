import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./screens/Login/Login";
import Showprofile from "./screens/Search/Showprofile";
import SignUP from "./screens/Sign up/SignUP";
import UsersScreen from "./screens/UsersScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/users" element={<UsersScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/search" element={<Showprofile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
