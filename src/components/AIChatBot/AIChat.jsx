import { useEffect, useRef, useState } from "react";
import ChatBotIcon from "./ChatBotIcon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import { shopInfo } from "./shopInfo";

const AIChat = () => {
    const [chatHistory, setChatHistory] = useState([{
        hideInChat: true,
        role: "model",
        text: shopInfo
    }]);
    const [showChatbot, setShowChatbot] = useState(false);
    const chatBodyRef = useRef();

    const generateBotResponse = async (history) => {
        // helper function to update chat history
        const updateHistory = (text, isError = false) => {
            setChatHistory(prev => [...prev.filter((msg) => msg.text !== "Typing..."), { role: "model", text, isError }]);
        }
        // format chat history for api request
        history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: history })
        }

        try {
            // make the api call to get the bot's response
            const response = await fetch(import.meta.env.VITE_AICHATBOT_API_URL, requestOptions);
            const data = await response.json();
            if (!response.ok) throw new Error(data.error.message || "Something went wrong");

            // clean and update chat history with bot's response
            const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
            updateHistory(apiResponseText);
        } catch (error) {
            updateHistory(error.message, true)
        }

    }

    useEffect(()=>{
        // auto-scroll whenever chat history updates
        chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: "smooth"})
    },[chatHistory]);
    return (
        <div className={`container ${showChatbot ? "show-chatbot" : ""} main`}>
            <button onClick={()=>setShowChatbot(prev => !prev)} id="chatbot-toggler">
                <span className="material-symbols-rounded">Mode_comment</span>
                <span className="material-symbols-rounded">close</span>
            </button>
            <div className="chatbot-popup">
                {/* chatbot header */}
                <div className="chat-header">
                    <div className="header-info">
                        <ChatBotIcon />
                        <h2 className="logo-text">ChatBot</h2>
                    </div>
                    <button onClick={()=>setShowChatbot(prev => !prev)} class="material-symbols-rounded">
                        keyboard_arrow_down
                    </button>
                </div>

                {/* chatbot body */}
                <div ref={chatBodyRef} className="chat-body">
                    <div className="message bot-message">
                        <ChatBotIcon />
                        <p className="message-text">
                            Hay there <br /> how can i help you today?
                        </p>
                    </div>

                    {/* Render the chat history dynamically */}
                    {chatHistory?.map((chat, index) => (
                        <ChatMessage key={index} chat={chat} />
                    ))}
                </div>

                {/* chatbot footer */}
                <div className="chat-footer">
                    <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
                </div>
            </div>
        </div>
    );
};

export default AIChat;