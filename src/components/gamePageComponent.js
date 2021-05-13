import {useSelector , useDispatch} from "react-redux";
import {ClickOfTile,ResetGame,CheckWinner} from "../redux/actions/gameActions";
import GameNavbar from './gameNavbar'
import Logo from './logoComponent';
import {useEffect} from "react";

const GamePage = ()=>{ 
    const {square,boxes,toggle,winnerIs} =  useSelector((state)=>{
        return state.PlayGame;
    })
    let count_numbers=0;
    const dispatch = useDispatch();
   
   useEffect(()=>{
    var temp = calculateWinner(boxes);
    dispatch(CheckWinner(temp));
    // console.log(temp);

    
   },[boxes]);
//..... winner calculation function....... //
   function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],  
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    
    squares.map((m)=>{
        if(m!=='X' && m!=='O'){
            count_numbers++;
        }
    })
    console.log("zero",count_numbers)

    if(count_numbers === 0)
    {
      return "Draw";
    }
  }
 
   //-------------------------//
    return (
        <>
            <Logo/>
        <div className="container game-board">              
             
             {square.map((box,i)=>{
                 return (
                     <span key={i}>
                    <div className="card boxes" onClick={()=>dispatch(ClickOfTile(i))} style={toggle[i]?{pointerEvents:"auto"}:{pointerEvents:"none"}} >
                        <div className="card-body ">
                            <h1>{boxes[i]}</h1>
                            
                        </div>
                    </div>
                     </span>
                 );
             })}
            
            </div>
            <GameNavbar/>
            <button onClick ={()=>{dispatch(ResetGame())}} 
            className="btn btn-danger reset">Reset</button>
            </>
    );
}
export default GamePage;