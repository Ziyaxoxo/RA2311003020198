import React, { useEffect, useState } from 'react';
import { Log } from '../../logging_middleware/index';

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Narrative Log: App Startup
    Log("frontend", "info", "page", "User loaded the main dashboard.");
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    Log("frontend", "debug", "api", "Initiating fetch request for notifications.");
    try {
      // Example API call
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
      const data = await res.json();
      setNotifications(data);
      Log("frontend", "info", "state", `Successfully loaded ${data.length} notifications.`);
    } catch (err) {
      Log("frontend", "error", "api", `Failed to fetch notifications: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Notification Center</h1>
      <button onClick={() => Log("frontend", "info", "component", "User clicked Refresh button")}>
        Refresh
      </button>
      <ul>
        {notifications.map(n => (
          <li key={n.id}>{n.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }
]
