import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function DropdownRegistration(props) {
  var s=props.to_find;
  const handleChange = e => {
    const { name, value } = e.target
    Events.filter(Events=>Events.event===value).map((item)=>{props.setFees(item.fees)})
    props.setcontent({
        ...props.content,
        [name]: value
    })
  }

  const [Events, setEvents] = useState([]);  
  useEffect(() => {
    axios.get("/api/allevent")
    .then((res)=>{setEvents(res.data)});
  }, [])

 

  return (
<div class="form__group field" style={{display:"flex",justifyContent:"center"}}>
    <select  class="form__field" placeholder={props.placeholder} name={s} value={props.content[s]} onChange={handleChange} required>
    {/* <label class="form__label" >{props.placeholder}</label> */}
    <option class="form__label" value="">Event*</option>
          {Events.filter(item=> item.status === "open").map((item)=>{
            return <option class="form__label" value={item.event} onClick={()=>{console.log(item.fees)}}>{item.event}</option>
          })}
    </select>
    </div>
    )
}

