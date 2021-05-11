import React, { ReactNode } from 'react';
import styles from './Ball.module.scss';

const Ball = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => (
  <div
    className={[styles.ball, onClick && styles['ball--interactive']]
      .filter(Boolean)
      .join(' ')}
    onClick={onClick}
  >
    {children} <br />
    {Date.now()}
  </div>
);

export default Ball;
