import {connect} from 'react-redux'
import MessageListComponent from '../components/MessageList'

export const MessagesList = connect(state => ({
    messages: state.messages
}),{} )(MessageListComponent)