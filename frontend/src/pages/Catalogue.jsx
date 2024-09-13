import { BackgroundGradientDemo } from "../components/GradCard"
import { Heade } from "../components/Heade"


export const Catalogue = () => {
    return <div className="">
        <Heade />
       
        
        <div className=" text-5xl  text-slate-700 font-extrabold text-center">
            Welcome to ShoeRack
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-28 p-10 ">
            <div className="w-fit   ">
                <BackgroundGradientDemo src={'../../../public/shoe1.jpg'} />
            </div>
            <div className="w-fit ">
                <BackgroundGradientDemo src={'../../../public/shoe1.jpg'} />
            </div>
            <div className="w-fit ">
                <BackgroundGradientDemo src={'../../../public/shoe1.jpg'} />
            </div>
            <div className="w-fit ">
                <BackgroundGradientDemo src={'../../../public/shoe1.jpg'} />
            </div>
            <div className="w-fit ">
                <BackgroundGradientDemo src={'../../../public/shoe1.jpg'} />
            </div>
            <div className="w-fit ">
                <BackgroundGradientDemo src={'../../../public/shoe1.jpg'} />
            </div>
        </div>

    
    </div>

}