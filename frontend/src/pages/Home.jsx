import { Heade } from "../components/Heade"
import { ThreeDCardDemo } from "../components/ThreeDcard"


export const Home =()=>{
    return <div className="" >
        <Heade/>
        <div className="flex flex-col md:flex-row justify-center  md:space-x-10 ">
            <div className="flex flex-col  pr-5 justify-evenly md:w-1/3  w-full ">
                <p className="text-7xl transition-shadow  uppercase font-extrabold   pb-5 "> Your feet deserves the best</p> 
                <span>we are here to  deliver you the best.The best in qaulity .we are here to  deliver you the best.The best in qaulity </span>
               
                    <button className="w-fit bg-red-600 rounded-sm ml-2 mb-4 px-2 py-1 border-2 border-red-950"> shop now</button>
                  
                
            </div>
            <div>
            <ThreeDCardDemo/>
            </div>
         
        </div>
        

    </div>
}