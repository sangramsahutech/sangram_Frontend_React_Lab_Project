import React from "react"
import {Route, Routes} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import './App.css'
import {ExpenseTracker} from "./components/ExpenseTracker"
import {ShowData} from "./components/ShowList"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/add" component = {ExpenseTracker} />
          <Route path="/" component = {ShowData} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export {App}