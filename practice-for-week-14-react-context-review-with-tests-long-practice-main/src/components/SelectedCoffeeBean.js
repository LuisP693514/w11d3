import { useCoffeeContext } from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {

  const {coffeeBean, setCoffeeBeanId} = useCoffeeContext()

  return (
    <div className="selected-coffee">
      <h2>{}</h2>
    </div>
  )
}

export default SelectedCoffeeBean;