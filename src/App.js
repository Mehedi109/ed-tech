// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import ServiceDetails from "./Pages/Home/ServiceDetails/ServiceDetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route
              exact
              path="/service/:id"
              element={
                <PrivateRoute>
                  <ServiceDetails />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
          <Routes>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
