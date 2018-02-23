// @flow
import React, { Component } from 'react'
import './App.css'

import IdeaSection from './components/IdeaSection'

type Props = {}

class App extends Component<Props> {
  render () {
    return (
      <main className='App'>
        <header className='App-header' />
        <IdeaSection />
      </main>
    )
  }
}

export default App
