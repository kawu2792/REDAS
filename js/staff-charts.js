// Dummy data for staff statistics
const staffData = {
    zones: {
        'A': {
            name: 'Zone A - Lagos',
            states: ['Lagos', 'Ogun'],
            directorates: ['Migration', 'Visa', 'Border Patrol', 'Passport'],
            totalStaff: 450,
            gender: { male: 320, female: 130 },
            ranks: { ACG: 5, CIS: 15, DCI: 25, DSI: 50, ASI: 80, II: 275 },
            reports: 120
        },
        'B': {
            name: 'Zone B - Kaduna',
            states: ['Kaduna', 'Sokoto', 'Katsina', 'Kano', 'Jigawa', 'Zamfara'],
            directorates: ['Migration', 'Visa', 'Border Patrol'],
            totalStaff: 460,
            gender: { male: 280, female: 100 },
            ranks: { ACG: 4, CIS: 12, DCI: 20, DSI: 45, ASI: 70, II: 229 },
            reports: 95
        },
        'C': {
            name: 'Zone C - Bauchi',
            states: ['Bauchi', 'Borno', 'Adamawa', 'Gombe', 'Plateau', 'Yobe'],
            directorates: ['Migration', 'Border Patrol'],
            totalStaff: 400,
            gender: { male: 240, female: 80 },
            ranks: { ACG: 3, CIS: 10, DCI: 18, DSI: 40, ASI: 60, II: 189 },
            reports: 85
        },
        'D': {
            name: 'Zone D - Niger',
            states: ['Niger', 'Kwara', 'Kebbi', 'FCT Abuja'],
            directorates: ['Migration', 'Visa'],
            totalStaff: 290,
            gender: { male: 210, female: 80 },
            ranks: { ACG: 3, CIS: 9, DCI: 16, DSI: 35, ASI: 55, II: 172 },
            reports: 75
        },
        'E': {
            name: 'Zone E - Imo',
            states: ['Imo', 'Rivers', 'Abia', 'Ebonyi', 'Akwa Ibom', 'Cross River'],
            directorates: ['Migration', 'Visa', 'Border Patrol', 'Marine'],
            totalStaff: 590,
            gender: { male: 300, female: 110 },
            ranks: { ACG: 4, CIS: 13, DCI: 22, DSI: 48, ASI: 75, II: 248 },
            reports: 110
        },
        'F': {
            name: 'Zone F - Oyo',
            states: ['Oyo', 'Ekiti', 'Ondo', 'Osun'],
            directorates: ['Migration', 'Visa'],
            totalStaff: 270,
            gender: { male: 190, female: 80 },
            ranks: { ACG: 2, CIS: 8, DCI: 14, DSI: 30, ASI: 50, II: 166 },
            reports: 65
        },
        'G': {
            name: 'Zone G - Edo',
            states: ['Edo', 'Delta', 'Enugu', 'Anambra', 'Bayelsa'],
            directorates: ['Migration', 'Visa', 'Border Patrol'],
            totalStaff: 350,
            gender: { male: 260, female: 90 },
            ranks: { ACG: 3, CIS: 11, DCI: 19, DSI: 42, ASI: 65, II: 210 },
            reports: 90
        },
        'H': {
            name: 'Zone H - Benue',
            states: ['Benue', 'Nasarawa', 'Kogi', 'Taraba'],
            directorates: ['Migration', 'Border Patrol'],
            totalStaff: 310,
            gender: { male: 230, female: 80 },
            ranks: { ACG: 3, CIS: 10, DCI: 17, DSI: 38, ASI: 58, II: 184 },
            reports: 80
        }
    },
    directorates: {
        'Migration': { totalStaff: 800, gender: { male: 600, female: 200 }, ranks: { ACG: 8, CIS: 25, DCI: 45, DSI: 100, ASI: 150, II: 472 }, reports: 200 },
        'Visa': { totalStaff: 600, gender: { male: 450, female: 150 }, ranks: { ACG: 6, CIS: 18, DCI: 32, DSI: 75, ASI: 110, II: 359 }, reports: 150 },
        'Border Patrol': { totalStaff: 700, gender: { male: 520, female: 180 }, ranks: { ACG: 7, CIS: 20, DCI: 35, DSI: 85, ASI: 125, II: 428 }, reports: 180 },
        'Passport': { totalStaff: 400, gender: { male: 300, female: 100 }, ranks: { ACG: 4, CIS: 12, DCI: 20, DSI: 50, ASI: 75, II: 239 }, reports: 100 },
        'Marine': { totalStaff: 150, gender: { male: 120, female: 30 }, ranks: { ACG: 1, CIS: 3, DCI: 5, DSI: 12, ASI: 18, II: 111 }, reports: 40 }
    },
    states: {
        'Lagos': { totalStaff: 200, gender: { male: 150, female: 50 }, ranks: { ACG: 2, CIS: 6, DCI: 10, DSI: 25, ASI: 40, II: 117 }, totalReports: 50, submissionTypes: { 'Monthly Returns': 30, 'Incident Reports': 15, 'Logistic Requests': 5 } },
        'Ogun': { totalStaff: 150, gender: { male: 110, female: 40 }, ranks: { ACG: 1, CIS: 4, DCI: 8, DSI: 18, ASI: 28, II: 91 }, totalReports: 35, submissionTypes: { 'Monthly Returns': 20, 'Incident Reports': 10, 'Logistic Requests': 5 } },
        'Kaduna': { totalStaff: 120, gender: { male: 90, female: 30 }, ranks: { ACG: 1, CIS: 3, DCI: 6, DSI: 15, ASI: 23, II: 72 }, totalReports: 30, submissionTypes: { 'Monthly Returns': 18, 'Incident Reports': 8, 'Logistic Requests': 4 } },
        'Sokoto': { totalStaff: 100, gender: { male: 75, female: 25 }, ranks: { ACG: 1, CIS: 3, DCI: 5, DSI: 12, ASI: 18, II: 61 }, totalReports: 25, submissionTypes: { 'Monthly Returns': 15, 'Incident Reports': 7, 'Logistic Requests': 3 } },
        'Katsina': { totalStaff: 90, gender: { male: 68, female: 22 }, ranks: { ACG: 1, CIS: 2, DCI: 4, DSI: 10, ASI: 15, II: 58 }, totalReports: 20, submissionTypes: { 'Monthly Returns': 12, 'Incident Reports': 5, 'Logistic Requests': 3 } },
        'Kano': { totalStaff: 110, gender: { male: 82, female: 28 }, ranks: { ACG: 1, CIS: 3, DCI: 5, DSI: 13, ASI: 20, II: 68 }, totalReports: 28, submissionTypes: { 'Monthly Returns': 18, 'Incident Reports': 7, 'Logistic Requests': 3 } },
        'Jigawa': { totalStaff: 80, gender: { male: 60, female: 20 }, ranks: { ACG: 0, CIS: 2, DCI: 4, DSI: 9, ASI: 14, II: 51 }, totalReports: 18, submissionTypes: { 'Monthly Returns': 10, 'Incident Reports': 5, 'Logistic Requests': 3 } },
        'Zamfara': { totalStaff: 80, gender: { male: 60, female: 20 }, ranks: { ACG: 0, CIS: 2, DCI: 4, DSI: 9, ASI: 14, II: 51 }, totalReports: 18, submissionTypes: { 'Monthly Returns': 10, 'Incident Reports': 6, 'Logistic Requests': 2 } },
        'Bauchi': { totalStaff: 100, gender: { male: 75, female: 25 }, ranks: { ACG: 1, CIS: 3, DCI: 5, DSI: 12, ASI: 18, II: 61 }, totalReports: 25, submissionTypes: { 'Monthly Returns': 15, 'Incident Reports': 8, 'Logistic Requests': 2 } },
        'Borno': { totalStaff: 90, gender: { male: 68, female: 22 }, ranks: { ACG: 1, CIS: 2, DCI: 4, DSI: 10, ASI: 15, II: 58 }, totalReports: 22, submissionTypes: { 'Monthly Returns': 12, 'Incident Reports': 7, 'Logistic Requests': 3 } },
        'Adamawa': { totalStaff: 85, gender: { male: 64, female: 21 }, ranks: { ACG: 1, CIS: 2, DCI: 4, DSI: 10, ASI: 15, II: 53 }, totalReports: 20, submissionTypes: { 'Monthly Returns': 11, 'Incident Reports': 6, 'Logistic Requests': 3 } },
        'Gombe': { totalStaff: 75, gender: { male: 56, female: 19 }, ranks: { ACG: 0, CIS: 2, DCI: 3, DSI: 8, ASI: 12, II: 50 }, totalReports: 18, submissionTypes: { 'Monthly Returns': 10, 'Incident Reports': 5, 'Logistic Requests': 3 } },
        'Plateau': { totalStaff: 95, gender: { male: 71, female: 24 }, ranks: { ACG: 1, CIS: 2, DCI: 4, DSI: 11, ASI: 17, II: 60 }, totalReports: 23, submissionTypes: { 'Monthly Returns': 14, 'Incident Reports': 6, 'Logistic Requests': 3 } },
        'Yobe': { totalStaff: 80, gender: { male: 60, female: 20 }, ranks: { ACG: 0, CIS: 2, DCI: 4, DSI: 9, ASI: 14, II: 51 }, totalReports: 18, submissionTypes: { 'Monthly Returns': 10, 'Incident Reports': 5, 'Logistic Requests': 3 } },
        'Niger': { totalStaff: 110, gender: { male: 82, female: 28 }, ranks: { ACG: 1, CIS: 3, DCI: 5, DSI: 13, ASI: 20, II: 68 }, totalReports: 28, submissionTypes: { 'Monthly Returns': 18, 'Incident Reports': 7, 'Logistic Requests': 3 } },
        'Kwara': { totalStaff: 85, gender: { male: 64, female: 21 }, ranks: { ACG: 1, CIS: 2, DCI: 4, DSI: 10, ASI: 15, II: 53 }, totalReports: 20, submissionTypes: { 'Monthly Returns': 12, 'Incident Reports': 5, 'Logistic Requests': 3 } },
        'Kebbi': { totalStaff: 80, gender: { male: 60, female: 20 }, ranks: { ACG: 0, CIS: 2, DCI: 4, DSI: 9, ASI: 14, II: 51 }, totalReports: 18, submissionTypes: { 'Monthly Returns': 10, 'Incident Reports': 6, 'Logistic Requests': 2 } },
        'FCT Abuja': { totalStaff: 130, gender: { male: 97, female: 33 }, ranks: { ACG: 1, CIS: 4, DCI: 6, DSI: 15, ASI: 23, II: 81 }, totalReports: 32, submissionTypes: { 'Monthly Returns': 20, 'Incident Reports': 8, 'Logistic Requests': 4 } },
        'Imo': { totalStaff: 120, gender: { male: 90, female: 30 }, ranks: { ACG: 1, CIS: 3, DCI: 6, DSI: 15, ASI: 23, II: 72 }, totalReports: 30, submissionTypes: { 'Monthly Returns': 18, 'Incident Reports': 9, 'Logistic Requests': 3 } },
        'Rivers': { totalStaff: 140, gender: { male: 105, female: 35 }, ranks: { ACG: 1, CIS: 4, DCI: 7, DSI: 17, ASI: 26, II: 85 }, totalReports: 35, submissionTypes: { 'Monthly Returns': 22, 'Incident Reports': 10, 'Logistic Requests': 3 } },
        'Abia': { totalStaff: 100, gender: { male: 75, female: 25 }, ranks: { ACG: 1, CIS: 3, DCI: 5, DSI: 12, ASI: 18, II: 61 }, totalReports: 25, submissionTypes: { 'Monthly Returns': 15, 'Incident Reports': 7, 'Logistic Requests': 3 } },
        'Ebonyi': { totalStaff: 90, gender: { male: 68, female: 22 }, ranks: { ACG: 1, CIS: 2, DCI: 4, DSI: 10, ASI: 15, II: 58 }, totalReports: 22, submissionTypes: { 'Monthly Returns': 13, 'Incident Reports': 6, 'Logistic Requests': 3 } },
        'Akwa Ibom': { totalStaff: 95, gender: { male: 71, female: 24 }, ranks: { ACG: 1, CIS: 2, DCI: 4, DSI: 11, ASI: 17, II: 60 }, totalReports: 23, submissionTypes: { 'Monthly Returns': 14, 'Incident Reports': 6, 'Logistic Requests': 3 } },
        'Cross River': { totalStaff: 85, gender: { male: 64, female: 21 }, ranks: { ACG: 1, CIS: 2, DCI: 4, DSI: 10, ASI: 15, II: 53 }, totalReports: 20, submissionTypes: { 'Monthly Returns': 12, 'Incident Reports': 5, 'Logistic Requests': 3 } },
        'Oyo': { totalStaff: 110, gender: { male: 82, female: 28 }, ranks: { ACG: 1, CIS: 3, DCI: 5, DSI: 13, ASI: 20, II: 68 }, totalReports: 28, submissionTypes: { 'Monthly Returns': 18, 'Incident Reports': 7, 'Logistic Requests': 3 } },
        'Ekiti': { totalStaff: 70, gender: { male: 52, female: 18 }, ranks: { ACG: 0, CIS: 2, DCI: 3, DSI: 8, ASI: 12, II: 45 }, totalReports: 15, submissionTypes: { 'Monthly Returns': 9, 'Incident Reports': 4, 'Logistic Requests': 2 } },
        'Ondo': { totalStaff: 80, gender: { male: 60, female: 20 }, ranks: { ACG: 0, CIS: 2, DCI: 4, DSI: 9, ASI: 14, II: 51 }, totalReports: 18, submissionTypes: { 'Monthly Returns': 10, 'Incident Reports': 5, 'Logistic Requests': 3 } },
        'Osun': { totalStaff: 75, gender: { male: 56, female: 19 }, ranks: { ACG: 0, CIS: 2, DCI: 3, DSI: 8, ASI: 12, II: 50 }, totalReports: 17, submissionTypes: { 'Monthly Returns': 10, 'Incident Reports': 5, 'Logistic Requests': 2 } },
        'Edo': { totalStaff: 100, gender: { male: 75, female: 25 }, ranks: { ACG: 1, CIS: 3, DCI: 5, DSI: 12, ASI: 18, II: 61 }, totalReports: 25, submissionTypes: { 'Monthly Returns': 15, 'Incident Reports': 7, 'Logistic Requests': 3 } },
        'Delta': { totalStaff: 110, gender: { male: 82, female: 28 }, ranks: { ACG: 1, CIS: 3, DCI: 5, DSI: 13, ASI: 20, II: 68 }, totalReports: 28, submissionTypes: { 'Monthly Returns': 18, 'Incident Reports': 7, 'Logistic Requests': 3 } },
        'Enugu': { totalStaff: 95, gender: { male: 71, female: 24 }, ranks: { ACG: 1, CIS: 2, DCI: 4, DSI: 11, ASI: 17, II: 60 }, totalReports: 23, submissionTypes: { 'Monthly Returns': 14, 'Incident Reports': 6, 'Logistic Requests': 3 } },
        'Anambra': { totalStaff: 105, gender: { male: 79, female: 26 }, ranks: { ACG: 1, CIS: 3, DCI: 5, DSI: 12, ASI: 19, II: 65 }, totalReports: 26, submissionTypes: { 'Monthly Returns': 16, 'Incident Reports': 7, 'Logistic Requests': 3 } },
        'Bayelsa': { totalStaff: 85, gender: { male: 64, female: 21 }, ranks: { ACG: 1, CIS: 2, DCI: 4, DSI: 10, ASI: 15, II: 53 }, totalReports: 20, submissionTypes: { 'Monthly Returns': 12, 'Incident Reports': 5, 'Logistic Requests': 3 } },
        'Benue': { totalStaff: 100, gender: { male: 75, female: 25 }, ranks: { ACG: 1, CIS: 3, DCI: 5, DSI: 12, ASI: 18, II: 61 }, totalReports: 25, submissionTypes: { 'Monthly Returns': 15, 'Incident Reports': 7, 'Logistic Requests': 3 } },
        'Nasarawa': { totalStaff: 90, gender: { male: 68, female: 22 }, ranks: { ACG: 1, CIS: 2, DCI: 4, DSI: 10, ASI: 15, II: 58 }, totalReports: 22, submissionTypes: { 'Monthly Returns': 13, 'Incident Reports': 6, 'Logistic Requests': 3 } },
        'Kogi': { totalStaff: 85, gender: { male: 64, female: 21 }, ranks: { ACG: 1, CIS: 2, DCI: 4, DSI: 10, ASI: 15, II: 53 }, totalReports: 20, submissionTypes: { 'Monthly Returns': 12, 'Incident Reports': 5, 'Logistic Requests': 3 } },
        'Taraba': { totalStaff: 80, gender: { male: 60, female: 20 }, ranks: { ACG: 0, CIS: 2, DCI: 4, DSI: 9, ASI: 14, II: 51 }, totalReports: 18, submissionTypes: { 'Monthly Returns': 10, 'Incident Reports': 5, 'Logistic Requests': 3 } }
    }
};

// Function to create histogram (bar chart) for staff numbers
function createStaffHistogram(canvasId, data, labels, title) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Staff',
                data: data,
                backgroundColor: '#0d6efd', // Primary Blue to match Total Staff card
                borderColor: '#0a58ca',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: title }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

// Function to create bar chart for ranks
function createRanksBarChart(canvasId, ranksData, title) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    const labels = Object.keys(ranksData);
    const data = Object.values(ranksData);
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Officers',
                data: data,
                backgroundColor: '#0d6efd',
                borderColor: '#0a58ca',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: title }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

// Function to create a pyramid-like horizontal bar chart for rank hierarchy
function createRankPyramidChart(canvasId, ranksData, title) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    
    // Define hierarchy order (Senior to Junior)
    const hierarchyOrder = ['ACG', 'CIS', 'DCI', 'DSI', 'ASI', 'II'];
    const data = hierarchyOrder.map(rank => ranksData[rank] || 0);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: hierarchyOrder,
            datasets: [{
                label: 'Staff Strength',
                data: data,
                backgroundColor: [
                    '#dc3545', // ACG - Red
                    '#fd7e14', // CIS - Orange
                    '#ffc107', // DCI - Yellow
                    '#0d6efd', // DSI - Blue
                    '#0dcaf0', // ASI - Cyan
                    '#198754'  // II - Green
                ],
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y', // Horizontal bars
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                title: { display: true, text: title }
            },
            scales: {
                x: { beginAtZero: true }
            }
        }
    });
}

// Function to create pie chart for gender distribution
function createGenderPieChart(canvasId, genderData, title) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Male', 'Female'],
            datasets: [{
                data: [genderData.male, genderData.female],
                backgroundColor: ['#0dcaf0', '#dc3545'], // Info (Male), Danger (Female)
                borderColor: ['#0aa2c0', '#b02a37'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: title }
            }
        }
    });
}

// Function to create a doughnut chart for submission types
function createSubmissionsDoughnutChart(canvasId, submissionData, title) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    const labels = Object.keys(submissionData);
    const data = Object.values(submissionData);
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: 'Count',
                data: data,
                backgroundColor: [
                    '#0d6efd', // Primary Blue
                    '#ffc107', // Warning Yellow
                    '#198754', // Success Green
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: title }
            }
        }
    });
}

// Function to create bar chart for reports
function createReportsBarChart(canvasId, data, labels, title) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Reports',
                data: data,
                backgroundColor: '#ffc107',
                borderColor: '#e0a800',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: title }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

// Function to load charts for HQ dashboard
function loadHQCharts() {
    // Staff numbers by zone (histogram)
    const zoneLabels = Object.keys(staffData.zones).map(key => staffData.zones[key].name);
    const zoneStaffData = Object.values(staffData.zones).map(zone => zone.totalStaff);
    createStaffHistogram('hqStaffHistogram', zoneStaffData, zoneLabels, 'Staff Numbers by Zone');

    // Gender distribution overall
    const totalGender = { male: 0, female: 0 };
    Object.values(staffData.zones).forEach(zone => {
        totalGender.male += zone.gender.male;
        totalGender.female += zone.gender.female;
    });
    createGenderPieChart('hqGenderPie', totalGender, 'Overall Gender Distribution');

    // Ranks distribution overall
    const totalRanks = { ACG: 0, CIS: 0, DCI: 0, DSI: 0, ASI: 0, II: 0 };
    Object.values(staffData.zones).forEach(zone => {
        Object.keys(totalRanks).forEach(rank => {
            totalRanks[rank] += zone.ranks[rank];
        });
    });
    createRanksBarChart('hqRanksBar', totalRanks, 'Overall Ranks Distribution');

    // Reports by zone
    const zoneReportsData = Object.values(staffData.zones).map(zone => zone.reports);
    createReportsBarChart('hqReportsBar', zoneReportsData, zoneLabels, 'Reports by Zone');
}

// Function to load charts for zonal dashboard
function loadZonalCharts(zoneKey) {
    const zone = staffData.zones[zoneKey];
    if (!zone) return;

    // Staff numbers by state in zone
    const stateLabels = zone.states;
    const stateStaffData = stateLabels.map(state => staffData.states[state].totalStaff);
    createStaffHistogram('zonalStaffHistogram', stateStaffData, stateLabels, `Staff Numbers in ${zone.name}`);

    // Gender distribution in zone
    createGenderPieChart('zonalGenderPie', zone.gender, `Gender Distribution in ${zone.name}`);

    // Ranks in zone
    createRanksBarChart('zonalRanksBar', zone.ranks, `Ranks Distribution in ${zone.name}`);

    // Reports by state in zone
    const stateReportsData = stateLabels.map(state => staffData.states[state].reports);
    createReportsBarChart('zonalReportsBar', stateReportsData, stateLabels, `Reports in ${zone.name}`);
}

// Function to load charts for state dashboard
function loadStateCharts(stateName) {
    const state = staffData.states[stateName];
    if (!state) return;

    // Gender distribution
    createGenderPieChart('stateGenderPie', state.gender, `Gender Distribution in ${stateName}`);

    // Ranks in state
    createRanksBarChart('stateRanksBar', state.ranks, `Ranks Distribution in ${stateName}`);

    // Rank Hierarchy Pyramid
    createRankPyramidChart('stateRankPyramid', state.ranks, `Rank Hierarchy in ${stateName}`);

    // Submissions by Type
    if (state.submissionTypes) {
        createSubmissionsDoughnutChart('stateSubmissionsChart', state.submissionTypes, `Submissions Breakdown in ${stateName}`);
    }
}

/**
 * Generates a statistical analysis summary for a given state.
 * @param {string} stateName - The name of the state (e.g., 'Lagos')
 * @returns {object} An object containing the text summary and raw stats.
 */
function generateStateAnalysis(stateName) {
    const data = staffData.states[stateName];
    if (!data) return { summary: "Data not available for this command.", stats: {} };

    const total = data.totalStaff;
    
    // Gender Analysis
    const malePct = ((data.gender.male / total) * 100).toFixed(1);
    
    // Rank Analysis
    const senior = data.ranks.ACG + data.ranks.CIS + data.ranks.DCI;
    const junior = data.ranks.DSI + data.ranks.ASI + data.ranks.II;
    const seniorPct = ((senior / total) * 100).toFixed(1);
    
    // Find dominant rank
    let maxRank = '';
    let maxRankCount = 0;
    for (const [rank, count] of Object.entries(data.ranks)) {
        if (count > maxRankCount) {
            maxRankCount = count;
            maxRank = rank;
        }
    }

    // Report Analysis
    let topReportType = 'N/A';
    if (data.submissionTypes) {
        topReportType = Object.keys(data.submissionTypes).reduce((a, b) => 
            data.submissionTypes[a] > data.submissionTypes[b] ? a : b
        );
    }

    const summary = `${stateName} Command operates with a total strength of ${total} personnel, comprised of ${malePct}% male officers. ` +
                    `The rank structure is predominantly junior (${100 - seniorPct}%), with ${maxRank} being the most common rank (${maxRankCount} officers). ` +
                    `Operationally, the command has been active with ${data.totalReports} total submissions, primarily focused on ${topReportType}.`;

    return {
        summary,
        stats: {
            malePct,
            seniorCount: senior,
            juniorCount: junior,
            dominantRank: maxRank,
            topActivity: topReportType
        }
    };
}

function exportStateAnalysisPDF(stateName) {
    // This function relies on jsPDF being loaded in the window
    if (!window.jspdf) {
        alert("PDF Library not loaded.");
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const analysis = generateStateAnalysis(stateName);
    const data = staffData.states[stateName];

    if (!data) {
        alert("No data to export.");
        return;
    }

    // Header
    doc.setFillColor(13, 110, 253); // Bootstrap Primary Blue
    doc.rect(0, 0, 210, 20, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(`${stateName} State Command - Statistical Report`, 14, 13);

    // Metadata
    doc.setTextColor(100);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 30);

    // Executive Summary
    doc.setTextColor(0);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Executive Summary", 14, 45);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    const splitSummary = doc.splitTextToSize(analysis.summary, 180);
    doc.text(splitSummary, 14, 55);

    // Key Metrics Section
    let yPos = 80;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Key Metrics Breakdown", 14, yPos);
    
    yPos += 15;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    // Draw simple table-like structure
    const metrics = [
        [`Total Staff Strength`, `${data.totalStaff}`],
        [`Gender Distribution`, `Male: ${data.gender.male} (${analysis.stats.malePct}%) | Female: ${data.gender.female}`],
        [`Senior Officers (ACG-DCI)`, `${analysis.stats.seniorCount}`],
        [`Junior Officers (DSI-II)`, `${analysis.stats.juniorCount}`],
        [`Dominant Rank`, `${analysis.stats.dominantRank}`],
        [`Total Reports Submitted`, `${data.totalReports}`],
        [`Top Activity`, `${analysis.stats.topActivity}`]
    ];

    metrics.forEach(row => {
        doc.setFont("helvetica", "bold");
        doc.text(row[0] + ":", 14, yPos);
        doc.setFont("helvetica", "normal");
        doc.text(row[1], 80, yPos);
        yPos += 10;
    });

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text("REDAS - Real-time Electronic Data Analysis System", 105, 280, null, null, "center");

    // Save
    doc.save(`${stateName}_Command_Analysis.pdf`);
}

function emailStateAnalysisReport(stateName) {
    // In a real application, this would send the PDF blob to a backend API.
    // Here we simulate the action and open the email client with the text summary.
    
    const analysis = generateStateAnalysis(stateName);
    const subject = `Statistical Report: ${stateName} State Command`;
    const body = `Dear Zonal Coordinator,\n\nPlease find the attached statistical report for ${stateName} State Command.\n\nExecutive Summary:\n${analysis.summary}\n\n(Note: The full PDF report is attached.)\n\nRegards,\nState Comptroller`;
    
    // Simulate backend process
    alert(`Generating PDF for ${stateName} and preparing email client...`);
    
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Generates the official NIS Reporting Template for a given state.
 * @param {string} stateName - The name of the state
 * @returns {string} The formatted template string
 */
function generateNISTemplate(stateName) {
    const data = staffData.states[stateName];
    const date = new Date().toLocaleDateString();
    
    if (!data) return "Error: State data not found.";

    // Map Ranks to Cadres based on NIS structure
    // Comptroller Cadre: ACG, CIS, DCI
    const comptCadre = (data.ranks.ACG || 0) + (data.ranks.CIS || 0) + (data.ranks.DCI || 0);
    // Superintendent Cadre: DSI, ASI
    const suptCadre = (data.ranks.DSI || 0) + (data.ranks.ASI || 0);
    // Inspectorate Cadre: II
    const inspCadre = (data.ranks.II || 0);
    // Assistant Cadre: Placeholder (not in dummy data)
    const asstCadre = 0;
    const total = data.totalStaff;

    return `NIGERIA IMMIGRATION SERVICE
NIS REPORTING TEMPLATE FOR MONTHLY, QUARTERLY, BI-ANNUAL AND ANNUAL REPORT

A. STATES, ZONAL AND SPECIAL COMMANDS: REPORTING TEMPLATE
NAME OF THE COMMAND: ${stateName.toUpperCase()} COMMAND
PERIOD OF RETURN: ${date}

1. STAFF STRENGTH (Current nominal roll to be attached)
------------------------------------------------------------
Cadre                   | NUMBER
------------------------------------------------------------
Compt. Cadre            | ${comptCadre}
Superintendent Cadre    | ${suptCadre}
Inspectorate Cadre      | ${inspCadre}
Assistant Cadre         | ${asstCadre}
------------------------------------------------------------
TOTAL                   | ${total}
------------------------------------------------------------

2. GENERAL SERVICES:
A. ARMS/ARMOURY RETURNS:
S/N | TYPES          | CONDITION     | NUMBERS | TOTAL | GRAND TOTAL
--------------------------------------------------------------------
1.  | G3 RIFLE       | SERVICEABLE   |         |       |
    |                | UNSERVICEABLE |         |       |
2.  | AR70 RIFLE     | SERVICEABLE   |         |       |
    |                | UNSERVICEABLE |         |       |
3.  | AK47 RIFLE     | SERVICEABLE   |         |       |
    |                | UNSERVICEABLE |         |       |
4.  | GALIL RIFLE    | SERVICEABLE   |         |       |
    |                | UNSERVICEABLE |         |       |
5.  | LAR RIFLE      | SERVICEABLE   |         |       |
    |                | UNSERVICEABLE |         |       |
6.  | SMG RIFLE      | SERVICEABLE   |         |       |
    |                | UNSERVICEABLE |         |       |
7.  | PISTOL BARETTA | SERVICEABLE   |         |       |
    |                | UNSERVICEABLE |         |       |
8.  | DICON PISTOL   | SERVICEABLE   |         |       |
    |                | UNSERVICEABLE |         |       |
9.  | STONE PISTOL   | SERVICEABLE   |         |       |
    |                | UNSERVICEABLE |         |       |
10. | OTHERS         | SERVICEABLE   |         |       |
    |                | UNSERVICEABLE |         |       |
--------------------------------------------------------------------
    | TOTAL          |               |         |       |
--------------------------------------------------------------------

B. AMMUNITION:
S/N | TYPES | NO. OF ROUNDS | TOTAL | NO. USED | BAL C/F
--------------------------------------------------------
    |       |               |       |          |
--------------------------------------------------------

C. STORE RETURNS:
S/N | ITEMS | BAL B/F | QTY RECEIVED | TOTAL | QTY ISSUED | TOTAL BAL
---------------------------------------------------------------------
    |       |         |              |       |            |
---------------------------------------------------------------------

D. VEHICLE RETURNS:
S/N | TYPES | ID (ENG/CHASSIS) | VEHICLE NO | REMARK
----------------------------------------------------
    |       |                  |            |
----------------------------------------------------

E. PROJECTS:
S/N | DESCRIPTION | YEAR | LOCATION | CONTRACTOR | STATUS | % COMPLETION
------------------------------------------------------------------------
    |             |      |          |            |        |
------------------------------------------------------------------------

3. STAFF DEVELOPMENT:
S/N | WORKSHOP/SEMINAR | LOCATION | COST | PARTICIPANTS | DURATION
------------------------------------------------------------------
    |                  |          |      |              |
------------------------------------------------------------------

4. PASSPORT ADMINISTRATION ACTIVITIES:
S/N | Type of cases | Number of cases
-----------------------------------
1.  | Fresh         |
2.  | Re-issue      |
3.  | Marriage      |
4.  | Lost          |
-----------------------------------
    | Total         |
-----------------------------------

5. CHANGE OF DATA ACTIVITIES (PASSPORT HEADQUARTERS ONLY):
S/NO | Type of cases            | Number of cases
-------------------------------------------------
1.   | Change of Date of birth  |
2.   | Change of Place of birth |
3.   | Change of Signature      |
4.   | Change of Name/s         |
5.   | Others                   |
-------------------------------------------------

6. PASSPORT REVENUE:
e-passport:             | No. Issued | Amount (N)
-------------------------------------------------
32-Pages(5 Years)       |            |
64-Pages(5 Years)       |            |
Enhanced e-Passport:    |            |
32-Pages(5 Years)       |            |
64-Pages(5 Years)       |            |
64-Pages(10 Years)      |            |
ECOWAS TRAVEL CERT      |            |
-------------------------------------------------
TOTAL                   |            |
-------------------------------------------------

7. PASSPORT STOCK RETURNS:
[Enter Stock Balance, Collected, Issued, Voided, Amount, Balance]

8. VISA AND RESIDENCY:
Type                        | Number | Amount (N)
-------------------------------------------------
Residence Card              |        |
V/Pass Ext (ECOWAS)         |        |
CERPAC (African)            |        |
CERPAC (Non-African)        |        |
V/Pass Ext (Non-ECOWAS)     |        |
PUR                         |        |
ECOWAS Registration         |        |
-------------------------------------------------

9. FREE TRADE ZONE:
ACTIVITY       | NUMBER
-----------------------
REGULARIZATION |
RENEWAL        |
COE            |
RE-DESIGNATION |
-----------------------
TOTAL          |
-----------------------

10. QUOTA:
ACTIVITY                            | NUMBER
--------------------------------------------
No. of companies that open file     |
No. of quota Placement for ROS      |
No. of quota Placement for Renewal  |
No. of quota Placement for COE      |
No. of quota Placement for Re-desig |
--------------------------------------------

11. VISA & RESIDENCY (REVENUE):
ACTIVITY       | NUMBER | AMOUNT GENERATED (N)
----------------------------------------------
REGULARIZATION |        |
RENEWAL        |        |
COE            |        |
RE-DESIGNATION |        |
V/P EXTENSION  |        |
----------------------------------------------

12. MIGRATION/ANTI HUMAN TRAFFICKING AND CHILD LABOUR:
ACTIVITIES                  | Number | Status/Remark
----------------------------------------------------
Migrants Intercepted        |        |
Smugglers Arrested          |        |
Victims Rescued             |        |
Traffickers Apprehended     |        |
Victims referred to NAPTIP  |        |
Traffickers ref to NAPTIP   |        |
Victims Re-United           |        |
Victims/migrants Repatriated|        |
----------------------------------------------------

13. MIGRATION:

b. NUMBER OF FOREIGNERS EMPLOYED IN NIGERIA:
S/N | NAME | GENDER | NATIONALITY | DEPENDANTS | POSITION | INDUSTRY/SECTOR
---------------------------------------------------------------------------
    |      |        |             |            |          |
---------------------------------------------------------------------------
SUMMARY:
CATEGORY                                | MALE | FEMALE | TOTAL
---------------------------------------------------------------
Number of foreigners employed in Nigeria|      |        |
Number of dependents                    |      |        |
TOTAL                                   |      |        |
---------------------------------------------------------------

c. NUMBER OF FOREIGNERS ISSUED WITH WORK PERMITS:
S/N | NAME | GENDER | NATIONALITY | TYPES OF PERMIT | DURATION
--------------------------------------------------------------
    |      |        |             |                 |
--------------------------------------------------------------
SUMMARY:
CATEGORY                                     | MALE | FEMALE | TOTAL
--------------------------------------------------------------------
NUMBER OF FOREIGNERS ISSUED WITH WORK PERMITS|      |        |
TOTAL                                        |      |        |
--------------------------------------------------------------------

d. NUMBER OF IRREGULAR MIGRANTS EMPLOYED:
S/N | NAME | GENDER | NATIONALITY | POSITION | DURATION | SECTOR
----------------------------------------------------------------
    |      |        |             |          |          |
----------------------------------------------------------------
SUMMARY:
CATEGORY                              | MALE | FEMALE | TOTAL
-------------------------------------------------------------
NUMBER OF IRREGULAR MIGRANTS EMPLOYED |      |        |
TOTAL                                 |      |        |
-------------------------------------------------------------

e. NUMBER OF SEASONAL MIGRANTS EMPLOYED:
[Enter Table Data Here]

f. NUMBER OF BORDER MIGRANTS EMPLOYED:
[Enter Table Data Here]

g. NIGERIA CITIZENS EMPLOYED ABROAD:
S/N | NAME | GENDER | DESTINATION | POSITION | DURATION | SECTOR
----------------------------------------------------------------
    |      |        |             |          |          |
----------------------------------------------------------------

H. NIGERIANS DEPARTING FOR EMPLOYMENT ABROAD:
S/N | NAME | GENDER | DESTINATION | POSITION | DURATION | SECTOR
----------------------------------------------------------------
    |      |        |             |          |          |
----------------------------------------------------------------

14. [RESERVED]

15. INVESTIGATION AND COMPLIANCE:
S/N | ACTIVITIES                  | NUMBER | REMARK
---------------------------------------------------
1.  | Cases involving Companies   |        |
2.  | Cases involving Expatriates |        |
3.  | Cases involving officers    |        |
---------------------------------------------------

16. REFUGEE/ASYLUM SEEKERS:
S/N | ACTIVITIES                  | NUMBER | REMARK
---------------------------------------------------
1.  | Applications                |        |
2.  | Approved                    |        |
3.  | Rejected                    |        |
---------------------------------------------------

17. DEPORTATION/REPATRIATION/REFUSED ENTRY/DEPARTURE:

NIGERIANS DEPORTED FROM ABROAD:
S/N | STATE OF ORIGIN | MALE | FEMALE | TOTAL
---------------------------------------------
    |                 |      |        |
---------------------------------------------

NIGERIANS REPATRIATED FROM ABROAD:
[Enter Data]

NIGERIANS REFUSED ENTRY ABROAD (RETURNEES):
[Enter Data]

MIGRANTS DEPORTED FROM NIGERIA:
S/N | NATIONALITY | MALE | FEMALE | TOTAL
-----------------------------------------
    |             |      |        |
-----------------------------------------

MIGRANTS REFUSED ENTRY/ADMISSION INTO NIGERIA:
[Enter Data]

18. MIGRANT E-REGISTRATION:
S/N | NATIONALITY | SEX (M/F) | MIGRANT STATUS (Employed/Student/Self/Spouse/Dep/Reg/Irreg)
---------------------------------------------------------------------------------------------
    |             |           |
---------------------------------------------------------------------------------------------
TOTAL:`;
}
