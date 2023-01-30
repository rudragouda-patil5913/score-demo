import React from 'react';
import styled from 'styled-components';
import {footer,footer2, ios, googleplay} from '../images'

const Footer = () => {
  return (
   <Wrapper>
      <img src={footer} className='footer-img'  alt='footer-img'/>
    <section>
      <div className='footer-parent'>
        <div className='footer-child fc-1'>
         <img src={footer2} className='footer2-img'  alt='footer-img'/>
        </div>
        <div className='footer-child fc2'>
          <h1>Learn from Anywhere at your convenience.</h1>
          <div>
            <img src={googleplay} className='google-play' alt='google-play' />
            <img src={ios} className='google-play' alt='google-play' />
            <img src={ios} className='google-play' alt='google-play' />
          </div>
          <div className='contact-parent'>
            <div className='contact-child'>
                <h3>UNNATI Batch - Class 10th
              <br />
              SAMBHAV Batch - Class 12th</h3>
              
            </div>
            <div className='contact-child'>
                <h3>Contact us : 80773 03359
                  <br />
              Email : support@scoreplus.live
              <br />
              WhatsApp : +91 80773 03359
              <br />
              A-212. Sector 43,
              <br />
              Noida (U.P.) – 201301</h3>
            </div>
            
 
          </div>
        </div>
      </div>
    </section>
   </Wrapper>
  )
}


const Wrapper = styled.section`
.footer-img{
  width: 90%;
  margin :40px;
}

.footer-parent{
  display: flex;
  .footer-child{
    flex:1;
    color:white;
   
    .google-play{
      width: 30%;
      margin: 6px;
    }
     h1 {
      font-size: 35px;
    }
    h3{
      margin: 20rem 0 0 0;
    }
}
  .footer2-img{
  width: 80%;
  height: 50rem;
  margin : 0 40px;
  right: 30%;

}
.contact-parent{
  margin: 0 2px;
  .contact-child{
    width: 50%;
    float: left;
    margin:0px;
  }
}
}
@media only screen and (max-width: 800px) {
.footer-parent {
  display:block;
  text-align: center;
  // .fc2{
  //   display:none;
  // }
  .footer-child{
    flex:2;
  .footer2-img{
    width: 15rem;
  }
  }
  
}

}
}
`
export default Footer