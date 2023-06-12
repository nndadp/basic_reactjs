
// nested component = komponen dalam komponen
// cara ke 1 pake function biasa
function Button(){
    return <button className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white">button</button>
}

// pake cara anon function
//   props (properti) = atgumen/parameter yang bisa di kirim ke komponen lainnya
//   fungsinya agar kita bisa mengkustomisasi komponen yang kita buat
const Button2 =(props) => {
    // dibawah ini adalah cara ngasih nilai default kedalem props (dalam contoh ini isi 'text')
    const {text ="....." }= props;
    // dibawah ini adalah cara menggunakan props
    return <button className= {`h-10 px-6 font-semibold rounded-md ${props.color} text-white`}>{text}</button>
};

const Button3 =(props) => {
    // dibawah ini adalah cara ngasih nilai default kedalem props (dalam contoh ini isi 'text')
    const { color = "bg-black", children} = props;
    // dibawah ini adalah cara menggunakan props
    return <button className= {`h-10 px-6 font-semibold rounded-md ${color} text-black`}>{children}</button>
};
export default function Component(props) {
    return (
        <>
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-5xl font-bold text-center">HAYOOO</h1>
        </div>
        <div className="flex justify-center items-center gap-x-4">
          <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">button</button>
          <button className="h-10 px-6 font-semibold rounded-md bg-gray-300 text-black">button</button>
          {/* <Button/> */}
          <Button color="red"/>
          {/* dibawah ini cara memanggil props yang dikirim dari komponen */}
          <Button2 color="bg-pink-500" text="Login" />
          <Button2 color="bg-violet-500"/>
          <Button3 color="bg-cyan-200">
            Logout
          </Button3>
        </div>
        </>
      );
    }

