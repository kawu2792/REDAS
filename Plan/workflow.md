# REDAS Hierarchical Workflow Analysis

## Overview
The REDAS system implements a hierarchical reporting workflow for the Nigeria Immigration Service, following a clear chain of command from state-level submissions to headquarters approval.

## Workflow Levels

### 1. State Command Level (User: State Comptroller/Supervisor)
- **Role**: State Comptroller (ACG level)
- **Page**: `pages/dashboard-state.html`
- **Actions**:
  - Submit monthly/quarterly reports via form
  - Reports forwarded to Zonal HQ for approval
  - Track submission status (Pending Zonal Approval, Approved by HQ, Queried by Zone)
- **Data Entry**: `pages/data-entry.html` (detailed NIS reporting template)

### 2. Zonal Command Level (ACG in Zone)
- **Role**: ACG Zonal Coordinator
- **Page**: `pages/dashboard-zonal.html`
- **Actions**:
  - Receive state reports in "Incoming State Reports" table
  - Review and approve reports
  - Forward approved reports to HQ PRS Directorate
  - Query/return reports to states if needed
  - Broadcast announcements to commands

### 3. Headquarters PRS Directorate (DCG PRS Office)
- **Role**: PRS Directorate (Planning, Research & Statistics)
- **Page**: `pages/prs-reports.html`
- **Actions**:
  - Receive zonal reports in "Incoming Reports from Zones" table
  - Review reports
  - Forward approved reports to CGIS for final decision
  - Query/return reports to zones
  - Batch forward multiple reports

### 4. CGIS Super Admin Level (Final Decision)
- **Role**: Comptroller General of Immigration Service
- **Page**: `pages/dashboard-hq.html` (CGIS Reports Management section)
- **Actions**:
  - Final review and approval/rejection of reports
  - Query reports back to PRS
  - Ultimate authority

## Workflow Flow
```
State Command → Zonal ACG → HQ PRS DCG → CGIS Super Admin
     ↑             ↑             ↑             ↑
   Query        Query        Query        Query
   Return       Return       Return       Reject
```

## Key Features
- **Status Tracking**: Reports have statuses like "Pending Review", "Forwarded to CGIS", "Approved", "Queried/Returned"
- **Query System**: Each level can return reports with reasons
- **Hierarchical Access**: Login differentiates roles (state, zonal, hq/cgis)
- **Audit Trail**: History tracking for report movements
- **Batch Operations**: PRS can forward multiple reports at once
- **Notifications**: Announcements between levels

## Data Flow
- Reports originate from `pages/data-entry.html`
- Stored in submissions.json (mock data)
- Flow through approval chain with status updates
- Final approval at CGIS level

## File Structure
- Frontend: HTML/JS/CSS in root and pages/
- Backend: Mock API with JSON files
- Assets: Images and styles in assets/ and css/
