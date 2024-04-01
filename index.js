const axios = require("axios");

const readHashBond = async (hash) => {
    if(hash.length === 64) {
        const string = await axios.post(`https://q3q0eo8qde.execute-api.eu-central-1.amazonaws.com/default/post-read?hash=${hash}`)
        return string.data.string.S;
    } else  {
        console.log('Hash must be in hexedecimal format')
    }
}

const bondHash = async (string) => {
        const hash = await axios.post(`https://ms98jjxn9d.execute-api.eu-central-1.amazonaws.com/default/post-insert?string=${string}`)
        return hash.data;
    }


    module.exports = {
    readHashBond,
    bondHash
}

