import {combineReducers} from 'redux';

const songsReducer = () => {
  return [
    {title: 'No Scrubs', duration: '4:40'},
    {title: 'Macarena', duration: '3:15'},
    {title: 'All star', duration: '4:40'},
    {title: 'I want it that way', duration:'4;55'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) =>{
  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});