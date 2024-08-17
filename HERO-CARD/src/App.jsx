import Card from "./components/Card";
import Hero from "./components/Hero";
import Logo from "./components/dota.jpg"

function App() {
  return (
    <>
      <section className="Pangalan">
        <div className="Pangalan2">
        <img id="logoto" src={Logo}/>
          <Hero></Hero>
        </div>
      </section>
      <section className="yandin">
        <Card />
      </section>
    </>
  );
}

export default App;
