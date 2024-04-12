import React from 'react';

interface AppIconProps {
  Icon: any;
}

export const AppIcon = ({Icon}: AppIconProps) => {
  if (!Icon) {
    return null;
  }

  return <Icon />;
};
