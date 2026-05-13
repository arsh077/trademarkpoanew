import React, { useState, useRef } from 'react';
import { Printer, User, Briefcase, Scale } from 'lucide-react';

export default function App() {
  const previewRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    ownerName: '',
    address: '',
    signatoryName: '',
    designation: '',
    attorneyNames: '',
    attorneyCode: '',
    attorneyAddress: '',
    dateDay: '',
    dateMonth: '',
    dateYear: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="h-screen bg-paper text-ink font-body flex flex-col print:bg-[#CAD2C5] print:min-h-screen overflow-hidden print:overflow-visible">
      {/* HEADER - Hidden when printing */}
      <header className="border-b border-editorial sticky top-0 z-10 print:hidden px-6 lg:px-10 pt-8 pb-4 flex items-end justify-between shrink-0 bg-paper">
        <div className="flex items-end justify-between w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col-reverse gap-1.5">
            <h1 className="text-[24px] sm:text-[32px] font-display italic font-normal tracking-[-0.02em] leading-none flex items-center">
              <div className="hidden sm:flex mr-4 opacity-[0.8]"><Scale size={28} strokeWidth={1.5} /></div>
              Trademark POA Generator
            </h1>
            <p className="text-[10px] uppercase tracking-[0.15em] text-accent font-medium hidden sm:block">System v2.44 // Form TM-48 (Detailed)</p>
          </div>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-ink hover:bg-black text-white px-5 py-2.5 sm:px-6 sm:py-3 text-[11px] sm:text-[12px] uppercase tracking-[0.1em] transition-colors border-none cursor-pointer whitespace-nowrap"
          >
            <Printer size={16} />
            <span className="hidden sm:inline">Print / Save as PDF</span>
            <span className="inline sm:hidden">Print</span>
          </button>
        </div>
      </header>

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[400px_1fr] print:block overflow-hidden print:overflow-visible max-w-[1400px] w-full mx-auto">
        
        {/* FORM SECTION - Hidden when printing */}
        <div className="border-r border-editorial p-6 sm:p-10 print:hidden overflow-y-auto bg-paper space-y-10 custom-scrollbar">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.15em] text-accent mb-6 flex items-center gap-2 font-bold">
              <User size={14} className="text-accent" /> 
              Principal Applicant
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.08em] mb-1 text-[#666]" htmlFor="ownerName">
                  Applicant / Proprietor Name
                </label>
                <input 
                  id="ownerName"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-editorial py-2 text-[14px] font-body text-ink outline-none placeholder-[#BBB] italic focus:border-accent focus:ring-0 rounded-none transition-colors" 
                  placeholder="e.g. Acme Worldwide Holdings Ltd." 
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.08em] mb-1 text-[#666]" htmlFor="address">
                  Registered Address
                </label>
                <textarea 
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={2}
                  className="w-full bg-transparent border-0 border-b border-editorial py-2 text-[14px] font-body text-ink outline-none placeholder-[#BBB] italic focus:border-accent focus:ring-0 rounded-none transition-colors resize-y" 
                  placeholder="Street, Suite, City, ZIP" 
                ></textarea>
              </div>

              <div className="pt-2">
                <label className="block text-[10px] uppercase tracking-[0.08em] mb-1 text-[#666]" htmlFor="signatoryName">
                  Name of the Signatory
                </label>
                <input 
                  id="signatoryName"
                  name="signatoryName"
                  value={formData.signatoryName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-editorial py-2 text-[14px] font-body text-ink outline-none placeholder-[#BBB] italic focus:border-accent focus:ring-0 rounded-none transition-colors" 
                  placeholder="e.g. Johnathan S. Doe" 
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.08em] mb-1 text-[#666]" htmlFor="designation">
                  Designation
                </label>
                <input 
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-editorial py-2 text-[14px] font-body text-ink outline-none placeholder-[#BBB] italic focus:border-accent focus:ring-0 rounded-none transition-colors" 
                  placeholder="e.g. Managing Director" 
                />
              </div>

              <div className="pt-2">
                <label className="block text-[10px] uppercase tracking-[0.08em] mb-1 text-[#666]">
                  Date of Execution
                </label>
                <div className="flex gap-2">
                  <input 
                    name="dateDay"
                    value={formData.dateDay}
                    onChange={handleChange}
                    className="w-1/3 bg-transparent border-0 border-b border-editorial py-2 text-[14px] font-body text-ink outline-none placeholder-[#BBB] italic focus:border-accent focus:ring-0 rounded-none transition-colors" 
                    placeholder="Day (e.g. 15th)" 
                  />
                  <input 
                    name="dateMonth"
                    value={formData.dateMonth}
                    onChange={handleChange}
                    className="w-1/3 bg-transparent border-0 border-b border-editorial py-2 text-[14px] font-body text-ink outline-none placeholder-[#BBB] italic focus:border-accent focus:ring-0 rounded-none transition-colors" 
                    placeholder="Month" 
                  />
                  <input 
                    name="dateYear"
                    value={formData.dateYear}
                    onChange={handleChange}
                    className="w-1/3 bg-transparent border-0 border-b border-editorial py-2 text-[14px] font-body text-ink outline-none placeholder-[#BBB] italic focus:border-accent focus:ring-0 rounded-none transition-colors" 
                    placeholder="Year (e.g. 24)" 
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.15em] text-accent mb-6 flex items-center gap-2 font-bold">
              <Briefcase size={14} className="text-accent" /> 
              Attorney Information
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.08em] mb-1 text-[#666]" htmlFor="attorneyCode">
                  Agent's Code No.
                </label>
                <input 
                  id="attorneyCode"
                  name="attorneyCode"
                  value={formData.attorneyCode}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-editorial py-2 text-[14px] font-body text-ink outline-none placeholder-[#BBB] italic focus:border-accent focus:ring-0 rounded-none transition-colors" 
                  placeholder="e.g. 527" 
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.08em] mb-1 text-[#666]" htmlFor="attorneyNames">
                  Authorized Agents / Advocates
                </label>
                <textarea 
                  id="attorneyNames"
                  name="attorneyNames"
                  value={formData.attorneyNames}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-0 border-b border-editorial py-2 text-[14px] font-body text-ink outline-none placeholder-[#BBB] italic focus:border-accent focus:ring-0 rounded-none transition-colors resize-y leading-tight" 
                  placeholder="e.g. MOHAN DEWAN, NAIR M. RAMAKRISHNAN, Advocates and Trademark agents; ..." 
                ></textarea>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.08em] mb-1 text-[#666]" htmlFor="attorneyAddress">
                  Address for Communication in India
                </label>
                <textarea 
                  id="attorneyAddress"
                  name="attorneyAddress"
                  value={formData.attorneyAddress}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-transparent border-0 border-b border-editorial py-2 text-[14px] font-body text-ink outline-none placeholder-[#BBB] italic focus:border-accent focus:ring-0 rounded-none transition-colors resize-y leading-tight" 
                  placeholder="e.g. R.K. DEWAN & CO.&#10;Podar Chambers, Fort, Mumbai - 400 001" 
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* PREVIEW SECTION - Adjusted for print */}
        <div className="w-full h-full bg-[#ECEAE6] p-6 sm:p-10 flex justify-center items-start overflow-y-auto print:bg-[#CAD2C5] print:p-0 print:overflow-visible">
          
          {/* The A4 "Paper" */}
          <div ref={previewRef} className="bg-[#CAD2C5] w-full sm:max-w-[750px] mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative p-10 sm:p-14 flex flex-col font-display text-[12px] print:shadow-none print:bg-[#CAD2C5] print:w-full print:max-w-none print:min-h-[297mm]">
            
            <div className="absolute top-10 right-10 sm:right-14 text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-right">
              INDIA
            </div>

            <div className="text-center mb-6 pt-4">
              <h1 className="font-display text-[14px] sm:text-[16px] uppercase tracking-[0.1em] font-bold mb-1">FORM TM-48</h1>
              <p className="font-bold uppercase text-[11px] sm:text-[12px] tracking-wider">THE TRADE MARKS ACT, 1999</p>
            </div>

            <div className="text-right text-[11px] sm:text-[12px] font-bold leading-relaxed mb-6">
              <p>Agent's Code No.: {formData.attorneyCode || '___________'}</p>
            </div>

            <div className="text-center mb-8">
              <h2 className="font-bold text-[13px] sm:text-[14px]">Form of authorization of an Agent</h2>
              <p className="text-[11px] sm:text-[12px] font-semibold">(Section 145, Rule 21)</p>
            </div>

            <div className="text-justify space-y-4 flex-grow font-display text-[11px] sm:text-[12px] leading-[1.7] sm:leading-[1.8]">
              <p>I/We,</p>
              <p className="pl-6 font-bold min-h-[40px] uppercase text-[10px] sm:text-[11px] leading-relaxed">
                {formData.ownerName ? formData.ownerName : '____________________________________________________________________________________'}
                <br/>
                {formData.address ? formData.address.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>) : '____________________________________________________________________________________'}
              </p>

              <p>
                hereby authorize <span className="font-bold inline-block mx-1 min-w-[200px] border-b border-[#333] print:border-black uppercase text-accent print:text-black">
                  {formData.attorneyNames || '\u00A0'}
                </span> 
                to act as my/our agents for the purpose of making applications and obtaining registrations of all 
                trademarks, filing notices of opposition and applications for rectification under the provisions 
                of The Trade Marks Act, 1999 and to represent me/us in all matters in connection therewith 
                and to maintain registrations in force and to act in all matters under the Act and also authorize 
                them jointly and severally to sign such papers and writings on my/our behalf and also to 
                appoint substitute(s) as may be necessary or expedient and request that all notices, 
                requisitions and communications relating thereto may be sent to such Agents at the above 
                address.
              </p>

              <p>I/We hereby revoke all previous authorizations, if any, in respect of the proceeding.</p>
              
              <p>I/We hereby ratify and confirm the action already taken by the said person(s) by virtue of this authorization.</p>

              <p>All communications relating to this application may be sent to the following address in India:</p>

              <div className="text-center font-bold uppercase text-[10px] sm:text-[11px] leading-relaxed ml-auto mr-auto max-w-[80%] min-h-[50px]">
                {formData.attorneyAddress ? formData.attorneyAddress.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>) : '____________________________________________________________________\n____________________________________________________________________'}
              </div>

              <p className="mt-[20px] pt-4">
                Dated this <span className="inline-block min-w-[30px] px-1 text-center font-bold border-b border-[#333] print:border-black mx-1">{formData.dateDay}</span> day of <span className="inline-block min-w-[100px] px-2 text-center font-bold border-b border-[#333] print:border-black mx-1">{formData.dateMonth}</span> , 20<span className="inline-block min-w-[30px] px-1 text-center font-bold border-b border-[#333] print:border-black mx-1">{formData.dateYear}</span> .
              </p>
            </div>

            <div className="mt-[40px] flex justify-between items-end pb-[20px]">
              <div className="text-[10px] sm:text-[11px] leading-[1.6]">
                <p>To</p>
                <address className="not-italic">
                  The Registrar of Trade Marks,<br/>
                  The Office of the Trade Marks Registry,<br/>
                  MUMBAI / CALCUTTA / AHMEDABAD / DELHI / CHENNAI
                </address>
                <p className="mt-4 font-bold text-[9px] sm:text-[10px]">NO LEGALIZATION NECESSARY</p>
              </div>
              
              <div className="text-right w-[200px] sm:w-[250px] text-[11px] sm:text-[12px] space-y-4">
                <div className="flex items-end justify-between">
                  <span className="shrink-0 mr-2">Signature :</span>
                  <div className="border-b border-[#333] print:border-black border-dashed w-full h-[20px]"></div>
                </div>
                <div className="flex items-end justify-between">
                  <span className="shrink-0 mr-2">Name of the Signatory :</span>
                  <div className="border-b border-[#333] print:border-black w-full text-center px-2 font-bold uppercase text-[9px] sm:text-[10px] truncate h-[20px]">
                    {formData.signatoryName}
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <span className="shrink-0 mr-2">Designation :</span>
                  <div className="border-b border-[#333] print:border-black w-full text-center px-2 font-bold uppercase text-[9px] sm:text-[10px] truncate h-[20px]">
                    {formData.designation}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
