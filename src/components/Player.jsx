export default function Player({id, turn, setTurn}){
    function handleTurn(){
        setTurn(++turn);
    }
    return(
        <div>
            <h2>{id == 0 ? "Me" : "You"}</h2>
            <div><h3>HP</h3></div>
            <div>{turn % 2 == id % 2 ? (<button onClick={()=>handleTurn()}>Attack</button>) : null}</div>
        </div>
    )
}