


export const Heade = () => {
    return <div className="flex justify-between p-2 m-2  border-b">
        <div className="bg-white white w-[76px] pl-2 ">

            <img className=" mix-blend" src="../../../logo.jpg" alt="" />

        </div>
        <div className="flex gap-4">
            <span>Home </span>
            <span>Catalogue</span>
            <span>contact us</span>

        </div>
        <div>
            <button className="bg-red-600 rounded-none text-slate-100 font-semibold px-2">Login</button>
        </div>
    </div>


}