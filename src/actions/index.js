



// this is a named export so when importing in another file we should specify as
// import {selectSong} ......should be in {} as the action creator file can have many more plain js objects
export const selectSong =(song)=>{
    // it returns an action
    return{
        type:'SONG_SELECTED',
        Payload: song

    };
};