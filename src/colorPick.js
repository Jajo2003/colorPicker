import React,{useState} from "react"

const arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];



function Backgroundswitcher() {
  const [buttontext,setbuttontext] = useState('Click Me');
  const change = () =>{
    let a = generate();
    document.body.style.backgroundColor = a;
    setbuttontext('hex color is:'+a);

  }


  const generate = () =>{
    let randomHex= '#';
    for(let i = 0;i<6;i++){
      let index=Math.floor(Math.random()*16);
      randomHex+= arr[index];
      JSON.stringify(randomHex);
    }
    console.log(randomHex);
    return randomHex;
  }
  
  return(
    <div>
    <button className="oke" onClick={change}>
      {buttontext}
    </button>

    </div>
  );
  
};


export default Backgroundswitcher;