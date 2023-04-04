import { useEffect, useState } from "react";
import style from "./Table.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import Pagintation from "../../Pages/Pagintation";
function Table() {
  const [data, setData] = useState([]);
  const[page,setPage] = useState(1);
  const[totalPages,setTotalPage] = useState(0);


  const getTotalpage = async () => {
    let res = await fetch("https://defiant-stockings-yak.cyclic.app/todos");
    let data = await res.json();
     
    let total = Math.floor(data.length/5)
      if(data.length%2!=0) total++;
      
      setTotalPage(total);
   
  };
  

  const getData = async () => {
    let res = await fetch(`https://defiant-stockings-yak.cyclic.app/todos?_page=${page}&_limit=5`);
    let formdata = await res.json();
    setData(formdata);
    getTotalpage();
    console.log("data", formdata);
  };
  useEffect(() => {
    getData();
  }, [page]);

  const toggleStatus = async (id, newStatus) => {
    try {
      let res = await fetch(`https://defiant-stockings-yak.cyclic.app/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: newStatus,
        }),
      });
      await getData();
      console.log("kyu");
    } catch (error) {
      console.log(error);
    }
  };
  const deletetodo = async (id) => {
    let res = await fetch(`https://defiant-stockings-yak.cyclic.app/todos/${id}`, {
      method: "DELETE",
    });
    await getData();
  };
  
  const searchtodo=async(e)=>{
   try {
    let res = await fetch(`https://defiant-stockings-yak.cyclic.app/todos?title_like=${e.target.value}`);
    let data = await res.json();
    setData(data);
    setTotalPage(1)
   } catch (error) {
    console.log(error)
   }
  }


  return (
    <div className={style.maintable}>
      <h1 className={style.head1}>Todo List</h1>
      <div className={style.inputtr}>
        <h2>Search Todo</h2>
        <input type="text" onChange={searchtodo}/>
      </div>
      <table className={style.table}>
        <tr>
          <th>Created At</th>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Toggle Status</th>
          <th>Delete</th>
        </tr>
        {data.map(({ timestamp, title, description, duedate, status, id }) => {
          return (
            <tr>
              <td>{timestamp}</td>
              <td>{title}</td>
              <td>{description}</td>
              <td>{duedate.split("T").join(" ")}</td>
              <td>{status}</td>
              <td>
                <select
                  onChange={(e) => {
                    toggleStatus(id, e.target.value);
                  }}
                  name="status"
                  required
                >
                  <option value="open">OPEN</option>
                  <option value="working">WORKING</option>
                  <option value="done">DONE</option>
                  <option value="overdue">OVERDUE</option>
                </select>
              </td>
              <td className={style.deltd}
                onClick={() => {
                  deletetodo(id);
                }}
              >
                <AiOutlineDelete />
              </td>
            </tr>
          );
        })}
      </table>
      <Pagintation currentPage={page} totalPages={totalPages} changePage={(p)=>{setPage(p)}}/>
    </div>
  );
}
export default Table;
