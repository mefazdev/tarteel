
import Header from '../components/Header'
import Link from 'next/link'
import Footer from '../components/Footer'
import { useState} from 'react'
export default function VideoList() {
    

    const [data, setData] = useState([
        {
            slno:'1 ',
          
            link:'https://www.youtube.com/embed/QGabFb_AqR4'
       },
       {slno:'2 ',
            
            link:'https://www.youtube.com/embed/ma1AEAwWH4M'
       },
       {slno:'3 ',
         
            link:'https://www.youtube.com/embed/6faxTp8bYlk'
       },
       {slno:'4 ',
         
       link:'https://www.youtube.com/embed/FtCk0SUw3C8'
  },
  {slno:'5 ',
         
  link:'https://www.youtube.com/embed/oIzIWCL2ldw'
},
{slno:'6',
         
link:'https://www.youtube.com/embed/So9xkyhg-XM'
},
{slno:'7',
         
link:'https://www.youtube.com/embed/rGRTM3djFL4'
},
{slno:'8',
         
link:'https://www.youtube.com/embed/HU5_CgkSVQE'
},
{slno:'9',
         
link:'https://www.youtube.com/embed/jy2fVWtPGfo'
},
{slno:'10',
         
link:'https://www.youtube.com/embed/35I9XsBIshw'
},
{slno:'11',
         
link:'https://www.youtube.com/embed/VqlXTRD7DjM'
},
{slno:'12',
         
link:'https://www.youtube.com/embed/DOG3_uvM5KU'
},
{slno:'13',
         
link:'https://www.youtube.com/embed/iwwqQR4CJQ4'
},
      
     
        
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
            <h5>Al-Waqi`&lsquo;`ah</h5>
            
          </div>
          <div className='video__list__videos gap-5 md:gap-10 grid  lg:grid-cols-3'>
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

