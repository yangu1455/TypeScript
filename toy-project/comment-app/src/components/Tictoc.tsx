import { useState, useEffect } from 'react';
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs';
import './Tictoc.css';

// dummydata를 만들어서..
// 잘 작동하는지 보자구......

const today_is = new Date().toISOString().slice(0, 10);

const Tictoc = () => {
  // 시작 시간
  const [startTime, setStartTime] = useState<Date | null>(null);
  // 공부한 시간 (재생 한번당)
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  // intervalId를 받아 현재 시간 측정중인지!
  const [intervalId, setIntervalId] = useState<number | null>(null);
  // 총 공부한 시간
  // 어차피 초깃값이 0이기 때문에 조건걸지않고 처음부터 공부한 시간에 더해줘도 됨
  // 근데 문제는 이렇게 하면 다음날까지도 이렇게 될수 있기 때문에
  // 현재 시간을 가지고 오는데
  // 날이 바뀌면(수->목) 오늘(수) 날짜데이터가 있는지 확인해보고 
  // 있다면 거기에(수요일 데이터) 더한후 이걸 다시 0으로 바꿔주어야할거같다
  // 없다면 새로운 데이터(수요일 데이터)에 이걸 집어넣어주고 0으로 바꿔줘야함
  // 그리고 브라우저를 끄면 중지 + 저장 기능도 만들어야함
  // 그리고... 브라우저를 끄지않고 계속 

  // 저장된 공부시간 가져오기!
  const savedStudyTime = localStorage.getItem('studyTime');
  // 문자열을 number로 변환합니다.
  const studyTime = savedStudyTime ? parseInt(savedStudyTime, 10) : 0;


  // 버튼 클릭 시 시간 측정 시작
  const startTimer = () => {
    // 시간 측정 중이 아니라면!
    if (intervalId === null) {
      // 공부 시작 시간 새로 받기
      setStartTime(new Date()); // 얘가 문제였음!
      // setInterval 시작하고 인터벌 ID를 저장
      const id = window.setInterval(() => {
        // 현재 시간 1초 당 계속 받아오기
        const currentTime = new Date();
        // null 체크 빼먹지 말자,,
        const elapsedMilliseconds = startTime ? currentTime.getTime() - startTime.getTime() + studyTime : 0;
        // 무조건 값에 studyTime을 더해서 보여주면 되잖아...
        setElapsedTime(elapsedMilliseconds);
      }, 1000);
      setIntervalId(id); // 인터벌 ID 저장
    }
  };
  
  const timepause = () => {
    // setInterval을 중지하고 intervalId를 초기화 시킨다
    if (intervalId) {
      setStartTime(null);
      clearInterval(intervalId);
      setIntervalId(null);
      
      // 이제 해야할 것
      // 기존에 사용하고 있던 StudyTime 대신 이 친구들을...
      // 날짜를 받아서 어제와 같으면 같은 날짜의 데이터에 값을 저장해주고
      // 저장한 날짜값 불러오기
      
      const storedData = localStorage.getItem('MyObject');
      const parsedData = JSON.parse(storedData ? storedData : '{"username": "", "date": "0000-00-00", "studyTime": ""}');
      const storedDate = parsedData.date;

      // 만약 저장된 데이터의 날짜가 오늘과 같다면
      if (storedDate === new Date().toISOString().slice(0, 10)) {
        // 객체화해서 저장합시다!!!
        const studyData = { "username": 'coenffl', "date": storedDate, "studyTime": elapsedTime.toString() };
        const studyJsonString = JSON.stringify(studyData);
        localStorage.setItem('myObject', studyJsonString);
      } else {
        // 다르다면 새로운 데이터를 저장한다.
        const studyData = { "username": 'coenffl', "date": new Date().toISOString().slice(0, 10), "studyTime": elapsedTime.toString() };
        const studyJsonString = JSON.stringify(studyData);
        localStorage.setItem('myObject', studyJsonString);
      } 
    }
      
  }

  // 비동기 처리
  useEffect(() => {
    // 시작 시간이 변경될 때마다 경과 시간 계산
    if (startTime !== null) {
      const interval = setInterval(() => {
        // 때마다 시간 가지고 와서 시간 차 계산하고 elapsedTime에 넘겨주기
        const currentTime = new Date();
        // 계산 똑같이
        const elapsedMilliseconds = startTime ? currentTime.getTime() - startTime.getTime() + studyTime : 0;
        setElapsedTime(elapsedMilliseconds);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startTime]);

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

  return (
    <div className='tictoc'>
      <h1 className='text-ac'>{today_is}</h1>
      {elapsedTime >= 0 && (
        <div>
          <h1>{formattedTime.hours} 시간 {formattedTime.minutes} 분 {formattedTime.seconds} 초</h1>
        </div>
      )}
      {intervalId === null ? (
        <BsFillPlayCircleFill size='100' className='tictoc-btn' onClick={startTimer}/>
      ) : (
        <BsFillPauseCircleFill size='100' className='tictoc-btn' onClick={timepause}/>
      )} 
    </div>
  );
};

export default Tictoc;