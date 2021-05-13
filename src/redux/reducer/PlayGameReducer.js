const intialState = {
    square:[0,1,2,3,4,5,6,7,8],
    boxes: Array(9).fill(null),
     xIsNext: true,
    toggle :Array(9).fill(true),
    winnerIs: "",
    countOfX:0,
    countOfO:0,
};
export const PlayGame = (state = intialState, action)=>
{    
      switch(action.type)
      {
          case  "TILE_ENABLER":{
        var changeBox = [...state.boxes]
        var toggleX = [...state.toggle];
       
        changeBox[action.payload] = state.xIsNext ? 'X' : 'O';
        toggleX[action.payload] = !state.toggle[action.payload];
        return {...state,boxes:changeBox,xIsNext:!state.xIsNext,toggle:toggleX}
          }
          case "RESET_GAME":
              {
              var temp = [...state.boxes]
              temp.fill(null);
              var resetToggle = [...state.toggle]
              resetToggle.fill(true)
              return {...state,boxes:temp,toggle:resetToggle,winnerIs:""}; 
              }
              case "CHECK_WINNER":
                  return{...state,winnerIs:action.payload};
            //    case "FREEZE_TILES":
            //        {
                       
            //         var freezeTile = [...state.toggle];
            //          freezeTile.fill(true);

            //        return {...state,toggle:freezeTile}; 
            //        }          
              default:
                  return state;   
      }
}

