// Select Dom Element
const counterEI = document.getElementById('counter');
const incrementEI = document.getElementById('increment');
const decrementEI = document.getElementById('decrement');


// Initial State
const initialState = {
    value: 0,
}


// Create Reducer Function
function counterReducer(state= initialState, action) {
    if(action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1,
        }
    }
    else if(action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1,
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
    store.dispatch({
        type: "increment",
    })
})
decrementEI.addEventListener("click", ()=>{
    store.dispatch({
        type: "decrement",
    })
})


