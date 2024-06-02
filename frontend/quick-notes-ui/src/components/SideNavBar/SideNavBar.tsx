import React from 'react';
import styles from './SideNavBar.module.scss';
import { Link } from 'react-router-dom';

type Props = {};

interface NavItem {
  label: string;
  route: string;
}

const SideNavBar = (props: Props) => {
  const navItems: NavItem[] = [
    {
      label: 'Home',
      route: '/',
    },
  ];

  return (
    <div className={styles.container}>
      {/* {navItems.map((item) => (
        <Link to={item.route} key={item.route}>
          <div>{item.label}</div>
        </Link>
      ))} */}
    </div>
  );
};

export default SideNavBar;
