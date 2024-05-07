import axios from 'axios';
import React from 'react'
import styles from './Card.module.scss';

type Props = {
    firstName: string;
    lastName: string;
}

const Card: React.FC<Props> = ({firstName, lastName}: Props): JSX.Element => {
    // const apiCall = axios.get<any>('https://localhost:7293/api/user').then(c => console.log('response', c.data));

  return (
    <div className={styles.qn}>
        {true && <div>{firstName}</div>}
        {true && <div>{lastName}</div>}
    </div>
  )
}

export default Card;