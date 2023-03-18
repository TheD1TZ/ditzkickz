<template>
  <div>
    <h1>Album Names:</h1>
    <ul>
      <li v-for="album in albums" :key="album.album.id">
        {{ album.album.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      albums: [
        {
          "album": {
            "artists": [
              {
                "name": "Madmize"
              },
              {
                "name": "DitzKickz"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/3H8SM8HURd8DdgctL6rkQ9"
            },
            "href": "https://api.spotify.com/v1/albums/3H8SM8HURd8DdgctL6rkQ9",
            "id": "3H8SM8HURd8DdgctL6rkQ9",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2736e30c096cdb67d074d094342",
                "width": 640
              }
            ],
            "name": "KICK SOME A## (DitzKickz Remix)"
          },
          "artists": [
            {
              "name": "Madmize"
            },
            {
              "name": "DitzKickz"
            }
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6rEqzdMYhcajdKLGDupk0M"
          }
        },
        {
          "album": {
            "artists": [
              {
                "name": "DitzKickz"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/3H8SM8HURd8DdgctL6rkQ9"
            },
            "href": "https://api.spotify.com/v1/albums/3H8SM8HURd8DdgctL6rkQ9",
            "id": "GSDGSGHDFHDGHDGH",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2736e30c096cdb67d074d094342",
                "width": 640
              }
            ],
            "name": "WARRIOR"
          },
          "artists": [
            {
              "name": "DitzKickz"
            }
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6rEqzdMYhcajdKLGDupk0M"
          }
        }
      ]
    };
  }
};
</script>
