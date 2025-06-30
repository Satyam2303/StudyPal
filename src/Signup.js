import React, { useState } from 'react';
import './Signup.css';

// --- MAIN SIGNUP COMPONENT ---
const Signup = () => {
  // A single state object to hold all form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    designation: '',
    excitedFeatures: {},
    usedTools: {},
    otherToolText: '',
    otherFeatures: '',
    agreedToTerms: false,
  });

  // State to manage the form's submission status
  const [submissionStatus, setSubmissionStatus] = useState({
    isSubmitting: false,
    submitted: false,
    error: null,
  });

  // A single handler for all input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      // Handle checkbox groups
      if (name === 'excitedFeatures' || name === 'usedTools') {
        setFormData(prev => ({
          ...prev,
          [name]: { ...prev[name], [value]: checked }
        }));
      } else {
        // Handle single checkboxes like the agreement
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      // Handle text inputs, textareas, and radio buttons
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };
  
  // Handles the form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmissionStatus({ ...submissionStatus, isSubmitting: true, error: null });

//     // This object bundles your data for Google Forms
//     const googleFormData = new FormData();
    
//     // These are the real entry IDs from your form
//     googleFormData.append('entry.149171131', formData.firstName);
//     googleFormData.append('entry.101887384', formData.lastName);
//     googleFormData.append('entry.2005939529', formData.email);
//     googleFormData.append('entry.1065023554', formData.phone);
//     googleFormData.append('entry.1166986959', formData.designation);
    
//     Object.keys(formData.excitedFeatures).forEach(key => {
//       if (formData.excitedFeatures[key]) {
//         googleFormData.append('entry.839331535', key);
//       }
//     });
    
//     Object.keys(formData.usedTools).forEach(key => {
//       if (formData.usedTools[key]) {
//         googleFormData.append('entry.1045781291', key);
//       }
//     });

//     if (formData.otherToolText) {
//       googleFormData.append('entry.1045781291.other_option_response', formData.otherToolText);
//     }

//     googleFormData.append('entry.1693121370', formData.otherFeatures);
//     googleFormData.append('entry.1812147321', formData.agreedToTerms ? 'Yes' : '');

//     try {
//       // This is the correct formResponse URL for your form
//       await fetch('https://docs.google.com/forms/d/e/1FAIpQLScf4jN2UgsjMcs0_49xQzv1kWQOVI-ogrE4w0tVsEH1PQ8s9A/formResponse', {
//         method: 'POST',
//         body: googleFormData,
//         mode: 'no-cors' // This is essential to prevent CORS errors
//       });
//       setSubmissionStatus({ isSubmitting: false, submitted: true, error: null });
//     } catch (err) {
//       setSubmissionStatus({ isSubmitting: false, submitted: false, error: 'Submission failed. Please try again.' });
//       console.error(err);
//     }
//   };
// //src/Signup.js

// Temporarily replace your existing handleSubmit with this one for testing
const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmissionStatus({ ...submissionStatus, isSubmitting: true, error: null });

  const googleFormData = new FormData();

  // We are ONLY sending the First Name for this test
  googleFormData.append('entry.149171131', formData.firstName);

  console.log("--- RUNNING SIMPLE TEST ---");
  console.log(`Sending: entry.149171131 = ${formData.firstName}`);

  try {
    await fetch('https://docs.google.com/forms/d/e/1FAIpQLScf4jN2UgsjMcs0_49xQzv1kWQOVI-ogrE4w0tVsEH1PQ8s9A/formResponse', {
      method: 'POST',
      body: googleFormData,
      mode: 'no-cors'
    });
    setSubmissionStatus({ isSubmitting: false, submitted: true, error: null });
  } catch (err) {
    setSubmissionStatus({ isSubmitting: false, submitted: false, error: 'Submission failed. Please try again.' });
  }
};
  // Show a "Thank You" message after successful submission
  if (submissionStatus.submitted) {
    return (
      <div className="signup-page thank-you-message">
        <h2>🎉 Thank You!</h2>
        <p>Your registration is complete. We'll be in touch with the next steps soon!</p>
      </div>
    );
  }

  // The main form JSX
  return (
    <div className="signup-page">
      <div className="form-container-custom">
        <h2>Public Beta Registration</h2>
        <p>Fill out the form below to get early access to StudyPal.</p>
        <form onSubmit={handleSubmit}>
          
          <div className="form-group-custom">
            <label>First Name *</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>

          <div className="form-group-custom">
            <label>Last Name *</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>

          <div className="form-group-custom">
            <label>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group-custom">
            <label>Phone Number <span className="label-note">(we don't spam)</span></label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="form-group-custom">
            <label>Designation *</label>
            <div className="radio-group">
              <label><input type="radio" name="designation" value="Student" checked={formData.designation === 'Student'} onChange={handleChange} required /> Student</label>
              <label><input type="radio" name="designation" value="Working Professional" checked={formData.designation === 'Working Professional'} onChange={handleChange} /> Working Professional</label>
              <label><input type="radio" name="designation" value="Just want to test the product" checked={formData.designation === 'Just want to test the product'} onChange={handleChange} /> Just want to test the product</label>
            </div>
          </div>

          <div className="form-group-custom">
            <label>Which features are you most excited to test?</label>
            <div className="checkbox-group">
                {['Personalized Textbook Generator', 'Personalized Quizes of topics you don\'t know', 'Evaluator cum Recommender System', 'QnA generator for Tests', 'Maestro'].map(feature => (
                    <label key={feature}><input type="checkbox" name="excitedFeatures" value={feature} checked={!!formData.excitedFeatures[feature]} onChange={handleChange}/> {feature}</label>
                ))}
            </div>
          </div>
          
          <div className="form-group-custom">
            <label>What other educational tools have you used? *</label>
            <div className="checkbox-group">
                {['Khan Academy', 'Asksia AI', 'TutorAI', 'Kyron Learning', 'ClassDojo', 'Studyx.AI', 'Chegg', 'Quizlet', 'Brainly', 'Brilliant', 'None'].map(tool => (
                    <label key={tool}><input type="checkbox" name="usedTools" value={tool} checked={!!formData.usedTools[tool]} onChange={handleChange}/> {tool}</label>
                ))}
                <div className="other-input-container">
                    <label><input type="checkbox" name="usedTools" value="Other" checked={!!formData.usedTools['Other']} onChange={handleChange}/> Other:</label>
                    <input type="text" name="otherToolText" value={formData.otherToolText} onChange={handleChange} placeholder="Please specify" className="other-input"/>
                </div>
            </div>
          </div>
          
          <div className="form-group-custom">
            <label>What other features do you want to see in our product? *</label>
            <textarea name="otherFeatures" value={formData.otherFeatures} onChange={handleChange} rows="4" required></textarea>
          </div>

          <div className="form-group-custom agreement-group">
            <label>
              <input type="checkbox" name="agreedToTerms" checked={formData.agreedToTerms} onChange={handleChange} required /> 
              I understand that I will have to pay once the public beta is closed and the public launch happens. *
            </label>
          </div>

          {submissionStatus.error && <p className="error-message">{submissionStatus.error}</p>}
          <button type="submit" className="submit-btn-custom" disabled={submissionStatus.isSubmitting}>
            {submissionStatus.isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;