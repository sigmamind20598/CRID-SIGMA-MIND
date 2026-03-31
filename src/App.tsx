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
  Users
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Institute, Professor, ResearchTopic, INITIAL_INSTITUTES, NewsItem } from './types';
import { getFacultyData, generateResearchTopics, generateFullProposal, getProfessorPublications, getLatestNews, getInstituteNameFromUrl } from './services/aiService';
import { CURATED_FACULTY } from './facultyData';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [mode, setMode] = useState<'home' | 'directory' | 'custom' | 'news' | 'review' | 'guidance' | 'contact'>('home');
  const sortedInstitutes = [...INITIAL_INSTITUTES].sort((a, b) => {
    const isAiitA = a.name.includes('IIT') || a.name.includes('IIM');
    const isAiitB = b.name.includes('IIT') || b.name.includes('IIM');
    if (isAiitA && !isAiitB) return -1;
    if (!isAiitA && isAiitB) return 1;
    return a.name.localeCompare(b.name);
  });

  const [institutesList, setInstitutesList] = useState<Institute[]>(sortedInstitutes);
  const [selectedInstitute, setSelectedInstitute] = useState<Institute | null>(null);
  const [professors, setProfessors] = useState<Professor[]>([]);
  const [selectedProfessor, setSelectedProfessor] = useState<Professor | null>(null);
  const [topics, setTopics] = useState<ResearchTopic[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<ResearchTopic | null>(null);
  const [proposal, setProposal] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState<'faculty' | 'topics' | 'proposal' | 'profile'>('faculty');
  const [profDetails, setProfDetails] = useState<{ bio: string, publications: string[], citationTrend: any[], publicationTrend: any[] } | null>(null);
  const [newInstituteLink, setNewInstituteLink] = useState('');
  const [isAddingInstitute, setIsAddingInstitute] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [proposalsGenerated, setProposalsGenerated] = useState(0);
  const [showPricingModal, setShowPricingModal] = useState(false);

  // Custom Proposal Form State
  const [customDomain, setCustomDomain] = useState('');
  const [customInst, setCustomInst] = useState('');
  const [customProf, setCustomProf] = useState('');
  const [customTopic, setCustomTopic] = useState('');

  // Contact Info State
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const [searchTerm, setSearchTerm] = useState('');
  const [lastError, setLastError] = useState<string | null>(null);

  const filteredInstitutes = institutesList.filter(inst => 
    inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inst.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fetchNews = async () => {
    // Check for API key before starting
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is missing in environment variables.");
      setLastError("CRITICAL: Missing Gemini API Key. If you are on Vercel, please add VITE_GEMINI_API_KEY to your Environment Variables. If you are in AI Studio, ensure the key is set in the Settings menu.");
      return;
    }

    setIsLoading(true);
    setLastError(null);
    try {
      const data = await getLatestNews();
      if (data && data.length > 0) {
        setNews(data);
      } else {
        // Fallback to curated news if AI fails
        const fallbackNews: NewsItem[] = [
          {
            id: 'fb-1',
            title: 'PhD Admissions Open at IIT Delhi (HSS)',
            source: 'IIT Delhi Official',
            url: 'https://hss.iitd.ac.in/admissions',
            category: 'Admission',
            summary: 'Applications are invited for the PhD program in Psychology and Cognitive Science for the upcoming semester.',
            timestamp: new Date().toISOString(),
            imageKeyword: 'university'
          },
          {
            id: 'fb-2',
            title: 'New Research on Neural Correlates of Attention',
            source: 'Nature Neuroscience',
            url: 'https://www.nature.com/neuro',
            category: 'Research',
            summary: 'Recent study explores how the brain filters sensory information during complex tasks.',
            timestamp: new Date().toISOString(),
            imageKeyword: 'brain'
          },
          {
            id: 'fb-3',
            title: 'NIMHANS PhD Entrance Exam Dates Announced',
            source: 'NIMHANS',
            url: 'https://nimhans.ac.in/admissions',
            category: 'Admission',
            summary: 'The entrance examination for the PhD in Clinical Psychology is scheduled for next month.',
            timestamp: new Date().toISOString(),
            imageKeyword: 'exam'
          }
        ];
        setNews(fallbackNews);
        setLastError("AI search returned no results. Showing curated updates.");
      }
    } catch (error) {
      console.error(error);
      setLastError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const loadFaculty = async (name: string) => {
    if (!name) return;
    
    // Check for API key before starting
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is missing in environment variables.");
      setLastError("CRITICAL: Missing Gemini API Key. Please set VITE_GEMINI_API_KEY in your Vercel environment variables.");
      setView('faculty');
      return;
    }

    setIsLoading(true);
    setProfessors([]);
    setLastError(null);
    
    try {
      // Try AI search first for dynamism
      const data = await getFacultyData(name);
      if (data && data.length > 0) {
        setProfessors(data);
      } else {
        // Fallback to curated data if AI fails
        const curated = CURATED_FACULTY[name];
        if (curated) {
          setProfessors(curated);
          setLastError("AI search failed. Showing curated faculty data.");
        } else {
          setLastError(`No faculty data found for ${name}. Try searching for a different university.`);
        }
      }
    } catch (error) {
      console.error("Failed to load faculty:", error);
      // Fallback to curated data on error
      const curated = CURATED_FACULTY[name];
      if (curated) {
        setProfessors(curated);
        setLastError("AI search error. Showing curated faculty data.");
      } else {
        setLastError(error instanceof Error ? error.message : String(error));
      }
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
    const details = await getProfessorPublications(prof.name, selectedInstitute?.name || '');
    setProfDetails(details);
    setIsLoading(false);
  };

  const handleProfessorSelect = async (prof: Professor) => {
    setSelectedProfessor(prof);
    setIsLoading(true);
    const generatedTopics = await generateResearchTopics(prof, selectedInstitute?.name || '');
    setTopics(generatedTopics);
    setIsLoading(false);
    setView('topics');
  };

  const handleTopicSelect = async (topic: ResearchTopic) => {
    if (proposalsGenerated >= 1) {
      setShowPricingModal(true);
      return;
    }
    setProposalsGenerated(prev => prev + 1);
    setSelectedTopic(topic);
    setIsLoading(true);
    const fullProposal = await generateFullProposal(
      topic.title, 
      selectedProfessor?.name || '', 
      selectedProfessor?.specialization || '',
      selectedInstitute?.name || ''
    );
    setProposal(fullProposal);
    setIsLoading(false);
    setView('proposal');
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
        "h-24 border-b flex items-center px-8 shrink-0 z-50 transition-colors duration-500",
        "bg-black/40 border-white/5 backdrop-blur-md text-white"
      )}>
        <div className="flex-1 flex items-center gap-8">
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
            <button 
              onClick={() => { setMode('directory'); setView('faculty'); }}
              className={cn("hover:text-emerald-500 transition-colors", mode === 'directory' ? "text-emerald-500" : "text-white/60")}
            >
              Faculty Mapping
            </button>
            <div className="relative group/services">
              <button className={cn("hover:text-emerald-500 transition-colors flex items-center gap-1", (mode === 'custom' || mode === 'review' || mode === 'guidance') ? "text-emerald-500" : "text-white/60")}>
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

        <div onClick={() => setMode('home')} className="flex flex-col items-center cursor-pointer group px-8">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all group-hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <Brain size={28} className="text-[#0a192f]" />
          </div>
          <span className="text-[10px] font-black tracking-[0.2em] text-white uppercase mt-2">CRID</span>
          <span className="text-[6px] font-bold tracking-[0.1em] text-white/40 uppercase mt-1 text-center whitespace-nowrap">
            Cognitive Research Intelligence Domain
          </span>
        </div>

        <div className="flex-1 flex items-center justify-end gap-6">
          <button 
            onClick={() => setMode('contact')}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all",
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
        </div>
      </nav>

      <div className="flex-1 flex overflow-hidden">
        {mode === 'directory' && (
          <aside className="w-80 bg-black/20 border-r border-white/5 flex flex-col shrink-0 backdrop-blur-sm">
            <div className="p-6 border-b border-white/5 text-center">
              <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-4">Institute Faculty Mapping</p>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                <input 
                  type="text" 
                  placeholder="Search 81+ Universities..."
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
                    <div className="flex items-center gap-3 min-w-0">
                      <GraduationCap size={18} className={selectedInstitute?.id === inst.id ? "text-emerald-500" : "text-white/20"} />
                      <span className="text-sm truncate">{inst.name}</span>
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
                {(view !== 'faculty' || mode === 'custom') && mode !== 'news' && mode !== 'guidance' && (
                  <button 
                    onClick={() => {
                      if (mode === 'custom') {
                        setMode('directory');
                        setView('faculty');
                      } else {
                        setView(view === 'profile' ? 'faculty' : (view === 'proposal' ? 'topics' : 'faculty'));
                      }
                    }}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white"
                  >
                    <ArrowLeft size={20} />
                  </button>
                )}
                <h2 className="text-sm font-black tracking-tight text-white/40 uppercase">
                  {mode === 'news' && `Latest News & Updates`}
                  {mode === 'guidance' && `Proposal Guidance`}
                  {mode === 'custom' && `Custom Proposal`}
                  {view === 'faculty' && mode === 'directory' && `Institute Faculty Mapping`}
                  {view === 'profile' && `Faculty Profile`}
                  {view === 'topics' && `Research Proposal Ideas`}
                  {view === 'proposal' && `Research Proposal`}
                </h2>
              </div>
            </header>
          )}

          <div className="flex-1 overflow-y-auto p-8">
            {isLoading ? (
              <div className="h-full flex flex-col items-center justify-center text-white/40">
                <Loader2 className="animate-spin mb-4 text-emerald-600" size={40} />
                <p className="font-bold animate-pulse tracking-widest uppercase text-[10px]">Loading...</p>
              </div>
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
                                Generate Topics
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
                    {topics.map((topic) => (
                      <div key={topic.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                        <h4 className="text-lg font-bold text-emerald-400 mb-2">{topic.title}</h4>
                        <p className="text-sm text-white/70 mb-4">{topic.description}</p>
                        <button 
                          onClick={() => handleTopicSelect(topic)}
                          className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-lg text-xs font-bold transition-colors"
                        >
                          Generate Full Proposal
                        </button>
                      </div>
                    ))}
                  </motion.div>
                )}

                {mode === 'directory' && view === 'proposal' && proposal && (
                  <motion.div
                    key="proposal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8"
                  >
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-wrap font-mono text-sm leading-relaxed">{proposal}</div>
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
                        {profDetails.publications.map((pub, i) => (
                          <div key={i} className="bg-black/40 p-4 rounded-xl border border-white/5">
                            <p className="text-white/80 text-sm">{pub}</p>
                          </div>
                        ))}
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
                        onClick={fetchNews}
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
                          <p className="text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">
                            * WhatsApp is text-only, unless you want to hear me talk about neurons for 3 hours straight. 
                            You've been warned.
                          </p>
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

      {showPricingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 max-w-md w-full relative">
            <button 
              onClick={() => setShowPricingModal(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">Upgrade to Continue</h3>
            <p className="text-white/60 mb-8">You've reached your limit of free proposals. Upgrade to generate more detailed research proposals.</p>
            <button 
              onClick={() => setShowPricingModal(false)}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-bold transition-colors"
            >
              View Plans
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
