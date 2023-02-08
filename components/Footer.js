import SendIcon from '@mui/icons-material/Send';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Footer() {
  return (
    <div className="footer ">
      <div className="footer__content grid grid-cols-2 md:grid-cols-3 ">
      

          <div className="links ">
            <h4>Useful links</h4>
            <p>Home</p>
            <p>About</p>
            <p>Topics</p>
            <p>Contact</p>
          </div>
          <div className="policy">
               <h4>Policy</h4>
               <p>Terms of use</p>
               <p>Privacy</p>
               <p>Security</p>
               <p>Cookiey policy</p>
               
      
        </div>
        <div className="footer__form">
               <h4>Join our newsletter</h4>
              <h6>Signup to be the first to hear about exclusive deals, special offers and upcoming collections</h6>
              <div className="form__input__div">
                <input placeholder="Enter email address" type="email" />
                <div className="footer__icon__div">
                  <SendIcon type="button" id="footer__icon" />
                </div>
              </div>

              <div className='footer__icon'>
<YouTubeIcon id='footer__icons'/>
<FacebookIcon id='footer__icons'/>
<InstagramIcon id='footer__icons'/>
<TwitterIcon id='footer__icons'/>
        </div>
        </div>

        
      </div>
    </div>
  );
}
