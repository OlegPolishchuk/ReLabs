import { useEffect, useState } from 'react';

import { Event } from '@/components/EventsList/types/types';

const WEBSOCKET_URL = 'wss://test.relabs.ru/event';

export const useStartWebSocket = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [errorMessage, serErrorMessage] = useState('');

  useEffect(() => {
    const socket = new WebSocket(WEBSOCKET_URL);

    socket.onmessage = event => {
      const data = JSON.parse(event.data);
      setEvents(prevState => [data, ...prevState]);
    };

    socket.onerror = () => {
      serErrorMessage('WebSocket Error !');
    };

    return () => socket.close();
  }, []);

  return { events, errorMessage };
};
