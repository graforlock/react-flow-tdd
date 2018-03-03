import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from '../reducers'

import type { ActionCreator, Store } from 'redux'
import type { SagaMiddlewareOptions, Task } from 'redux-saga'
import type { ReduxState } from '../reducers/initialState'
import persistState from 'redux-localstorage'

type ReduxStore = Store<ReduxState, ActionCreator<*>> & { runSaga: Task<*> }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default function configureStore (initialState: ReduxState): ReduxStore {
  const sagaMiddleware: SagaMiddlewareOptions<any> = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware
      ),
      persistState()
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}
