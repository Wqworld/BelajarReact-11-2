export default function ChildComponent(props){

    console.log('childComponent di render')

    return(
        <>
            <h1>Chanel youtube: {props.nama}</h1>
        </>
    )
}