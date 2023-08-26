export default function Player({id, turn, setTurn, hp, enemysHp, setHp}){
    function handleTurn(){
        setTurn(++turn);
        setHp(hp-Math.floor(Math.random() * 10) + 1);
    }
    return(
        <div>
            <h2>{id == 0 ? "Me" : "You"}</h2>
            <div><h3>HP:{hp}</h3></div>
            <div>{turn % 2 == id % 2 ? (<button onClick={()=>handleTurn()}>Attack</button>) : null}</div>
        </div>
    )
}