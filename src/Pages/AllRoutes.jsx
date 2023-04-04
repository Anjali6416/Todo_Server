import { Route, Routes } from "react-router-dom";
import Todo from "../Pages/Table/Todo"
import Form from "./Form/Form";
function AllRoutes(){
    return (
        <div >
            <Routes>
                <Route path="/" element={<Todo/>}/>
                <Route path="/add-todo" element={<Form/>}/>
            </Routes>
        </div>
    )
}
export default AllRoutes;