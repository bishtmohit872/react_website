import Swipe from '../swiper/Swiper'

const Section2=()=>{
    return(
        <>
            <div className="h-max w-full px-4 xl:px-24 py-8 flex flex-col border-t-1 border-black">
                <p className=" h-[150px] w-full xl:w-[600px] text-4xl lg:text-5xl py-4">Exquisite Marble Creations, Tailored for You</p>
                <p className="text-2xl">Explore our finest work below ✨</p>
            </div>
            <Swipe/>
        </>
    )
}

export default Section2