import Header from '../components/Header'
import Footer from '../components/Footer'
export default function VideoPlayer(props) {
    const {link} = props
    return (
        <div >
            <Header/>
            <div className='video__player'>
                <div className='video__content'>
                    
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/Nqn1YIjR0wc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>  
            </div>
            <Footer/>
        </div>
    )
}
