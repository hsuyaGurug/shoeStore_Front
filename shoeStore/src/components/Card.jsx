import { useState } from "react"

export default function Card( {showCard, setShowCard}){

  return <div className={"card " + (showCard ? "showCard" : "" )} onClick={() => {setShowCard(!showCard)}} >
    aaaa
  </div>
}