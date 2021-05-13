import {useSelector, useDispatch} from 'react-redux';
import {useState,useEffect} from 'react'
import {FreezeTiles} from '../redux/actions/gameActions';    
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; 
const GameNavbar = ()=>{
     
    const {winnerIs} = useSelector((state)=>{
        return state.PlayGame;
    });
    let check=false;
    const [winnerState,setWinnerState]=useState(false);
    const [winnerMessage,setWinnerMessage] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        handleMatch();
    },[winnerIs])
   
    const handleMatch=()=>{
        if(winnerIs==='X'){
            setWinnerState(true)
            setWinnerMessage("X wins")
        }
        if(winnerIs==='O'){
            setWinnerState(true);
            setWinnerMessage("O Wins");
        }
         if(winnerIs==="Draw"){
            setWinnerState(true);
            setWinnerMessage("Draw");
        }
    }

     return(
         
        <>
            {console.log("winner_state",check)}
            <Modal centered backdrop={"static"} isOpen={winnerState} toggle={()=>setWinnerState(!winnerState)} >
            <ModalHeader toggle={()=>setWinnerState(!winnerState)} style = {{pointerEvents:"none",textAlign:'center'}}>Zero Katta Match</ModalHeader>
            <ModalBody style={{textAlign:'center'}}>
            {winnerMessage}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>{window.location.reload()}}>okay</Button>
        </ModalFooter>
      </Modal>
        </>   
      
    );
       
}
export default GameNavbar;