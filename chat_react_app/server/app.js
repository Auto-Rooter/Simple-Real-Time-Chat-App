const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8989})

const users = []

const broadcast = (data, ws) => {
    wss.clients.forEach((client) => {
        if(client.readyState === WebSocket.OPEN && client !== ws){
            client.send(JSON.stringify(data))
        }   
    })
}

// When the user is connected to the server , we will start listening to Add_users, Add_messages 
wss.on('connection', (ws) => {
    let index;
    ws.on('message', (message) => {
        const data = JSON.parse(message);
        switch(data.type){
            case 'ADD_USER' : {
                index = users.length
                // add the user to server side list
                users.push({name: data.name, id: index+1})
                ws.send(JSON.stringify({
                    type: 'USERS_LIST',
                    users
                }))
                // broadcast to all the connected users
                broadcast({
                    type: 'USERS_LIST',
                    users
                }, ws)
                break
            }

            case 'ADD_MESSAGE':
                broadcast({
                    type: 'ADD_MESSAGE',
                    message: data.message,
                    author: data.author
                }, ws)
                break
            default:
                break
        }
    })

ws.on('close', () => {
    // Removing the current user from users list
    users.splice(index, 1)
    broadcast({
        type: 'USERS_LIST',
        users
    }, ws)
})
})