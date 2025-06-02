import { Outlet } from "react-router-dom"
import classes from './App.module.css'

function App() {
  return (
    <div className={classes.App}>
      <img src="/github.svg" alt="GitHub Logo" width={32} height={32}/>
      <h1>GitHub Profile Search</h1>
      <Outlet />
    </div>
  )
}

export default App
