import {  useState, useRef, useEffect  } from 'react';

// ⚠️ API KEY REMOVED FOR GITHUB PUSH ⚠️
const GROK_API_KEY = "REPLACED_FOR_SECURITY_REASONS";
const GROK_API_URL = "https://api.groq.com/openai/v1/chat/completions";

const SYSTEM_PROMPT = `You are a friendly and professional virtual assistant for Ashish Kumar Admissions that helps users begin their journey with our courses/services (B.Ed, ITI, Vocational Programs). Your goal is to engage the user, understand their needs, and guide them to start the process smoothly.

1. Greet the user warmly. Example: "Hello! 👋 Excited to help you start your journey with us!"
2. Ask their interest or goal. Example: "Can you tell me what you want to achieve or which program you're interested in?"
3. Provide personalized guidance. Suggest the right next step (course, service, or program).
4. Offer "Start My Journey" action. Example: "Click the button below to officially start your journey: [Start My Journey Link/Button]"
5. Collect minimal user information if required: Name, Email, Phone.
6. Encourage engagement and provide reassurance. "Don't worry, we'll guide you every step of the way!"
7. Handle FAQs and user doubts. Answer questions about program duration, cost, schedule, or benefits concisely.
8. End politely and positively. Example: "Awesome! You're all set to start your journey. 🚀 If you need help, I'm here anytime."

Tone: Friendly, motivating, professional, and clear.
Goal: Convert curiosity into action, encourage the user to click “Start My Journey,” and make the process smooth.
Do NOT use overly complex formatting. Use emojis and short paragraphs.`;

type Message = { role: 'system' | 'user' | 'assistant'; content: string };

export default function AIReceptionist() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! 👋 Excited to help you start your journey with us! Can you tell me what you want to achieve or which program you’re interested in?"
    }
  ]);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const sendTranscript = async () => {
    // Only send if there's an actual conversation (more than just the initial assistant greeting)
    if (messages.length <= 1) return;

    const transcript = messages
      .map(m => `${m.role.toUpperCase()}: ${m.content}`)
      .join('\n\n');

    try {
      await fetch("https://formsubmit.co/ajax/divyanshucmd@gmail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: "AI Chat - Student Conversation Transcript",
          message: transcript,
          _honey: "" // Spam protection
        })
      });
      console.log("Chat transcript sent to coordinator.");
    } catch (e) {
      console.error("Failed to send chat transcript", e);
    }
  };

  // Trigger transcript send when closing the chat
  useEffect(() => {
    if (!isOpen) {
      sendTranscript();
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);

  // Listen for custom event to open the modal
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openAI', handleOpen);
    return () => window.removeEventListener('openAI', handleOpen);
  }, []);

  // Auto-scroll chat to bottom when new messages arrive
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue.trim();
    setInputValue("");

    // Add user message to UI immediately
    const updatedMessages: Message[] = [
      ...messages,
      { role: 'user', content: userMsg }
    ];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      // Format history for Grok (inserting system prompt at the beginning)
      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...updatedMessages
      ];

      const response = await fetch(GROK_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROK_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile", // High speed Llama-3 model on Groq
          messages: apiMessages,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || "Failed to reach Grok API");
      }

      const data = await response.json();
      const aiResponse = data.choices[0]?.message?.content || "I'm sorry, I couldn't formulate a response.";

      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: aiResponse }
      ]);

    } catch (error: any) {
      console.error("Grok API Error Full Details:", error);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: `⚠️ Error: ${error.message || String(error)}` }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-[100] border-4 border-white/20"
        aria-label="Ask AI Assistant"
      >
        <span className="material-symbols-outlined text-3xl animate-pulse">forum</span>
      </button>

      {/* AI Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[110] flex items-center justify-center p-4 sm:p-6" onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false); }}>
          <div className="bg-white border border-outline-variant max-w-md w-full h-[600px] max-h-[85vh] rounded-2xl shadow-2xl relative flex flex-col animate-in fade-in zoom-in duration-200 overflow-hidden">

            {/* Header */}
            <div className="bg-primary text-on-primary p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">support_agent</span>
                </div>
                <div>
                  <h3 className="m-0 font-headline font-bold text-lg leading-tight">Admission Advisor</h3>
                  <p className="m-0 text-xs text-white/80 font-medium">Powered by Grok AI</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto bg-surface-container-lowest p-5 flex flex-col gap-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`px-4 py-3 rounded-2xl max-w-[85%] text-sm break-words shadow-sm leading-relaxed ${msg.role === 'user'
                      ? 'bg-primary text-on-primary rounded-tr-sm'
                      : 'bg-surface-container border border-surface-variant text-on-surface rounded-tl-sm'
                    }`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-surface-container border border-surface-variant px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-surface-variant shrink-0">
              <form
                onSubmit={handleSendMessage}
                className="flex items-center gap-2 bg-surface-container-low rounded-xl pr-2 border border-transparent focus-within:border-primary/30 focus-within:ring-2 focus-within:ring-primary/10 transition-all"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message here..."
                  className="flex-1 bg-transparent border-0 focus:ring-0 text-sm p-4 outline-none text-on-surface placeholder:text-on-surface-variant/60"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center disabled:opacity-50 disabled:bg-surface-variant transition-colors hover:bg-primary/90"
                >
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>
              </form>
              <div className="text-center mt-3">
                <p className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest font-bold">Confidential & Secure Chat</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
