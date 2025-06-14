export default function Menu() {

    const menu = [
        {nama : 'Masi Bakar', harga : 10000 },
        {nama : 'Masi Liwet', harga : 20000 },
        {nama : 'Masi Oncom', harga : 30000 },
    ]

    const MakananList = () => {
    
    return menu.map((item,i) => {
            return(
            <div className= "text-black m-5" key={i}>
                Nama Menu : {item.nama} <br></br>
                Harga Menu : {item.harga}
            </div>
            )
        }) 
    }


    return (
        <>
            <div className="bg-blue-200  rounded-2xl mx-30 p-5 mt-20">
                <div className="text-black font-bold m-5">                    
                    {/* {isMakanan ? 'Makanan yooo' : 'Minuman yoo' } */}
                    <MakananList />
                </div>
            </div>
        </>
    )
}