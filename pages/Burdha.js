
import Header from '../components/Header'
import Link from 'next/link'
import Footer from '../components/Footer'
import { useState} from 'react'
export default function VideoList() {
    

    const [data, setData] = useState([
        {
            slno:'1',
         
            link:'https://www.youtube.com/embed/WLVgDbL7f2A'
       },
       {slno:'2',
          
            link:'https://www.youtube.com/embed/ETzxFgB-Spo'
       },
       {
        slno:'3',
        link:'https://www.youtube.com/embed/nVHt5tefEXI'
       },
       {
        slno:'4',
        link:'https://www.youtube.com/embed/ggy1ULvvg_w'
       },
       {
        slno:'5',
        link:'https://www.youtube.com/embed/X-q1hTLcJPw'
       },
       {
        slno:'6',
        link:'https://www.youtube.com/embed/bTMaZg9cCys'
       },
       {
        slno:'7',
        link:'https://www.youtube.com/embed/R--7pinaoB8'
       },
       {
        slno:'8',
        link:'https://www.youtube.com/embed/Y5fYNe7QXdg'
       },
       {
        slno:'9',
        link:'https://www.youtube.com/embed/8oQIuV4N3oQ'
       },
       {
        slno:'10',
        link:'https://www.youtube.com/embed/BAi3YyckYtA'
       },
       {
        slno:'11',
        link:'https://www.youtube.com/embed/DCUTx-ZEN-Q'
       },
       {
        slno:'12',
        link:'https://www.youtube.com/embed/DCUTx-ZEN-Q'
       },
       {
        slno:'13',
        link:'https://www.youtube.com/embed/3kLGWQG0xAQ'
       },
       {
        slno:'14',
        link:'https://www.youtube.com/embed/XQsFJJBW-58'
       },
       {
        slno:'15',
        link:'https://www.youtube.com/embed/LG91Urc9SMY'
       },
       {
        slno:'16',
        link:'https://www.youtube.com/embed/HCIaqW2y_q8'
       },
       {
        slno:'17',
        link:'https://www.youtube.com/embed/avoyssy8lMU'
       },
       {
        slno:'18',
        link:'https://www.youtube.com/embed/WE1zgbptHIM'
       },
       {
        slno:'19',
        link:'https://www.youtube.com/embed/24EiLbN3yJU'
       },
       {
        slno:'20',
        link:'https://www.youtube.com/embed/TNi-j3CgEbU'
       },
       {
        slno:'21',
        link:'https://www.youtube.com/embed/wqLNnZtiNs8'
       },
       {
        slno:'22',
        link:'https://www.youtube.com/embed/58PJWRAraVQ'
       },
       {
        slno:'23',
        link:'https://www.youtube.com/embed/Ykprz8xayLg'
       },
       {
        slno:'24',
        link:'https://www.youtube.com/embed/IzUGI06cPDA'
       },
       {
        slno:'25',
        link:'https://www.youtube.com/embed/Nm9jMwh6NvI'
       },
       {
        slno:'26',
        link:'https://www.youtube.com/embed/hCtnDqspbrM'
       },
       {
        slno:'27',
        link:'https://www.youtube.com/embed/4axC_iJnbwY'
       },
       {
        slno:'28',
        link:'https://www.youtube.com/embed/lV5NmDrUy9A'
       },
       {
        slno:'29',
        link:'https://www.youtube.com/embed/ep8aSy-vi_c'
       },
       {
        slno:'30',
        link:'https://www.youtube.com/embed/0ehCrrFWcyQ'
       },
       {
        slno:'31',
        link:'https://www.youtube.com/embed/e02VozLVI6U'
       },
       {
        slno:'32',
        link:'https://www.youtube.com/embed/MVAhMH6gxUM'
       },

       {
        slno:'33',
        link:'https://www.youtube.com/embed/KmyaHWltwsA'
       
       },
       {
        slno:'34',
        link:'https://www.youtube.com/embed/T_uW_BW_LAQ'
       
       },
       {
        slno:'35',
        link:'https://www.youtube.com/embed/RnGQ6QQEMHk'
       
       },
     
       {
        slno:'36',
        link:''
       
       },
       {
        slno:'37',
        link:'https://www.youtube.com/embed/HQA2FbhOX7c'
       
       },
       {
        slno:'38',
        link:'https://www.youtube.com/embed/BrkV3zeMVf8'
       
       },
       {
        slno:'39',
        link:'https://www.youtube.com/embed/-VNSMnec2VY'
       
       }, {
        slno:'40',
        link:'https://www.youtube.com/embed/fFi8963eD5k'
       
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
          <div className='fathiha__list__videos gap-5 md:gap-10 grid  lg:grid-cols-3'>
              {data.map((data,i)=>{
                  return(
                      <div className='fathiha__video__frame' key={i}>
                            <iframe id='fathiha__list__iframe' width="100%" height="200" src={data.link}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                           <div className='fathiha__video__caption flex'>
                           <h6>Burda Line -</h6>
                               <h6>{data.slno}</h6>  
                              
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

