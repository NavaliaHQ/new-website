import { FC, PropsWithChildren, SyntheticEvent } from 'react';

import Link, { LinkProps } from '@mui/material/Link';

interface ScrollLinkProps extends Omit<LinkProps, 'href'> {
  to: string;
}

const ScrollLink: FC<ScrollLinkProps> = ({ to, children }) => (
  <Link
    href={`/#${to}`}
    onClick={(e: SyntheticEvent) => {
      e.preventDefault();
      document
        .getElementById(to)
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
    }}
  >
    {children}
  </Link>
);

export default ScrollLink;
