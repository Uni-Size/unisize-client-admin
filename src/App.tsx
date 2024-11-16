import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Layout from "./Layout/Layout";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/admin" element={<Main />}>
          <Route path="login" element={<div>Login</div>} />
          <Route path="school/:schoolId" element={<div>School</div>}>
            <Route path="student" element={<div>Student</div>} />
            <Route path="order" element={<div>Order</div>} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
