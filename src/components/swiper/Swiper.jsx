import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { project_names, project_images } from '../utils/Constant';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Swipe = () => {
  const projects = Object.keys(project_images)
  const [projectNo, setProjectNo] = useState(0)
  console.log("Next button clicked", projectNo + 1);
  return (
    <>
      <div className='h-full w-full py-10 mb-10 flex flex-col items-center'>
        <div className='h-[100px] w-[200px] lg:w-[400px] text-2xl capitalize text-center py-8 mb-4'>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            slidesPerView={1}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper"
            onSlideChange={(swiper) => {
              if (swiper.activeIndex > swiper.previousIndex) {
                setProjectNo(swiper.activeIndex)
              } else {
                setProjectNo(swiper.activeIndex)
              }
            }}
          >
            {
              projects.map((project) => (
                <SwiperSlide key={project} className='text-md py-4 rounded-lg'>{project}</SwiperSlide>
              ))
            }
          </Swiper>
        </div>

        <div className='h-max w-full text-md lg:text-xl p-2 flex items-center justify-center'>
          <p className='mr-2 font-sans font-semibold'>Name: {project_names[projectNo].client},</p>
          <p className='mr-2 font-bold'>[Address: {project_names[projectNo].location}]</p>
          <p className='mr-2 text-green-700 font-bold'>Status:{project_names[projectNo].status}</p>
        </div>

        <div className='h-max w-full border-gray-500 py-4 xl:px-20 rounded-lg bg-gray-100 hidden lg:block'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            initialSlide={2}
            coverflowEffect={{
              rotate: 0,
              stretch: 40,
              depth: 100,
              modifier: 3,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
          >
            {
              project_images[projects[projectNo]].map((img, index) => (
                <SwiperSlide key={img}><img className='rounded-lg object-cover border-2 border-black shadow-xl' src={img} alt="images" /></SwiperSlide>
              ))
            }
          </Swiper>
        </div>

        <div className='h-max w-full border-gray-500 py-4 xl:px-20 rounded-lg bg-gray-100 lg:hidden'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            initialSlide={2}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
          >
            {
              project_images[projects[projectNo]].map((img, index) => (
                <SwiperSlide key={img}><img className='rounded-lg object-cover border-2 border-black shadow-xl' src={img} alt="images" /></SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Swipe