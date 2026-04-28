"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Phone,
  Video,
  ArrowLeft,
  Image,
  FileText,
  Shield,
  BadgeCheck,
  CheckCheck,
  Check as CheckIcon,
} from "lucide-react";
import Header from "@/components/layout/Header";
import { conversations, type Conversation, type Message } from "@/data/mock";

export default function MensagensPage() {
  const [activeConvo, setActiveConvo] = useState<Conversation | null>(null);
  const [message, setMessage] = useState("");
  const [localMessages, setLocalMessages] = useState<Record<string, Message[]>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showMobileChat, setShowMobileChat] = useState(false);

  const getMessages = (convo: Conversation) => {
    return localMessages[convo.id] || convo.messages;
  };

  const sendMessage = () => {
    if (!message.trim() || !activeConvo) return;

    const newMsg: Message = {
      id: `m-${Date.now()}`,
      senderId: "me",
      text: message,
      timestamp: new Date().toLocaleTimeString("pt-AO", { hour: "2-digit", minute: "2-digit" }),
      isRead: false,
    };

    setLocalMessages((prev) => ({
      ...prev,
      [activeConvo.id]: [...getMessages(activeConvo), newMsg],
    }));
    setMessage("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeConvo, localMessages]);

  const selectConvo = (convo: Conversation) => {
    setActiveConvo(convo);
    setShowMobileChat(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16 lg:pt-[72px] h-screen flex flex-col">
        <div className="flex-1 flex overflow-hidden">
          {/* Conversation List */}
          <div
            className={`w-full md:w-96 border-r border-gray-100 flex flex-col bg-white ${
              showMobileChat ? "hidden md:flex" : "flex"
            }`}
          >
            {/* List Header */}
            <div className="p-4 border-b border-gray-100">
              <h1 className="text-xl font-bold text-gray-900 mb-3">Mensagens</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Procurar conversas..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-300"
                />
              </div>
            </div>

            {/* Conversations */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((convo) => (
                <button
                  key={convo.id}
                  onClick={() => selectConvo(convo)}
                  className={`w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors text-left ${
                    activeConvo?.id === convo.id ? "bg-brand-50/50" : ""
                  }`}
                >
                  <div className="relative flex-shrink-0">
                    <img
                      src={convo.participant.avatar}
                      alt={convo.participant.name}
                      className="rounded-2xl bg-gray-100"
                      width={48}
                      height={48}
                      style={{ width: 48, height: 48, borderRadius: 16 }}
                    />
                    {convo.participant.isOnline && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-sm font-semibold text-gray-900 truncate">
                        {convo.participant.name}
                      </span>
                      <span className="text-[11px] text-gray-400 flex-shrink-0">
                        {convo.lastMessageTime}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500 truncate pr-2">
                        {convo.lastMessage}
                      </p>
                      {convo.unreadCount > 0 && (
                        <span className="flex-shrink-0 w-5 h-5 bg-brand-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                          {convo.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div
            className={`flex-1 flex flex-col ${
              !showMobileChat ? "hidden md:flex" : "flex"
            }`}
          >
            {activeConvo ? (
              <>
                {/* Chat Header */}
                <div className="flex items-center gap-3 px-4 sm:px-6 py-4 border-b border-gray-100 bg-white/80 backdrop-blur-xl">
                  <button
                    onClick={() => setShowMobileChat(false)}
                    className="md:hidden p-1 hover:bg-gray-100 rounded-lg"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <img
                    src={activeConvo.participant.avatar}
                    alt={activeConvo.participant.name}
                    className="rounded-xl bg-gray-100"
                    width={40}
                    height={40}
                    style={{ width: 40, height: 40, borderRadius: 12 }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-semibold text-gray-900">
                        {activeConvo.participant.name}
                      </span>
                      <BadgeCheck className="w-3.5 h-3.5 text-brand-500" />
                    </div>
                    <p className="text-xs text-gray-500">
                      {activeConvo.participant.isOnline ? (
                        <span className="text-green-600">Online</span>
                      ) : (
                        `Visto ${activeConvo.participant.lastSeen}`
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                      <Phone className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                      <Video className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>

                {/* Escrow Notice */}
                <div className="mx-4 sm:mx-6 mt-4">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-green-50 border border-green-100 rounded-xl">
                    <Shield className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <p className="text-xs text-green-700">
                      Esta conversa e protegida. Mantenha toda a comunicacao na plataforma para garantir a protecao Escrow.
                    </p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-3">
                  {getMessages(activeConvo).map((msg) => {
                    const isMe = msg.senderId === "me";
                    return (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${isMe ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                            isMe
                              ? "bg-brand-500 text-white rounded-br-md"
                              : "bg-gray-100 text-gray-900 rounded-bl-md"
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{msg.text}</p>
                          <div
                            className={`flex items-center justify-end gap-1 mt-1 ${
                              isMe ? "text-white/60" : "text-gray-400"
                            }`}
                          >
                            <span className="text-[10px]">{msg.timestamp}</span>
                            {isMe && (
                              msg.isRead ? (
                                <CheckCheck className="w-3 h-3" />
                              ) : (
                                <CheckIcon className="w-3 h-3" />
                              )
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 sm:px-6 border-t border-gray-100 bg-white">
                  <div className="flex items-end gap-2">
                    <button className="p-2.5 hover:bg-gray-100 rounded-xl transition-colors flex-shrink-0">
                      <Paperclip className="w-5 h-5 text-gray-400" />
                    </button>
                    <div className="flex-1 relative">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            sendMessage();
                          }
                        }}
                        placeholder="Escreva uma mensagem..."
                        rows={1}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm resize-none focus:outline-none focus:border-brand-300 focus:bg-white transition-all"
                      />
                    </div>
                    <button className="p-2.5 hover:bg-gray-100 rounded-xl transition-colors flex-shrink-0">
                      <Smile className="w-5 h-5 text-gray-400" />
                    </button>
                    <button
                      onClick={sendMessage}
                      disabled={!message.trim()}
                      className={`p-2.5 rounded-xl transition-all flex-shrink-0 ${
                        message.trim()
                          ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25 hover:bg-brand-600"
                          : "bg-gray-100 text-gray-300"
                      }`}
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* Empty State */
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-gray-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">As suas mensagens</h3>
                  <p className="text-sm text-gray-500">Selecione uma conversa para comecar</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
