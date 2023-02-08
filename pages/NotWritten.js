import Header from '../components/Header'
import Image from 'next/image'
import Footer from '../components/Footer'
export default function NotWritten() {
    return (
        <div>
  <Header/>

        <div style={{height:'100vh',background:'#ffff',alignItems:'center',display:'flex'}}>
          

            <div style={{   width:'100%'}}>
                <h1 style={{textAlign:'center',fontSize:'50px',fontWeight:'800'}}>ERROR 404</h1>
              <h3 style={{textAlign:'center',fontSize:'30px',fontWeight:'600'}}>This page is not  written yet</h3>
            </div>
            <div>

           
       
        
          </div>   </div>
          <Footer/>
        </div>
    )
}
