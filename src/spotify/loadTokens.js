import SpotifyWebApi from 'spotify-web-api-node';
const clientSecret = '6fcf0022eff948ea9a854432dd4ce018';
const clientId = '8df6a5ad7cc443dd9bccdde2770fd860';
const authString = `${clientId}:${clientSecret}`;
const encodedAuthString = btoa(authString);
const authEndpoint = 'https://accounts.spotify.com/api/token';
const data = 'grant_type=client_credentials';

const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret,
});

export const loadTokens = async () => {
    fetch(authEndpoint, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${encodedAuthString}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    })
        .then(response => response.json())
        .then(data => {
            // Use the access token
            // console.log(`Access token: ${data.access_token}`);
            console.log('Tokens loaded successfully!')
            spotifyApi.setAccessToken(`${data.access_token}`);
        })
        .catch(error => {
            console.error(`Error requesting access token: ${error}`);
        });
}


export default spotifyApi;