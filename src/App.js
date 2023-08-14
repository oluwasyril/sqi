import logo from './logo.svg';
import './App.css';
import {BiChevronDown,BiChevronUp, BiLogoLinkedin,BiLogoTwitter,BiLogoFacebook,BiMenu} from "react-icons/bi"
import {BsShareFill} from "react-icons/bs"



function App() {
  return (
    <>
      <div className='all-nav'>
        <nav>
          <div className='left-nav'>
            <div> <img src="https://edu.sqi.ng/wp-content/uploads/2019/01/co.jpg" alt="" /></div>
          </div>
          <div className='right-nav'>
            <div className='about'>
                <p>About</p>
                <p className='down'><BiChevronDown/></p>
                <div className='all-about-content'> 
                  <div className="about-content">
                    <div className='about-text'>
                      <div>Our Story</div>
                      <div>Our Team</div>
                      <div>Campus Info</div>
                    </div>
                  </div>
                </div>
            </div>

            <div className='program'>
              <p>Programmes</p>
              <p className='down'><BiChevronDown/></p>
              <div className='all-program-content'> 
                  <div className="program-content">
                    <div className='program-text'>
                      <div>National Innovation Diploma</div>
                      <div> Professional Diploma Program</div>
                      <div> Executive Professional Certificate <br /> Programme</div>
                    </div>
                  </div>
                </div>
            </div>

            <div className='admission'>
              <p>Admissions</p>
              <p className='down'><BiChevronDown/></p>
              <div className='all-admin-content'> 
                  <div className="admin-content">
                    <div className='admin-text'>
                      <div>Apply for a Programme</div>
                      <div>Mode of Study</div>
                      <div> Tuition</div>
                      <div>Frequently Asked Questions</div>
                    </div>
                  </div>
                </div>
            </div>

            <div className='portal'> 
              <p>E-portal</p>
              <p className='down'><BiChevronDown/></p>
              <div className='all-about-content'> 
                  <div className="about-content">
                    <div className='about-text'>
                      <div>Student</div>
                      <div>Staff</div>
                    </div>
                  </div>
                </div>
            </div>

            <div className='sqi'>
              <p>SQI Scholarship</p>
            
            </div>

            <div className='news'>
              <p>News</p>
              
            </div>
          </div>
        </nav>




           {/* new menu */}





        <div className="new-nav">
          <div className="all-new-nav">
              <div className="new-left">
                <div> <img src="https://edu.sqi.ng/wp-content/uploads/2019/01/co.jpg" alt="" /></div>
              </div>
              <div className="new-right">
                <div className='nav-btn'> <button> <BiMenu className='bimenu'/> </button></div>
                <div className="new-menu-content">
                    <div className="all-nav-menu">
                      <div className='new-about'>About </div>
                        <div className="all-story">
                          <div>Our Story</div>
                          <div>Our Team</div>
                          <div>Campus Info</div>
                        </div>
                      <div className='new-program'> Programmes</div>
                        <div className="all-story">
                          <div>Our Story</div>
                          <div>Our Team</div>
                          <div>Campus Info</div>
                        </div>
                      
                      <div className='new-admission'> Admissions</div>
                        <div className="all-story">
                            <div>Our Story</div>
                            <div>Our Team</div>
                            <div>Campus Info</div>
                          </div>
                      <div className='new-portal'>E-Portal</div>
                        <div className="all-story">
                            <div>Our Story</div>
                            <div>Our Team</div>
                            <div>Campus Info</div>
                          </div>
                      <div className='new-sqi'> SQI Scholarship</div>
                      <div className='new-news'>News</div>
                    </div>
                </div>
              </div>
          </div>



        </div>

        
      </div>

      <div className="left-side">
          <div className="facebook"></div>
          <div className="twitter"></div>
          <div className="linkdin"></div>
      </div>

      <div className="new-left-side">
        <div className="for-share">
        <div className='share'> <button> <BsShareFill/></button></div>
        <div className="share-content">
            <div className="share-text">
                <p>Share This <BiChevronDown/></p>
            </div>
            <div className="share-social">
              <div className="new-facebook">
                <p>  <BiLogoFacebook/></p>
                <p> <a href="https://web.facebook.com/sqicict"> https://web.facebook <br /> .com/sqicict</a></p>
              </div>
              <div className="new-twitter">
                  <p> <BiLogoTwitter/></p>
                  <p> <a href="https://twitter.com/sqicict"> https://twitter.co <br /> m/sqicict </a> </p>
              </div>
              <div className="new-linkedln">
                    <p><BiLogoLinkedin/></p>
                    <p><a href="https://www.linkedin.com/company/sqicict/">https://www.linkedin.com <br /> /company/sqicict/</a></p>
              </div>
            </div>
        </div>
        </div>
      
      </div>

      <div className="down-side">
        <div className="whatsapp"></div>
        <div className="whatsapp-text"> Need Help?  <span>Chat with us</span></div>
      </div>
    </>
  );
}

export default App;
