import { useState, useContext, createContext } from "react"

export const Notification = ({ type, text}) => {
    const notificationStyle = {
        position: 'absolute',
        top: 100,
        right: 50,
        backgroundColor: type === 'success' ? 'green' : 'red',
        color: 'white',
        padding: '10px 20px',
        borderRadius: 10
    }

    return (
        <div style={notificationStyle}>
            {text}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificactionProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        type: 'success',
        text: 'This is a message from state'
    })

    const setNotification = (type, text) => {
        setNotificationData({type, text})
    }


    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification {...notificationData} />
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}