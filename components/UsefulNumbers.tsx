
import React, { useState } from 'react';
import { Search, Phone, ExternalLink, AlertTriangle, Clock, Filter, Info, Heart, ShieldAlert } from 'lucide-react';

const helplines = [
  {
    name: "Action on Elder Abuse",
    phone: "080 8808 8141",
    hours: "Monday to Friday, 9am - 5pm",
    website: "www.elderabuse.org.uk/in-northern-ireland",
    category: "Elderly & Vulnerable"
  },
  {
    name: "Advice NI",
    phone: "0300 303 0898",
    hours: "Monday to Friday, 9am - 5pm",
    website: "www.adviceni.net",
    category: "General Advice"
  },
  {
    name: "Age NI",
    phone: "0808 808 7575",
    hours: "8am - 7pm, 7 days a week",
    website: "www.ageni.org.uk/advice",
    category: "Elderly & Vulnerable"
  },
  {
    name: "Alzheimer's Society Support Line",
    phone: "0333 150 3456",
    hours: "Mon-Wed 9am-8pm, Thu-Fri 9am-5pm, Sat-Sun 10am-4pm",
    website: "www.alzheimers.org.uk",
    category: "Health & Disability"
  },
  {
    name: "Autism NI",
    phone: "028 9040 1729",
    hours: "Monday to Friday, 9am - 5pm",
    website: "www.autismni.org",
    category: "Health & Disability"
  },
  {
    name: "Cancer Focus NI",
    phone: "0800 783 3339",
    hours: "Monday to Friday, 9am - 1pm",
    website: "www.cancerfocusni.org",
    category: "Health & Disability"
  },
  {
    name: "Carers NI",
    phone: "028 9043 9843",
    hours: "Monday to Thursday, 10am - 4pm",
    website: "www.carersuk.org/northernireland",
    category: "Family & Carers"
  },
  {
    name: "CAUSE: Helpline",
    phone: "0845 60 30 291",
    hours: "Mon, Wed, Fri 10am-4pm, Tue & Thu 12pm-8pm",
    website: "www.cause.org.uk",
    category: "Mental Health"
  },
  {
    name: "Child Bereavement Service (Barnardo's)",
    phone: "028 9066 8333",
    hours: "Mon & Tue 9.30am-12.30pm, Fri 10am-12.30pm",
    website: "www.barnardos.org.uk",
    category: "Bereavement"
  },
  {
    name: "ChildLine",
    phone: "0800 1111",
    hours: "24/7, 365 days a year",
    website: "www.childline.org.uk",
    category: "Children & Young People",
    is24h: true
  },
  {
    name: "Christians Against Poverty",
    phone: "0800 328 0006",
    hours: "Monday to Friday, 9am - 5pm",
    website: "www.capuk.org",
    category: "Financial & Housing"
  },
  {
    name: "The Compassionate Friends",
    phone: "028 8778 8016",
    hours: "10am-4pm & 7pm-9:30pm daily",
    website: "www.tcf.org.uk",
    category: "Bereavement"
  },
  {
    name: "Domestic & Sexual Abuse Helpline (Nexus NI)",
    phone: "0808 802 1414",
    hours: "24/7, 365 days a year",
    website: "www.dsahelpline.org",
    category: "Crisis & Safety",
    is24h: true
  },
  {
    name: "Eating Disorders Association NI",
    phone: "028 9023 5959",
    hours: "24/7, 365 days a year",
    website: "www.eatingdisordersni.co.uk",
    category: "Mental Health",
    is24h: true
  },
  {
    name: "Employers For Childcare",
    phone: "0800 028 3008",
    hours: "Monday to Friday, 8am - 5pm",
    website: "www.employersforchildcare.org",
    category: "Family & Carers"
  },
  {
    name: "HIV & Sexual Health Helpline NI",
    phone: "0800 137 437",
    hours: "Monday to Friday, 10am - 4pm",
    website: "www.positivelifeni.com",
    category: "Health & Disability"
  },
  {
    name: "Housing Rights",
    phone: "028 9024 5640",
    hours: "Monday to Friday, 9.30am - 4.30pm",
    website: "www.housingadviceni.org",
    category: "Financial & Housing"
  },
  {
    name: "Informing Choices NI",
    phone: "028 9031 6100",
    hours: "Monday to Friday, 9am - 5pm",
    website: "www.informingchoicesni.org",
    category: "Health & Disability"
  },
  {
    name: "Kinship Care NI",
    phone: "0800 022 3129",
    hours: "Monday to Friday, 9am - 5pm",
    website: "www.kinshipcareni.com",
    category: "Family & Carers"
  },
  {
    name: "Law Centre NI",
    phone: "028 9024 4401",
    hours: "Monday to Friday, 9am - 5pm",
    website: "www.lawcentreni.org",
    category: "General Advice"
  },
  {
    name: "LGBT+ Switchboard Cara-Friend",
    phone: "0808 8000 390",
    hours: "Mon-Fri 1pm-4pm, Wed 6pm-9pm",
    website: "www.cara-friend.org.uk",
    category: "LGBTQ+ Support"
  },
  {
    name: "Lifeline",
    phone: "0808 808 8000",
    hours: "24/7, 365 days a year",
    website: "www.lifelinehelpline.info",
    category: "Crisis & Safety",
    is24h: true,
    featured: true
  },
  {
    name: "Make the Call",
    phone: "0800 232 1271",
    hours: "Monday to Friday, 8am - 5pm",
    website: "www.nidirect.gov.uk/makethecall",
    category: "General Advice"
  },
  {
    name: "NSPCC Helpline",
    phone: "0808 800 5000",
    hours: "24/7, 365 days a year",
    website: "www.nspcc.org.uk",
    category: "Children & Young People",
    is24h: true
  },
  {
    name: "Parentline NI",
    phone: "0808 8020 400",
    hours: "Mon-Thu 9am-9pm, Fri 9am-5pm, Sat 9am-1pm",
    website: "www.ci-ni.org.uk",
    category: "Family & Carers"
  },
  {
    name: "Parenting NI",
    phone: "0808 8010 722",
    hours: "Mon-Thu 9:30am-3:30pm, Fri 9:30am-12:30pm",
    website: "www.parentingni.org",
    category: "Family & Carers"
  },
  {
    name: "Rural Support Helpline",
    phone: "0800 138 1678",
    hours: "Monday to Friday, 9am - 9pm",
    website: "www.ruralsupport.org.uk",
    category: "General Advice"
  },
  {
    name: "Samaritans",
    phone: "116 123",
    hours: "24/7, 365 days a year",
    website: "www.samaritans.org",
    category: "Crisis & Safety",
    is24h: true,
    featured: true
  },
  {
    name: "Sands NI Helpline",
    phone: "077 4099 3450",
    hours: "Monday to Friday, 9am - 5pm",
    website: "www.sandsni.org",
    category: "Bereavement"
  },
  {
    name: "Simon Community",
    phone: "0800 171 2222",
    hours: "24/7, 365 days a year",
    website: "www.simoncommunity.org",
    category: "Financial & Housing",
    is24h: true
  }
];

const categories = [
  "All",
  "Crisis & Safety",
  "Mental Health",
  "Children & Young People",
  "Family & Carers",
  "Health & Disability",
  "Bereavement",
  "Financial & Housing",
  "Elderly & Vulnerable",
  "LGBTQ+ Support",
  "General Advice"
];

const categoryColors: Record<string, { bg: string; border: string; accent: string; pill: string }> = {
  "Crisis & Safety": { bg: "bg-red-50", border: "border-red-200", accent: "text-red-700", pill: "bg-red-100 text-red-800" },
  "Mental Health": { bg: "bg-purple-50", border: "border-purple-200", accent: "text-purple-700", pill: "bg-purple-100 text-purple-800" },
  "Children & Young People": { bg: "bg-amber-50", border: "border-amber-200", accent: "text-amber-700", pill: "bg-amber-100 text-amber-800" },
  "Family & Carers": { bg: "bg-pink-50", border: "border-pink-200", accent: "text-pink-700", pill: "bg-pink-100 text-pink-800" },
  "Health & Disability": { bg: "bg-blue-50", border: "border-blue-200", accent: "text-blue-700", pill: "bg-blue-100 text-blue-800" },
  "Bereavement": { bg: "bg-slate-50", border: "border-slate-200", accent: "text-slate-700", pill: "bg-slate-100 text-slate-800" },
  "Financial & Housing": { bg: "bg-green-50", border: "border-green-200", accent: "text-green-700", pill: "bg-green-100 text-green-800" },
  "Elderly & Vulnerable": { bg: "bg-teal-50", border: "border-teal-200", accent: "text-teal-700", pill: "bg-teal-100 text-teal-800" },
  "LGBTQ+ Support": { bg: "bg-indigo-50", border: "border-indigo-200", accent: "text-indigo-700", pill: "bg-indigo-100 text-indigo-800" },
  "General Advice": { bg: "bg-gray-50", border: "border-gray-200", accent: "text-gray-700", pill: "bg-gray-100 text-gray-800" }
};

const UsefulNumbers: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHelplines = helplines.filter(h => {
    const matchesCategory = activeCategory === "All" || h.category === activeCategory;
    const matchesSearch = h.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          h.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredHelplines = helplines.filter(h => h.featured);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream-light">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-reveal">Community Support</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-teal mb-6 animate-reveal stagger-1">Useful Numbers</h1>
          <p className="font-body text-xl text-slate-800/60 leading-relaxed max-w-2xl mx-auto animate-reveal stagger-2">
            A curated directory of free, confidential support services for the people of Northern Ireland. Help is always available.
          </p>
        </div>

        {/* Emergency Dashboard */}
        <div className="max-w-6xl mx-auto mb-16 animate-reveal stagger-3">
          <div className="bg-slate-900 rounded-[2.5rem] shadow-premium overflow-hidden border-l-8 border-gold">
            {/* Immediate Danger Alert */}
            <div className="bg-red-600 px-6 py-3 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-white">
              <ShieldAlert size={20} className="animate-pulse" />
              <span className="font-bold text-sm uppercase tracking-widest text-center">In immediate danger or facing a medical emergency? Call 999 immediately.</span>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                <div className="max-w-md">
                  <div className="flex items-center gap-3 text-gold mb-4">
                    <Heart size={24} fill="currentColor" />
                    <h2 className="font-heading text-2xl font-bold text-white">Crisis Support 24/7</h2>
                  </div>
                  <p className="text-gray-400 font-body leading-relaxed">
                    If you are struggling and need someone to talk to right away, these dedicated Northern Ireland services are available 365 days a year.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {featuredHelplines.map(h => (
                    <a 
                      key={h.name}
                      href={`tel:${h.phone.replace(/\s/g, '')}`}
                      className="flex-1 min-w-[280px] bg-white hover:bg-cream-light text-slate-900 px-8 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center justify-between group transform hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center">
                          <Phone size={18} />
                        </div>
                        <div className="text-left">
                          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">{h.name}</p>
                          <p className="text-lg text-teal">{h.phone}</p>
                        </div>
                      </div>
                      <ExternalLink size={16} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Controls & Filter Bar */}
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-soft border border-cream mb-12">
            <div className="flex flex-col lg:flex-row gap-8 items-end justify-between">
              
              {/* Search Box */}
              <div className="w-full lg:w-1/3">
                <label className="block text-[10px] font-bold text-slate-800/40 uppercase tracking-widest mb-3">Find an organisation</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={20} />
                  <input
                    type="text"
                    placeholder="Search by name or keyword..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 rounded-xl border border-cream bg-cream-light/50 focus:bg-white focus:border-gold outline-none transition-all font-body text-teal placeholder:text-slate-300"
                  />
                </div>
              </div>

              {/* Category Filter Desktop */}
              <div className="w-full lg:w-2/3">
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-[10px] font-bold text-slate-800/40 uppercase tracking-widest">Filter by category</label>
                  <button 
                    onClick={() => { setActiveCategory("All"); setSearchTerm(""); }}
                    className="text-[10px] font-bold text-gold uppercase tracking-widest hover:text-teal transition-colors"
                  >
                    Clear All
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                        activeCategory === category
                          ? 'bg-teal text-white border-teal shadow-md'
                          : 'bg-white text-slate-800 border-cream hover:border-gold hover:bg-cream-light/50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Metadata */}
          <div className="flex items-center justify-between mb-8 px-4">
             <div className="flex items-center gap-2">
                <Info size={14} className="text-gold" />
                <p className="font-body text-slate-800/60 font-bold uppercase tracking-[0.2em] text-[10px]">
                  Showing {filteredHelplines.length} Service{filteredHelplines.length !== 1 ? 's' : ''}
                  {activeCategory !== "All" && <span className="text-teal"> in {activeCategory}</span>}
                </p>
             </div>
          </div>

          {/* Helplines Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredHelplines.map((helpline) => {
              const colors = categoryColors[helpline.category] || categoryColors["General Advice"];
              
              return (
                <div
                  key={helpline.name}
                  className={`bg-white border-2 border-cream rounded-[2rem] p-8 hover:shadow-premium hover:border-gold/30 transition-all duration-500 group flex flex-col h-full relative overflow-hidden`}
                >
                  {/* Category Accent Stripe */}
                  <div className={`absolute top-0 left-0 w-full h-1.5 ${colors.pill.split(' ')[0]}`}></div>
                  
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <h3 className="font-heading font-bold text-teal text-xl md:text-2xl leading-tight group-hover:text-gold transition-colors">
                      {helpline.name}
                    </h3>
                    {helpline.is24h && (
                      <span className="flex-shrink-0 bg-success/10 text-success text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-success/20">
                        24/7
                      </span>
                    )}
                  </div>

                  <div className="flex-grow space-y-6">
                    <a
                      href={`tel:${helpline.phone.replace(/\s/g, '')}`}
                      className={`text-2xl md:text-3xl font-bold ${colors.accent} flex items-center gap-3 hover:scale-105 transition-transform origin-left`}
                    >
                      <Phone size={20} className="text-gold" />
                      {helpline.phone}
                    </a>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3 text-slate-800/70 text-sm font-body leading-relaxed">
                        <Clock size={16} className="mt-0.5 text-gold flex-shrink-0" />
                        <span>{helpline.hours}</span>
                      </div>
                      <a
                        href={`https://${helpline.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 text-teal/60 hover:text-gold transition-colors text-sm font-body break-all"
                      >
                        <ExternalLink size={16} className="mt-0.5 flex-shrink-0" />
                        <span className="underline decoration-gold/30 underline-offset-4">{helpline.website}</span>
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-cream flex items-center justify-between">
                    <span className={`${colors.pill} text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest`}>
                      {helpline.category}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredHelplines.length === 0 && (
            <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-cream">
              <div className="w-20 h-20 bg-cream-light rounded-full flex items-center justify-center mx-auto mb-6 text-gold/30">
                <Search size={40} />
              </div>
              <h3 className="font-heading text-3xl font-bold text-teal mb-3">No matching services</h3>
              <p className="text-slate-800/40 font-body text-lg">We couldn't find any results for "{searchTerm}".</p>
              <button 
                onClick={() => { setSearchTerm(""); setActiveCategory("All"); }}
                className="mt-8 bg-gold text-white px-8 py-3 rounded-full font-bold hover:bg-gold-dark transition-all"
              >
                Reset all filters
              </button>
            </div>
          )}

          {/* Informational Footer */}
          <div className="mt-20 p-12 bg-white rounded-[2.5rem] shadow-soft border border-cream text-center">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
              <Info size={24} />
            </div>
            <p className="text-slate-800/70 font-body mb-4 text-lg">
              This directory is maintained for our local community in <span className="text-teal font-bold">Derry/Londonderry</span> and across Northern Ireland.
            </p>
            <p className="text-slate-800/40 text-sm font-body max-w-2xl mx-auto leading-relaxed italic">
              Information is sourced via Helplines NI. Calls to 0800, 0808 and 116 numbers are free from UK landlines and mobiles. Derry Hypnosis provides this list as a resource only and does not administer these external services.
            </p>
            <div className="mt-10 pt-10 border-t border-cream">
              <a 
                href="https://www.helplinesni.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs hover:text-teal transition-colors"
              >
                Visit Helplines NI Website <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsefulNumbers;
