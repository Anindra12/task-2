import {Route,Routes,Link} from "react-router-dom";
import Home from './pages/Home';
import AddEditTask from './pages/AddEditTask'

const App=()=>{
  return(
  <>
   <div>
    <nav style={{padding:"1rem",backgroundColor:"#f0f0f0"}}>
      <Link to='/' style={{marginRight:"1rem"}}>Home</Link>
      <Link to='/add'>Add Task</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<AddEditTask/>}/>
      <Route path="/edit/:id" element={<AddEditTask/>}/>
    </Routes>
   </div>
  </>
  )
}
export default App;