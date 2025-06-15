import { useEffect, useMemo, useState } from "react"

export default function Button()  {

    const [countLike , setCountLike] = useState(0);
    const [countDisLike , setCountDisLike] = useState(0);
    const [countSubcribe , setCounteSubcribe] = useState(0);

    function pesanLike() {
        console.log('Like rendered')
        return(countLike < 10) ? 'pesan kurang dari 10' : 'Mantap like lebih dari 10' 
    }

    const displayPesanLike = useMemo(() => pesanLike(countLike))
    useEffect(() => {
        console.log(`wadidaww ${countLike} dan ${countDisLike}`)
    },[])

    return (
        <>
        <div className="text-center">
            <button onClick={() => setCountLike(countLike + 1)} className="mx-5"> Jumlah Like {countLike} </button>
            <button onClick={() => setCountDisLike(countDisLike + 1)}> Jumlah Like {countDisLike} </button> <br />
            {displayPesanLike}
             <br></br>
            <b></b>

            <button onClick={() => setCounteSubcribe(countSubcribe + 1)}>{countSubcribe} Subcribe cuyy</button>
        </div>
        </>
    )
}