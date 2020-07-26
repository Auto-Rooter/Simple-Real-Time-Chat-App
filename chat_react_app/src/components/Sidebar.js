import React from 'react';
import PropType from 'prop-types'

const Sidebar = ({users}) => (
    <aside id="sidebar" className="sidebar">
        <ul>
            {users.map(user => ( <li key={user.id}>{user.name}</li>) )}
        </ul>
    </aside>
)

Sidebar.PropType = {
    users: PropType.arrayOf(
        PropType.shape({
            id: PropType.number.isRequired,
            name: PropType.string.isRequired
        }).isRequired
    ).isRequired
}

export default Sidebar;

// /Components: are the representational components .

// USe the conncect function from React-redux