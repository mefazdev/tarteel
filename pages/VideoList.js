
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState} from 'react'
export default function VideoList() {
    

    const [data, setData] = useState([
        {
            slNo:'',
            caption:'',
     
        }
    ])
    return (
        <div >
             <Header/>
            <div className='fathiha__list'>
                <div className='fathiha__list__content ' >
                <div className="path flex">
            <h5>Home</h5>
            <h5>/</h5>
            <h5>Quran</h5>
            <h5>/</h5>
            <h5>Thafseer</h5>
            <h5>/</h5>
            <h5>Al-Fathiha</h5>
          </div>
          <div className='fathiha__list__videos gap-10 grid  lg:grid-cols-3'>
          {data.map((data,i)=>{
                  return(
                    <div className='video__list__video__frame' key={i}>
                    <iframe id='video__list__iframe' width="100%" height="200" src={data.link}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                   <div className='video__list__video__caption flex'>
                       <h6>Part {data.slno}</h6>  
                       {/* <h6>{data.caption}</h6> */}
                   </div>
                  </div>
                  
                  )
              })}
          </div>
               

                </div>
            </div>
            <Footer/>

        </div>
    )
}

