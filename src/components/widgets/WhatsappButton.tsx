import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Car, Clock, MapPin } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  quickReplies?: string[];
  cta?: { label: string; whatsappMessage: string };
}

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [hasGreeted, setHasGreeted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const phoneNumber = "237690461830";

  const PERSISTENT_BADGE: boolean = true;
  const [hasUnread, setHasUnread] = useState(true);

  const now = () => new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

  const scrollToBottom = () => {
    setTimeout(() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' }), 50);
  };

  const openWhatsApp = (text: string) => {
    const message = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const pushBotMessage = (text: string, quickReplies?: string[], cta?: Message['cta'], delay = 1000) => {
    setIsTyping(true);
    scrollToBottom();
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { id: Date.now().toString(), sender: 'bot', text, time: now(), quickReplies, cta }
      ]);
      scrollToBottom();
    }, delay);
  };

  const pushUserMessage = (text: string) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'user', text, time: now() }]);
    scrollToBottom();
  };

  // Message d'accueil auto-école
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      pushBotMessage(
        "Bonjour 👋 Bienvenue chez ITGES ! Je suis votre conseiller virtuel. Quelle formation souhaitez-vous préparer ?",
        ["Tarifs & Formations", "S'inscrire à une session", "Horaires des cours", "Parler à un moniteur"]
      );
    }
    if (isOpen && !PERSISTENT_BADGE) {
      setHasUnread(false);
    }
  }, [isOpen, hasGreeted]);

  const handleQuickReply = (reply: string) => {
    pushUserMessage(reply);

    switch (reply) {
      case "Tarifs & Formations":
        pushBotMessage(
          "Nous proposons le Permis B (Manuel & Automatique), le Permis Moto A2, et la Conduite Accompagnée. Souhaitez-vous recevoir la grille tarifaire détaillée sur WhatsApp ?",
          undefined,
          { label: "Recevoir les tarifs sur WhatsApp", whatsappMessage: "Bonjour ITGES, je souhaite obtenir les tarifs de vos formations." }
        );
        break;
      case "S'inscrire à une session":
        pushBotMessage(
          "Excellente initiative ! Nos prochaines sessions de code et de conduite démarrent bientôt. Finalisons votre dossier d'inscription directement avec l'équipe.",
          undefined,
          { label: "Démarrer mon inscription sur WhatsApp", whatsappMessage: "Bonjour ITGES, je souhaite m'inscrire à une formation au permis." }
        );
        break;
      case "Horaires des cours":
        pushBotMessage(
          "Nos bureaux sont ouverts du lundi au samedi de 8h00 à 18h00. Les cours de code ont lieu en continu et les heures de conduite sont planifiables selon votre emploi du temps.",
          ["Tarifs & Formations", "Parler à un moniteur"]
        );
        break;
      case "Parler à un moniteur":
        pushBotMessage(
          "Pas de souci ! Je vous met en relation directe avec un de nos moniteurs sur WhatsApp pour répondre à toutes vos questions.",
          undefined,
          { label: "Ouvrir la discussion WhatsApp", whatsappMessage: "Bonjour ITGES, j'aimerais échanger avec un moniteur." }
        );
        break;
      default:
        break;
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const userText = inputValue.trim();
    pushUserMessage(userText);
    setInputValue('');
    pushBotMessage(
      "Merci pour votre message ! Pour vous apporter une réponse personnalisée dans les plus brefs délais, poursuivons sur WhatsApp.",
      undefined,
      { label: "Continuer sur WhatsApp", whatsappMessage: `Bonjour ITGES, ${userText}` }
    );
  };

  return (
    <>
      {/* Bouton Flottant (Orange DriveAcademy) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-317 z-50 w-16 h-16 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300"
        aria-label="Ouvrir le chat WhatsApp"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </motion.div>

        {/* Badge de notification */}
        {hasUnread && !isOpen && (
          <motion.div
            className="absolute -top-1.5 -right-1.5 min-w-[22px] h-[22px] px-1 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[11px] font-bold"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            1
          </motion.div>
        )}
      </motion.button>

      {/* Fenêtre de Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-2rem)] h-[520px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col"
          >
            {/* Header Theme DriveAcademy (Slate-900 / Orange) */}
            <div className="bg-slate-900 text-white p-4 flex items-center gap-3 shrink-0 border-b border-slate-800">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white shrink-0">
                <Car size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold truncate text-base">
                  IT<span className="text-orange-500">GES</span>
                </p>
                <p className="text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  Conseillers en ligne
                </p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white shrink-0">
                <X size={20} />
              </button>
            </div>

            {/* Zone de messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50 dark:bg-slate-950">
              {messages.length === 0 && !isTyping && (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-950/40 rounded-full flex items-center justify-center mb-3">
                    <MessageCircle size={30} className="text-orange-500" />
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Ouverture du service d'assistance...</p>
                </div>
              )}

              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-orange-500 text-white rounded-br-md font-medium'
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-bl-md shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>

                  {/* Réponses rapides */}
                  {msg.quickReplies && (
                    <div className="flex flex-wrap gap-2 mt-2 max-w-full">
                      {msg.quickReplies.map((reply) => (
                        <button
                          key={reply}
                          onClick={() => handleQuickReply(reply)}
                          className="px-3 py-1.5 text-xs font-semibold border border-orange-500/30 text-orange-600 dark:text-orange-400 rounded-full hover:bg-orange-500 hover:text-white transition-colors bg-white dark:bg-slate-800 shadow-sm"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* CTA WhatsApp */}
                  {msg.cta && (
                    <button
                      onClick={() => openWhatsApp(msg.cta!.whatsappMessage)}
                      className="mt-2 w-full sm:w-auto px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      <MessageCircle size={15} />
                      {msg.cta.label}
                    </button>
                  )}
                </motion.div>
              ))}

              {/* Indicateur de frappe */}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start">
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-bl-md px-4 py-3 flex gap-1 shadow-sm">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Zone de saisie */}
            <div className="p-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 shrink-0 bg-white dark:bg-slate-900">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Posez votre question..."
                className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-full px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="w-10 h-10 shrink-0 bg-orange-500 hover:bg-orange-600 disabled:opacity-40 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Envoyer"
              >
                <Send size={16} />
              </button>
            </div>

            {/* Sub-footer d'infos */}
            <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center gap-3 text-[10px] text-slate-400 shrink-0">
              <span className="flex items-center gap-1"><Clock size={11} /> Réponse rapide</span>
              <span className="flex items-center gap-1"><MapPin size={11} /> Yaoundé</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}