import { Heade } from "../components/Heade"
import { ThreeDCardDemo } from "../components/ThreeDcard"
import { Link } from "react-router-dom"

export const Home =()=>{
    return <div className=" h-screen" >
        <Heade/>
        <div className="bg-gradient-to-r from-cyan-100 to-white flex flex-col md:flex-row justify-center w-full h-full  md:space-x-10 ">
            <div className="flex flex-col mt-5 justify-evenly  pr-5 md:justify-center gap-10  md:w-1/3  w-full ">
                <p className="text-7xl   uppercase font-extrabold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent   pb-5 "> Your feet deserves the best</p> 
                <span className="text-slate-600 font-semibold">we are here to  deliver you the best.The best in qaulity .we are here to  deliver you the best.The best in qaulity </span>
               
                  <Link to={'/Catalogue'} > <button className="w-fit  bg-red-600 rounded-sm ml-1 mb-4 px-2 py-1 border-2 border-red-950 hover:scale-110 hover:bg-red-700 transition ease-out duration-150"> shop now</button>
                  </Link> 
                
            </div>
            <div>
            <ThreeDCardDemo/>
            </div>
         
        </div>
        

    </div>
}