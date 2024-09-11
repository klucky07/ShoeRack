import { Heade } from "../components/Heade"
import { ThreeDCardDemo } from "../components/ThreeDcard"


export const Home =()=>{
    return <div className="text-yellow-800 w-full">
        <Heade/>
        <div className="flex">
            <div></div>
            <div></div>
        </div>
        <ThreeDCardDemo/>

    </div>
}