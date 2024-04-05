import "./App.css";
import { Toaster } from "react-hot-toast";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
const  App = () =>{


  return (
    <>
     <Toaster/>
     <CssBaseline/>
     <div className="App">
        <main className="pt-16  min-h-[calc(100vh)]">
          <Outlet
           />
        </main>
      </div>
    </>
  );
}

export default App;
