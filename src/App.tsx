import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ChevronRight, 
  Plus, 
  GraduationCap, 
  FileText, 
  Sparkles,
  Loader2,
  ArrowLeft,
  ArrowRight,
  Brain,
  ShieldCheck,
  ChevronDown,
  Send,
  MessageSquare,
  FileCheck,
  PhoneCall,
  Calendar,
  Database,
  AlertCircle,
  CheckCircle2,
  Users,
  Instagram,
  ExternalLink,
  Menu,
  X,
  FileDown
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Institute, Professor, ResearchTopic, INITIAL_INSTITUTES, NewsItem } from './types';
import { getFacultyData, generateResearchTopics, generateFullProposal, getProfessorPublications, getLatestNews, getInstituteNameFromUrl } from './services/aiService';
import { sendProposalEmails } from './services/emailService';
import { CURATED_FACULTY } from './facultyData';
import { FACULTY_DATABASE, NEWS_DATABASE, getFacultyForInstitute } from './staticDatabase';
import { PdfModal } from './components/PdfModal';
import { loadRazorpay } from './utils/razorpay';

const isSuperUser = (email: string, phone: string) => {
  const e = email?.toLowerCase().trim() || '';
  const p = phone?.trim() || '';
  return e === 'sigmamind20598@gmail.com' || p === '7092884311' || p === '8130330373';
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function FunnyLoader({ isInitial = false, customMessage = null }: { isInitial?: boolean, customMessage?: string | null }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const messages = [
    "Reticulating splines...",
    "Feeding the research hamsters...",
    "Consulting the academic oracle...",
    "Polishing the citations...",
    "Sleep-depriving the grad students...",
    "Brewing strong coffee for the AI...",
    "Translating professor-speak to English...",
    "Searching for that one missing semicolon...",
    "Good things take time (unlike my thesis defense)...",
    "Almost there, just checking the p-values...",
    "Finalizing the bibliography (the hardest part)...",
    "Downloading more RAM...",
    "Optimizing the neural pathways...",
    "Checking for tenure-track openings...",
    "Ignoring reviewer #2's comments...",
    "Formatting the LaTeX table (pray for me)..."
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        // If it's the initial load, make it take about 15 seconds
        if (isInitial) {
          const increment = prev < 30 ? 1.5 : prev < 70 ? 0.5 : prev < 90 ? 0.2 : 0.05;
          return Math.min(99.9, prev + increment);
        }
        // Otherwise, use the standard faster increment
        const increment = prev < 30 ? 2 : prev < 70 ? 0.8 : prev < 90 ? 0.3 : 0.1;
        return Math.min(99.9, prev + increment);
      });
    }, 100);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [isInitial]);

  return (
    <div className="h-full flex flex-col items-center justify-center text-white/40 p-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2000&auto=format&fit=crop" alt="3D Brain" className="w-full h-full object-cover mix-blend-screen" />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/90 to-[#050505] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-full border-4 border-white/5 flex items-center justify-center relative overflow-hidden">
            <motion.div 
              className="absolute bottom-0 left-0 right-0 bg-emerald-500/20"
              initial={{ height: 0 }}
              animate={{ height: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
            <Loader2 className="animate-spin text-emerald-600 relative z-10" size={40} />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[8px] font-black px-2 py-0.5 rounded-full shadow-lg">
            {Math.floor(progress)}%
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.p
            key={customMessage ? 'custom' : messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-sm font-medium text-white/60 mb-2 text-center min-h-[40px] max-w-md"
          >
            {customMessage || messages[messageIndex]}
          </motion.p>
        </AnimatePresence>
        
        <p className="font-black animate-pulse tracking-[0.3em] uppercase text-[10px] text-emerald-500/40">
          {isInitial ? "Initializing Research Domain" : "Loading Intelligence"}
        </p>

        <div className="mt-8 w-64 h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        <p className="mt-4 text-[8px] uppercase tracking-widest text-white/20">
          {isInitial ? `Estimated wait: ${Math.max(0, Math.ceil((100 - progress) / 6.6))}s` : `Est. wait: ${Math.max(0, Math.ceil((100 - progress) / 5))}s`}
        </p>

        <div className="mt-12 p-4 bg-white/5 rounded-xl border border-white/10 max-w-xs text-center backdrop-blur-sm">
          <p className="text-[8px] uppercase tracking-widest text-emerald-500/60 font-bold mb-1">Pro Tip</p>
          <p className="text-[9px] text-white/40 leading-relaxed italic">
            {isInitial ? "\"Good things take time (unlike my thesis defense).\"" : "\"A PhD is just a very long loading screen for your career.\""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [mode, setMode] = useState<'home' | 'directory' | 'custom' | 'news' | 'review' | 'guidance' | 'contact' | 'mock'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sortedInstitutes = React.useMemo(() => [...INITIAL_INSTITUTES].sort((a, b) => {
    const isAiitA = a.name.includes('IIT') || a.name.includes('IIM');
    const isAiitB = b.name.includes('IIT') || b.name.includes('IIM');
    if (isAiitA && !isAiitB) return -1;
    if (!isAiitA && isAiitB) return 1;
    return a.name.localeCompare(b.name);
  }), []);

  const [institutesList, setInstitutesList] = useState<Institute[]>(sortedInstitutes);
  const [selectedInstitute, setSelectedInstitute] = useState<Institute | null>(null);
  const [professors, setProfessors] = useState<Professor[]>([]);
  const [selectedProfessor, setSelectedProfessor] = useState<Professor | null>(null);
  const [topics, setTopics] = useState<ResearchTopic[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<ResearchTopic | null>(null);
  const [proposal, setProposal] = useState<string | null>(null);
  const [isProposalUnlocked, setIsProposalUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAppInitializing, setIsAppInitializing] = useState(true);
  const [view, setView] = useState<'faculty' | 'topics' | 'proposal' | 'profile'>('faculty');
  const [profDetails, setProfDetails] = useState<{ bio: string, publications: string[], citationTrend: any[], publicationTrend: any[] } | null>(null);
  const [newInstituteLink, setNewInstituteLink] = useState('');
  const [isAddingInstitute, setIsAddingInstitute] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [proposalsGenerated, setProposalsGenerated] = useState(() => {
    const saved = localStorage.getItem('proposalsGenerated');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [pendingTopic, setPendingTopic] = useState<ResearchTopic | null>(null);
  const [loadingMessage, setLoadingMessage] = useState<string | null>(null);
  const [userName, setUserName] = useState('');
  const [showPricingModal, setShowPricingModal] = useState(false);

  // Custom Proposal Form State
  const [customDomain, setCustomDomain] = useState('');
  const [customInst, setCustomInst] = useState('');
  const [customProf, setCustomProf] = useState('');
  const [customTopic, setCustomTopic] = useState('');

  // Contact Info State
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');

  // Mock Interview Form State
  const [bachelorsDetails, setBachelorsDetails] = useState('');
  const [mastersDetails, setMastersDetails] = useState('');
  const [dissertationDetails, setDissertationDetails] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [jobDetails, setJobDetails] = useState('');
  const [otherDetails, setOtherDetails] = useState('');

  const [searchTerm, setSearchTerm] = useState('');
  const [lastError, setLastError] = useState<string | null>(null);

  const filteredInstitutes = institutesList.filter(inst => 
    inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inst.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fetchNews = async (isInitial = false) => {
    if (!isInitial) setIsLoading(true);
    setNews(NEWS_DATABASE); // Show static news instantly
    setLastError(null);
    
    if (isInitial) {
      // Do not fetch AI news on initial load to save costs
      return;
    }

    try {
      const data = await getLatestNews();
      if (data && data.length > 0) {
        setNews(data); // Replace with Gemini news if successful
      }
    } catch (error) {
      console.error("Failed to fetch AI news:", error);
      // Keep static news on error
    } finally {
      if (!isInitial) setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(true);
    // Artificial delay for initial load to show the funny timer as requested
    const timer = setTimeout(() => {
      setIsAppInitializing(false);
    }, 8000); // 8 seconds initial funny loading
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsSubmitted(false);
  }, [mode]);

  const loadFaculty = async (name: string) => {
    if (!name) return;
    
    setIsLoading(true);
    setProfessors([]);
    setLastError(null);
    
    try {
      const data = getFacultyForInstitute(name);
      setProfessors(data);
    } catch (error) {
      console.error("Failed to load faculty:", error);
      setLastError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsLoading(false);
      setView('faculty');
      setSelectedProfessor(null);
    }
  };

  const handleProfessorClick = async (prof: Professor) => {
    setSelectedProfessor(prof);
    setIsLoading(true);
    setView('profile');
    
    // Use static data if available
    if (prof.topPapers && prof.topPapers.length > 0) {
      setProfDetails({
        bio: prof.focus || "Research profile information.",
        publications: prof.topPapers,
        citationTrend: prof.citationTrend || [],
        publicationTrend: prof.publicationTrend || []
      });
      setIsLoading(false);
      return;
    }

    try {
      const details = await getProfessorPublications(prof.name, selectedInstitute?.name || '', prof.scholarLink);
      setProfDetails(details);
    } catch (error) {
      console.error("Failed to load professor profile:", error);
      setProfDetails({
        bio: "Information currently unavailable. Please try again later.",
        publications: [],
        citationTrend: [],
        publicationTrend: []
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleProfessorSelect = async (prof: Professor) => {
    setSelectedProfessor(prof);
    
    // Use static research ideas if available
    if (prof.researchIdeas && prof.researchIdeas.length > 0) {
      setTopics(prof.researchIdeas);
      setView('topics');
      return;
    }

    setIsLoading(true);
    setTopics([]); // Clear previous topics
    setLastError(null);
    
    try {
      const generatedTopics = await generateResearchTopics(prof, selectedInstitute?.name || '');
      if (generatedTopics && generatedTopics.length > 0) {
        setTopics(generatedTopics);
        setView('topics');
      } else {
        setLastError("Failed to generate research topics. Please try again.");
      }
    } catch (error) {
      console.error("Failed to generate topics:", error);
      setLastError(error instanceof Error ? error.message : "An unexpected error occurred while generating topics.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleTopicSelect = (topic: ResearchTopic) => {
    // Check cache first
    const cacheKey = `proposal_${topic.id}_${selectedProfessor?.id}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      setProposal(cached);
      setSelectedTopic(topic);
      setView('proposal');
      return;
    }

    setPendingTopic(topic);
    if (!userEmail || !userPhone || !userName) {
      setShowLeadModal(true);
      return;
    }
    if (proposalsGenerated >= 1 && !isSuperUser(userEmail, userPhone)) {
      setShowPricingModal(true);
      return;
    }
    setShowLeadModal(true);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail || !userPhone || !userName || !pendingTopic) return;
    
    setShowLeadModal(false);
    setIsProposalUnlocked(isSuperUser(userEmail, userPhone));
    
    if (proposalsGenerated >= 1 && !isSuperUser(userEmail, userPhone)) {
      setShowPricingModal(true);
      return;
    }

    setSelectedTopic(pendingTopic);
    setIsLoading(true);
    setLoadingMessage("Drafting your free proposal... This will take 3-4 minutes. While you wait, go to the services menu for guidance and custom made proposals by current PhD scholars.");
    
    try {
      const fullProposal = await generateFullProposal(
        pendingTopic, 
        selectedProfessor?.name || '', 
        selectedProfessor?.specialization || '',
        selectedInstitute?.name || ''
      );
      
      // Save to cache
      const cacheKey = `proposal_${pendingTopic.id}_${selectedProfessor?.id}`;
      localStorage.setItem(cacheKey, fullProposal);
      
      setProposalsGenerated(prev => {
        const newVal = prev + 1;
        localStorage.setItem('proposalsGenerated', newVal.toString());
        return newVal;
      });
      
      setProposal(fullProposal);
      
      // Send Emails
      await sendProposalEmails(
        userEmail,
        userPhone,
        userName,
        fullProposal,
        pendingTopic.title,
        false
      );
      
    } catch (error) {
      console.error("Error in handleLeadSubmit:", error);
      setProposal(error instanceof Error ? error.message : "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
      setLoadingMessage(null);
      setView('proposal');
    }
  };

  const handleUnlockProposal = () => {
    if (!userEmail || !userPhone || !userName) {
      alert("Please ensure your contact details are filled out first.");
      return;
    }
    loadRazorpay(
      99,
      'Unlock Full Research Proposal + PDF',
      userName,
      userEmail,
      userPhone,
      (response) => {
        setIsProposalUnlocked(true);
        alert(`Payment successful! (ID: ${response.razorpay_payment_id}). Your proposal is now unlocked and a formatted PDF will be emailed to you!`);
      }
    );
  };

  const handleManualPaidRequest = async (amount: number, type: 'single' | 'bundle') => {
    if (!userEmail || !userPhone || !userName || !pendingTopic) {
      alert("Please ensure your contact details are filled out first.");
      return;
    }
    
    setShowPricingModal(false);

    loadRazorpay(
      amount,
      type === 'single' ? '1 Additional Research Proposal' : '3 Additional Research Proposals',
      userName,
      userEmail,
      userPhone,
      async (response) => {
        // On Success
        setIsLoading(true);
        setLoadingMessage("Payment successful! Processing your request... This will take 3-4 minutes.");
        
        try {
          // Generate the proposal for the admin
          const fullProposal = await generateFullProposal(
            pendingTopic, 
            selectedProfessor?.name || '', 
            selectedProfessor?.specialization || '',
            selectedInstitute?.name || ''
          );

          // Send Emails for paid request (proposal generated and sent ONLY to admin)
          await sendProposalEmails(
            userEmail,
            userPhone,
            userName,
            `Payment ID: ${response.razorpay_payment_id}\nType: ${type}\n\n${fullProposal}`,
            pendingTopic.title,
            true
          );
          alert("Payment successful and request processed! We will send you the proposal(s) within 12 hours.");
        } catch (error) {
          console.error("Error sending paid request:", error);
          alert("Payment was successful, but we had trouble sending the email. Please contact us with your Payment ID: " + response.razorpay_payment_id);
        } finally {
          setIsLoading(false);
          setLoadingMessage(null);
        }
      }
    );
  };

  const handleServiceSubmit = async (e: React.FormEvent, serviceType: string, details: any) => {
    e.preventDefault();
    if (!userEmail || !userPhone) return;

    setIsLoading(true);
    try {
      await fetch('/api/submit-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ serviceType, userEmail, userPhone, details })
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addInstitute = async () => {
    if (newInstituteLink.trim()) {
      setIsLoading(true);
      const extractedName = await getInstituteNameFromUrl(newInstituteLink);
      const newInst: Institute = {
        id: Date.now().toString(),
        name: extractedName,
        url: newInstituteLink,
        location: 'Custom Link',
        departments: ['Psychology', 'Neuroscience']
      };
      setInstitutesList([...institutesList, newInst]);
      setNewInstituteLink('');
      setIsAddingInstitute(false);
      setSelectedInstitute(newInst);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30 overflow-hidden">
      <nav className={cn(
        "h-24 border-b flex items-center px-4 md:px-8 shrink-0 z-50 transition-colors duration-500 relative",
        "bg-black/40 border-white/5 backdrop-blur-md text-white justify-between"
      )}>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex-1 flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white/60 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Left Nav */}
        <div className="hidden md:flex flex-1 items-center gap-8">
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
            <button 
              onClick={() => { setMode('directory'); setView('faculty'); }}
              className={cn("hover:text-emerald-500 transition-colors", mode === 'directory' ? "text-emerald-500" : "text-white/60")}
            >
              Faculty Mapping
            </button>
            <div className="relative group/services">
              <button className={cn("hover:text-emerald-500 transition-colors flex items-center gap-1", (mode === 'custom' || mode === 'review' || mode === 'guidance' || mode === 'mock') ? "text-emerald-500" : "text-white/60")}>
                Services <ChevronDown size={10} />
              </button>
              <div className="absolute top-full left-0 mt-4 w-64 opacity-0 invisible group-hover/services:opacity-100 group-hover/services:visible transition-all duration-300">
                <div className="p-2 rounded-2xl border shadow-2xl space-y-1 backdrop-blur-xl bg-black/80 border-white/10">
                  <button onClick={() => setMode('guidance')} className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 transition-all">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Proposal Guidance</p>
                    <p className="text-[8px] opacity-50 uppercase tracking-tighter">By PhD student @ IIT Delhi</p>
                  </button>
                  <button onClick={() => setMode('custom')} className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 transition-all">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Custom Proposal</p>
                    <p className="text-[8px] opacity-50 uppercase tracking-tighter">By IITD Research Team</p>
                  </button>
                  <button onClick={() => setMode('review')} className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 transition-all">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Proposal Review</p>
                    <p className="text-[8px] opacity-50 uppercase tracking-tighter">Review by Team</p>
                  </button>
                  <button onClick={() => setMode('mock')} className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 transition-all">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Mock Interview</p>
                    <p className="text-[8px] opacity-50 uppercase tracking-tighter">Preparation & Feedback</p>
                  </button>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setMode('news')}
              className={cn("hover:text-emerald-500 transition-colors", mode === 'news' ? "text-emerald-500" : "text-white/60")}
            >
              Latest News
            </button>
          </div>
        </div>

        {/* Center Logo */}
        <div onClick={() => setMode('home')} className="flex flex-col items-center cursor-pointer group px-2 md:px-8">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center transition-all group-hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <Brain size={24} className="text-[#0a192f] md:w-7 md:h-7" />
          </div>
          <span className="text-[10px] font-black tracking-[0.2em] text-white uppercase mt-1 md:mt-2">CRID</span>
          <span className="hidden md:block text-[6px] font-bold tracking-[0.1em] text-white/40 uppercase mt-1 text-center whitespace-nowrap">
            Cognitive Research Intelligence Domain
          </span>
          <div className="mt-1 md:mt-2 px-2 md:px-3 py-0.5 md:py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[6px] md:text-[8px] font-black tracking-widest text-emerald-300 uppercase">Incubated at IIT Delhi</span>
          </div>
        </div>

        {/* Desktop Right Nav & Mobile Spacer */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <button 
            onClick={() => setMode('contact')}
            className={cn(
              "hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all",
              mode === 'contact' 
                ? "bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]" 
                : "bg-white/5 text-white/60 hover:bg-white/10"
            )}
          >
            <div className="w-5 h-5 rounded-full overflow-hidden bg-emerald-500/20 flex items-center justify-center">
              <img 
                src="/sarthak.jpg" 
                alt="S" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    const span = document.createElement('span');
                    span.className = 'text-[8px]';
                    span.innerText = '👨‍🔬';
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
            Contact Me
          </button>
          
          {/* Mobile Contact Icon */}
          <button 
            onClick={() => setMode('contact')}
            className={cn(
              "md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all",
              mode === 'contact' 
                ? "bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]" 
                : "bg-white/5 text-white/60 hover:bg-white/10"
            )}
          >
            <div className="w-6 h-6 rounded-full overflow-hidden bg-emerald-500/20 flex items-center justify-center">
              <img 
                src="/sarthak.jpg" 
                alt="S" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    const span = document.createElement('span');
                    span.className = 'text-[10px]';
                    span.innerText = '👨‍🔬';
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-24 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 z-40 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 text-[12px] font-bold uppercase tracking-[0.2em]">
              <button 
                onClick={() => { setMode('directory'); setView('faculty'); setIsMobileMenuOpen(false); }}
                className={cn("text-left hover:text-emerald-500 transition-colors", mode === 'directory' ? "text-emerald-500" : "text-white/60")}
              >
                Faculty Mapping
              </button>
              
              <div className="flex flex-col gap-4">
                <span className="text-white/40 text-[10px]">Services</span>
                <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                  <button onClick={() => { setMode('guidance'); setIsMobileMenuOpen(false); }} className="text-left hover:text-emerald-500 transition-colors">
                    Proposal Guidance
                  </button>
                  <button onClick={() => { setMode('custom'); setIsMobileMenuOpen(false); }} className="text-left hover:text-emerald-500 transition-colors">
                    Custom Proposal
                  </button>
                  <button onClick={() => { setMode('review'); setIsMobileMenuOpen(false); }} className="text-left hover:text-emerald-500 transition-colors">
                    Proposal Review
                  </button>
                  <button onClick={() => { setMode('mock'); setIsMobileMenuOpen(false); }} className="text-left hover:text-emerald-500 transition-colors">
                    Mock Interview
                  </button>
                </div>
              </div>

              <button 
                onClick={() => { setMode('news'); setIsMobileMenuOpen(false); }}
                className={cn("text-left hover:text-emerald-500 transition-colors", mode === 'news' ? "text-emerald-500" : "text-white/60")}
              >
                Latest News
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 flex overflow-hidden relative">
        {mode === 'directory' && (
          <aside className={cn(
            "w-full md:w-80 bg-[#050505] md:bg-black/20 border-r border-white/5 flex flex-col shrink-0 backdrop-blur-sm absolute md:relative z-20 h-full transition-transform duration-300",
            selectedInstitute ? "-translate-x-full md:translate-x-0" : "translate-x-0"
          )}>
            <div className="p-6 border-b border-white/5 text-center">
              <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-4">Institute Faculty Mapping</p>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                <input 
                  type="text" 
                  placeholder={`Search ${institutesList.length} Universities...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/5 border border-white/5 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-white/20"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-1">
                {filteredInstitutes.map((inst) => (
                  <button
                    key={inst.id}
                    onClick={() => {
                      setSelectedInstitute(inst);
                      loadFaculty(inst.url || inst.name);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between group",
                      selectedInstitute?.id === inst.id ? "bg-emerald-500/10 text-emerald-400 font-bold" : "hover:bg-white/5 text-white/60"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <GraduationCap size={18} className={selectedInstitute?.id === inst.id ? "text-emerald-500 shrink-0" : "text-white/20 shrink-0"} />
                      <span className="text-sm leading-snug">{inst.name}</span>
                    </div>
                    <ChevronRight size={14} className={cn("transition-transform", selectedInstitute?.id === inst.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100")} />
                  </button>
                ))}
              </div>
              
              {isAddingInstitute ? (
                <div className="mt-4 p-2 space-y-2 bg-white/5 rounded-xl">
                  <input 
                    autoFocus
                    className="w-full px-3 py-2 text-sm bg-black/40 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-white"
                    placeholder="Institute Link (URL)..."
                    value={newInstituteLink}
                    onChange={(e) => setNewInstituteLink(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addInstitute()}
                  />
                  <div className="flex gap-2">
                    <button onClick={addInstitute} className="flex-1 bg-emerald-600 text-white text-xs py-2 rounded-lg font-bold">Add Link</button>
                    <button onClick={() => setIsAddingInstitute(false)} className="flex-1 bg-white/10 text-white/60 text-xs py-2 rounded-lg">Cancel</button>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={() => setIsAddingInstitute(true)}
                  className="w-full flex items-center gap-3 px-4 py-3 mt-2 text-sm text-white/30 hover:text-white/60 transition-colors font-bold"
                >
                  <Plus size={18} />
                  <span>Add Institute Link</span>
                </button>
              )}
            </div>
          </aside>
        )}

        <main className="flex-1 flex flex-col overflow-hidden relative bg-[#050505]">
          {mode !== 'home' && mode !== 'review' && (
            <header className="h-16 bg-black/40 backdrop-blur-md border-b border-white/5 flex items-center px-8 shrink-0">
              <div className="flex items-center gap-4">
                {((view !== 'faculty' || mode === 'custom') || (view === 'faculty' && selectedInstitute !== null)) && mode !== 'news' && mode !== 'guidance' && (
                  <button 
                    onClick={() => {
                      if (mode === 'custom') {
                        setMode('directory');
                        setView('faculty');
                      } else if (view === 'faculty' && selectedInstitute !== null) {
                        setSelectedInstitute(null);
                      } else {
                        setView(view === 'profile' ? 'faculty' : (view === 'proposal' ? 'topics' : 'faculty'));
                      }
                    }}
                    className={cn(
                      "p-2 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white",
                      view === 'faculty' && selectedInstitute !== null ? "md:hidden" : ""
                    )}
                  >
                    <ArrowLeft size={20} />
                  </button>
                )}
                <h2 className="text-sm font-black tracking-tight text-white/40 uppercase">
                  {mode === 'news' && `Latest News & Updates`}
                  {mode === 'guidance' && `Proposal Guidance`}
                  {mode === 'custom' && `Custom Proposal`}
                  {mode === 'mock' && `Mock Interview & Feedback`}
                  {view === 'faculty' && mode === 'directory' && `Institute Faculty Mapping`}
                  {view === 'profile' && `Faculty Profile`}
                  {view === 'topics' && `Research Proposal Ideas`}
                  {view === 'proposal' && `Research Proposal`}
                </h2>
              </div>
            </header>
          )}

          <div className="flex-1 overflow-y-auto p-8">
            {isAppInitializing ? (
              <FunnyLoader isInitial />
            ) : isLoading ? (
              <FunnyLoader customMessage={loadingMessage} />
            ) : (
              <AnimatePresence mode="wait">
                {mode === 'home' && (
                  <motion.div
                    key="home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="min-h-full bg-[#050505] text-white relative flex flex-col items-center justify-center px-8 py-20 overflow-hidden -m-8"
                  >
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2000&auto=format&fit=crop" alt="3D Brain" className="w-full h-full object-cover mix-blend-screen" />
                    </div>
                    <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505] pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
                      <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-7xl md:text-8xl font-medium tracking-tight mb-16 leading-[0.9]"
                      >
                        Simplifying <br /> Research Proposals
                      </motion.h1>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col items-center gap-12"
                      >
                        <button 
                          onClick={() => setMode('directory')}
                          className="rainbow-glow group relative px-12 py-5 bg-black text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-4 hover:scale-105 transition-all"
                        >
                          Explore professors, their work, papers etc. university wise
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {mode === 'directory' && view === 'faculty' && selectedInstitute && (
                  <motion.div
                    key="faculty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="max-w-5xl mx-auto"
                  >
                    {professors.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {professors.map((prof) => (
                          <div key={prof.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-2">{prof.name}</h3>
                            <p className="text-sm text-white/60 mb-4">{prof.specialization}</p>
                            
                            {prof.researchIdeas && prof.researchIdeas.length > 0 && (
                              <div className="mb-4 space-y-2">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">Research Ideas Available</p>
                                <div className="flex flex-wrap gap-1">
                                  {prof.researchIdeas.slice(0, 2).map((idea, i) => (
                                    <span key={i} className="text-[8px] px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                                      {idea.title.length > 25 ? idea.title.substring(0, 25) + '...' : idea.title}
                                    </span>
                                  ))}
                                  {prof.researchIdeas.length > 2 && (
                                    <span className="text-[8px] px-2 py-1 bg-white/5 text-white/40 rounded-full border border-white/10">
                                      +{prof.researchIdeas.length - 2} more
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}

                            <div className="flex gap-2">
                              <button 
                                onClick={() => handleProfessorClick(prof)}
                                className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-xs font-bold transition-colors"
                              >
                                View Profile
                              </button>
                              <button 
                                onClick={() => handleProfessorSelect(prof)}
                                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-lg text-xs font-bold transition-colors"
                              >
                                {prof.researchIdeas && prof.researchIdeas.length > 0 ? 'View Topics' : 'Generate Topics'}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center py-20">
                        <Users className="w-16 h-16 text-white/10 mb-4" />
                        <p className="text-white/40 uppercase tracking-widest text-sm font-bold">No professors found.</p>
                        <p className="text-white/20 text-xs mt-2">Try clicking the university name again or select another one.</p>
                      </div>
                    )}
                  </motion.div>
                )}

                {mode === 'directory' && view === 'topics' && selectedProfessor && (
                  <motion.div
                    key="topics"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="max-w-4xl mx-auto space-y-6"
                  >
                    <h3 className="text-2xl font-bold mb-6">Research Topics for {selectedProfessor.name}</h3>
                    
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-6">
                      <p className="text-yellow-400 text-sm font-medium">
                        ⚠️ <strong className="font-bold">CAUTION:</strong> These are AI-generated proposal ideas. They might be brilliant, they might be way off, or they might be complete hallucinations (AI dreaming about electric sheep 🐑). Use them as a good starting point, not a final submission!
                      </p>
                    </div>

                    {isLoading ? (
                      <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mb-4" />
                        <p className="text-white/40 font-bold uppercase tracking-widest text-xs">Generating innovative topics...</p>
                      </div>
                    ) : topics.length > 0 ? (
                      topics.map((topic) => (
                        <div key={topic.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-bold text-emerald-400">{topic.title}</h4>
                            <div className="flex gap-2">
                              {topic.gapType && (
                                <span className="px-2 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                                  {topic.gapType}
                                </span>
                              )}
                              {topic.difficulty && (
                                <span className={cn(
                                  "px-2 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border",
                                  topic.difficulty === 'Feasible' ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                                  topic.difficulty === 'Moderate' ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" :
                                  "bg-red-500/10 text-red-400 border-red-500/20"
                                )}>
                                  {topic.difficulty}
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-white/70 mb-4">{topic.description}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                              <p className="text-[8px] font-bold uppercase tracking-widest text-white/30 mb-1">Methodology</p>
                              <p className="text-xs font-bold text-white/80">{topic.methodology}</p>
                            </div>
                            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                              <p className="text-[8px] font-bold uppercase tracking-widest text-white/30 mb-1">Source Inspiration</p>
                              <p className="text-[10px] font-medium text-white/60 line-clamp-1 italic mb-1">"{topic.sourcePublication.split(' - DOI: ')[0]}"</p>
                              <a 
                                href={`https://scholar.google.com/scholar?q=${encodeURIComponent(topic.sourcePublication.split(' - DOI: ')[0])}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-[9px] text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                              >
                                <Search size={10} /> Scholar
                              </a>
                            </div>
                          </div>

                          <button 
                            onClick={() => handleTopicSelect(topic)}
                            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl text-xs font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
                          >
                            Generate Full Proposal
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-white/40">No topics generated. Please try again.</p>
                        <button 
                          onClick={() => handleProfessorSelect(selectedProfessor)}
                          className="mt-4 text-emerald-400 font-bold hover:underline"
                        >
                          Retry Generation
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}

                {mode === 'directory' && view === 'proposal' && proposal && (
                  <motion.div
                    key="proposal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="max-w-4xl mx-auto space-y-6"
                  >
                    <div className="flex justify-end">
                      {isProposalUnlocked && (
                        <button
                          onClick={() => {
                            alert(`Your formatted PDF is being prepared and will be emailed to ${userEmail} shortly!`);
                          }}
                          className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20"
                        >
                          <FileDown size={20} />
                          Request PDF Copy
                        </button>
                      )}
                    </div>
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
                        <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1000&auto=format&fit=crop" alt="3D Brain" className="w-full h-full object-cover mix-blend-screen" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/90 to-[#0a0a0a] pointer-events-none z-0"></div>
                      
                      {(() => {
                        if (isProposalUnlocked) {
                          return (
                            <div className="prose prose-invert max-w-none relative z-10">
                              <div className="whitespace-pre-wrap font-mono text-sm leading-relaxed">{proposal}</div>
                            </div>
                          );
                        }

                        return (
                          <div className="relative z-10">
                            <div className="relative">
                              <div className="prose prose-invert max-w-none blur-md opacity-40 select-none pointer-events-none">
                                <div className="whitespace-pre-wrap font-mono text-sm leading-relaxed">{proposal}</div>
                              </div>
                              
                              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20">
                                <div className="bg-[#111]/90 border border-emerald-500/30 p-8 rounded-2xl shadow-2xl max-w-md backdrop-blur-md">
                                  <h3 className="text-2xl font-bold mb-3 text-white">Whoa there, Einstein! 🧠</h3>
                                  <p className="text-white/70 mb-6 text-sm leading-relaxed">
                                    The full academic masterpiece (Methodology, Literature Review, Citations) is ready! 
                                    For just <strong className="text-emerald-400">₹99</strong>, unlock it now AND get a beautifully formatted PDF! 
                                    <br/><br/>
                                    (It costs us real money to run these AI models, help a dev out! ☕)
                                  </p>
                                  <button 
                                    onClick={handleUnlockProposal}
                                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                                  >
                                    <Sparkles size={20} />
                                    Unlock Proposal + PDF — ₹99
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </motion.div>
                )}

                {mode === 'directory' && view === 'profile' && selectedProfessor && profDetails && (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="max-w-4xl mx-auto space-y-8"
                  >
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                      <h2 className="text-3xl font-bold mb-2">{selectedProfessor.name}</h2>
                      <p className="text-emerald-400 font-medium mb-6">{selectedProfessor.specialization}</p>
                      <div className="prose prose-invert max-w-none">
                        <p className="text-white/80 leading-relaxed">{profDetails.bio}</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <FileText className="text-emerald-500" />
                        Recent Publications
                      </h3>
                      <div className="space-y-4">
                        {profDetails.publications.map((pub, i) => {
                          const hasDoi = pub.includes(' - DOI: ');
                          const [titlePart, doiPart] = hasDoi ? pub.split(' - DOI: ') : [pub, null];
                          const searchUrl = `https://scholar.google.com/scholar?q=${encodeURIComponent(titlePart)}`;
                          
                          return (
                            <div key={i} className="bg-black/40 p-4 rounded-xl border border-white/5 flex flex-col gap-2">
                              <p className="text-white/80 text-sm">{titlePart}</p>
                              <div className="flex gap-4 mt-1">
                                {doiPart && (
                                  <a href={`https://doi.org/${doiPart}`} target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors">
                                    <ExternalLink size={12} /> DOI: {doiPart}
                                  </a>
                                )}
                                <a href={searchUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
                                  <Search size={12} /> Google Scholar
                                </a>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}

                {mode === 'news' && (
                  <motion.div
                    key="news"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="max-w-5xl mx-auto space-y-8"
                  >
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-2xl font-bold">Latest Research & Admissions</h3>
                      <button 
                        onClick={() => fetchNews(false)}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-all"
                      >
                        <Loader2 className={cn("w-3 h-3", isLoading && "animate-spin")} />
                        Refresh News
                      </button>
                    </div>

                    {news.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {news.map((item) => (
                          <div key={item.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded-full uppercase tracking-wider">
                                {item.category}
                              </span>
                              <span className="text-[10px] text-white/30 font-mono">
                                {new Date(item.timestamp).toLocaleDateString()}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-sm text-white/60 mb-6 line-clamp-2">{item.summary}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-white/40 font-medium">Source: {item.source}</span>
                              <a 
                                href={item.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-xs font-bold transition-colors"
                              >
                                Read More <ArrowRight size={14} />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center py-20">
                        <Database className="w-16 h-16 text-white/10 mb-4" />
                        <p className="text-white/40 uppercase tracking-widest text-sm font-bold">No news updates found.</p>
                        <p className="text-white/20 text-xs mt-2">The AI might be taking a break. Try refreshing in a moment.</p>
                      </div>
                    )}
                  </motion.div>
                )}

                {mode === 'custom' && (
                  <motion.div
                    key="custom"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="max-w-3xl mx-auto"
                  >
                    {isSubmitted ? (
                      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-12 text-center">
                        <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-2">Request Submitted</h3>
                        <p className="text-white/60">Our research team will review your requirements and get back to you shortly.</p>
                      </div>
                    ) : (
                      <form onSubmit={(e) => {
                        if (!customInst || !customProf || !customDomain || !customTopic) return;
                        handleServiceSubmit(e, 'Custom Proposal', { customInst, customProf, customDomain, customTopic });
                      }} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-1.5">University you want to apply in</label>
                            <input type="text" value={customInst} onChange={e => setCustomInst(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white" placeholder="e.g. Stanford University" required />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-1.5">Professor under whom you want to apply</label>
                            <input type="text" value={customProf} onChange={e => setCustomProf(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white" placeholder="e.g. Dr. Andrew Ng" required />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-1.5">Any specific domain</label>
                            <input type="text" value={customDomain} onChange={e => setCustomDomain(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white" placeholder="e.g. Cognitive Neuroscience" required />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-1.5">Any specific topic</label>
                            <textarea value={customTopic} onChange={e => setCustomTopic(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white h-32 resize-none" placeholder="Describe the specific topic or idea..." required />
                          </div>
                          <div className="pt-4">
                            <label className="block text-sm font-medium text-white/70 mb-1.5">Email ID</label>
                            <input type="email" value={userEmail} onChange={e => setUserEmail(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white" placeholder="your@email.com" required />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-1.5">Phone Number</label>
                            <input type="tel" value={userPhone} onChange={e => setUserPhone(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white" placeholder="+91 9876543210" required />
                          </div>
                        </div>
                        <div className="pt-4 border-t border-white/10">
                          <div className="flex items-center justify-between mb-6">
                            <div>
                              <h4 className="text-lg font-bold text-white">Custom Proposal Package</h4>
                              <p className="text-sm text-white/60">Includes 1 revision and a detailed explanation of the whole proposal</p>
                            </div>
                            <div className="text-right">
                              <span className="text-3xl font-bold text-emerald-400">₹3,000</span>
                            </div>
                          </div>
                          <button type="submit" disabled={isLoading} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-50">
                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                            {isLoading ? 'Submitting...' : 'Submit Request'}
                          </button>
                          <a href="https://wa.me/917092884311?text=Hi%20CRID%20Team,%20I%20am%20interested%20in%20a%20Custom%20Proposal." target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                            <MessageSquare className="w-4 h-4" />
                            Contact via WhatsApp (+91 7092884311)
                          </a>
                        </div>
                      </form>
                    )}
                  </motion.div>
                )}

                {mode === 'guidance' && (
                  <motion.div
                    key="guidance"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="max-w-4xl mx-auto"
                  >
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
                      {isSubmitted ? (
                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-12 text-center">
                          <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                          <h3 className="text-2xl font-bold text-white mb-2">Request Submitted</h3>
                          <p className="text-white/60">We will contact you shortly to schedule your guidance session.</p>
                        </div>
                      ) : (
                        <>
                          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                            <PhoneCall className="w-10 h-10 text-emerald-500" />
                          </div>
                          <h2 className="text-4xl font-bold mb-4">1-on-1 Proposal Guidance</h2>
                          <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">Get personalized feedback and direction from a PhD student at IIT Delhi.</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
                            <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                              <Calendar className="w-8 h-8 text-emerald-500 mb-4" />
                              <h4 className="font-bold mb-2">45-Minute Session</h4>
                              <p className="text-sm text-white/50">In-depth discussion of your research ideas and methodology.</p>
                            </div>
                            <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                              <FileCheck className="w-8 h-8 text-emerald-500 mb-4" />
                              <h4 className="font-bold mb-2">Pre-review</h4>
                              <p className="text-sm text-white/50">We review your draft before the call to maximize our time.</p>
                            </div>
                            <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                              <MessageSquare className="w-8 h-8 text-emerald-500 mb-4" />
                              <h4 className="font-bold mb-2">Follow-up Q&A</h4>
                              <p className="text-sm text-white/50">Email support for 1 week after the session.</p>
                            </div>
                          </div>
                          
                          <form onSubmit={(e) => handleServiceSubmit(e, 'Proposal Guidance', {})} className="max-w-md mx-auto space-y-4 text-left">
                            <div>
                              <label className="block text-sm font-medium text-white/70 mb-1.5">Email ID</label>
                              <input type="email" value={userEmail} onChange={e => setUserEmail(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white" placeholder="your@email.com" required />
                            </div>
                            <div className="mb-6">
                              <label className="block text-sm font-medium text-white/70 mb-1.5">Phone Number</label>
                              <input type="tel" value={userPhone} onChange={e => setUserPhone(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white" placeholder="+91 9876543210" required />
                            </div>
                            
                            <button type="submit" disabled={isLoading} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2">
                              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                              {isLoading ? 'Submitting...' : 'Book Session - ₹1,999'}
                            </button>
                            <a href="https://wa.me/917092884311?text=Hi%20CRID%20Team,%20I%20am%20interested%20in%20Proposal%20Guidance." target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                              <MessageSquare className="w-4 h-4" />
                              Contact via WhatsApp (+91 7092884311)
                            </a>
                          </form>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}

                {mode === 'review' && (
                  <motion.div
                    key="review"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="max-w-4xl mx-auto py-12"
                  >
                    {isSubmitted ? (
                      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-12 text-center max-w-2xl mx-auto">
                        <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-2">Request Submitted</h3>
                        <p className="text-white/60">We will contact you shortly to start the review process.</p>
                      </div>
                    ) : (
                      <>
                        <div className="text-center mb-16">
                          <h2 className="text-4xl font-bold mb-4">Expert Proposal Review</h2>
                          <p className="text-xl text-white/60 max-w-2xl mx-auto">Have your research proposal reviewed by our team of experienced researchers before submission.</p>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12">
                          <h3 className="text-2xl font-bold mb-8 text-center">What's Included</h3>
                          <div className="space-y-4">
                            {[
                              "Detailed feedback on research gap and novelty",
                              "Methodology critique and suggestions",
                              "Formatting and structural review",
                              "Language and academic tone improvements",
                              "2 revision cycles"
                            ].map((item, i) => (
                              <div key={i} className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                <span className="text-white/80">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <form onSubmit={(e) => handleServiceSubmit(e, 'Proposal Review', {})} className="max-w-md mx-auto space-y-4 text-left">
                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-1.5">Email ID</label>
                            <input type="email" value={userEmail} onChange={e => setUserEmail(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white" placeholder="your@email.com" required />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-1.5">Phone Number</label>
                            <input type="tel" value={userPhone} onChange={e => setUserPhone(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white" placeholder="+91 9876543210" required />
                          </div>
                          <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                            <p className="text-sm text-emerald-400 flex items-start gap-2">
                              <span className="text-lg">📧</span>
                              <span>After submitting this form, please email your proposal document (PDF/Word) directly to <strong>sigmamind20598@gmail.com</strong> for review.</span>
                            </p>
                          </div>
                          
                          <button type="submit" disabled={isLoading} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2">
                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                            {isLoading ? 'Submitting...' : 'Submit for Review - ₹2,499'}
                          </button>
                          <a href="https://wa.me/917092884311?text=Hi%20CRID%20Team,%20I%20am%20interested%20in%20a%20Proposal%20Review." target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                            <MessageSquare className="w-4 h-4" />
                            Contact via WhatsApp (+91 7092884311)
                          </a>
                        </form>
                      </>
                    )}
                  </motion.div>
                )}

                {mode === 'mock' && (
                  <motion.div
                    key="mock"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="max-w-4xl mx-auto py-12"
                  >
                    {isSubmitted ? (
                      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-12 text-center max-w-2xl mx-auto">
                        <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-2">Request Submitted</h3>
                        <p className="text-white/60">We will contact you shortly to schedule your mock interview.</p>
                      </div>
                    ) : (
                      <>
                        <div className="text-center mb-16">
                          <h2 className="text-4xl font-bold mb-4">Mock Interview & Feedback</h2>
                          <p className="text-xl text-white/60 max-w-2xl mx-auto">Prepare for your PhD interview with our expert panel. Get detailed feedback on your performance and proposal.</p>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12">
                          <h3 className="text-2xl font-bold mb-8 text-center">What's Included</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                              "1-on-1 Mock Interview (45-60 mins)",
                              "Detailed performance feedback report",
                              "Proposal defense strategy",
                              "Common PhD interview questions prep",
                              "Confidence building & body language tips",
                              "Follow-up Q&A session"
                            ].map((item, i) => (
                              <div key={i} className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                                <span className="text-white/80 text-sm">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <form 
                          onSubmit={(e) => handleServiceSubmit(e, 'Mock Interview', {
                            bachelors: bachelorsDetails,
                            masters: mastersDetails,
                            dissertation: dissertationDetails,
                            projects: projectDetails,
                            job: jobDetails,
                            other: otherDetails
                          })} 
                          className="max-w-2xl mx-auto space-y-6 text-left"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-white/70 mb-1.5">Bachelor's Details (CGPA, Major, Year)</label>
                              <textarea value={bachelorsDetails} onChange={e => setBachelorsDetails(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white h-24 resize-none" placeholder="e.g. B.Tech in CSE, 8.5 CGPA, 2020" required />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-white/70 mb-1.5">Master's Details (CGPA, Major, Year)</label>
                              <textarea value={mastersDetails} onChange={e => setMastersDetails(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white h-24 resize-none" placeholder="e.g. M.Tech in AI, 9.0 CGPA, 2022" required />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-1.5">Dissertation Details (Topic & Brief)</label>
                            <textarea value={dissertationDetails} onChange={e => setDissertationDetails(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white h-24 resize-none" placeholder="Briefly describe your Master's dissertation..." required />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-1.5">Key Projects & Resume Highlights</label>
                            <textarea value={projectDetails} onChange={e => setProjectDetails(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white h-32 resize-none" placeholder="List major projects, publications, or resume highlights..." required />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-1.5">Job/Work Experience Details</label>
                            <textarea value={jobDetails} onChange={e => setJobDetails(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white h-24 resize-none" placeholder="Current role, company, duration, and key responsibilities..." required />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70 mb-1.5">Other Relevant Details (PhD Goals, etc.)</label>
                            <textarea value={otherDetails} onChange={e => setOtherDetails(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white h-24 resize-none" placeholder="Anything else that will help us prepare for your interview..." />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <div>
                              <label className="block text-sm font-medium text-white/70 mb-1.5">Email ID</label>
                              <input type="email" value={userEmail} onChange={e => setUserEmail(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white" placeholder="your@email.com" required />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-white/70 mb-1.5">Phone Number</label>
                              <input type="tel" value={userPhone} onChange={e => setUserPhone(e.target.value)} className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-white" placeholder="+91 9876543210" required />
                            </div>
                          </div>

                          <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                            <p className="text-sm text-emerald-400 flex items-start gap-2">
                              <span className="text-lg">📧</span>
                              <span>After submitting this form, please email your proposal document (PDF/Word) directly to <strong>sigmamind20598@gmail.com</strong> so we can review it before the interview.</span>
                            </p>
                          </div>
                          
                          <button type="submit" disabled={isLoading} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2">
                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                            {isLoading ? 'Submitting...' : 'Book Mock Interview - ₹1,000'}
                          </button>
                          <a href="https://wa.me/917092884311?text=Hi%20CRID%20Team,%20I%20am%20interested%20in%20a%20Mock%20Interview." target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                            <MessageSquare className="w-4 h-4" />
                            Contact via WhatsApp (+91 7092884311)
                          </a>
                        </form>
                      </>
                    )}
                  </motion.div>
                )}

                {mode === 'contact' && (
                  <motion.div 
                    key="contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="max-w-4xl mx-auto py-12 px-4"
                  >
                    <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
                      <div className="space-y-6">
                        <div className="aspect-[3/4] rounded-[2rem] overflow-hidden border-4 border-emerald-500/30 shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500 bg-black/40">
                          <img 
                            src="/sarthak.jpg" 
                            alt="Sarthak Singh" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/sarthak/800/1200";
                            }}
                          />
                        </div>
                        <div className="bg-emerald-500/10 p-6 rounded-2xl border border-emerald-500/20 backdrop-blur-sm">
                          <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-2">Current Status</p>
                          <p className="text-sm text-white/80 leading-relaxed">
                            🧠 Analyzing neural correlates of procrastination while building this website for you.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h1 className="text-6xl font-black tracking-tighter text-white mb-2">
                            SARTHAK <span className="text-emerald-500">SINGH</span>
                          </h1>
                          <p className="text-xl font-medium text-emerald-500/60 italic tracking-tight">
                            The human behind the code (and the neurons)
                          </p>
                        </div>

                        <div className="space-y-6 text-white/70">
                          <p className="text-lg leading-relaxed">
                            Hey there! I'm a <strong className="text-white">2nd year PhD student</strong> at <strong className="text-white">IIT DELHI</strong> specializing in 
                            <span className="text-emerald-400 font-bold"> Psychology and Cognitive Neuroscience</span>. 
                          </p>
                          <p className="text-lg leading-relaxed">
                            I built this platform because I realized that writing PhD proposals is 10% research and 90% 
                            staring at a blank screen wondering if you're actually smart enough for this. (Spoiler: You are, 
                            you just need a better starting point).
                          </p>
                          <p className="text-lg leading-relaxed">
                            When I'm not overthinking about how your brain processes visual stimuli, I'm overthinking about 
                            why my code isn't working. It's a balanced lifestyle.
                          </p>
                        </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <a 
                              href="mailto:sigmamind20598@gmail.com"
                              className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/50 hover:bg-white/10 transition-all group"
                            >
                              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                <Send size={20} className="text-emerald-500 group-hover:text-black" />
                              </div>
                              <div>
                                <p className="text-[8px] text-white/40 uppercase font-black tracking-widest">Email Me</p>
                                <p className="text-xs font-bold text-white">sigmamind20598@gmail.com</p>
                              </div>
                            </a>

                            <a 
                              href="https://wa.me/917092884311"
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/50 hover:bg-white/10 transition-all group"
                            >
                              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                <MessageSquare size={20} className="text-emerald-500 group-hover:text-black" />
                              </div>
                              <div>
                                <p className="text-[8px] text-white/40 uppercase font-black tracking-widest">WhatsApp</p>
                                <p className="text-xs font-bold text-white">+91 7092884311</p>
                              </div>
                            </a>

                            <a 
                              href="https://t.me/sigmamindlab"
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/50 hover:bg-white/10 transition-all group"
                            >
                              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                <Send size={20} className="text-emerald-500 group-hover:text-black rotate-[-45deg]" />
                              </div>
                              <div>
                                <p className="text-[8px] text-white/40 uppercase font-black tracking-widest">Telegram</p>
                                <p className="text-xs font-bold text-white">@sigmamindlab</p>
                              </div>
                            </a>

                            <a 
                              href="https://www.instagram.com/sigmamindlab?igsh=MTR4M3AydGhuaDJheQ=="
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/50 hover:bg-white/10 transition-all group"
                            >
                              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                <Instagram size={20} className="text-emerald-500 group-hover:text-black" />
                              </div>
                              <div>
                                <p className="text-[8px] text-white/40 uppercase font-black tracking-widest">Instagram</p>
                                <p className="text-xs font-bold text-white">@sigmamindlab</p>
                              </div>
                            </a>
                          </div>

                        <div className="pt-8 border-t border-white/5">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                              <div className={`w-1.5 h-1.5 rounded-full ${process.env.GEMINI_API_KEY ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`}></div>
                              <span className="text-[8px] font-black uppercase tracking-widest text-white/40">
                                AI Status: {process.env.GEMINI_API_KEY ? 'Connected' : 'Key Missing'}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                              <span className="text-[8px] font-black uppercase tracking-widest text-white/40">
                                Backend: Online
                              </span>
                            </div>
                          </div>
                          {lastError && (
                            <div className="mb-4 p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                              <p className="text-[10px] text-red-400 font-bold uppercase mb-1 flex items-center gap-2">
                                <AlertCircle size={10} />
                                Last AI Error
                              </p>
                              <p className="text-[10px] text-red-300/60 font-mono break-all">{lastError}</p>
                            </div>
                          )}
                          <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                              <AlertCircle size={12} />
                              Academic Health Warning
                            </p>
                            <p className="text-[11px] text-white/40 uppercase tracking-widest leading-relaxed font-medium">
                              🚧 <strong className="text-white/60">Brain Under Construction:</strong> This site is currently a work-in-progress, much like my thesis defense prep. 
                              Please <span className="text-emerald-500/60">verify every piece of information twice</span> before committing to anything. 
                              Since the research data and papers are powered by Artificial Intelligence, they might occasionally hallucinate more than a sleep-deprived grad student at 4 AM. 
                              Double-check the citations, triple-check the facts, and remember: AI is smart, but your own brain is still the primary investigator here.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        </main>
      </div>

      {showLeadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xl p-4">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 max-w-md w-full relative">
            <button 
              onClick={() => setShowLeadModal(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white"
            >
              ✕
            </button>
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText size={32} className="text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">
              {proposalsGenerated >= 1 && !isSuperUser(userEmail, userPhone) ? "Enter Your Details" : "Get Your Free Proposal"}
            </h3>
            <p className="text-white/60 mb-6 text-center text-sm">
              {proposalsGenerated >= 1 && !isSuperUser(userEmail, userPhone)
                ? "Please provide your contact details so we can send you the proposal after payment."
                : "Enter your details below. We'll generate your free AI proposal and send a copy to your email!"}
            </p>
            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={userName}
                  onChange={e => setUserName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={userEmail}
                  onChange={e => setUserEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Phone Number (WhatsApp)</label>
                <input 
                  type="tel" 
                  required
                  value={userPhone}
                  onChange={e => setUserPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                  placeholder="+91 98765 43210"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] mt-4"
              >
                {proposalsGenerated >= 1 && !isSuperUser(userEmail, userPhone) ? "Continue to Payment 💳" : "Generate Free Proposal 🚀"}
              </button>
            </form>
          </div>
        </div>
      )}

      {showPricingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xl p-4">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 max-w-md w-full relative text-center">
            <button 
              onClick={() => setShowPricingModal(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white"
            >
              ✕
            </button>
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles size={40} className="text-emerald-500 animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Wait a second, Einstein! 🧠</h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              Our app uses complex AI models that cost us more than a PhD student's monthly coffee budget! ☕️
              <br /><br />
              To keep the servers running, additional proposals cost just <strong className="text-emerald-400">₹150 each</strong>, or get <strong className="text-emerald-400">3 proposals for ₹299</strong>!
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <button 
                onClick={() => handleManualPaidRequest(150, 'single')}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                Pay ₹150 for 1 Proposal
              </button>
              <button 
                onClick={() => handleManualPaidRequest(299, 'bundle')}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-white py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <Sparkles size={20} />
                Pay ₹299 for 3 Proposals (Best Value)
              </button>
            </div>
            <button 
              onClick={() => {
                setShowPricingModal(false);
                setMode('guidance');
              }}
              className="w-full mt-3 bg-transparent border border-white/20 hover:bg-white/5 text-white py-3 rounded-xl font-bold transition-all"
            >
              Explore Other Services
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
