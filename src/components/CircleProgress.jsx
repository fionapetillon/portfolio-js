import { React, useEffect, useState} from 'react';
import { CircularProgressbarWithChildren, buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleProgress = ({Img, nameDev}) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let currentValue = 0;
    const interval = setInterval(() => {
      currentValue += 1;
      setPercentage(currentValue);
      if (currentValue === 90) {
        clearInterval(interval);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className=''>
        <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={8}
        styles={buildStyles({
            strokeLinecap: 'round',
            pathTransitionDuration: 0.5,
            pathColor: `url(#gradient)`,
            trailColor: '#0000',
            trailWidth: 8,
        })}
        >
        <img src={Img} />
        </CircularProgressbarWithChildren>
        <p className='p-2'>{nameDev}</p>
        <svg className='w-0 h-0'>
        <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#FF00E0" />
            <stop offset="100%" stopColor="#C100FF" />
            </linearGradient>
        </defs>
        </svg> 
    </div>
  );
};

export default CircleProgress;
