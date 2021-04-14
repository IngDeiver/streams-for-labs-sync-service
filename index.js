const { createServer } = require('sync-files-cipher')
const { queryVault } = require('./apivault')


async function startServer (){
    try {
        const  keys  = await queryVault('/v1/kv/cypher')
        createServer(
            keys.key,
            keys.iv,
            () => { console.log("Server listening");}
        )
    } catch (error) {
        console.log("Server error: ", error.message);
    }
}

startServer()