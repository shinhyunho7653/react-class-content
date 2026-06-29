import React, { useState } from 'react';

export default function DateTest() {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div>
      <h2>날짜 태그 보기</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <h3>선택한 날짜: {selectedDate}</h3>
    </div>
  );
}
