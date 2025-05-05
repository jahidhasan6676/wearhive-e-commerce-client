import { FiSearch, FiMoreVertical, FiPaperclip, FiMic, FiSmile } from 'react-icons/fi';

const Chat = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 h-screen">
      {/* Left sidebar - Contacts */}
      <div className="w-full md:w-1/3 bg-white border-r border-gray-200 flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold">Chats</h1>
        </div>
        
        {/* Search */}
        <div className="p-3 border-b border-gray-200">
          <div className="relative">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages or users"
              className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              readOnly
            />
          </div>
        </div>
        
        {/* Group section - Paris members */}
        <div className="p-3 border-b border-gray-200">
          <h3 className="font-semibold text-gray-500 mb-2">Paris</h3>
          <div className="flex items-center space-x-2">
            {/* Patrick */}
            <div className="flex flex-col items-center p-2 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                P
              </div>
              <span className="text-xs mt-1">Patrick</span>
            </div>
            
            {/* Emily */}
            <div className="flex flex-col items-center p-2 hover:bg-gray-100 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-medium">
                E
              </div>
              <span className="text-xs mt-1">Emily</span>
            </div>
            
            {/* Steve */}
            <div className="flex flex-col items-center p-2 hover:bg-gray-100 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-medium">
                S
              </div>
              <span className="text-xs mt-1">Steve</span>
            </div>
          </div>
        </div>
        
        {/* Recent chats */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-3 border-b border-gray-200">
            <h3 className="font-semibold text-gray-500 mb-2">Recent</h3>
            <div className="space-y-3">
              {/* Patrick Hendricks */}
              <div className="flex items-center p-2 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                  PH
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Patrick Hendricks</h3>
                    <span className="text-xs text-gray-500">02:50 PM</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">hey! there I'm available</p>
                </div>
              </div>
              
              {/* Mark Messer */}
              <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium">
                  MM
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Mark Messer</h3>
                    <span className="text-xs text-gray-500">10:30 AM</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">images</p>
                </div>
              </div>
              
              {/* General */}
              <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-medium">
                  G
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">General</h3>
                    <span className="text-xs text-gray-500">2:00 min</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">This theme is Awesome!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Chat area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Chat header */}
        <div className="flex items-center p-4 border-b border-gray-200 bg-white">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
            PH
          </div>
          <div className="ml-3 flex-1">
            <h3 className="font-medium">Patrick Hendricks</h3>
            <p className="text-xs text-gray-500">01:06 PM</p>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <FiMoreVertical className="text-gray-500" />
          </button>
        </div>
        
        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <div className="space-y-4">
            {/* Received message */}
            <div className="flex justify-start">
              <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg bg-white text-gray-800 rounded-bl-none shadow">
                <p>hi</p>
                <p className="text-xs mt-1 text-right text-gray-500">0:15</p>
              </div>
            </div>
            
            {/* Received message */}
            <div className="flex justify-start">
              <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg bg-white text-gray-800 rounded-bl-none shadow">
                <p>How's going on your project?</p>
                <p className="text-xs mt-1 text-right text-gray-500">01:06</p>
              </div>
            </div>
            
            {/* Received message */}
            <div className="flex justify-start">
              <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg bg-white text-gray-800 rounded-bl-none shadow">
                <p>Do you need any help?</p>
                <p className="text-xs mt-1 text-right text-gray-500">01:06</p>
              </div>
            </div>
            
            {/* Sent message */}
            <div className="flex justify-end">
              <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg bg-blue-600 text-white rounded-br-none">
                <p>Yes, I need help with the design</p>
                <p className="text-xs mt-1 text-right text-blue-200">01:10</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Message input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100 mr-1">
              <FiSmile className="text-gray-500 text-xl" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 mr-1">
              <FiPaperclip className="text-gray-500 text-xl" />
            </button>
            <input
              type="text"
              placeholder="Enter Message..."
              className="flex-1 py-2 px-4 rounded-full bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              readOnly
            />
            <button className="p-2 rounded-full hover:bg-gray-100 ml-1">
              <FiMic className="text-gray-500 text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;