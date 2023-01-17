import Home from "./pages/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Detail from "./pages/Detail/Detail";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "./store/themeSlice"

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  console.log(theme)

  const setTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
      <button className={`switch ${theme}`} onClick={setTheme}>{theme === "light" ? "Dark Mode" : "Light Mode" }</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
