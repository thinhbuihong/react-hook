import React, { useEffect, useState } from 'react';

const formatDate = (date) => {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours} : ${minutes} : ${seconds}`
}

function Clock(props) {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const clock = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
    }, 1000)

    //cleanup
    return () => {
      console.log('clock cleanup');
      clearInterval(clock);
    }
  }, [])

  return (
    <div>
      <p>{timeString}</p>
    </div>
  );
}

export default Clock;
