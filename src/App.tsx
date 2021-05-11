import React, { useCallback, useState } from 'react';
import styles from './App.module.scss';
import Ball from './components/Ball';
import PureBall from './components/PureBall';
import ComplexComponent from './components/ComplexComponent';

type data = {
  a: { label: string };
  b: { label: string };
};

const outsideCallback = () => alert('Outside callback');

const App = React.memo(() => {
  const [number, setNumber] = useState<number>(0);
  const [data, setData] = useState<data>({
    a: { label: 'test A' },
    b: { label: 'test B' },
  });

  const renderMe = () => {
    setNumber(number + 1);
  };

  const sameRefCallback = useCallback(() => {
    alert('Pure callback');
  }, []);

  const callback = () => alert('Callback');

  return (
    <div className={styles.app}>
      <div className="mb">
        <b>Rendered at {Date.now()}</b>
        <button type="button" className="ml" onClick={renderMe}>
          re-render me
        </button>
      </div>
      <div className="flex flex-column mt mb">
        <div className="flex flex-column mb">
          <div>Big Balls</div>
          <div className="flex flex-row">
            <Ball onClick={() => alert('Normal ball')}>
              Ball callback inline
            </Ball>
            <Ball onClick={callback}>Ball callback in parent</Ball>
            <Ball onClick={sameRefCallback}>Ball same ref callback</Ball>
            <Ball onClick={outsideCallback}>Ball outside callback</Ball>
          </div>
        </div>
        <div className="flex flex-column mt">
          <div>Big pure Balls</div>
          <div className="flex flex-row">
            <PureBall onClick={callback}>Pure ball callback in parent</PureBall>
            <PureBall onClick={() => alert('Pure ball')}>
              Pure ball callback inline
            </PureBall>
            <PureBall onClick={sameRefCallback}>
              Pure ball same ref callback
            </PureBall>
            <PureBall onClick={outsideCallback}>
              Pure ball outside callback
            </PureBall>
          </div>
        </div>
      </div>
      <div className="flex flex-column mt mb">
        <div>
          Complex component -{' '}
          <button
            type="button"
            className="mr"
            onClick={() => setData({ ...data, a: { label: 'new label A' } })}
          >
            Change A
          </button>
          <button
            type="button"
            onClick={() => setData({ ...data, b: { label: 'new label B' } })}
          >
            Change B
          </button>
        </div>
        <ComplexComponent className="mt" data={data} />
      </div>
    </div>
  );
});

export default App;
