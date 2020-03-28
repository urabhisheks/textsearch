import * as actions from './action.type';

export const uploadDocument = (filename, data) => ({
  type: actions.UPLOAD_DOCUMENT,
  filename,
  data,
});