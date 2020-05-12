//Adding Authentication (action creator)
import * as actionTypes from './actionTypes';
import axios from 'axios';

// Adding Synchronous action creator
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId : userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    //To remove login data from local storage after logout
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
  return {
        type: actionTypes.AUTH_LOGOUT
  };
};

//Auto Logout function 
export const checkAuthTimeout =  (expirationTime) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch (logout());
        }, expirationTime * 1000);
    };
};

//Adding Asynchronous action creator
//using firebase Authentication
export const auth = (email, password, isSignup) => {
    return dispatch => {
       dispatch(authStart());
       const authData ={
           email: email,
           password : password,
           returnSecureToken : true
       };
       let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAd6vMb2XSIJ-QP5Y-o2cT_1-rhT1gGTwI';
       if(!isSignup){
           url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAd6vMb2XSIJ-QP5Y-o2cT_1-rhT1gGTwI';
       }
       axios.post(url, authData)
           .then(response => {
               console.log(response);
               const expirationDate = new Date(new Date ().getTime() + response.data.expiresIn * 1000)
               //To store login state in local storage.
               localStorage.setItem('token', response.data.idToken);
               localStorage.setItem('expirationDate', expirationDate);
               localStorage.setItem('userId',response.data.localId);
               dispatch(authSuccess(response.data.idToken, response.data.localId));
               dispatch(checkAuthTimeout(response.data.expiresIn));
           })
           .catch(err => {
               console.log(err);
               dispatch(authFail(err.response.data.error));
           })
    };
};

//Redirecting to page of authentication(if not logged in)

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }
        }
    };
};