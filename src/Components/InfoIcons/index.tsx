import React, { ReactNode } from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from '@public/dummyData/Icons';
import { Text } from '../Text';

interface iconWrapperProps {
  children: ReactNode;
}

interface infoIconsProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const iconsWrapperStyles = 'h-8 w-8 bg-primary text-white rounded flex items-center justify-center';

function IconWrapper({ children }: iconWrapperProps) {
  return <div className={`${iconsWrapperStyles} `}>{children}</div>;
}
export function SocialIcons() {
  return (
    <>
      <ul className="flex gap-2">
        <IconWrapper>
          <FacebookIcon />
        </IconWrapper>
        <IconWrapper>
          <TwitterIcon />
        </IconWrapper>
        <IconWrapper>
          <InstagramIcon />
        </IconWrapper>
        <IconWrapper>
          <YoutubeIcon />
        </IconWrapper>
      </ul>
    </>
  );
}
export const InfoIcon = ({ icon, title, description }: infoIconsProps) => {
  return (
    <>
      <IconWrapper>{icon}</IconWrapper>
      <div>
        <Text size="x_small" textTransform="uppercase" styles="font-semibold">
          {title}
        </Text>
        <Text size="small" styles="font-semibold">
          {description}
        </Text>
      </div>
    </>
  );
};
