import React from 'react'
import {Route,Routes} from 'react-router-dom';
import History from '../pages/History/history';

import Likes from '../pages/Likes/likes';
import Playlist from '../pages/Playlist/playlist';
import VideoPlayer from '../pages/VideoPlayer/videoplayer';
import WatchLater from '../pages/WatchLater/watchlater';
import LoginPage from '../pages/Authentication/loginpage';
import SignupPage from '../pages/Authentication/signuppage';
import AuthorizedRoutes from '../routes/authorizedRoutes';
import Explore from '../pages/Explore/explore'
import SinglePlaylist from '../pages/SinglePlaylist/singleplaylist';

function NavBarRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/videoplayer/:youtubeId" element={<VideoPlayer />} />
      <Route element={<AuthorizedRoutes />}>
        <Route path="/history" element={<History />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/playlist/:playlistId" element={<SinglePlaylist />} />
      </Route>
    </Routes>
  );
}

export default NavBarRoutes