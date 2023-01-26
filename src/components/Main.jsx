import React from 'react'
import NavBar from './NavBar'
import Restaurants from './Restaurants'
import Foods from './Foods'
import FoodsContainer from './FoodsContainer'


export default function Main({products, asian, burgers, all, pizza, european, low, lowest, high, highest}) {
  return (
    <>
        <NavBar />
        <Restaurants />
        <Foods asian={asian} burgers={burgers} all={all} pizza={pizza} european={european} low={low} high={high} lowest={lowest} highest={highest} />
        <FoodsContainer products={products} />
    </>
  )
}
