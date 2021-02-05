import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import { Navigation, NavigationTypography } from '../components/Navigation';
import Anchor from '../components/Anchor';
import Theme from '../components/Theme/Theme';

const links = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Services',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
];

function HomePage() {
  return (
    <Theme>
      <div>
        <Navigation
          links={links.map((link) => {
            const { name, href } = link;
            return (
              <Anchor key={name} href={href}>
                <NavigationTypography variant="subtitle2" color="textSecondary">
                  {name}
                </NavigationTypography>
              </Anchor>
            );
          })}
        />
        Welcome to Next.js!
        <ProgressiveImage delay={1000} src="https://fashionunited.com/4m96BsWlqGm8R9ceATQxbwC1glMtobpevcWM_zklx3M/gravity:sm/quality:70/aHR0cHM6Ly9mYXNoaW9udW5pdGVkLmNvbS9pbWcvbWFzdGVyLzIwMjEvMDEvMTMvNGJzeGRrLXRlbi1jLWhlYWRlci1peGFzcmotYXB5MjU0ZTEtMjAyMS0wMS0xMy5qcGVn?v=BigNewsCard" placeholder="https://fashionunited.com/4m96BsWlqGm8R9ceATQxbwC1glMtobpevcWM_zklx3M/gravity:sm/quality:70/aHR0cHM6Ly9mYXNoaW9udW5pdGVkLmNvbS9pbWcvbWFzdGVyLzIwMjEvMDEvMTMvNGJzeGRrLXRlbi1jLWhlYWRlci1peGFzcmotYXB5MjU0ZTEtMjAyMS0wMS0xMy5qcGVn?v=BigNewsCard">
          {(src, loading) => <img style={{ opacity: loading ? 0.5 : 1 }} src={src} alt="test" />}
        </ProgressiveImage>
      </div>
    </Theme>
  );
}

export default HomePage;
