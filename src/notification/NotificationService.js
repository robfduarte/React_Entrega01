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

    if(!text) return

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
        text: ''
    })

    const setNotification = (type, text, time) => {
        setNotificationData({type, text})

        setTimeout(() => {
            setNotificationData({ type: 'success', text: ''})
        }, time ? time * 1000 : 2000)
    }


    return (
        <NotificationContext.Provider value={{ setNotification }}>
            {/* {notificationData.text && <Notification {...notificationData} />} */}
            <Notification {...notificationData}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}