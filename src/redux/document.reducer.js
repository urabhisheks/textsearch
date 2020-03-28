import {UPLOAD_DOCUMENT} from '../actions/action.type';

const INITITAL_STATE = {
  data:{}
};

const cartReducer = (state = INITITAL_STATE, action) =>{
  let newData;
  let tempData;
  switch(action.type){
    case UPLOAD_DOCUMENT:
      newData = {...state.data};
      action.data.map((value, index) => {
        if(newData[value]){
          tempData = {...newData[value]};
          tempData.count += 1; 
          tempData.index = [...tempData.index, index];
          if(tempData.filename[action.filename]){
            tempData.filename[action.filename] = [...tempData.filename[action.filename], index];
          }else{
            tempData.filename[action.filename] = [index];
          }
          newData[value] = tempData;
        } else {
          newData[value.trim()] = {
            'filename': {[action.filename]: [index]}, 
            count: 1, 
            index:[index]
          }
          // newData[value].filename[action.filename] = [index]
        }
      });
      
      console.log('newdata ', newData);
      return {
        ...state,
        data: newData,
      };  
    default:
      return state;
  }
}

export default  cartReducer;