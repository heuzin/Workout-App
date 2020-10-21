import { createStore } from 'redux';

// Action Generators - functions that return action objects

// const incrementCount = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }
// const incrementCount = (payload = {}) => ({
//         type: 'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// })
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})

const resetCount = ({} = {}) => ({
    type: 'RESET'
})

const store = createStore((state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default: return state
    }
});

store.subscribe(() => {
    console.log(store.getState())
})

// Increment
store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 3 }))

store.dispatch(setCount({ count: 101 }))

store.dispatch(resetCount())