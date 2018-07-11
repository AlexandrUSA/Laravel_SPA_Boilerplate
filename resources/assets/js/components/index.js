import Vue from 'vue'
import Card from './elements/Card'
import ErrorsList from './elements/ErrorsList'
import Child from './Child'
import Button from './elements/Button'
import FileButton from './elements/FileButton'
import { HasError, AlertError, AlertSuccess } from 'vform'

// Глобальные компоненты.
[
  Card,
  Child,
  Button,
  FileButton,
  HasError,
  AlertError,
  AlertSuccess,
  ErrorsList
].forEach(Component => {
  Vue.component(Component.name, Component)
})
