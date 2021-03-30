import {useState, useEffect} from "react"
import Header from "./components/Header"
import Image from "./components/Image"
import Input from "./components/Input"


function App() {
  const [utext, setUtext] = useState("Верхний текст")
  const [ltext, setLtext] = useState("Нижний текст")
  const [img, setImg] = useState("http://i.imgflip.com/1bij.jpg")
  const [imges, setImges] = useState([])
  
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => setImges(data.data.memes.map((elem) => elem.url)))
    
  }, [])

  const randImg = () => setImg(imges[Math.floor(Math.random() * imges.length)])
 
  
  
  return (
    <div >
      <Header/>
      <div style={{width: "70%", margin:"auto"}}>
        <Input set={[setUtext, setLtext, randImg, utext, ltext]}/>
        <Image utext = {utext} ltext={ltext} img={img} randImg={randImg}/> 
      </div>  
    </div>
  );
}

export default App;
