// @flow
import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'

import type { ReduxStore } from './store/configureStore'

import IdeaSection from './components/IdeaSection'
import configureStore from './store/configureStore'
import rootSaga from './sagas'

type Props = {}

const store: ReduxStore = configureStore()
store.runSaga(rootSaga)

class App extends Component<Props> {
  render () {
    return (
      <Provider store={store}>
        <main className='App'>
          <IdeaSection />
        </main>
      </Provider>
    )
  }
}

export default App
