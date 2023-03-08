import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import imgItem1 from './assets/slider1.png';
import imgItem2 from './assets/slider2.png';
import imgItem3 from './assets/slider3.png';
// import imgItem4 from './assets/slider4.webp';

const list=[{
    name: "abc", img: "xyz", 
}, {name: "def", img: "abc", } , {name: "fgh", img: "...",} ];
const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

const farmsSlider =[
    { bgImg: imgItem1,
    title: "Welcome To  Farms",
    sub_title: "From our Farms to your hands",
},
{ bgImg: imgItem2,
title: " Farms",
sub_title: "From our Farms to your hands",
},
{ bgImg: imgItem3,
title: "Welcome ",
sub_title: "From our Farms to your hands",
},
{ bgImg: "https://imgs.search.brave.com/WWIfY2fCkR243mZh7Q1G3bFK02hW0Ock_zYp7a9IaUs/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/RE9iRmNkdk0xS1Mt/WXB2aGt0bWdnSGFF/OCZwaWQ9QXBp",
title: "Welcome To ",
sub_title: "From our Farms to your hands",
}
]

const Carrousel = () => {
  const [index, setIndex] = useState(0); 
  const [data, setData] = useState([list[0]]); 
showElem(arr, 0);
// const[direction,setDirection] = useState(props.children.length === 2 ? "prev" : "next",);
const [sliding, setSliding] = useState(false)
    console.log(data)
  const length = 3;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };


  const handleNext = () => {
    const newIndex = index + 1;
    const dummy = data.map((user) => (
        <div className="user">{user}</div>
      ))
    setIndex(newIndex >= length ? 0 : newIndex);
  };
function showElem(arr, index) {
    if (farmsSlider[index] != undefined) {
      const par = document.createElement('p');
      const nextBtn = document.createElement('button');
      const prevBtn = document.createElement('button');
      const  nextImg = document.createElement('p');
      const container = document.createElement('div');
      
      par.innerHTML = farmsSlider[index].title;
      nextBtn.innerHTML = 'Next';
      prevBtn.innerHTML = 'Prev';
      nextImg.innerHTML = farmsSlider[index].sub_title;
      if (index == 0) prevBtn.disabled = true;
      if (index == farmsSlider.length - 1) nextBtn.disabled = true;
      container.appendChild(par);
      container.appendChild(nextBtn);
      container.appendChild(prevBtn);
      container.appendChild(nextImg)
      document.body.appendChild(container);
      
      nextBtn.addEventListener('click', function() {
        let current = this;
        nextElem(farmsSlider, index, current);
      });
      prevBtn.addEventListener('click', function() {
        let current = this;
        prevElem(farmsSlider, index, current);
      });
    } else {
      index = 0;
      clearing();
      showElem(farmsSlider, index);
    }   
  }
  
  function nextElem(farmsSlider, index, current) {
    let currentElem = current.parentElement;
    document.body.removeChild(currentElem);
    index++;
    showElem(farmsSlider, index);
  }
  
  function prevElem(farmsSlider, index, current) {
    let currentElem = current.parentElement;
    document.body.removeChild(currentElem);
    index--;
    showElem(farmsSlider, index);
  }
  
  function clearing() {
    let containers = document.querySelectorAll('div');
    for (let elem of containers) {
      document.body.removeChild(elem);
    }
  }
  return (
    <div className="carousel">
    {farmsSlider[index] != undefined ? <div > <img class="carousel__Img" src={farmsSlider[index].bgImg} alt="bgimg" /> <Container> <div className="content-carousel"><span> {farmsSlider[index].title} </span> <h1> {farmsSlider[index].sub_title}</h1> </div> </Container> </div> : console.log("huuuu")}
    {/* {list.map((i) => {
        if(list)
    })} */}
    
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <p>{index}</p>

      <p id="getElements"></p>
<p> </p>
    </div>
  );
};

export default Carrousel ;