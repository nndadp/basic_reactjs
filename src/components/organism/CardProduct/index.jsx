import React from 'react'

export default function CardProduct(props) {
    const {children} = props;
  return (
    <>
    <div className=' flex flex-wrap rounded-lg bg-gradient-to-r from-pink-200 via-pink-200 to-pink-200 p-1 shadow-xl'>
        <div className='w-full max-w-xs bg-white rounded-lg'>{children}</div>
    </div>
    </>
  );
}

const Header = (props)=>{
    const {image} = props;
    return (
    <a href="#">
        <img src={image} alt="gambar" className='p-6 rounded-t-none col-span-2'/>
    </a>
    );
};

const Body = (props) => {
    const {title, children} = props;
    return (
        <>
            <div>
                <div className='px-5'>
                    <h5 className='text-2xl font-bold text-slate-900'>{title}</h5>
                    <p className="mt-3 text-slate-900 text-base ">{children}</p>
                </div>
            </div>
        </>
    );
};

const Price = (props) => {
    const {price} =  props;
    return (
        <>
            <div className='flex justify-center items-center'>
                <p> harga : {price} </p>
            </div>
            <div className='w-full px-4 mt-2 '>
                <button className='w-full mb-2 rounded-lg text-center text-white p-2 bg-pink-200'>Pesan</button>
            </div>
        </>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Price = Price;
