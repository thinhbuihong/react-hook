import React, { useEffect, useState } from 'react';
import useClock from '../../hooks/useClock';


function Clock(props) {
  const { timeString } = useClock();

  return (
    <div>
      <p>{timeString}</p>
    </div>
  );
}

export default Clock;
