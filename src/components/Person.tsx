import React from 'react'
import { Person as PersonType } from './Person.types'

type PersonProps = {
  person: PersonType
}

const Person = ({ person }: PersonProps) => {
  return (
    <div>
        Hello {person.fname} {person.lname}, 
    </div>
  )
}

export default Person