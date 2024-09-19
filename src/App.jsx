import Banner from "./component/Banner";
import CarouselSlide from "./component/CarouselSlide";
import Category from "./component/Category";
import Footer from "./component/Footer";
import ItemInSale from "./component/ItemInSale";
import Navbar from "./component/Navbar";
import RecomendedItems from "./component/recomendedItems";
import TopupAndBillsMenu from "./component/TopupAndBillsMenu";
import "./index.css";

function App() {
  return (
    <>
      <div className="bg-slate-50">
        <Navbar />
        <CarouselSlide />
        <Category />
        <TopupAndBillsMenu/>
        <Banner/>
        <ItemInSale/>
        <RecomendedItems/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
