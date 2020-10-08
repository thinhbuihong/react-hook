import React, { useEffect, useState } from 'react';
import useClock from '../../hooks/useClock';


function Clock(props) {
  const { timeString } = useClock();

  return (
    <div>
      <h1>{timeString}</h1>
    </div>
  );
}

export default Clock;
