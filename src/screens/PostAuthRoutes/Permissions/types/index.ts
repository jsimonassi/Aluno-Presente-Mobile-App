import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  MainTabParamList,
  PermissionsStackParamList,
} from '../../../../types/app/route';

export type DeviceScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<MainTabParamList, 'Home'>,
  StackNavigationProp<PermissionsStackParamList>
>;
