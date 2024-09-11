import { Link } from "react-router-dom"



export const Heade = () => {
    return <div className="flex justify-between p-2 m-2  border-b">
        <div className="bg-white white w-[76px] pl-2 ">

            <img className=" mix-blend" src="../../../logo.jpg" alt="" />

        </div>
        <div className="flex gap-4 text-slate-600 font-medium underline underline-offset-2 ">
            <span className="hover:scale-110 hover:text-red-900 cursor-pointer">Home </span>
            <Link className="hover:scale-110 hover:text-red-900 cursor-pointer" to={'/Catalogue'}>
                <span >Catalogue</span>
            </Link>
            <span className="hover:scale-110 hover:text-red-900 cursor-pointer">contact us</span>

        </div>
        <div>
            <button className="bg-red-600 rounded-none text-slate-100 font-semibold px-2">Login</button>
        </div>
    </div>


}