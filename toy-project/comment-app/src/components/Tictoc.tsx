import { useState, useEffect } from 'react';
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs';
import './Tictoc.css';

// dummydata를 만들어서..
// 잘 작동하는지 보자구......
// 
const today_is = new Date().toISOString().slice(0, 10);

const Tictoc = () => {
  // 시작 시간
  const [startTime, setStartTime] = useState<Date | null>(null);
  // 공부한 시간
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  // intervalId를 받아 현재 시간 측정중인지!
  const [intervalId, setIntervalId] = useState<number | null>(null);
  

  // 버튼 클릭 시 시간 측정 시작
  const startTimer = () => {
    // 시작 시간 새로 받기
    setStartTime(new Date());
    if (intervalId === null) {
      // setInterval 시작하고 인터벌 ID를 저장
      const id = window.setInterval(() => {
      const currentTime = new Date();
      // null 체크 빼먹지 말자,,
      const elapsedMilliseconds = startTime ? currentTime.getTime() - startTime.getTime() : 0;
      setElapsedTime(elapsedMilliseconds);
    }, 1000);
    setIntervalId(id); // 인터벌 ID 저장
    } else {
      return;
    }
  };

  // 밀리초를 시, 분, 초로 변환
  const millisecondsToTime = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    return {
      hours: hours % 24,
      minutes: minutes % 60,
      seconds: seconds % 60,
    };
  };

  // 저장된 시간 포맷에~
  const formattedTime = millisecondsToTime(elapsedTime);

  const timepause = () => {
    // setInterval을 중지하고 intervalId를 초기화 시킨다
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    // 그리고 기록된 시간 저장하기
    // 같은 날의 기록이 있다면 studytime에 더해주기만 하고
    // 없다면 새로운 기록으로 등록해주기
  }

  return (
    <div>
      <h1>{today_is}</h1>
      <BsFillPlayCircleFill size='50' className='tictoc-btn' onClick={startTimer}/>
      <BsFillPauseCircleFill size='50' className='tictoc-btn' onClick={timepause}/>
      {startTime && (
        <div>
          <h1>경과 시간:</h1>
          <h1>{formattedTime.hours} 시간 {formattedTime.minutes} 분 {formattedTime.seconds} 초</h1>
        </div>
      )}
    </div>
  );
};

export default Tictoc;
