import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';


// This Message will be rendered with the Message-List component
const MessageList = ({messages}) => (
    <section id="messages-list">
    <ul>
        {messages.map(message => (
            <Messages
                key={message.id}
                {...message}
            />
        ))}
    </ul>
    </section>

)

MessageList.PropsTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default MessageList;