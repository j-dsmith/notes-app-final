import * as ActionTypes from "./ActionTypes";

export const addProject = (project) => ({
  type: ActionTypes.ADD_PROJECT,
  payload: project,
});

export const projectSelected = (project) => ({
  type: ActionTypes.PROJECT_SELECTED,
  payload: project,
});

export const deleteProject = (id) => ({
  type: ActionTypes.DELETE_PROJECT,
  payload: id,
});

export const addNote = (note) => ({
  type: ActionTypes.ADD_NOTE,
  payload: note,
});

export const deleteNote = (id) => ({
  type: ActionTypes.DELETE_NOTE,
  payload: id,
});
