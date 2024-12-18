"use client";
import Header from "@/Components/Navbar"; 

// Creating a component 
export default function Home() {
  return (

       // BG color 
      <main className="bg-[#252B42] min-h-screen min-w-full">

        {/* Navbar  */}
        <Header />

        {/* Intro Section  */}
        <h5 className="text-[#23A6F0] justify-center text-center mt-28 font-montserrat">Welcome</h5>

        <h1 className="justify-center text-center mt-8 font-montserrat text-white text-4xl font-bold">Selling on the <br />internet like a pro</h1>

        <h4 className="justify-center text-center mt-9 font-montserrat text-white">We know how large objects will act, but things on a <br />small scale just do not act that way.</h4>
        
        {/* Buttons  */}
        <div className="flex justify-center gap-4 mt-9">

          <button className="font-montserrat bg-[#23A6F0] px-7 py-3 rounded text-xs text-white font-bold">
            Get Quote Now
          </button>

          <button className="font-montserrat bg-transparent px-7 py-3 rounded text-xs text-[#23A6F0] font-bold border border-[#23A6F0]">
            Learn More
          </button>

       </div>

                 {/* Card Section  */}
       <div className="flex justify-center gap-10 mt-16">

                 {/* 1st Card  */}
        <div className="bg-white flex w-64 h-60 mt-20 mb-12 flex-col">

          <section className="bg-[#FFDCD1] h-[60px] w-[55px] m-6 rounded"></section>

          <h3 className="text-black text-[13px] font-medium ml-6 font-montserrat">training Courses</h3>

          <section className="bg-[#E74040] h-[2px] w-8 mt-4 ml-6"></section>

          <p className="text-[#737373] text-[14px] mt-3 ml-6 font-montserrat">The gradual accumulation of <br />information about atomic and <br />small-scale behaviour...</p>

        </div>

                 {/* 2nd card  */}
        <div className="bg-white flex w-64 h-60 mt-20 mb-12 flex-col">

        <section className="bg-[#B9EAA8] h-[60px] w-[55px] m-6 rounded"></section>

        <h3 className="text-black text-[13px] font-medium ml-6 font-montserrat">2,769 online courses</h3>

        <section className="bg-[#E74040] h-[2px] w-8 mt-4 ml-6"></section>

        <p className="text-[#737373] text-[14px] mt-3 ml-6 font-montserrat">The gradual accumulation of <br />information about atomic and <br />small-scale behaviour...</p>

        </div>
                 {/* 3rd card  */}
        <div className="bg-[#23A6F0] flex w-64 h-60 mt-20 mb-12 flex-col">

        <section className="bg-white h-[60px] w-[55px] m-6 rounded"></section>

        <h3 className="text-white text-[13px] font-medium ml-6 font-montserrat">training Courses</h3>

        <section className="bg-white h-[2px] w-8 mt-4 ml-6"></section>

        <p className="text-white text-[14px] mt-3 ml-6 font-montserrat">The gradual accumulation of <br />information about atomic and <br />small-scale behaviour...</p>

        </div>

       </div>
       
      </main>
  );
}

