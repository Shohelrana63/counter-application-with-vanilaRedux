// Select Dom Element
const counterEI = document.getElementById('counter');
const incrementEI = document.getElementById('increment');
const decrementEI = document.getElementById('decrement');

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

const increment = (value) =>{
    return {
        type: INCREMENT, //Mandaotry
        payload: value,
    }
}
const decrement = (value) =>{
    return {
        type: DECREMENT, //Mandaotry
        payload: value,
    }
}
// Initial State
const initialState = {
    value: 0,
}


// Create Reducer Function
function counterReducer(state= initialState, action) {
    if(action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
        }
    }
    else if(action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
        }
    }
    else{
        return state;
    }
}


// Create Store
const store = Redux.createStore(counterReducer);

const render = () =>{
    const state =store.getState();
    counterEI.innerText = state.value.toString();
};

render();

store.subscribe(render);


// Button Click Listeners

incrementEI.addEventListener("click", ()=>{
    store.dispatch(increment(5))
})
decrementEI.addEventListener("click", ()=>{
    store.dispatch(decrement(2))
})


