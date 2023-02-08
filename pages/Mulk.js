
import Header from '../components/Header'
import Link from 'next/link'
import Footer from '../components/Footer'
import { useState} from 'react'
export default function VideoList() {
    

    const [data, setData] = useState([
        {
            slno:'1 ',
          
            link:'https://www.youtube.com/embed/tc5PA1LOBwo'
       },
       {slno:'2 ',
            
            link:'https://www.youtube.com/embed/2140SxhyQW4'
       },
       {slno:'3 ',
         
            link:'https://www.youtube.com/embed/6YinDayxgOA'
       },
       {slno:'4',
         
       link:'https://www.youtube.com/embed/uDLomHX_uyk'
  },
 
  {slno:'5',
         
            link:'https://www.youtube.com/embed/pryUWuufAcE'
       },
      
       {slno:'6',
         
            link:'https://www.youtube.com/embed/GLESs_F3VDU'
       },
       {slno:'7',
         
            link:'https://www.youtube.com/embed/mk5m7O1ubwU'
       }
     
        
    ])
    return (
        <div >
             <Header/>
            <div className='video__list'>
                <div className='video__list__content ' >
                <div className="path flex">
                    <Link href='/'>
                    <h5>Home</h5>
                    </Link>
            
            <h5>/</h5>
            <Link href='/quran'>
            <h5>Quran</h5>
            </Link>
            
            <h5>/</h5>
            <Link href='thafseer'>
            <h5>Thafseer</h5>
            </Link>
           
            <h5>/</h5>
            <h5>Al-Mulk</h5>
            
          </div>
          <div className='video__list__videos gap-5 md:gap-10 grid  grid  lg:grid-cols-3'>
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


