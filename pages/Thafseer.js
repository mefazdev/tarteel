import Header from "../components/Header";
import Footer from "../components/Footer";
// import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useState } from "react";
import Link from "next/link";
export default function Thafseer() {
  const [data, setData] = useState([
    { 
      slNo: "1.",
       surah: "Al-Fathiha",
        link: "/FathihaList" 
    },
    { 
      slNo: "12.",
       surah: "Yusuf",
        link: "/Yoosuf" 
    },
    { 
      slNo: "56.",
       surah: "Al-Waqi'ah",
        link: "/Waqia" 
    },
    { 
      slNo: "67.",
       surah: "Al-Mulk",
        link: "/Mulk" 
    },
    { 
      slNo: "93.",
       surah: "Ad-Duhaa",
        link: "/Duha" 
    },
    { 
      slNo: "94.",
       surah: "As-Sharh",
        link: "/Sharh" 
    },
    { 
      slNo: "95.",
       surah: "At-Tin",
        link: "/Theen" 
    },
    { 
      slNo: "96.",
       surah: "Al-'Alaq",
        link: "/Theen" 
    },
    { 
      slNo: "97.",
       surah: "Al-Qadr",
        link: "/Qadr" 
    },
    { 
      slNo: "98.",
       surah: "Al-Bayyinah",
        link: "/Qadr" 
    },
    { 
      slNo: "99.",
       surah: "Az-Zalzalah",
        link: "/Zalzalah" 
    },
    { 
      slNo: "100.",
       surah: "Al-'Adiyat",
        link: "/Adiyat" 
    },
    { 
      slNo: "101.",
       surah: "Al-'Qari'ah",
        link: "/Qaria" 
    },
    { 
      slNo: "102.",
       surah: "At-Takathur",
        link: "/Takathur" 
    },
    { 
      slNo: "103.",
       surah: "Al-'Asr",
        link: "/Alasr" 
    },
    { 
      slNo: "104.",
       surah: "Al-'Humazah",
        link: "/Humaza" 
    },
    { 
      slNo: "105.",
       surah: "Al-Fil",
        link: "/Alfil" 
    },
    { 
      slNo: "106.",
       surah: "Al-Quraish",
        link: "/Quraish" 
    },
    { 
      slNo: "107.",
       surah: "Al-Ma'un",
        link: "/Maoon" 
    },
    { 
      slNo: "108.",
       surah: "Al-kawthar",
        link: "/Kawthar" 
    },
    { 
      slNo: "109.",
       surah: "Al-Kafirun",
        link: "/Kafirun" 
    },
    { 
      slNo: "110.",
       surah: "Aa-Nasr",
        link: "/Nasr" 
    },
    { 
      slNo: "111.",
       surah: "Al-Masad",
        link: "/Masad" 
    },
    { 
      slNo: "112.",
       surah: "Al-Ikhlas",
        link: "/Ikhlas" 
    },
    { 
      slNo: "113.",
       surah: "Al-Falaq",
        link: "/Falaq" 
    },
    { 
      slNo: "114.",
       surah: "An-Nas",
        link: "/Nas" 
    },
  ]);
    
  return (
    <div>
      <Header />

      <div className="thafseer">
        <div className="thafseer__content">
       
          <div className="path flex">
            <h5>Home</h5>
            <h5>/</h5>
            <h5>Quran</h5>
            <h5>/</h5>
            <h5>Thafseer</h5>
          </div>

          <div className="tittle__video">
            <video width="100%" height="240" autoPlay='autoplay'>
            <source src="https://static.videezy.com/system/resources/previews/000/019/849/original/buch10.mp4" type="video/mp4"/>
            </video>
          </div>

          <div className="thafseer__list">
            {data.map((data,i) => {
              return (
                <Link href={data.link} key={i}>
                  <div className="thafseer__item justify-between">
                    <div className="thafseer__item__left flex align-middle">
                      <p>{data.slNo}</p>
                      <p>{data.surah}</p>
                    </div>

                    {/* <PlayCircleIcon id="play__button" /> */}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


