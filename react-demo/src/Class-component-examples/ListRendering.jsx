// import React, { Component } from 'react'

// class ListRendering extends Component {
//     render() {
//         // const names = ["Vijay", "Surya", "Hari"];

//         // const nameList = names.map((name)=>{
//         //                 return <h2>{name}</h2>
//         //             })

//         const persons = [
//             {
//                 id: 1,
//                 name: "Vijay",
//                 age: 21,
//                 skill: "ReactJS"
//             },
//             {
//                 id: 2,
//                 name: "Surya",
//                 age: 22,
//                 skill: "AngularJS"
//             },
//             {
//                 id: 3,
//                 name: "Hari",
//                 age: 20,
//                 skill: "NextJS"
//             },

//         ]

//         const personList = persons.map((person) => {
//             return <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>
//         })
//         return (
//             <div>
//                 {/* {
//                     names.map((name)=>{
//                         return <h2>{name}</h2>
//                     })

//                 } */}

//                 {/* {nameList} */}
//                 {personList}
//             </div>
//         )
//     }
// }

// export default ListRendering

//instead of doing it here best practice is to refactor the jsx in separate component

// import React, { Component } from 'react'
// import PersonList from './PersonList'

// class ListRendering extends Component {
//   render() {
//     const persons = [
//             {
//                 id: 1,
//                 name: "Vijay",
//                 age: 21,
//                 skill: "ReactJS"
//             },
//             {
//                 id: 2,
//                 name: "Surya",
//                 age: 22,
//                 skill: "AngularJS"
//             },
//             {
//                 id: 3,
//                 name: "Hari",
//                 age: 20,
//                 skill: "NextJS"
//             },

//         ]

//     const personList = persons.map((person)=>{
//         return <PersonList person={person} />
//     })
//     return (
//       <div>{personList}</div>
//     )
//   }
// }

// export default ListRendering


//it works but throws this warning
// Each child in a list should have a unique "key" prop.

// Check the render method of `ListRendering`. See https://react.dev/link/warning-keys for more information.

//it means each rendered list item using the map method should have prop key and it should hold unique 
//usually we can use id property in the persons since it has unique values

//example for that
// import React, { Component } from 'react'
// import PersonList from './PersonList'

// class ListRendering extends Component {
//   render() {
//     const persons = [
//             {
//                 id: 1,
//                 name: "Vijay",
//                 age: 21,
//                 skill: "ReactJS"
//             },
//             {
//                 id: 2,
//                 name: "Surya",
//                 age: 22,
//                 skill: "AngularJS"
//             },
//             {
//                 id: 3,
//                 name: "Hari",
//                 age: 20,
//                 skill: "NextJS"
//             },

//         ]

//     const personList = persons.map((person)=>{
//         return <PersonList key={person.id}person={person} />    //now thw warning is solved but we can't use the key in the child component as props
//     })
//     return (
//       <div>{personList}</div>
//     )
//   }
// }

// export default ListRendering

//keys help react identify which items have changed/added/removed
//what if the array does not have a unique property -> use index as key


import React, { Component } from 'react'
import PersonList from './PersonList'

class ListRendering extends Component {
  render() {
    const persons = [
            {
                
                name: "Vijay",
                age: 21,
                skill: "ReactJS"
            },
            {
                name: "Vijay",
                age: 22,
                skill: "AngularJS"
            },
            {
                name: "Hari",
                age: 22,
                skill: "ReactJS"
            },

        ]

    // const personList = persons.map((person)=>{
    //     return <PersonList person={person} />    //now thw warning is solved but we can't use the key in the child component as props
    // })
    // const personList = persons.map((person)=>{
    //     return <PersonList key={person.name} person={person} />    //now new warning is shown as the key is duplicated
        
    // })
     const personList = persons.map((person,index)=>{
        return <PersonList key={index} person={person} index={index}/>    //the map method takes 2 args other one is index of the item in the array now the index is unique the warning is gone
        
    })
    return (
      <div>{personList}</div>   //we receive the same warning as before
    )
  }
}

export default ListRendering

//even using index as key some issues during adding at the beginning and sorting by latest item
//so when to use index as key->

    //when items in the list doesnt have unique id
    //list is static and not changing
    //list is never reordered or filtered
    // when all these 3 are satisified we can use index as key