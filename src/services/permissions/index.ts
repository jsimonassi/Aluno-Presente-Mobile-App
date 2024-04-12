import {Platform} from 'react-native';
import {check, request, PERMISSIONS} from 'react-native-permissions';

const checkCameraPermission = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    let checkPromise;
    if (Platform.OS === 'ios') {
      checkPromise = check(PERMISSIONS.IOS.CAMERA);
    } else {
      checkPromise = check(PERMISSIONS.ANDROID.CAMERA);
    }
    checkPromise
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const checkLocationPermission = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    let checkPromise;
    if (Platform.OS === 'ios') {
      checkPromise = check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      checkPromise = check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
    checkPromise
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const requestCameraPermission = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    let requestPromise;
    if (Platform.OS === 'ios') {
      requestPromise = request(PERMISSIONS.IOS.CAMERA);
    } else {
      requestPromise = request(PERMISSIONS.ANDROID.CAMERA);
    }
    requestPromise
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const requestLocationPermission = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    let requestPromise;
    if (Platform.OS === 'ios') {
      requestPromise = request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      requestPromise = request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
    requestPromise
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const PermissionService = {
  checkCameraPermission,
  checkLocationPermission,
  requestCameraPermission,
  requestLocationPermission,
};
