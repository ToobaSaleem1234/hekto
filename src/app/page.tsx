import About from "./components/about";
import Account from "./components/account";
import Contact from "./components/contact";
import Error from "./components/error";
import FAQ from "./components/faq";
import Homepage from "./components/homepage";
import Ordercomplete from "./components/ordercomplete";

export default function Home() {
  return (
    <div>
      <Homepage/>
      <About/>
      <Contact/>
      <Ordercomplete/>
      <Error/>
      <Account/>
      <FAQ/>
    </div>
  );
}
