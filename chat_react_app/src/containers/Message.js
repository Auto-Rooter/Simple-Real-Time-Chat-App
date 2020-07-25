import React from 'react';
import PropTypes from 'prop-types';


// This Message will be rendered with the Message-List component
const Message = ({message, author}) => (
    <p>
        <i>{author}</i>: {message}
    </p>
)

Message.PropsTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Message;