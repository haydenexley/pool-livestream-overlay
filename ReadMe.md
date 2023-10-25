# Overlay for Pool Livestream

This is a basic working version of an overlay generator for use in OBS for live pool games. Using JavaScript, HTML and CSS.

The project uses port 3000 and the page at http://localhost:3000 can be imported into OBS for use as an overlay for the video.

The admin page at http://localhost:3000/admin can be used to update the details for the players, clubs, scores and home club in real time.

Use `npm run start` to start the server.

This project is only a proof of concept for using express and socket.io to live update game data and scores, however, I would like to share, as if anyone is in need of an overlay for twitch etc. this can be modified and used however necessary! If you have any issues getting this running or need help modifying further for use with another streaming service, just get in touch on discord @turtlechops and I'll try my best ! 😁
