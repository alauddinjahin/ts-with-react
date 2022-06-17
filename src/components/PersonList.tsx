import React from 'react'
import { Person } from './Person.types'

type PersonsProps = {
  persons: Person[] 
}

const PersonList = (props: PersonsProps) => {
  return (
    <div>
      {
        props.persons.map((person, i) => (
            <h2 key={i}>{person.fname} {person.lname}</h2> 
        ))
      }
    </div>
  )
}

export default PersonList