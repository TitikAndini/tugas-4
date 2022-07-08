import ReactDOM from 'react-dom/client';

function Tombol(props){
    function handleClick(){
            alert(`anda telah meng-klik tombol ${props.nama}`)      
    }
    return <button onClick={handleClick}>{props.nama}</button>
}
function App(){
    return(
        <>
         <div>
            <Tombol nama="Titik"/>
         
            <Tombol nama="Andini"/>
         
            <Tombol nama="Rachmadany"/>
         </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)