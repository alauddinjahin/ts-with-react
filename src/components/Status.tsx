import React from 'react'

type StatusProps = {
    // status: string
    status: 'loading' | 'success' | 'error'
}

const Status = (props: StatusProps) => {

    let message;

    if(props.status === "loading"){
        message = "Loading ...";
    } else if (props.status === "success") {
        message = "Data Fetched successfully!";
    } 
    else if (props.status === "error") {
        message = "Error Fetching Data!";
    }

  return (
    <div>
      {message}
    </div>
  )
}

export default Status