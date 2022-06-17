import React from 'react';
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import { Box } from './components/context/Box';
import { UserContext, UserContextProvider } from './components/context/UserContext';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
// import { User } from './components/User';
import { User as AuthUser } from './components/context/User';
import { DomRef } from './components/refs/DomRef';
import { MutableRef } from './components/refs/MutableRef';
import { Counter } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/ Toast';
import { CustomButton } from './components/html/Button';
import { Text } from './components/ polymorphic/Text';

function App() {

  const person = {
    fname: 'Md',
    lname: 'Jahin'
  };


  const persons = [
    {
      fname: 'Md',
      lname: 'Jahin'
    },
    {
      fname: 'Md',
      lname: 'Khan'
    },
    {
      fname: 'Md',
      lname: 'Hossain'
    },
  ];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number )=> {
    console.log('clicked me', event, id)
  }

  return (
    <div className="App">
      {/* <Greet 
      name="jahin" 
      // messageCount={10} 
      isLoggedIn={false}
      />

      <Person person={person} /> */}
      
      {/*

      <PersonList persons={persons} /> */}

      {/* <Status status='error' /> */}

      {/* <Heading>
        Placeholder Text
      </Heading>

      <Oscar>
        <Heading>
          Oscar Text
        </Heading>
      </Oscar> */}

      {/* <Button handleClick={handleClick} /> */}

      {/* <Input value='' handleChange={(event)=>{
        console.log(event);
        
      }} /> */}


      {/* <Container styles={{
        border: '1px solid black',
        padding: '1rem'
      }} /> */}


      {/* <User /> */}

      {/* <Box /> */}

      {/* <UserContextProvider>
        <AuthUser />
      </UserContextProvider> */}


      {/* <DomRef /> */}
      {/* <MutableRef /> */}

      {/* <Counter message="Count value is " /> */}

      {/* <Private isLoggedIn={true} Component={Profile} /> */}
{/* 
      <List 
      
        items={[
          {
            id: 1,
            fname: 'Md',
            lname: 'Jahin'
          },
          {
            id: 2,
            fname: 'Md',
            lname: 'Khan'
          },
          {
            id: 3,
            fname: 'Md',
            lname: 'Hossain'
          },
        ]}

      onClick={(item) => console.log(item)}
      
      /> */}


      {/* <RandomNumber value={10} isPositive /> */}

      {/* <Toast position='left-top' /> */}

      {/* <CustomButton variant='primary' onClick={()=> alert("clicked me")} >Hello world</CustomButton> */}

      <Text as='h1' size='lg' color='primary' >
        heading 1
      </Text>

      <Text as='p' size='md'>
        paragraph 
      </Text>

      <Text as='label' htmlFor='elementId' size='sm' >
        label 
      </Text>


    </div>
  );
}

export default App;
