export interface PermissionData {
  permissionType: 'camera' | 'location';
  lastPermissionState: string;
}

export type PermissionType = 'camera' | 'location';
