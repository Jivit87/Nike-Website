import {
  CustomerReview,
  Footer,
  Hero,
  PopularProduct,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality
} from "./sections";
import Nav from "./components/Nav"

const App = () => {
  return (
    <main className="relative">
       <Nav/> 
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero></Hero>
      </section>
      <section className="padding">
        <PopularProduct></PopularProduct>
      </section>
      <section className="padding">
        <SuperQuality></SuperQuality>
      </section>
      <section className="padding-x py-10">
        <Services></Services>
      </section>
      <section className="padding">
        <SpecialOffer></SpecialOffer>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReview></CustomerReview>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe></Subscribe>
      </section>
      <section className="padding bg-black padding-x padding-y pb-8">
        <Footer></Footer>
      </section>
    </main>
  );
};

export default App;
