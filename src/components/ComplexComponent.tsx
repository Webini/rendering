import PureBall from './PureBall';
import React from 'react';

const ComplexComponent = React.memo(
  ({
    data: { a, b },
    className,
  }: {
    className?: string;
    data: { a: { label: string }; b: { label: string } };
  }) => (
    <div className={`${className || ''} flex flex-column`.trim()}>
      <div className="mb">Complex component rendered at {Date.now()}</div>
      <div className="flex">
        <PureBall>{a.label}</PureBall>
        <PureBall>{b.label}</PureBall>
      </div>
    </div>
  ),
);

export default ComplexComponent;
