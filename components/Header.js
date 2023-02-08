import Link from 'next/link'
import { useRouter }  from "next/router";
import logo from '../public/images/logo1.png'
import Image from 'next/image'
// import SearchIcon from '@mui/icons-material/Search';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
 
// import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react'

export default function Header() {
    const router = useRouter();
    const [state, setstate] = useState(false)
    return (
        <>
        <div className='header shadow  flex justify-between '>
               <div className='logo'>
                    <Image src={logo} />
                </div>
                <div className='justify-between  w-full hidden md:visible md:flex'>
                <div className='header_items justify-between max-w-2xl flex   '>
           <Link href='/'><h6 className={router.pathname == "/" ? "active__nav" : "header_items__h6"}>Home</h6></Link>
           <Link href='/about'><h6 className={router.pathname == "/about" ? "active__nav" : "header_items__h6"}>About</h6></Link>
           <Link href='/languages'><h6 className={router.pathname == "/languages" ? "active__nav" : "header_items__h6"}>Languages</h6></Link>
           <Link href='/topics'><h6 className={router.pathname == "/topics" ? "active__nav" : "header_items__h6"}>Topics</h6></Link>
           <Link href='/contact'><h6 className={router.pathname == "/contact" ? "active__nav" : "header_items__h6"}>Contact</h6></Link>
 
            </div>

            <div className='header__right justify-between '>
           {/* <SearchIcon id='header__icon'/>
           <PermIdentityIcon id='header__icon'/> */}
       
            </div>
         
                </div>
           
                {/* < MenuIcon onClick={()=>setstate(!state)} id='menu__icon' className=' md:invisible'/> */}
           
           
        </div>
       {state ?
         <div className='collpase md:hidden'>
         <div className='collapse__row'>
         <Link href='/'><h6 className={router.pathname == "/" ? "active__collapse" : "collapse__item"}>Home</h6></Link>
          <Link href='/about'><h6 className={router.pathname == "/about" ? "active__collapse" : "collapse__item"}>About</h6></Link>
          <Link href='/languages'><h6 className={router.pathname == "/languages" ? "active__collapse" : "collapse__item"}>Languages</h6></Link>
          <Link href='/topics'><h6 className={router.pathname == "/topics" ? "active__collapse" : "collapse__item"}>Topics</h6></Link>
          <Link href='/contact'><h6 className={router.pathname == "/contact" ? "active__collapse" : "collapse__item"}>Contact</h6></Link>
         </div>
       </div>
       
       :''}
      
        </>
    )
}
   