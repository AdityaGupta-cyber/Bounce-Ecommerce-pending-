import React from 'react';
import { Navbar } from './components/Navbar';
import { redirect } from 'next/navigation';
import { auth } from './lib/auth';

const Home = async () => {

  const session = await auth();

  // if (session?.user) {
  //   return redirect("/dashboard");
  // }

  return (
    <div   data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full px-5  lg:h-screen sm:h-screen sm:mb-10 md:mb-0 md:h-[70vh]'>
      <div className=" textstructure mt-5 text-7xl w-full md:px-20 px-5 ">
        <h1 className='font-bold uppercase md:text-[7.5vw] text-[10vw] md:leading-[7.5vw] leading-[12vw] tracking-tighter'>We Deliver</h1>
        <h1 className='font-bold flex gap-1 uppercase md:text-[7.5vw] text-[10vw] md:leading-[7.5vw] leading-[12vw] tracking-tighter items-center'>
          <motion.div initial={{width:'0',borderRadius:"0px"}} animate={counter && {width:"7.5vw",borderRadius:'10px'}} transition={{ease:[0.64, 0, 0.78, 0],duration:'0.7'}} className="w-[7.5vw] h-[5vw] relative top-[0.5vw] bg-black md:flex hidden "></motion.div>
          <motion.div initial={{width:'0',borderRadius:"0px"}} animate={counter && {width:"9vw",borderRadius:'5px'}} transition={{ease:[0.64, 0, 0.78, 0],duration:'0.7'}} className="w-[7.5vw] h-[7vw] relative top-[0.5vw] bg-black sm:flex md:hidden lg:hidden "></motion.div>
          Eye Opening</h1>
        <motion.h1 initial={{color:"black"}} animate={counter && {color:'#ef4444'}}  className='font-bold  uppercase md:text-[7.5vw] text-[10vw] md:leading-[7.5vw] leading-[12vw] tracking-tighter '>Solutions</motion.h1>
      </div>
      

      <div className="border-t-2 w-full flex  flex-col md:flex-row gap-[2rem] justify-around border-zinc-700 md:mt-[20rem] mt-28 py-3">
       { ['For Brands','For Companies','For Celebs'].map((item,index)=> <p key={index} className='text-md font-light'>{item}</p>)}
       <button className=" flex items-center justify-center gap-2  w-fit py-2  px-2 rounded-full border-zinc-900 border-2 font-semibold text-zinc-900 ">
          <span className="text-md   border-radius-[20%] tracking-wider">CONTACT US</span>
     
        </button>
      </div>
      {/* <div className="absolute top-[50%] left-1/2 -translate-x-2/4 -translate-y-2/4 rounded-lg">
        <img src="Rectangle 51.png" className='' alt="" />
      </div>

      <div className="absolute flex flex-col w-1/3 text-3xl gap-10 top-1/3 right-0 tracking-tight font-bold">
        <div className="leading-[3vw]">
          <h1 className='tag'>FOR BRANDS</h1>
          <h1 className='tag'>FOR COMPANIES</h1>
          <h1 className='tag'>FOR CELEBS</h1>
        </div>
        
     


        <button className="h-5 mt-5 flex items-center gap-2">
          <span className="text-6xl underline underline-offset-8 tracking-wider">CONTACT US</span>
          <img src='Line 23.svg' className='w-12' />
        </button>
      </div> */}
{/* 
      <div className="absolute bottom-10 left-20 w-[60%]">
          <img src="splash1.png" className="w-[60%]" alt="" />
        </div> */}
    </div>
  );
};

export default Home;
