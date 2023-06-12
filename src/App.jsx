import Component from "./belajar/componentProps"
function App() {

  return(  
    // simbol <> = fragment sebagai parent dari suatu komponen
   <>
   <div className="flex flex-col justify-center items-center min-h-screen">
    {/* cara menambgkan style yang tidak ada di tailwind menggunakan arbirari auat kurung siku 
    seperti tect cokolor di bawah ini */}
    <Component textColor ="text-sky-500" text="YA GINI"/> 
    {/* atau bisa "text-[#111827]" */}
   </div>
   </>
  );

}

export default App
