import { createStore, applyMiddleware, compose } from 'redux'
import RootReducer from './rootReducer'

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' as any] as any || compose;
const Store = createStore(RootReducer, composeEnhancers(applyMiddleware())
);

export default Store