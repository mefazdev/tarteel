import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Prophetic() {
    return (
        <div >
            <Header/>

            <div className='prophetic'>
                <div className='prophetic__content'>
                <div className='path flex'>
                    <Link href='/' style={{textDecotation:'none', color:'inherit'}} >
                    <h5>Home</h5>
                    </Link>
                   
                   
         
              <h5>/</h5>
              <h5>Prophetic studies</h5>
               </div>

               <div className='tittle__video'>
               <video width="100%" height="10" autoPlay='autoplay'>
  {/* <source src="https://player.vimeo.com/external/475384931.hd.mp4?s=0acbf736be25da0019ba44e25011955b6432666a&profile_id=172&oauth2_token_id=57447761" type="video/mp4"/> */}
  <source src="https://static.videezy.com/system/resources/previews/000/019/849/original/buch10.mp4" type="video/mp4"/>
</video>
               </div>

               <div className='prophetic__topics gap-10 grid grid-cols-1 lg:grid-cols-2'>
             
               <Link href='/notWritten'>
             <div className='prophetic__topic' style={{backgroundImage:`url(${'https://images.unsplash.com/photo-1551041777-575d3855ca71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'})`}}>
                 <div className='prophetic__topic__bottom'>
                     <h3>Biography</h3>
                 </div>
               </div>
             </Link>
             <Link href='/notWritten'>
               <div className='prophetic__topic' style={{backgroundImage:`url(${'https://images.unsplash.com/photo-1586864498967-8d139571478d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'})`}}>
                 <div className='prophetic__topic__bottom'>
                     <h3>Hadith</h3>
                 </div>
               </div>
               </Link>
<Link href='/burdha'>
<div className='prophetic__topic' style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1616518883324-d7f5f1ce7e99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2xpbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'})`,backgroundPosition:'center'}}>
                 <div className='prophetic__topic__bottom'>
                     <h3>Burdhah</h3>
                 </div>
               </div>
</Link>
               
               
               </div>
               {/* <div className='prophetic__topics gap-10 grid grid-cols-1 lg:grid-cols-2'></div> */}
                </div>
               
            </div>
            <Footer/>
        </div>
    )
} 
