import {useEffect, useState} from 'react';
import {PermissionService} from '../../../services';
import {RESULTS} from 'react-native-permissions';
import {PermissionData, PermissionType} from '../../../types/app/permissions';

export const usePermissionData = () => {
  const [permissionsToRequest, setPermissionsToRequest] = useState<
    PermissionData[]
  >([]);

  useEffect(() => {
    const runAsync = async () => {
      const cameraPermissionState =
        await PermissionService.checkCameraPermission();
      const locationPermissionState =
        await PermissionService.checkLocationPermission();

      const permissionsToRequestTemp: PermissionData[] = [];
      if (
        cameraPermissionState !== RESULTS.GRANTED &&
        cameraPermissionState !== RESULTS.UNAVAILABLE
      ) {
        permissionsToRequestTemp.push({
          permissionType: 'camera',
          lastPermissionState: cameraPermissionState,
        });
      }

      if (
        locationPermissionState !== RESULTS.GRANTED &&
        locationPermissionState !== RESULTS.UNAVAILABLE
      ) {
        permissionsToRequestTemp.push({
          lastPermissionState: locationPermissionState,
          permissionType: 'location',
        });
      }

      setPermissionsToRequest(permissionsToRequestTemp);
    };

    runAsync();
  }, []);

  const requestPermission = (type: PermissionType) => {
    return new Promise<PermissionData[]>((resolve, reject) => {
      let permissionPromise;
      if (type === 'camera') {
        permissionPromise = PermissionService.requestCameraPermission();
      } else {
        permissionPromise = PermissionService.requestLocationPermission();
      }

      permissionPromise
        .then(() => {
          const newPermissionArray = permissionsToRequest.filter(
            permission => permission.permissionType !== type,
          );
          setPermissionsToRequest(newPermissionArray);
          resolve(newPermissionArray);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  };

  const getNextNavigationScreen = (
    permissionsToRequestArray: PermissionData[],
  ) => {
    if (permissionsToRequestArray.length === 0) {
      return null;
    }

    if (
      permissionsToRequestArray[0].permissionType === 'camera' &&
      permissionsToRequestArray[0].lastPermissionState !==
        RESULTS.UNAVAILABLE &&
      permissionsToRequestArray[0].lastPermissionState !== RESULTS.BLOCKED
    ) {
      return 'CameraPermission';
    }

    if (
      permissionsToRequestArray[0].permissionType === 'location' &&
      permissionsToRequestArray[0].lastPermissionState !==
        RESULTS.UNAVAILABLE &&
      permissionsToRequestArray[0].lastPermissionState !== RESULTS.BLOCKED
    ) {
      return 'LocationPermission';
    }

    return null;
  };

  const checkCameraPermission = () => {
    return PermissionService.checkCameraPermission();
  };

  const checkGpsPermission = () => {
    return PermissionService.checkCameraPermission();
  };

  return {
    permissionsToRequest,
    requestPermission,
    getNextNavigationScreen,
    checkCameraPermission,
    checkGpsPermission,
  };
};
