const currentPlay = (track) => {
  return {
    type: 'SET_CURRENT_TRACK',
    payload: track,
  };
};
export default currentPlay;
