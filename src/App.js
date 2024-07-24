import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customer from "./pages/customer/Customer";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
