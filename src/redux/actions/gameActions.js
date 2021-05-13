// import {ActionTypes} from "./ActionType/ActionType";
export const ClickOfTile = (id)=>{
    return {
        type: "TILE_ENABLER",
        payload: id,
    };
}
export const ResetGame = ()=>{
    return {
        type: "RESET_GAME",
    };
}
export const CheckWinner = (winner)=>{
      return {
          type: "CHECK_WINNER",
          payload: winner
      };
}
export const FreezeTiles = ()=>{
    return{
        type: "FREEZE_TILES"
    };
}
