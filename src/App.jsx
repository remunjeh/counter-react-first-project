import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {

  return (
    <>
      {/* <h1 className={ 5 < 3 ? "text-success" : "text-danger"}>My App!</h1>
      {1===1? <p>True</p>: <p>False</p> }
      
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quae
        vero ad natus temporibus? In, fugiat asperiores omnis molestias animi
        nihil, tempora, dolor dolorem quam placeat nobis eligendi dignissimos
        ex.
      </p> */}

      <Nav />
      <Footer />
    </>
  );
}

export default App;
