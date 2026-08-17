import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";
import "./index.css";
import "../../global/theme.css";

const Home = () => {
    return <div>
        <Header />
        <main>
            <Introduction />
            <Products />
            <About />
        </main>
        <Footer />
    </div>
}
export default Home;