import {useEffect,useState} from 'react'

export default function Meme() {

    const [allMeme, setAllMeme] = useState([])
    const [memeData, setMemeData] = useState({
        topText: '',
        bottomText: '',
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMeme(data.data.memes)
        }
        getMemes()
    },[])

    function setRandomImage(){
        const rand = Math.floor(Math.random()* allMeme.length)
        const url = allMeme[rand].url
        setMemeData(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    function handleChange(event){
        const {name,value} = event.target
        setMemeData(prevMeme => ({
            ...prevMeme,
            [name]:value
        }))
    }
  return (
    <main>
       <div className='form'>
       <input 
        type="text"
        placeholder='Top Text'
        name='topText'
        value={memeData.topText}
        onChange= {handleChange}
        />
        <input 
        type="text"
        placeholder='Bottom Text'
        name='bottomText'
        value={memeData.bottomText}
        onChange= {handleChange}
        />
        <button className='form--button' onClick={setRandomImage}>
            Get new Meme Image
        </button>
       </div>
       <div className="meme">
                <img src={memeData.randomImage} className="meme--image" alt='memeimage'/>
                <h2 className="meme--text top">{memeData.topText}</h2>
                <h2 className="meme--text bottom">{memeData.bottomText}</h2>
            </div>
    </main>
  )
}
