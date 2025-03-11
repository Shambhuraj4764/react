import React from 'react'

function Azad() {
  return <Person name='fkilld' like='play dota 2' mmr='7k' />
}

const Person = (props) => {
  console.log(props)
  return (
    <>
      <h1>name:{props.name}</h1>
      <h2>like {props.like}</h2>
      <h3>mmr : {props.mmr}</h3>
    </>
  )
}

///////////////////////////////////////
// const Person = (props) => {
//   const { name, like, mmr } = props
//   return (
//     <>
//       <h1>name:{props.name}</h1>
//       <h2>like {props.like}</h2>
//       <h3>mmr : {props.mmr}</h3>
//       <hr />
//       with out props
//       <h1>name:{name}</h1>
//       <h2>like {like}</h2>
//       <h3>mmr : {mmr}</h3>
//     </>
//   )
// }
////////////////////////////////
// const Person = ({ name, like, mmr }) => { 
//   return (
//     <>
     
    
//       with out props
//       <h1>name:{name}</h1>
//       <h2>like {like}</h2>
//       <h3>mmr : {mmr}</h3>
//     </>
//   )
// }
export default Azad