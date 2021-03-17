const fetch = require('node-fetch')

const { API_URL } = require('./constants')

exports.insertData = async (resource, element, token) => {
    try {
        const response = await fetch(`${API_URL}/${resource}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(element),
        })

        const data = await response.json()

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
