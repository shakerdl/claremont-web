export default (state = { value: '' }, action) => {
  switch (action.type) {
    case 'FOO_SUCCESS':
       { 
         if(state && state.foo){
          var __state = {...state};
          __state.foo['value'] = action.payload;
         return __state;
         }
         return state;
       
      }

    default:
      return state
  }
}
