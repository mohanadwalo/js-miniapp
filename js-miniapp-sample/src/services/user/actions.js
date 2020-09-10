import {
  REQUEST_USER_NAME_SUCCESS,
  REQUEST_USER_NAME_FAILURE,
  REQUEST_PROFILE_PHOTO_SUCCESS,
  REQUEST_PROFILE_PHOTO_FAILURE,
  REQUEST_CONTACT_LIST_SUCCESS,
  REQUEST_CONTACT_LIST_FAILURE,
} from './types';

type UserNameSuccessAction = { type: String, userName: string };
type ProfilePhotoSuccessAction = { type: String, url: string };
type ContactListSuccessAction = { type: String, contacts: string[] };

const requestUserName = (): Function => {
  return (dispatch) => {
    return Promise.resolve()
      .then(() => {
        const userName = 'Test User';
        dispatch({
          type: REQUEST_USER_NAME_SUCCESS,
          userName,
        });

        return Promise.resolve(userName);
      })
      .catch((_) => {
        dispatch({
          type: REQUEST_USER_NAME_FAILURE,
        });
      });
  };
};

const requestProfilePhoto = (): Function => {
  return (dispatch) => {
    return Promise.resolve()
      .then(() => {
        const url = 'https://cdn2.thecatapi.com/images/4da-GV7Z6.jpg';
        dispatch({
          type: REQUEST_PROFILE_PHOTO_SUCCESS,
          url,
        });

        return Promise.resolve(url);
      })
      .catch((_) => {
        dispatch({
          type: REQUEST_PROFILE_PHOTO_FAILURE,
        });
      });
  };
};

const requestContactList = (): Function => {
  return (dispatch) => {
    return Promise.resolve()
      .then(() => {
        const contacts = [
          'Test Contact 1',
          'Test Contact 2',
          'Test Contact 3',
          'Test Contact 4',
          'Test Contact 5',
          'Test Contact 6',
        ];
        dispatch({
          type: REQUEST_CONTACT_LIST_SUCCESS,
          contacts,
        });

        return Promise.resolve(contacts);
      })
      .catch((_) => {
        dispatch({
          type: REQUEST_CONTACT_LIST_FAILURE,
        });
      });
  };
};

export { requestUserName, requestProfilePhoto, requestContactList };
export type {
  UserNameSuccessAction,
  ProfilePhotoSuccessAction,
  ContactListSuccessAction,
};
