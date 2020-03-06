import { combineReducers } from 'redux'
import messages from './messages'
import channels from './channels'

const reducer = combineReducers({
  messages,
  channels
})

export default reducer