import React from 'react'
import CardPizza from './CardPizza'
import Header from './Header'

function Home() {
  return (
    <div>
      <Header></Header>

      <div className="d-flex justify-content-around flex-wrap pt-5 pb-5">
      <CardPizza name="Napolitana" price="5950" ingredients={["mozzarella, ", "tomates, ", "jamón, ", "orégano"]} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"/>

      <CardPizza name="Española" price="6950" ingredients={["mozzarella, ", "gorgonzola, ", "parmesano, ", "provolone"]} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"/>

      <CardPizza name="Pepperoni" price="6950" ingredients={["mozzarella, ", "pepperoni, ", "orégano"]} img="https://www.hola.com/horizon/landscape/e9e1e82cb873-pepperoni-pizza-abob-t.jpg"/>
      </div>

    
    </div>
  )
}

export default Home
