import {Footer, Hero, Join, Plans, Programs, Reasons, Testimonials} from "./components";
import "./App.css"

function App() {
  return (
    <main className="mix-blend-overlay pb-8 bg-bgHeroImage bg-appColor w-full h-full">
      <div className="max-w-[1600px] px-4 mx-auto flex flex-col gap-y-20 overflow-hidden">
        <Hero />
        <Programs />
        <Reasons />
        <Plans />
        <Testimonials />
        <Join />
        <Footer />
      </div>
    </main>
  );
}

export default App;
