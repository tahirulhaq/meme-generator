import logo from '../images/troll.png'
export default function Header(){
    return (
        <>
        <header className="navbar">
            <img className="navbar--logo" src={logo} alt="logo" />
            <h1 className="navbar--title">Meme Generator</h1>
            <h3 className="navbar--project">React Course-Project 3</h3>
        </header>
        </>
    );
}