import { useState, createContext } from "react"

export const Notification = () => {
    const notificationStyle = {
        position: 'absolute',
        top: 100,
        right: 50,
        backgroundColor: 'green',
        color: 'white',
        padding: '10px 20px',
        borderRadius: 10
    }

    return (
        <div style={notificationStyle}>
            This is a message
        </div>
    )
}

const NotificationContext = createContext()

export const NotificactionProvider = ({ children }) => {
    const [notification, setNotification] = useState({
        type: 'success',
        text: 'This is a message'
    })

    return (
        <NotificationContext.Provider value={{ notification }}>
            {children}
        </NotificationContext.Provider>
    )
}