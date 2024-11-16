import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
}
