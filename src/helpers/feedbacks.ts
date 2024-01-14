import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const triggerFeedback = (
  type: 'impactLight' | 'impactMedium' | 'impactHeavy',
) => {
  ReactNativeHapticFeedback.trigger(type, options);
};

export const Feedbacks = {
  triggerFeedback,
};
