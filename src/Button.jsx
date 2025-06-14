export default function Button(){
    
    function clickHandler(nama) {
        console.log(`saya di klikk ${nama}`)
    }

    return (
        <button onClick={() => clickHandler('waqqir')}>Klik saya dong bang</button>
    )
}