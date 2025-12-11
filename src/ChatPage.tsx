import React, { useState, useRef, useEffect } from "react";

// --- CẤU HÌNH API ---
const API_KEY = "AIzaSyDEIOTfJFro2tbg7RQCNKTZuUUQaGKzC5o";
const MODEL_NAME = "models/gemini-2.5-flash";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/${MODEL_NAME}:generateContent?key=${API_KEY}`;

interface Message {
  role: "user" | "bot";
  text: string;
}

const ChatPage = () => {
  // Quản lý danh sách tin nhắn
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Xin chào! Tôi là trợ lý ảo AI. Tôi có thể giúp gì cho bạn?",
    },
  ]);

  // Quản lý nội dung nhập và trạng thái loading
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Ref để tự động cuộn xuống cuối khi có tin nhắn mới
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // --- LOGIC GỌI API ---
  // Tương đương với logic lịch sử hội thoại trong Python SDK,
  // nhưng ở đây ta chỉ gửi tin nhắn cuối cùng (stateless)
  const sendMessageToGemini = async (userMessage: string) => {
    try {
      const payload = {
        contents: [
          {
            parts: [{ text: userMessage }],
          },
        ],
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        // Log chi tiết lỗi từ API nếu có
        const errorData = await response.json();
        console.error("API Error Details:", errorData);
        throw new Error(`Lỗi API: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      const botReply =
        data.candidates?.[0]?.content?.parts?.[0]?.text || "Không có phản hồi.";
      return botReply;
    } catch (error) {
      console.error("Error:", error);
      return "❌ Xin lỗi, tôi đang gặp sự cố kết nối.";
    }
  };

  // --- XỬ LÝ KHI NGƯỜI DÙNG GỬI TIN ---
  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput(""); // Xóa ô nhập liệu ngay lập tức
    setIsLoading(true);

    // 1. Thêm tin nhắn người dùng vào list
    setMessages((prev) => [...prev, { role: "user", text: userText }]);

    // 2. Gọi API lấy phản hồi
    const botResponse = await sendMessageToGemini(userText);

    // 3. Thêm tin nhắn Bot vào list
    setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
    setIsLoading(false);
  };

  // Xử lý khi nhấn Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // --- RENDERING JSX ---
  return (
    <div className="chat-page container-1200">
      <div className="chat-container">
        {/* Tiêu đề (tùy chọn) */}
        <div className="chat-header">🤖 Trợ lý AI</div>

        {/* 🛑 KHU VỰC HIỂN THỊ TIN NHẮN (ĐÃ THAY BẰNG LẶP STATE) */}
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}-message`}>
              <div className="message-bubble">{message.text}</div>
            </div>
          ))}
          {/* Hiển thị hiệu ứng loading khi chờ phản hồi */}
          {isLoading && (
            <div className="message ai-message">
              <div className="message-bubble loading-bubble">
                ...Đang xử lý...
              </div>
            </div>
          )}
          {/* Vị trí để tự động cuộn xuống */}
          <div ref={messagesEndRef} />
        </div>

        {/* 🛑 KHU VỰC NHẬP LIỆU (ĐÃ GẮN HANDLER) */}
        <div className="chat-input-area">
          <input
            type="text"
            placeholder={
              isLoading ? "Vui lòng chờ phản hồi..." : "Nhập tin nhắn..."
            }
            // ✅ Đã sửa: dùng state 'input'
            value={input}
            // ✅ Đã sửa: gắn onChange handler
            onChange={(e) => setInput(e.target.value)}
            // ✅ Gắn handler cho phím Enter
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            style={{
              backgroundColor: isLoading ? "#ccc" : "#fe4a00",
              cursor: isLoading ? "not-allowed" : "pointer",
            }}
          >
            {isLoading ? "Đang gửi..." : "Gửi"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

// --- Ghi chú: Tôi đã bỏ đoạn 'styles' CSS-in-JS vì bạn đang sử dụng classNames (chat-page, chat-container...)
// và đã có file CSS riêng (main.css) trong các bước trước.
