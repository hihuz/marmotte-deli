// temp
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('token');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('token', serializedState);
  } catch (err) {
    // add later
  }
};

export { loadState, saveState };