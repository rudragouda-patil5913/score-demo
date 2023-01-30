import React from 'react';
import {first,second,third,four,five,six} from '../images/PaidImages'
import styled from 'styled-components';

const Paid = () => {
  return (
    <Wrapper>
        <section>
        <div >
          <div> 
            <h1>Our Paid Courses</h1>
            </div>
            <div className='paid-parent'>
                <div className='paid-child'>
                    <img src={first} alt='first' className='paid-img'/>
                    <img src={second} alt='first' className='paid-img'/>
                    <img src={third} alt='first' className='paid-img'/>
                    <img src={four} alt='first' className='paid-img'/>
                    <img src={five} alt='first' className='paid-img'/>
                    <img src={six} alt='first' className='paid-img'/>
                </div>
          </div>
          
        </div>

        </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
text-align:center;
color:white;
h1 {
  font-size: 40px;
}
.paid-parent{
  display:flex;
  .paid-child{
    flex: 1;
    .paid-img{
        margin: 10px;
}
}
}

@media only screen and (max-width: 800px) {
  .paid-parent{
  .paid-child{
    .paid-img{
        margin: 10px;
        width: 50%;
}
}
}
}

`

export default Paid;