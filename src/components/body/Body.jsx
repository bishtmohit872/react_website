import { BG_IMAGE, DOWN_ARROW } from "../utils/Constant"
import Section1 from "./section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Footer from "../Footer/Footer"


const Body = () => {

    return (
        <div className="h-max w-[100%] px-4 mt-25 flex flex-col border-0 border-amber-900 lg:h-screen">
            <div className="h-[400px] lg:h-[600px] w-full relative flex flex-col items-center justify-center">
                <img src={BG_IMAGE} className="h-full w-full object-cover relative -z-50"></img>
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-50"></div>

                <div className="w-[70%] text-white font-serif flex flex-col items-center justify-center absolute top-[10vw]">
                    <p className="mt-10 py-2 text-4xl xl:text-6xl">Your Dream Space</p>
                    <p className="py-2 text-4xl xl:text-6xl">Our Creative Touch</p>

                    <img src={DOWN_ARROW} alt="arrow" href="start" className=" mt-10 h-[50px] w-[50px] invert animate-bounce cursor-pointer"></img>
                </div>
            </div>
            <Section1/>
            <Section2/>
            <Section3/>
            <Footer/>
        </div>
    )
}

export default Body