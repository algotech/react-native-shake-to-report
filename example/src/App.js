import React from 'react';
import { Shkr } from 'react-neative-shake-to-report';

const App = () => {
  const reportIssue = (deviceInfo) => {
    console.log(deviceInfo)
  }

  return <Shkr reportIssue={(deviceInfo) => reportIssue(deviceInfo)} />
}

export default App
