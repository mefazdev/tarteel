
import Header from '../components/Header'
import Link from 'next/link'
import Footer from '../components/Footer'
import { useState} from 'react'
export default function Alasr() {
    

    const [data, setData] = useState([
        {
            slno:'1.',
            caption:'Caption',
            link:'https://www.youtube.com/embed/Nqn1YIjR0wc'
       },
       {slno:'2.',
            caption:'Caption',
            link:'https://www.youtube.com/embed/Nqn1YIjR0wc'
       },
       {slno:'3.',
            caption:'Caption',
            link:'https://www.youtube.com/embed/Nqn1YIjR0wc'
       },
     
        
    ])
    return (
        <div >
             <Header/>
            <div className='fathiha__list'>
                <div className='fathiha__list__content ' >
                <div className="path flex">
                    <Link href='/'>
                    <h5>Home</h5>
                    </Link>
            
            <h5>/</h5>
            <h5>Prohetic studies</h5>
            <h5>/</h5>
            <h5>Biography</h5>
            
          </div>
          <div className='fathiha__list__videos gap-5 md:gap-10 grid gap-10 grid  lg:grid-cols-3'>
              {data.map((data,i)=>{
                  return(
                      <div className='fathiha__video__frame' key={i}>
                            <iframe id='fathiha__list__iframe' width="100%" height="200" src={data.link}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                           <div className='fathiha__video__caption flex'>
                               <h6>{data.slno}</h6>  
                               <h6>{data.caption}</h6>
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

