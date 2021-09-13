import { AppContainer, RootNavigator } from 'gmap-common'
import { TODOModals, TODOStacks, TODOTabs } from 'HelloWorld'
import React from 'react'

const App = () => {
  return (
    <AppContainer>
      <RootNavigator tabs={TODOTabs} stacks={TODOStacks} modals={TODOModals} />
    </AppContainer>
  )
}

export default App
