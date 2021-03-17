const fs = require('fs')

const fetch = require('node-fetch')
const FormData = require('form-data')

const { API_URL } = require('./constants')

exports.insertImages = async token => {
    const formData = new FormData()

    formData.append('image', fs.createReadStream(`${__dirname}/images/1.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/2.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/3.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/4.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/5.png`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/6.png`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/7.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/8.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/9.png`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/10.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/11.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/12.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/13.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/14.png`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/15.png`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/16.png`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/17.png`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/18.png`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/19.png`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/20.png`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/21.png`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/22.png`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/23.png`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/24.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/25.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/26.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/27.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/28.png`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/29.png`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/30.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/31.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/32.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/33.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/34.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/35.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/36.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/37.jpg`))
    formData.append('image', fs.createReadStream(`${__dirname}/images/38.jpg`))

    const response = await fetch(`${API_URL}/image`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    })

    console.log(response)

    const data = await response.json()

    console.log(data)
}
