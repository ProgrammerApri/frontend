import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customer from "./pages/page/customer/Customer";
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
          <Route path="/" element={<Customer />} />

          <Route path="/produk-create" element={<Single />} />
          <Route path="product/:id/edit" element={<New />} />

          <Route path="/products">
            <Route index element={<List />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
