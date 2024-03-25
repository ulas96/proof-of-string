const axios = require("axios");

const readHashBond = (hash) => {
    if(hash.length === 64) {
        axios.post(`https://q3q0eo8qde.execute-api.eu-central-1.amazonaws.com/default/post-read?hash=${hash}`)
        .then(response => {
        if(response.data) {
            console.log('Corresponding string is', response.data.string.S)
        } else {
            console.log('Hash string combination not bonded')
        }
        }).catch(error => {
        console.error(error);
        });
    } else  {
        console.log('Hash must be in hexedecimal format')
    }
}

const bondHash = async (string) => {
        return axios.post(`https://ms98jjxn9d.execute-api.eu-central-1.amazonaws.com/default/post-insert?string=${string}`)
        .then(response => {
            console.log(response.data);
        }).catch(error => {
        console.error(error);
        });
    }


    module.exports = {
    readHashBond,
    bondHash
}

