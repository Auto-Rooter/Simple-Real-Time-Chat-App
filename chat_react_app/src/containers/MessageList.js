import React from 'react';
import PropTypes from 'prop-types';


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
    message: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropsTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
};

export default MessageList;