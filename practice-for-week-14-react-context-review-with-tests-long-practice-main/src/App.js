import coffeeBeans from "./mockData/coffeeBeans.json";
import SetCoffeeBean from "./components/SetCoffeeBean";

function App() {
  return (
    <>
      <SetCoffeeBean coffeeBeans={coffeeBeans}/>
      <h1>Welcome to Coffee App</h1>
    </>
  );
}

export default App;