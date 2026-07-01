import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function BaseLayout() {
  return (<>
    <Header />
    <main className="container my-5">
      <Outlet />
    </main>
    <Footer />
  </>);
}