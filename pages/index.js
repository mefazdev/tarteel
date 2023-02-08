import Head from "next/head";
import Header from "../components/Header";
import MostViewed from '../components/MostViewed'
import Latest from '../components/Latest'
import Footer from "../components/Footer";
import Link from "next/link";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function Home() {

 
  return (
    <div>
      <Head>
        <title>Tharteel quran international</title>
        <link rel="icon" href="/favicon.ico" />
     
     
        <style>
@import url(&apos;https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap&apos;);
</style>
      </Head>

      <Header /> 
      
    
  
      <div className="home">
        <div className="home__hero">
<div className="home__hero__div">
  <h1>Tarteel </h1>
  <h4>Qu&apos;ran international</h4>
</div>

        </div>

       
        <div className="home__types__row ">
          <h1>Choose your Topic</h1>
          <div className="home__types grid md:grid-cols-2 lg:grid-cols-3">
           <Link href='/quran'>
           <div className="home__type__item">
              <div className="home__types__name flex">
                <div className="home__types__box"></div>
                <h2>Quran</h2>
              </div>
            </div>
           </Link>
            

            <Link href='/prophetic'>
            <div className="home__type__item__six">
              <div className="home__types__name flex">
                <div className="home__types__box"></div>
                <h2>Prophetic studies</h2>
              </div>
            </div>
            </Link>
            <Link href='/notWritten'>
            <div className="home__type__item__two">
              <div className="home__types__name flex">
                <div className="home__types__box"></div>
                <h2>Arabic</h2>
              </div>
            </div>
            </Link>
          </div>

          <div className="home__types__second__row grid md:grid-cols-2 lg:grid-cols-3">
          <Link href='/notWritten'>
          <div className="home__type__item__three">
              <div className="home__type__content">
                <div className="home__types__name flex">
                  <div className="home__types__box"></div>
                  <h2>Fiqh</h2>
                </div>
              </div>
            </div>
            </Link>
            <Link href='/notWritten'>
            <div className="home__type__item__four">
              <div className="home__types__name flex">
                <div className="home__types__box"></div>
                <h2>Tasawwuf</h2>
              </div>
            </div>
            </Link>
            <Link href='/notWritten'>
            <div className="home__type__item__five">
              <div className="home__types__name flex">
                <div className="home__types__box"></div>
                <h2>Theology</h2>
              </div>
            </div>
           </Link>
            
          </div>
       
        </div>
       {/* <MostViewed /> */}

       {/* <Latest/> */}
    

      
      </div>
    <Footer/>
    </div>
  );
}
