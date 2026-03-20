import fs from 'fs';
import path from 'path';

const files = [
  'src/pages/Home.tsx',
  'src/pages/About.tsx',
  'src/pages/Contact.tsx',
  'src/pages/Services.tsx',
  'src/components/DeveloperPopup.tsx',
  'src/components/Navbar.tsx',
  'src/components/Footer.tsx',
  'src/components/ITIPopup.tsx',
  'src/components/VocationalPopup.tsx',
  'src/components/ConsultationPopup.tsx',
  'src/components/AssistancePopup.tsx',
  'src/components/AdmissionBooking.tsx',
  'src/components/AIReceptionist.tsx',
  'src/App.tsx'
];

files.forEach(file => {
  const filePath = path.join('d:/Ashish', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused React imports like "import React, { ... } from 'react'" or "import React from 'react'"
    content = content.replace(/import React,\s*{([^}]+)}\s*from\s*['"]react['"]/g, "import { $1 } from 'react'");
    content = content.replace(/import React\s*from\s*['"]react['"]/g, "");
    
    // Specifically fix Home.tsx scrollToTestimonials
    if (file === 'src/pages/Home.tsx') {
      content = content.replace(/const scrollToTestimonials = \(\) => {[^}]+};/g, '');
    }
    
    fs.writeFileSync(filePath, content);
  }
});
