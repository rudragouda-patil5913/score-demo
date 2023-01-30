import React from 'react';
import styled from 'styled-components';
import rohit from "../images/rohitsirImageNewOne.png";
import {BsFillPlayCircleFill} from 'react-icons/bs';


const Header = () => {
  return (
    <Wrapper>
        <div className='header' >
                <div className='header-child'>
                    <section className='header-fhalf'>
                    <h4 className='logo-design'>scoreplus.</h4>
                    <h1>India's most trusted</h1>
                    <h1>online education</h1>
                    <h1>platform</h1>
                    <h2>Providing affordable and quality education all over India.</h2>
                    <button className='btn'>Start Learning</button>
                    <span><BsFillPlayCircleFill className='play-btn' /><h6>Watch Demo Lectures</h6></span>
                    
                    </section>
                </div>
                <div className='header-child'>
                    <section className='header-shalf'>
                     <img className='rohit-pic' src={rohit} alt='rohitsir-img' />
                     <select name="choice" className='opt-color' id="choice" >
                        <option value="opt1">option 1</option>
                        <option value="opt2">option 2</option>
                        <option value="opt3">option 3</option>
                        <option value="opt4">option 4</option>
                        
                    </select>
                    <h4 className='course'>Courses</h4>
                    <h4 className='contact'>Contact us</h4>
                    </section>
                </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.header{
    display:flex;
}
.header-child{
    width:50%;
    position:relative;
    
}
.header-fhalf{
    margin:0 8%;
    .btn{
        width:60%;
        height:50px;
        font-size: 30px;
        background-color: orange;
        border-radius: 20px;
        margin: 0 10px 10px 10px;
    }
    
    
    span{
        .play-btn{
         background-color: orange;
         height :30px;
         width: 30px;
         left : 45px;
         text-align:center;
          }
    
    h6{
        margin: 0;
       font-size:30px;
       color:white;
    //   opacity: -1;
        text-align: center;
    }
    }
    
}
.logo-design{
    color:orange;
    font-size: 25px;
}
.logo-design ~ h1{
    color:white;
    font-size: 45px;
    margin:0px;
}
.logo-design ~ h2{
    color:white;
    font-size: 25px;
}

.rohit-pic{
    width:100%;
    height:90%;
    
}

.header-shalf img{
    position:relative;   
}
.header-shalf .course{
    position: absolute;   
    color:white;
    font-size: 25px;
    top: 1%;
    left: 50%;
}
.header-shalf .contact{
    position: absolute;   
    color:white;
    font-size: 25px;
    top: 1%;
    left: 70%;
}
#choice{
  position: absolute;
  top: 10%;
  left: 30%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: transparent;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: 1px solid white;
  cursor: pointer;
  border-radius: 5px;
}
option{
    background-color:grey;
    color:red;
}

@media only screen and (min-width: 800px) {

}
@media only screen and (max-width: 800px) {
  .header-fhalf {
    .btn{
        width:100%;
        height:30px;
        font-size: 15px;
        background-color: orange; 
        border-radius: 20px;
        margin: 0 10px 10px 10px;
    }
    span{
        .play-btn{
        position:relative;
        left: 45%;
        text-align:center;
        
    }
    }
    
}
.header-shalf{
    position :relative;
    display: none;
  }
  
}


`
export default Header