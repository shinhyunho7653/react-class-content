import React, { useState } from 'react';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const pageStyle = {
    minHeight: '100vh',
    backgroundColor: '#f2f2f2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '420px',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 18px 50px rgba(0, 0, 0, 0.12)',
  };

  const fieldStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '20px',
  };

  const inputStyle = {
    padding: '12px 14px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '14px',
  };

  const labelStyle = {
    fontSize: '14px',
    marginBottom: '6px',
    color: '#333',
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2 style={{ marginBottom: '24px', color: '#222' }}>회원가입</h2>

        <div style={fieldStyle}>
          <label style={labelStyle}>
            이름
          </label>
          <input
            style={inputStyle}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요"
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>
            이메일
          </label>
          <input
            style={inputStyle}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
          />
        </div>

      </div>
    </div>
  );
}
