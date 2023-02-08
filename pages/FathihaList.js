import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function VideoList() {
    const [data, setData] = useState([
        {
         caption:'Part 1',
         link:'https://www.youtube.com/embed/yuGcc0daWb0'
    },
    {
         caption:'Part 2',
         link:'https://www.youtube.com/embed/XLVJs0IFTC8'
},
    {
         caption:'Part 3',
         link:'https://www.youtube.com/embed/Y-kihMz0Oq0'
    },
    {
         caption:'Part 4',
         link:'https://www.youtube.com/embed/zpYuuD2nCSY'
    },
    {
        caption:'Part 5',
        link:'https://www.youtube.com/embed/3z2r65cPsHY'
   },
   {
    caption:'Part 6',
    link:'https://www.youtube.com/embed/P96PV4y0Uh4'
},
{
    caption:'Part 7',
    link:'https://www.youtube.com/embed/eVapUeo-J3I'
},
{
    caption:'Part 8',
    link:'https://www.youtube.com/embed/RKJCjk-LVOw'
},
{
    caption:'Part 9',
    link:'https://www.youtube.com/embed/CwK_amw7Oo8'
},
{
    caption:'Part 10',
    link:'https://www.youtube.com/embed/6Tq5FRfrCbs'
},
// {
//     caption:'Part 11',
//     link:''
// },

  
    ])
    return (
        <div>
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
          <div className='fathiha__list__videos gap-5 md:gap-10 grid  grid  lg:grid-cols-3'>
              {data.map((data,i)=>{
                  return(
                      <div className='fathiha__video__frame' key={i}>
                            <iframe id='fathiha__list__iframe' width="100%" height="200" src={data.link}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                           <div className='fathiha__video__caption flex'>
                               {/* <h6>{data.slno}</h6>   */}
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
