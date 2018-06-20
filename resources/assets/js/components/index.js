import Vue from 'vue'
import Card from './elements/Card'
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
  AlertSuccess
].forEach(Component => {
  Vue.component(Component.name, Component)
})
