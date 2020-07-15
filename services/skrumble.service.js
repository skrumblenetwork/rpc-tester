const { SkrumbleProvider } = require('./SkrumbleProvider')

let skrumbleProvider = null;

const getSkrumbleProvider = async () => {
    if(!skrumbleProvider){
        skrumbleProvider = new SkrumbleProvider(process.env.SKRMBLE_WS_URL);
    }

    return skrumbleProvider
};

module.exports = {
    getSkrumbleProvider,
}