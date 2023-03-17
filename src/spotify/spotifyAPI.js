import spotifyApi from "./loadTokens.js";

const id = '02Qk9K9AJwyQWcZ5BrSgd7';

const getTracks = () => {
    return spotifyApi.getArtistAlbums(id, 'US')
        .then(function(data) {
            console.log('Albums', JSON.stringify(data.body.items))
            return data.body.items;
        }, function(err) {
            console.error(err);
            return err;
        });
}

const getArtistTopTracks = () => {
    spotifyApi.getArtistTopTracks(id, 'US')
        .then(function(data) {
            console.log('TopTracks', data.body);
            return data.body;
        }, function(err) {
            console.error(err);
        });
}

export {
    getArtistTopTracks,
    getTracks
}