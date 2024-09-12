import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/page/home/Home";
import List from "./pages/page/list/List";
import New from "./pages/page/new/New";
import Single from "./pages/page/single/Single";
import UserCreate from "./pages/page/FormProduct/UserCreate";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Single />} />

          <Route path="/produk-create" element={<Single />} />
          <Route path="produk-edit/:id/edit" element={<New />} />

          <Route path="/products">
            <Route index element={<List />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
