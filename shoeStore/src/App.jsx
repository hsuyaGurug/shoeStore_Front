import Card from "./components/Card.jsx"
import { useState } from "react"

export default function App (){

  const numberOfCards = 5;
  
  const [showCard, setShowCard] = useState([...Array(numberOfCards).keys()].map(e => false))

  let cards = [];

  for (let index = 0; index < numberOfCards; index++) {
    cards.push(<Card showCard={showCard[index]} setShowCard={setShowCard[index]}/>)
  }

  return cards

  
}