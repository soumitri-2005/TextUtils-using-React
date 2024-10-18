import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height: "55px", width: "300px", margin: "auto", paddingTop: "10px"}}>
      {/* writting in this way bcz in useState the value has been assigned to null
      ${props.alert.type} for success i.e for green color  */}
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> 
        {/* the msg that you have been passed through showAlert in your different componet */}
        <strong>{props.alert.message}</strong> 
      </div>}
    </div>
  )
}
