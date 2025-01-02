'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let newState = { ...state };
  const newState2 = [];

  for (const action of actions) {
    if (action.type === 'addProperties') {
      newState = Object.assign(newState, action.extraData);
    } else if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        if (newState.hasOwnProperty(key)) {
          delete newState[key];
        }
      }
    } else if (action.type === 'clear') {
      newState = {};
    }
    newState2.push({ ...newState });
  }

  return newState2;
}

module.exports = transformStateWithClones;
