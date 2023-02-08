
import Header from '../components/Header'
import Link from 'next/link'
import Footer from '../components/Footer'
import { useState} from 'react'
export default function VideoList() {
    

    const [data, setData] = useState([
        {
            slno:'1 ',
          
            link:'https://www.youtube.com/embed/aReRQd9TVHA'
       },
       {slno:'2 ',
            
            link:'https://www.youtube.com/embed/syYeWaza4jU'
       },
       {slno:'3 ',
         
            link:'https://www.youtube.com/embed/YoCXIDrzrB8'
       },
       {slno:'4 ',
         
       link:'https://www.youtube.com/embed/XahqeVNc-aU'
  },
  {slno:'5 ',
         
  link:'https://www.youtube.com/embed/QW7vZdX9Mvs'
},
{slno:'6',
         
link:'https://www.youtube.com/embed/pITSuOJAQeY'
},
{slno:'7',
         
link:'https://www.youtube.com/embed/LI2JTl55o1k'
},
{slno:'8',
         
link:'https://www.youtube.com/embed/1NulXqsUxAs'
},
{slno:'9',
         
link:'https://www.youtube.com/embed/El5e0ijFyqI'
},
{slno:'10',
         
link:'https://www.youtube.com/embed/kOdfiRCW0hM'
},
{slno:'11',
         
link:'https://www.youtube.com/embed/3BmMYx0cHMA'
},
{slno:'12',
         
link:'https://www.youtube.com/embed/2uNeG8k5AEc'
},
{slno:'13',
         
link:'https://www.youtube.com/embed/zcfhLH1mgSs'
},
{slno:'14',
         
link:'https://www.youtube.com/embed/kkHJk7uM_n8'
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
            <h5>Yusuf</h5>
            
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