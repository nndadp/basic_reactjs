
export default function Button(props) {
    const { color = "bg-black", children} = props;
    // dibawah ini adalah cara menggunakan props
    return <button className= {`h-15 py-1 px-6 font-semibold rounded-md ${color} text-black`}>{children}</button>;
}

