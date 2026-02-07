# REDAS Project Streamlining and Completion Plan

## Overview
The REDAS project has multiple issues including broken HTML, misplaced files, incomplete templates, and pending updates. This plan aims to fix these systematically.

## Steps to Complete

### 1. Fix Broken HTML in Data Entry Pages
- [ ] Fix corrupted HTML in pages/data-entry.html (truncated and malformed)
- [ ] Fix corrupted HTML in data-entry.html (root level, seems duplicate)
- [ ] Ensure forms are properly structured and functional

### 2. Move Misplaced Files
- [ ] Move js/directorate.html to pages/directorate.html
- [ ] Update any references to the moved file
- [ ] Check for other misplaced files (e.g., styles.css in root vs css/styles.css)

### 3. Complete HRM Reporting Template
- [ ] Modify directorate.html to detect id='hrm' and replace main content with HRM reporting template
- [ ] Create HTML structure for HRM reporting template including:
  - Personnel Strength
  - Service Strength
  - Record Unit Activities
  - Registry Activities
  - Recruitment
  - Career Progression
  - Upgrading and Conversion
  - Promotion/Eligibility
  - Training and Staff Development
  - Permission for Studies
  - Staff Development
  - Welfare
  - Pension
  - Discipline and Award
  - Medical Services
  - IMMOWA
  - Sporting Activities
  - General Report
  - Signature
- [ ] Add input fields for manual entries (numbers, text)
- [ ] Implement auto-sum functionality for totals
- [ ] Add provisions for additional inputs where specified
- [ ] Ensure responsive design with Bootstrap

### 4. Review and Fix Links/Navigation
- [ ] Check all internal links in pages for correctness
- [ ] Fix sidebar navigation consistency across pages
- [ ] Update paths for assets, CSS, JS files
- [ ] Ensure logout and back links work properly

### 5. Ensure All Pages Are Functional
- [ ] Test index.html (landing page)
- [ ] Test login.html and role-based redirects
- [ ] Test dashboard pages (HQ, Zonal, State)
- [ ] Test data entry forms
- [ ] Test profile settings
- [ ] Test directorate pages
- [ ] Verify charts and JS functionality

### 6. General Cleanup
- [ ] Remove duplicate files (e.g., multiple data-entry.html)
- [ ] Standardize file naming and structure
- [ ] Update any outdated references
- [ ] Ensure consistent styling and theming

## Dependencies
- Bootstrap 5.3.0
- Font Awesome 6.4.0
- Chart.js for analytics
- Custom CSS in css/styles.css
- JavaScript in js/app.js and other files

## Testing
- [ ] Test on different screen sizes (responsive design)
- [ ] Test dark mode functionality
- [ ] Test form submissions (mock for now)
- [ ] Test sidebar toggle on mobile
