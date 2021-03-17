const fetch = require('node-fetch')

const { API_URL } = require('./constants')

exports.getToken = async credentials => {
    const response = await fetch(`${API_URL}/auth/sign-in`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    })

    if (!response.ok) {
        throw new Error('Request Failed')
    }

    const { token } = await response.json()

    return token
}
