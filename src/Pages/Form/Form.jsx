import style from "./Form.module.css";
import { useState } from "react";
import timestamp from "time-stamp";
// import Table from ".../"
function Form() {
  const [inputdata, setInputdata] = useState({
    title: "",
    description: "",
    duedate: "",
    status: "",
  });

  const getInputdata = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  const addTodo = async (event) => {
    event.preventDefault();
    let payload={
       ...inputdata,timestamp:timestamp("YYYY-MM-DD HH:mm:ss" )
    }
    try {
        let res= await fetch("https://defiant-stockings-yak.cyclic.app/todos",{
           method:"POST",
           headers:{
            "Content-Type":"application/json",
        
           },
           body:JSON.stringify(payload )
        })
       alert("Inserted Successfully !!")
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <div>
      <h1 className={style.head}>Add</h1>
      <form onSubmit={addTodo} className={style.form}>
        <label>
          Title :{" "}
          <input type="text" onChange={getInputdata} name="title" required />
        </label>
        <br />
        <label>
          Description : <br></br>
          <textarea onChange={getInputdata} name="description">
            {" "}
          </textarea>
        </label>
        <br />
        <label>
          Due Date :{" "}
          <input type="datetime-local" onChange={getInputdata} name="duedate" required />
        </label>
        <br />
        <label>
          Status :
          <select onChange={getInputdata} name="status" required>
            <option value="open">OPEN</option>
            <option value="working">WORKING</option>
            <option value="done">DONE</option>
            <option value="overdue">OVERDUE</option>
          </select>
        </label>
        <input
          type="submit"
          value="Submit"
          style={{
            marginTop: "60px",
            width: "275px",
            padding: "10px",
            fontSize: "18px",
            fontWeight: "1200",
            fontFamily: "cursive",
          }}
          className={style.submitform}
        />
      </form>
    
    </div>
  );
}
export default Form;
