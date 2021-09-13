import { Modals, Stacks, Tabs } from 'gmap-common'
import React from 'react'
import { View } from 'react-native'

export type ParamsList = {}

export const TODOTabs: React.ReactElement[] = [
  <Tabs.Screen key='1' name='1' component={View} />,
]

export const TODOModals: React.ReactElement[] = [
  <Modals.Screen key='2' name='2' component={View} />,
]

export const TODOStacks: React.ReactElement[] = [
  <Stacks.Screen key='3' name='3' component={View} />,
]
