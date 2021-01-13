import React, {useState} from 'react';


export default {
    title: "React.Memo"
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
type usersType = { users: Array<string> }
const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Sergey", "Alex", "Artem"])
    const addUser = () => {
        const newUsers = [...users,"Sveta" + new Date().getTime() ]
        setUsers(newUsers)
    }
    return <>
        <button onClick={() => setCounter(counter + 1 )}>+</button>
        <button onClick={addUser}>Add User</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}
