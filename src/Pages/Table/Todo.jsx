import Table from "../../Components/Table/Table"
import style from "../Table/Todo.module.css";

function Todo(){
    return (
        <div className={style.body}>
          <Table/>  
        </div>
    )
}
export default Table;