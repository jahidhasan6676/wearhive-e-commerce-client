import { useState, useEffect } from 'react';
import { FiSearch, FiMoreVertical, FiPaperclip, FiMic, FiSmile, FiSend } from 'react-icons/fi';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John', text: 'Hey, how are you?', time: '10:30 AM', isMe: false },
    { id: 2, sender: 'Me', text: 'I\'m good, thanks!', time: '10:32 AM', isMe: true },
    { id: 3, sender: 'John', text: 'Did you see the new collection?', time: '10:33 AM', isMe: false },
  ]);
  
  const [onlineUsers, setOnlineUsers] = useState([
    { id: 1, name: 'John Doe', avatar: 'JD', status: 'online', lastSeen: 'now' },
    { id: 2, name: 'Sarah Smith', avatar: 'SS', status: 'online', lastSeen: 'now' },
    { id: 3, name: 'Mike Johnson', avatar: 'MJ', status: 'away', lastSeen: '2 min ago' },
    { id: 4, name: 'Emma Wilson', avatar: 'EW', status: 'offline', lastSeen: '1 hour ago' },
  ]);
  
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const message = {
      id: messages.length + 1,
      sender: 'Me',
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="flex w-11/12 mx-auto py-10 h-screen bg-gray">
      {/* Left Sidebar - Online Users */}
      <div className="w-1/4 border-r border-gray-200 bg-white flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Chats</h2>
          <div className="relative mt-3">
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full pl-8 pr-3 py-2 text-sm border  rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"/>
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {onlineUsers.map(user => (
            <div key={user.id} className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
              <div className={`relative mr-3 ${user.status === 'online' ? 'text-green-500' : user.status === 'away' ? 'text-yellow-500' : 'text-gray-400'}`}>
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium">
                  {user.avatar}
                </div>
                <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${user.status === 'online' ? 'bg-green-500' : user.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'}`}></div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-800">{user.name}</h3>
                <p className="text-xs text-gray-500">
                  {user.status === 'online' ? 'Online' : `Last seen ${user.lastSeen}`}
                </p>
              </div>
              <FiMoreVertical className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Side - Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 bg-white flex items-center">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium mr-3">
            JD
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-800">John Doe</h3>
            <p className="text-xs text-green-500">Online</p>
          </div>
        </div>
        
        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <div className="space-y-3">
            {messages.map(message => (
              <div key={message.id} className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.isMe ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-200'}`}>
                  {!message.isMe && <div className="text-xs font-medium text-gray-700">{message.sender}</div>}
                  <p className="text-sm">{message.text}</p>
                  <div className={`text-xs mt-1 text-right ${message.isMe ? 'text-indigo-100' : 'text-gray-500'}`}>
                    {message.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <FiPaperclip />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <FiSmile />
            </button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 mx-2 px-3 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <FiMic />
            </button>
            <button 
              onClick={handleSendMessage}
              className="ml-2 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
            >
              <FiSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;