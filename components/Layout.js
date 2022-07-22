import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container">
        <main className="main">{children}</main>
      </div>
      <Footer />
    </>
  );
}
