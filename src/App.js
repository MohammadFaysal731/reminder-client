import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RequireAuth from "./components/RequireAuth";
import { privateRoutes } from "./routes/privateRoutes";
import { publicRoutes } from "./routes/publicRoutes";


function App() {
  return (
    <>
      <Header />
      <Routes>
        {publicRoutes?.map(({ path, Comment }, index) => (
          <Route path={path} element={<Comment />} key={index} />
        ))}
        {privateRoutes?.map(({ path, Comment }, index) => (
          <Route
            path={path}
            element={
              <RequireAuth>
                <Comment />
              </RequireAuth>
            }
            key={index}
          />
        ))}
      </Routes>
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default App;
