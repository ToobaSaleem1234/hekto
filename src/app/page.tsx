import About from "./components/about";
import Account from "./components/account";
import Blog from "./components/blog";
import Cart from "./components/cart";
import Contact from "./components/contact";
import Error from "./components/error";
import FAQ from "./components/faq";
import Hektodemo from "./components/hektodemo";
import Homepage from "./components/homepage";
import Ordercomplete from "./components/ordercomplete";
import Productdetails from "./components/productdetails";
import Shopgrid from "./components/shop-grid";
import Shopleftsidebar from "./components/shopleftsidebar";
import Shoplist from "./components/shoplist";
import Singleblog from "./components/singleblog";

export default function Home() {
  return (
    <div>
      <Homepage/>
      <Shopgrid/>
      <Shoplist/>
      <Shopleftsidebar/>
      <Productdetails/>
      <Cart/>
      <Ordercomplete/>
      <Hektodemo/>
      <Account/>
      <Blog/>
      <Singleblog/>
      <About/>
      <Contact/>
      <Error/>
      <FAQ/>
    </div>
  );
}
