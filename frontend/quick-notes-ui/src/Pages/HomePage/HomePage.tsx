import React from 'react';
import Button from '../../Components/Button/Button';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';

type Props = {};

const HomePage: React.FC<Props> = ({}: Props) => {
  const navigate = () => {};
  return (
    <div className={styles.container}>
      <Link to="/template/1">
        <Button label="Template 1" onClick={() => {}} />
      </Link>
      <Link to="/template/2">
        <Button label="Template 2" onClick={() => {}} />
      </Link>
      <Link to="/template/3">
        <Button label="Template 3" onClick={() => {}} />
      </Link>
      <Link to="/template/4">
        <Button label="Template 4" onClick={() => {}} />
      </Link>
      <Link to="/template/5">
        <Button label="Template 5" onClick={() => {}} />
      </Link>
      <Link to="/edit-template">
        <Button label="+ Create New" onClick={() => {}} />
      </Link>
    </div>
  );
};

export default HomePage;
