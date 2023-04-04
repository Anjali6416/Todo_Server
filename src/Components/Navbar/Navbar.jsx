import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className={style.maincontainer}>
      <div>
        <h1>Todo App</h1>
      </div>
      <div className={style.linkcont}>
        <div>
         
          <Link className={style.link1} to={"/"}>Home</Link>
        </div>
        <div>
          <Link  className={style.link1 }to={"/add-todo"}>Add Todo</Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
