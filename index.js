const fs = require('fs')

const { CREDENTIALS } = require('./src/constants')
const { getToken } = require('./src/getToken')
const { insertData } = require('./src/insertData')
const { insertImages } = require('./src/insertImages')

const create = async (filePath, resource, token) => {
    const raw = fs.readFileSync(filePath)
    const data = JSON.parse(raw)
    for (const iterator of data) {
        await insertData(resource, iterator, token)
    }
}

const main = async () => {
    const token = await getToken(CREDENTIALS)

    await insertImages(token)

    await create('./Brand.json', 'brand', token)
    await create('./Products.json', 'product', token)
    await create('./Case.json', 'case/create', token)
    await create('./Cpu.json', 'cpu/create', token)
    await create('./Gpu.json', 'gpu/create', token)
    await create('./Motherboard.json', 'motherboard/create', token)
    await create('./Psu.json', 'psu/create', token)
    await create('./Ram.json', 'ram/create', token)
    await create('./Storage.json', 'storage/create', token)
}
main()
