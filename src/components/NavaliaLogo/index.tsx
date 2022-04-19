import { FC, useContext } from 'react';

import Image from 'next/image';

import { ThemeContext } from 'src/contexts/ThemeContext';

export interface NavaliaLogoProps {
  width?: number;
  height?: number;
}

const NavaliaLogo: FC<NavaliaLogoProps> = ({ width = 40, height = 40 }) => {
  const { themeName } = useContext(ThemeContext);

  return (
    <Image
      src={`/assets/${
        themeName === 'light' ? 'logo-colored' : 'logo-white'
      }.svg`}
      alt="Navalia logo"
      width={width}
      height={height}
    />
  );
};

export default NavaliaLogo;
