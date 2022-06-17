import React from 'react'

type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean

}

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
        Hello {props.name}, 
        <p>{props.isLoggedIn? "You are logged In" :" You are guest"}</p>
        <p>Message Count - {messageCount}</p>
    </div>
  )
}

export default Greet