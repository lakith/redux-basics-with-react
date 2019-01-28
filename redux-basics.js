const redux = require('redux');

//Define an dummy initial state
const initialState = {
    counter : 0
}

//Reducer

const rootReducer = (state = initialState,action) => {   // {state = initialState} - Define an default value when its undefined - es6 function 
    
    if(action.type === "INC_COUNTER"){
        
           return {...state,
                    counter : state.counter +1  
                }
        }

        if(action.type === "ADD_COUNTER"){
            
               return {...state,
                        counter : state.counter + action.value  
                    }
            }
        
    

    return state;
}


//Store
const store = redux.createStore(rootReducer);
console.log(store.getState());


//Subscriptions
store.subscribe(()=>{
    console.log('[Subscription]', store.getState());
});


//Dispatch Action
store.dispatch({type:"INC_COUNTER"});
store.dispatch({type:"ADD_COUNTER",value: 10})
console.log(store.getState());

