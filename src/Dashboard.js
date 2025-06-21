import React from 'react';

const signals = [
  {
    symbol: 'NIFTY 21000 CALL',
    expiry: '28-DEC-2024',
    action: 'BUY',
    entry: 125.5,
    target: 150,
    stopLoss: 100,
    confidence: 85,
    timestamp: '2024-12-21 09:30:00',
  },
  {
    symbol: 'BANKNIFTY 48000 PUT',
    expiry: '26-DEC-2024',
    action: 'SELL',
    entry: 180.25,
    target: 120,
    stopLoss: 220,
    confidence: 78,
    timestamp: '2024-12-21 10:15:00',
  }
];

function Dashboard() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Real-time futures and options trading signals</h2>
      {signals.map((signal, idx) => (
        <div key={idx} style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
          <h3>{signal.symbol}</h3>
          <p>Expiry: {signal.expiry}</p>
          <p style={{ color: signal.action === 'BUY' ? 'green' : 'red' }}>
            {signal.action}
          </p>
          <p>Entry Price: ₹{signal.entry}</p>
          <p>Target: ₹{signal.target}</p>
          <p>Stop Loss: ₹{signal.stopLoss}</p>
          <p>Confidence: {signal.confidence}%</p>
          <p>{signal.timestamp}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;