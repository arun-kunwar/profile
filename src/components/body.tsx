
import RA from "./images/AKC.png";

function Body() {
  return (
    <div className="bg-gray-900   flex  justify-between items-center px-10 ">

    {/* Desktp*/}
   <div className="text-left mb-[160px] hidden md:block">
        <h1 className="text-5xl font-bold  text-white pb-5">
          Arun <br /> Kunwar.
        </h1>
        <p className="text-white font-bold  py-3">
          <a href="https://www.instagram.com/arun.kunwar.47" className="hover:text-orange-600 cursor-pointer">Instagram</a> 
           |<a href="https://www.facebook.com/arun.kunwar.47"  className="hover:text-orange-600 cursor-pointer"> Facebook</a> <br />
           <a href="#"  className="hover:text-orange-600 cursor-pointer">Whatsapp</a> |
           <a href="#"  className="hover:text-orange-600 cursor-pointer"> Linkden</a> .
        </p>
        <button className="bg-gray-900 text-orange-500 border-2 px-6 py-3  rounded-lg font-semibold">
         <a href=""></a> Contact me
        </button>
      </div>
      
       <div className=" hidden md:flex justify-center mt-12 items-center">
        <img src={RA} alt="Profile" className="w-100 h-101 " />
      </div>
      
       <div className="mb-[150px] hidden md:block">
        <h2 className="text-yellow-500 font-bold">INTRODUCTION</h2>
        <h2 className="text-white text-3xl  font-bold mb-4">
         App Developer,<br />Web Developer,<br />Video Editor.
        </h2>
        <p className="text-white leading-relaxed ">
        I am an aspiring digital professional with a basic <br /> understanding of App Development, Web Development, and <br /> Video Editing
        . I am eager to learn and grow in these <br /> areas and am excited about gaining hands-on experience.
        </p>
      </div> 

   
      { /* moblie phone */}
   <div className="container bg-gray-900  mx-auto max-w-full h-full text-white p-4 md:hidden">

        <div className="mb-20 text-center md:hidden">
            <h1 className="text-xl font-bold">Arun Kunwar</h1>
            <p className="font-bold mt-2"> <a href="https://www.instagram.com/arun.kunwar.47"  className="hover:text-orange-600 cursor-pointer">Instagram </a> 
              | <a href="https://www.facebook.com/arun.kunwar.47" className="hover:text-orange-600 cursor-pointer">Facebook</a> <br /> 
            <a href="#"  className="hover:text-orange-600 cursor-pointer">Whatsapp </a>
             | <a href="#"  className="hover:text-orange-600 cursor-pointer">Linkden </a></p>
            <button className="bg-gray-900 text-orange-500 border-2 border-orange-500 rounded-lg font-semibold px-4 py-2 mt-5">Contact me</button>
        </div>

       
        <div className="mb-4 ml-2 flex  justify-center   md:hidden">
            <img src={RA} alt="Profile" className="w-70 h-70  "/>
        </div>

      
        <div className="text-center  md:hidden">
            <h2 className="text-yellow-500 font-bold">INTRODUCTION</h2>
            <p className="leading-relaxed">I am an aspiring digital professional with a basic understanding of App Development, Web Development, and Video Editing. I am eager to learn and grow in these areas and am excited about gaining hands-on experience.</p>
        </div>
    </div>

    </div>
  
)
}

export default Body;
