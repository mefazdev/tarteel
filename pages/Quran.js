import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Quran() {
    return (
        <div >
            <Header/>

            <div className='quran'>
                <div className='quran__content'>
                <div className='path flex'>
              <h5>Home</h5>
              <h5>/</h5>
              <h5>Quran</h5>
               </div>

               <div className='tittle__video'>
               <video width="100%" height="240" autoPlay='autoplay' >
               <source src="https://static.videezy.com/system/resources/previews/000/019/849/original/buch10.mp4" type="video/mp4"/>

</video>
               </div>

               <div className='quran__topics gap-10 grid grid-cols-1 lg:grid-cols-2'>
             
               <Link href='/notWritten'>
               <div className='quran__topic__two'>
                 <div className='quran__topic__bottom'>
                     <h3>RECITATION</h3>
                 </div>
               </div>
               </Link>
             <Link href='thafseer'>
             <div className='quran__topic'>
                 <div className='quran__topic__bottom'>
                     <h3>THAFSEER</h3>
                 </div>
               </div>
             </Link>
               
             
               </div>
                </div>
               
            </div>
            <Footer/>
        </div>
    )
} 
