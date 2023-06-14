import React from 'react'
import CardProduct from '../components/organism/CardProduct'
import Footer from '../components/molecules/Footer';
import Navbar from '../components/molecules/Navbar';


const data = [{
  id:1,
  image: "public/images/biskuit.jpeg",
  title: " Es batu",
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price: "50.000"
},
{
  id:2,
  image: "public/images/donat.jpeg",
  title: " Es batu",
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price: "40.000"
},
{
  id:3,
  image: "public/images/cupcake.jpeg",
  title: " Es batu",
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
  price: "40.000"
},
{
  id:4,
  image: "public/images/sandwich.jpeg",
  title: " Es batu",
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price: "40.000"
},
{
  id:5,
  image: "public/images/macarron.jpeg",
  title: " Es batu",
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price: "40.000"
},
{
  id:5,
  image: "public/images/roti.jpeg",
  title: " Es batu",
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price: "40.000"
},
];

export default function ProductPage() {
  return (
    <>
     <Navbar/>
     <br />
     <h1 className='text-center text-2xl font-bold text-slate-900'>CARD LIST</h1>
     <br />
    <div className='flex flex-wrap justify-center items-center gap-6'>
    {/* <CardProduct>
        <CardProduct.Header image="public/images/ice.png" />
        <CardProduct.Body className="flex justify-center"  title="Es Batu">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, animi quam quasi placeat distinctio voluptatem repellat?
        </CardProduct.Body>
        <CardProduct.Footer price=" 50.000"/>
    </CardProduct> */}
    {data.map((product) =>(
      <CardProduct key= {product.id}>
        <CardProduct.Header image={product.image}/>
        <CardProduct.Body title={product.title}>
            {product.desc}
        </CardProduct.Body>
        <CardProduct.Price price={product.price}/>
    </CardProduct>
     ))}
     <Footer/>
    </div>
    </>
  );
}


