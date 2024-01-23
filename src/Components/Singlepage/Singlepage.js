import React, { useEffect ,useState} from 'react'
import "./Singlepage.css"
import { Link, useParams} from 'react-router-dom';
// import HeadTitle from "../../common/HeadTitle/HeadTitle";
import { IoMdArrowBack } from "react-icons/io";
// import AllItem from '../Destinations/Allitem';
import Sdata from '../Destinations/SData';
import EmptyFile from "../../common/EmptyFile/EmptyFile";
import Footer from '../../common/Footer/Footer';
const Explore= () => {
  const{id}=useParams()
  const[item,setItem]=useState(null)

  useEffect(()=>{
    let item=Sdata.find((item)=>item.id===parseInt(id))

    if(item){
      setItem(item)
    }
  },[id])
  return (
    <>
        {/* <HeadTitle/> */}
{item ? (


<section className='single-page top'>
    <div className='container'>
        <Link to='/where-we-fly' className='primary-btn1 back'>
        <i><IoMdArrowBack /></i>Go Back
        </Link>
        <article className='content flex'>
          <div className='main-content'>
            <img src={item.image} alt=''/>
            <p>{item.desc}</p>
            

            <div className='para flex_space'>
            <p>{item.sidepara}</p>
            <p>{item.sidepara1}</p>
            </div>
            <h1>Why {item.title}?</h1>
            <p>{item.desc1}</p>
            <div className='image grid1'>
              <img src={item.paraImage_one} alt=''/>
              <img src={item.paraImage_two} alt=''/>
           
          </div>
          </div>

        {/*
          <div className='box'>
          <img src="/images/india-1.jpg" alt=''/>
          </div>
        </div> */}
        </article>
    </div>
</section>

):(
  <EmptyFile/>
)}
<Footer/>
        </>
  )
}

export default Explore;