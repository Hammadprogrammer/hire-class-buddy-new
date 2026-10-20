// "use client";
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import styles from './contact_from.module.scss';

// // MUI Icons
// import ShieldMoonIcon from '@mui/icons-material/ShieldMoon';
// import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// const taskOptions = [
//   "Proctored Exam Help",
//   "Nursing Portal Assignment",
//   "Full Class Management",
//   "Dissertation / Essay",
//   "Technical Project / IT"
// ];

// const TrustItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
//   <div className={styles.trustItem}>
//     <div className={styles.iconWrapper}>{icon}</div>
//     <div className={styles.content}>
//       <h6>{title}</h6>
//       <p>{desc}</p>
//     </div>
//   </div>
// );

// const ContactForm = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
  
//   const initialState = {
//     fullName: '',
//     email: '',
//     whatsapp: '',
//     taskType: 'Select Task Type',
//     message: ''
//   };

//   const [formData, setFormData] = useState(initialState);
//   const [errors, setErrors] = useState<Record<string, string | null>>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     if (name === 'whatsapp') {
//       const onlyNums = value.replace(/[^0-9]/g, '');
//       setFormData(prev => ({ ...prev, [name]: onlyNums }));
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     }
//     // Type hone par error remove karna
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: null }));
//     }
//   };

//   const validate = () => {
//     let tempErrors: Record<string, string> = {};
    
//     if (!formData.fullName.trim()) tempErrors.fullName = "Name is required";
    
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email.trim()) {
//         tempErrors.email = "Email is required";
//     } else if (!emailRegex.test(formData.email)) {
//         tempErrors.email = "Please enter a valid email";
//     }

//     if (!formData.whatsapp) {
//       tempErrors.whatsapp = "WhatsApp number is required";
//     } else if (formData.whatsapp.length < 10) {
//       tempErrors.whatsapp = "Minimum 10 digits required";
//     }

//     if (formData.taskType === 'Select Task Type') {
//         tempErrors.taskType = "Please select a task type";
//     }

//     if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";

//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validate()) {
//       setIsLoading(true);
//       try {
//         const response = await fetch('https://contact-a-pi-one.vercel.app/api/contact', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           setIsSubmitted(true);
//           setFormData(initialState);
//           setTimeout(() => setIsSubmitted(false), 5000);
//         } else {
//           alert("Submission failed. Please try again.");
//         }
//       } catch (err) {
//         console.error("API Error:", err);
//         alert("Server error. Check your connection.");
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   return (
//     <section className={styles.formSection}>
//       <div className={styles.container}>
        
//         <motion.div 
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className={styles.infoSide}
//         >
//           <span className={styles.badge}>✨ TRUSTED BY 10k+ STUDENTS</span>
//           <h2 className={styles.heading}>
//             Contact Our <span className={styles.goldGradient}>Academic Experts</span> For A+ Grades
//           </h2>
//           <p className={styles.subText}>
//             Don't let complex assignments ruin your GPA. Our PhD experts are ready to take over and handle the pressure for you.
//           </p>

//           <div className={styles.trustList}>
//             <TrustItem icon={<ShieldMoonIcon className={styles.muiIcon} />} title="100% Private" desc="Military-grade encryption for your data." />
//             <TrustItem icon={<WorkspacePremiumIcon className={styles.muiIcon} />} title="A+ Guaranteed" desc="Top-tier quality or get your money back." />
//             <TrustItem icon={<SupportAgentIcon className={styles.muiIcon} />} title="Live Support" desc="Real humans available to chat 24/7." />
//           </div>
//         </motion.div>

//         <div className={styles.formWrapper}>
//           <motion.div 
//             className={styles.glassCard}
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//           >
//             <AnimatePresence mode="wait">
//               {!isSubmitted ? (
//                 <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//                   <div className={styles.formHeader}>
//                     <h3>Get a Free Quote</h3>
//                   </div>

//                   <form className={styles.mainForm} onSubmit={handleSubmit} noValidate>
//                     {/* Full Name */}
//                     <div className={styles.inputGroup}>
//                       <input 
//                         type="text" name="fullName" placeholder="Full Name" 
//                         value={formData.fullName} onChange={handleChange}
//                         autoComplete="off"
//                         className={errors.fullName ? styles.errorInput : ''}
//                       />
//                       {errors.fullName && <span className={styles.errorText} style={{ color: 'red', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.fullName}</span>}
//                     </div>

//                     {/* Email */}
//                     <div className={styles.inputGroup}>
//                       <input 
//                         type="email" name="email" placeholder="Email Address" 
//                         value={formData.email} onChange={handleChange}
//                         autoComplete="off"
//                         className={errors.email ? styles.errorInput : ''}
//                       />
//                       {errors.email && <span className={styles.errorText} style={{ color: 'red', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
//                     </div>

//                     {/* WhatsApp */}
//                     <div className={styles.inputGroup}>
//                       <input 
//                         type="tel" name="whatsapp" placeholder="WhatsApp Number" 
//                         value={formData.whatsapp} onChange={handleChange}
//                         autoComplete="off"
//                         className={errors.whatsapp ? styles.errorInput : ''}
//                       />
//                       {errors.whatsapp && <span className={styles.errorText} style={{ color: 'red', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.whatsapp}</span>}
//                     </div>

//                     {/* Task Dropdown */}
//                     <div className={styles.dropdownContainer}>
//                       <div 
//                         className={`${styles.customSelect} ${isOpen ? styles.active : ''} ${errors.taskType ? styles.errorInput : ''}`}
//                         onClick={() => setIsOpen(!isOpen)}
//                         style={errors.taskType ? { borderColor: 'red' } : {}}
//                       >
//                         {formData.taskType}
//                         <KeyboardArrowDownIcon className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`} />
//                       </div>
//                       {errors.taskType && <span className={styles.errorText} style={{ color: 'red', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.taskType}</span>}
                      
//                       <AnimatePresence>
//                         {isOpen && (
//                           <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className={styles.optionsList}>
//                             {taskOptions.map((opt) => (
//                               <div key={opt} className={styles.optionItem} onClick={() => {
//                                 setFormData(prev => ({ ...prev, taskType: opt }));
//                                 setErrors(prev => ({ ...prev, taskType: null }));
//                                 setIsOpen(false);
//                               }}>
//                                 {opt}
//                               </div>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     {/* Message */}
//                     <div className={styles.inputGroup}>
//                       <textarea 
//                         name="message" rows={3} placeholder="Tell us about your task & deadline..."
//                         value={formData.message} onChange={handleChange}
//                         autoComplete="off"
//                         className={errors.message ? styles.errorInput : ''}
//                       ></textarea>
//                       {errors.message && <span className={styles.errorText} style={{ color: 'red', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
//                     </div>

//                     <motion.button 
//                         whileHover={!isLoading ? { scale: 1.02 } : {}} 
//                         whileTap={!isLoading ? { scale: 0.98 } : {}} 
//                         type="submit" 
//                         className={styles.submitBtn}
//                         disabled={isLoading}
//                     >
//                       {isLoading ? "Processing..." : "Send Now"} 
//                       {!isLoading && <RocketLaunchIcon style={{ marginLeft: '10px', fontSize: '20px' }} />}
//                     </motion.button>
//                   </form>
//                 </motion.div>
//               ) : (
//                 <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className={styles.successMessage}>
//                   <CheckCircleOutlineIcon className={styles.successIcon} />
//                   <h3>Submitted Successfully!</h3>
//                   <p>Our experts will contact you on WhatsApp shortly.</p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );  
// };

// export default ContactForm;

"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './contact_from.module.scss';

// MUI Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const OTHER_OPTION = "Other (type your own)";

const taskOptions = [
  "Proctored Exam Help",
  "Nursing Portal Assignment",
  "Full Class Management",
  "Dissertation / Essay",
  "Technical Project / IT",
  "Online Class Help",
  "Assignment Help",
  "Quiz / Test Help",
  OTHER_OPTION
];

const countries: { code: string; name: string; dial: string }[] = [
  { code: "US", name: "United States", dial: "1" },
  { code: "CA", name: "Canada", dial: "1" },
  { code: "GB", name: "United Kingdom", dial: "44" },
  { code: "AU", name: "Australia", dial: "61" },
  { code: "NZ", name: "New Zealand", dial: "64" },
  { code: "IE", name: "Ireland", dial: "353" },
  { code: "AE", name: "United Arab Emirates", dial: "971" },
  { code: "SA", name: "Saudi Arabia", dial: "966" },
  { code: "QA", name: "Qatar", dial: "974" },
  { code: "KW", name: "Kuwait", dial: "965" },
  { code: "BH", name: "Bahrain", dial: "973" },
  { code: "OM", name: "Oman", dial: "968" },
  { code: "IN", name: "India", dial: "91" },
  { code: "PK", name: "Pakistan", dial: "92" },
  { code: "BD", name: "Bangladesh", dial: "880" },
  { code: "LK", name: "Sri Lanka", dial: "94" },
  { code: "NP", name: "Nepal", dial: "977" },
  { code: "PH", name: "Philippines", dial: "63" },
  { code: "MY", name: "Malaysia", dial: "60" },
  { code: "SG", name: "Singapore", dial: "65" },
  { code: "ID", name: "Indonesia", dial: "62" },
  { code: "TH", name: "Thailand", dial: "66" },
  { code: "VN", name: "Vietnam", dial: "84" },
  { code: "HK", name: "Hong Kong", dial: "852" },
  { code: "JP", name: "Japan", dial: "81" },
  { code: "KR", name: "South Korea", dial: "82" },
  { code: "CN", name: "China", dial: "86" },
  { code: "DE", name: "Germany", dial: "49" },
  { code: "FR", name: "France", dial: "33" },
  { code: "ES", name: "Spain", dial: "34" },
  { code: "IT", name: "Italy", dial: "39" },
  { code: "NL", name: "Netherlands", dial: "31" },
  { code: "BE", name: "Belgium", dial: "32" },
  { code: "CH", name: "Switzerland", dial: "41" },
  { code: "AT", name: "Austria", dial: "43" },
  { code: "SE", name: "Sweden", dial: "46" },
  { code: "NO", name: "Norway", dial: "47" },
  { code: "DK", name: "Denmark", dial: "45" },
  { code: "FI", name: "Finland", dial: "358" },
  { code: "PL", name: "Poland", dial: "48" },
  { code: "PT", name: "Portugal", dial: "351" },
  { code: "GR", name: "Greece", dial: "30" },
  { code: "TR", name: "Turkey", dial: "90" },
  { code: "RU", name: "Russia", dial: "7" },
  { code: "UA", name: "Ukraine", dial: "380" },
  { code: "EG", name: "Egypt", dial: "20" },
  { code: "NG", name: "Nigeria", dial: "234" },
  { code: "KE", name: "Kenya", dial: "254" },
  { code: "GH", name: "Ghana", dial: "233" },
  { code: "ZA", name: "South Africa", dial: "27" },
  { code: "MA", name: "Morocco", dial: "212" },
  { code: "MX", name: "Mexico", dial: "52" },
  { code: "BR", name: "Brazil", dial: "55" },
  { code: "AR", name: "Argentina", dial: "54" },
  { code: "CO", name: "Colombia", dial: "57" },
  { code: "CL", name: "Chile", dial: "56" },
  { code: "JM", name: "Jamaica", dial: "1" },
  { code: "TT", name: "Trinidad and Tobago", dial: "1" },
  { code: "IL", name: "Israel", dial: "972" },
  { code: "JO", name: "Jordan", dial: "962" },
];

const PHONE_MIN_DIGITS = 7;
const PHONE_MAX_DIGITS = 15;

const dialFor = (code: string) => countries.find(c => c.code === code)?.dial ?? "1";
const fullNumber = (code: string, digits: string) => (digits ? `+${dialFor(code)} ${digits}` : "");

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notRobot, setNotRobot] = useState(false);
  
  const initialState = {
    fullName: '',
    email: '',
    whatsappCountry: 'US',
    whatsapp: '',
    phoneCountry: 'US',
    phone: '',
    taskType: 'Select Task Type',
    customTask: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'whatsapp' || name === 'phone') {
      const onlyNums = value.replace(/[^0-9]/g, '').slice(0, PHONE_MAX_DIGITS);
      setFormData(prev => ({ ...prev, [name]: onlyNums }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
        tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
        tempErrors.email = "Please enter a valid email";
    }
    if (!formData.whatsapp && !formData.phone) {
      tempErrors.whatsapp = "Please enter a WhatsApp or phone number";
    }
    if (formData.whatsapp && formData.whatsapp.length < PHONE_MIN_DIGITS) {
      tempErrors.whatsapp = `Minimum ${PHONE_MIN_DIGITS} digits required`;
    }
    if (formData.phone && formData.phone.length < PHONE_MIN_DIGITS) {
      tempErrors.phone = `Minimum ${PHONE_MIN_DIGITS} digits required`;
    }
    if (formData.taskType === 'Select Task Type') {
        tempErrors.taskType = "Please select a task type";
    } else if (formData.taskType === OTHER_OPTION && !formData.customTask.trim()) {
        tempErrors.customTask = "Please describe your task";
    }
    if (!notRobot) tempErrors.notRobot = "Please confirm you are not a robot";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      const whatsapp = fullNumber(formData.whatsappCountry, formData.whatsapp);
      const phone = fullNumber(formData.phoneCountry, formData.phone);
      const taskType = formData.taskType === OTHER_OPTION ? formData.customTask.trim() : formData.taskType;
      const message = [formData.message.trim(), phone ? `Phone: ${phone}` : ""].filter(Boolean).join("\n");
      try {
        const response = await fetch('https://contact-a-pi-one.vercel.app/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName: formData.fullName, email: formData.email, whatsapp, phone, taskType, message }),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormData(initialState);
          setNotRobot(false);
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          alert("Submission failed. Please try again.");
        }
      } catch (err) {
        console.error("API Error:", err);
        alert("Server error. Check your connection.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.centeredContainer}>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.headerArea}
        >
          <h2 className={styles.heading}>
            Contact Us 
          </h2>
        </motion.div>

        <div className={styles.formWrapper}>
          <motion.div 
            className={styles.glassCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {/* Added autoComplete="off" to the main form */}
                  <form className={styles.mainForm} onSubmit={handleSubmit} noValidate autoComplete="off">
                    
                    <div className={styles.inputGroup}>
                      <input 
                        type="text" 
                        name="fullName" 
                        placeholder="Full Name" 
                        value={formData.fullName} 
                        onChange={handleChange}
                        className={errors.fullName ? styles.errorInput : ''}
                        autoComplete="new-password" // Using 'new-password' often bypasses Chrome's aggressive autofill
                      />
                      {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address" 
                        value={formData.email} 
                        onChange={handleChange}
                        className={errors.email ? styles.errorInput : ''}
                        autoComplete="off"
                      />
                      {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                      <div className={styles.phoneRow}>
                        <select
                          name="whatsappCountry"
                          value={formData.whatsappCountry}
                          onChange={handleChange}
                          className={styles.countrySelect}
                          aria-label="WhatsApp country code"
                        >
                          {countries.map(c => (
                            <option key={c.code} value={c.code}>{c.code} +{c.dial}</option>
                          ))}
                        </select>
                        <input 
                          type="tel" 
                          name="whatsapp" 
                          placeholder="WhatsApp Number" 
                          value={formData.whatsapp} 
                          onChange={handleChange}
                          maxLength={PHONE_MAX_DIGITS}
                          inputMode="numeric"
                          className={errors.whatsapp ? styles.errorInput : ''}
                          autoComplete="off"
                        />
                      </div>
                      {errors.whatsapp && <span className={styles.errorText}>{errors.whatsapp}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                      <div className={styles.phoneRow}>
                        <select
                          name="phoneCountry"
                          value={formData.phoneCountry}
                          onChange={handleChange}
                          className={styles.countrySelect}
                          aria-label="Phone country code"
                        >
                          {countries.map(c => (
                            <option key={c.code} value={c.code}>{c.code} +{c.dial}</option>
                          ))}
                        </select>
                        <input 
                          type="tel" 
                          name="phone" 
                          placeholder="Phone Number (for calls)" 
                          value={formData.phone} 
                          onChange={handleChange}
                          maxLength={PHONE_MAX_DIGITS}
                          inputMode="numeric"
                          className={errors.phone ? styles.errorInput : ''}
                          autoComplete="off"
                        />
                      </div>
                      {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                    </div>

                    <div className={styles.dropdownContainer}>
                      <div 
                        className={`${styles.customSelect} ${isOpen ? styles.active : ''} ${errors.taskType ? styles.errorInput : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {formData.taskType}
                        <KeyboardArrowDownIcon className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`} />
                      </div>
                      {errors.taskType && <span className={styles.errorText}>{errors.taskType}</span>}
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className={styles.optionsList}>
                            {taskOptions.map((opt) => (
                              <div key={opt} className={styles.optionItem} onClick={() => {
                                setFormData(prev => ({ ...prev, taskType: opt }));
                                setErrors(prev => ({ ...prev, taskType: null }));
                                setIsOpen(false);
                              }}>
                                {opt}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {formData.taskType === OTHER_OPTION && (
                      <div className={styles.inputGroup}>
                        <input 
                          type="text" 
                          name="customTask" 
                          placeholder="Type your task (e.g. Lab Report, Capstone Project)" 
                          value={formData.customTask} 
                          onChange={handleChange}
                          maxLength={100}
                          className={errors.customTask ? styles.errorInput : ''}
                          autoComplete="off"
                        />
                        {errors.customTask && <span className={styles.errorText}>{errors.customTask}</span>}
                      </div>
                    )}

                    <div className={styles.inputGroup}>
                      <textarea 
                        name="message" 
                        rows={4} 
                        placeholder="Tell us about your task & deadline (optional)"
                        value={formData.message} 
                        onChange={handleChange}
                        autoComplete="off"
                      ></textarea>
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={`${styles.robotCheck} ${errors.notRobot ? styles.errorInput : ''}`}>
                        <input
                          type="checkbox"
                          name="notRobot"
                          checked={notRobot}
                          onChange={(e) => {
                            setNotRobot(e.target.checked);
                            if (errors.notRobot) setErrors(prev => ({ ...prev, notRobot: null }));
                          }}
                        />
                        <span>I am not a robot</span>
                      </label>
                      {errors.notRobot && <span className={styles.errorText}>{errors.notRobot}</span>}
                    </div>

                    <motion.button 
                        whileHover={!isLoading && notRobot ? { scale: 1.02 } : {}} 
                        whileTap={!isLoading && notRobot ? { scale: 0.98 } : {}} 
                        type="submit" 
                        className={styles.submitBtn}
                        disabled={isLoading || !notRobot}
                    >
                      {isLoading ? "Processing..." : "Send Now"} 
                      {!isLoading && <RocketLaunchIcon style={{ marginLeft: '10px', fontSize: '20px' }} />}
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className={styles.successMessage}>
                  <CheckCircleOutlineIcon className={styles.successIcon} />
                  <h3>Submitted Successfully!</h3>
                  <p>Our experts will contact you on WhatsApp shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );  
};

export default ContactForm;