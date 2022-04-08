export const setContacts = (contacts) => {
    return {
        type: "SET_CONTACTS",
        payload: contacts
    }
}
export const setUserDetails = (user) => {
    return {
        type: "SET_USER_DETAILS",
        payload: user
    }
}