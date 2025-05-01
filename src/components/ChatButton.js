'use client';

import { useState, useEffect, useRef } from 'react';

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState('');
  const iframeRef = useRef(null);

  const fetchToken = async () => {
    console.log('key from env file ' + process.env.NEXT_PUBLIC_BOT_SECRET_KEY);
    try {
      const response = await fetch('https://webchat.botframework.com/api/tokens', {
        method: 'GET',
        headers: {
          'Authorization': 'BotConnector ' + process.env.NEXT_PUBLIC_BOT_SECRET_KEY
        }
      });
     
      if (response.status === 200) {
        const data = await response.text();
        const jsonData = JSON.parse(data);
        setToken(jsonData);
        console.log('Token JSON:', jsonData);
        if (iframeRef.current) {
          iframeRef.current.src = `https://webchat.botframework.com/embed/zerotekuk-bot?t=${jsonData}`;
        }
      } else {
        console.error('Failed to fetch token:', response.status);
        
      }
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchToken();
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            clipRule="evenodd"
          />
        </svg>
        {isOpen ? 'Close Chat' : 'Chat to us'}
      </button>

      <div
        className={`fixed right-0 top-0 h-full w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Chat with us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1">
            <iframe
              ref={iframeRef}
              style={{ width: '100%', height: '100%', border: 'none' }}
              className="rounded-b-lg"
              allow="microphone"
            />
          </div>
        </div>
      </div>
    </>
  );
} 