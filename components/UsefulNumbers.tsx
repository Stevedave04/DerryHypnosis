
import React, { useState } from 'react';
import { Search, Phone, ExternalLink, AlertTriangle, Clock, Filter, Info } from 'lucide-react';

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
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Community Resources</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-teal mb-6">Helplines NI</h1>
          <p className="font-body text-xl text-slate-800/60 leading-relaxed max-w-2xl mx-auto">
            Free, confidential support services across Northern Ireland. Help is available whenever you need it.
          </p>
        </div>

        {/* Emergency Banner */}
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[2rem] shadow-premium overflow-hidden mb-16 border-l-8 border-gold">
          <div className="bg-red-600/10 p-4 border-b border-white/5 flex items-center justify-center gap-2">
            <AlertTriangle className="text-red-500" size={20} />
            <span className="text-white font-bold text-sm tracking-wide">In immediate danger? Always call 999 first.</span>
          </div>
          <div className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-white font-heading text-2xl font-bold mb-2">Crisis Support</h3>
              <p className="text-gray-400 font-body text-sm">Dedicated 24/7 helplines for immediate mental health or safety support.</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {featuredHelplines.map(h => (
                <a 
                  key={h.name}
                  href={`tel:${h.phone.replace(/\s/g, '')}`}
                  className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center gap-3 transform hover:-translate-y-1"
                >
                  <Phone size={18} />
                  {h.name}: {h.phone}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Controls Bar */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-cream mb-12">
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
              
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={20} />
                <input
                  type="text"
                  placeholder="Search organisations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 rounded-xl border border-cream bg-cream-light/50 focus:bg-white focus:border-gold outline-none transition-all font-body text-teal"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-3 w-full lg:w-auto">
                <Filter size={18} className="text-gold flex-shrink-0" />
                <div className="flex flex-wrap gap-2">
                  {categories.slice(0, 4).map(category => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                        activeCategory === category
                          ? 'bg-teal text-white border-teal shadow-md'
                          : 'bg-white text-slate-800 border-cream hover:border-gold'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                  {/* Dropdown for more categories if needed, for now just show all tags */}
                </div>
              </div>
            </div>

            {/* All Category Tags */}
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-cream">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                    activeCategory === category
                      ? 'bg-teal text-white'
                      : 'bg-cream-light text-slate-800/60 hover:bg-gold hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-8 px-2">
             <p className="font-body text-slate-800/40 font-bold uppercase tracking-[0.2em] text-[10px]">
                Found {filteredHelplines.length} Service{filteredHelplines.length !== 1 ? 's' : ''}
                {activeCategory !== "All" && ` in ${activeCategory}`}
             </p>
          </div>

          {/* Helplines Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredHelplines.map((helpline) => (
              <div
                key={helpline.name}
                className="bg-white border border-cream rounded-2xl p-6 hover:shadow-premium hover:border-gold/30 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-heading font-bold text-teal text-xl leading-snug group-hover:text-gold transition-colors">
                    {helpline.name}
                  </h3>
                  {helpline.is24h && (
                    <span className="bg-success/10 text-success text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest border border-success/20">
                      24/7
                    </span>
                  )}
                </div>

                <div className="flex-grow space-y-4">
                  <a
                    href={`tel:${helpline.phone.replace(/\s/g, '')}`}
                    className="text-2xl font-bold text-teal flex items-center gap-3 hover:text-gold transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                      <Phone size={14} />
                    </div>
                    {helpline.phone}
                  </a>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-slate-800/60 text-sm font-body">
                      <Clock size={14} className="mt-1 text-gold flex-shrink-0" />
                      <span>{helpline.hours}</span>
                    </div>
                    <a
                      href={`https://${helpline.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 text-gold hover:text-teal transition-colors text-sm font-body break-all"
                    >
                      <ExternalLink size={14} className="mt-1 flex-shrink-0" />
                      <span>{helpline.website}</span>
                    </a>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-cream flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-800/40 uppercase tracking-widest">
                    {helpline.category}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-gold/30"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredHelplines.length === 0 && (
            <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-cream">
              <Info size={48} className="text-gold/20 mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold text-teal mb-2">No Services Found</h3>
              <p className="text-slate-800/40 font-body">Try adjusting your search or category filters.</p>
              <button 
                onClick={() => { setSearchTerm(""); setActiveCategory("All"); }}
                className="mt-6 text-gold font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Footer Info */}
          <div className="mt-20 p-10 bg-white rounded-[2rem] shadow-soft border border-cream text-center">
            <p className="text-slate-800/60 font-body mb-2">
              Information sourced from <a href="https://www.helplinesni.com" target="_blank" rel="noopener noreferrer" className="text-teal font-bold hover:text-gold transition-colors">Helplines NI</a>
            </p>
            <p className="text-slate-800/40 text-xs font-body max-w-xl mx-auto leading-relaxed">
              All calls to 0800 and 116 numbers are free from UK landlines and mobiles. Derry Hypnosis provides this list for community support purposes; please contact the individual organisations for specific service details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsefulNumbers;
