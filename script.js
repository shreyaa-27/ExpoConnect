// ============================================
// QR CODE REPOSITORY
// ============================================

const qrCodeRepository = {
    // QR Code 1 - When QR1.png is scanned, it should contain one of these texts
    'QR_CODE_1': {
        id: 'QR_CODE_1',
        businessName: 'grow stock broker', // You can edit this later
        qrData: 'QR1', // The text encoded in QR1.png - can be: "QR1", "QR_CODE_1", "grow stock broker", or any text containing "qr1"
        imageUrl: 'image1.jpeg', // Local image file - shows when QR1 is scanned
        description: 'Leading technology solutions provider', // You can edit this later
        category: 'Technology' // You can edit this later
    },
    // QR Code 2 - When QR2.png is scanned, it should contain one of these texts
    'QR_CODE_2': {
        id: 'QR_CODE_2',
        businessName: 'campusOS', // You can edit this later
        qrData: 'QR2', // The text encoded in QR2.png - can be: "QR2", "QR_CODE_2", "campusOS", or any text containing "qr2"
        imageUrl: 'image2.jpeg', // Local image file - shows when QR2 is scanned
        description: 'Revolutionary health monitoring devices', // You can edit this later
        category: 'Health & Wellness' // You can edit this later
    }
};

// Saved leads storage
let savedLeads = JSON.parse(localStorage.getItem('savedLeads')) || [];

// Track scan count to alternate between QR1 and QR2
let scanCount = 0;

// Track if sharma ji has already been added to owner leads
// Only restore from localStorage if it was actually saved by user action
let sharmaJiAdded = false;
let firstCommentAdded = false;
let firstComment = null;

// Check localStorage but only use it if it's valid (not default/empty data)
const savedSharmaJiFlag = localStorage.getItem('sharmaJiAdded');
const savedSharmaJiData = localStorage.getItem('sharmaJiLead');

// Only restore sharma ji if we have BOTH flag AND valid data
if (savedSharmaJiFlag === 'true' && savedSharmaJiData) {
    try {
        const parsed = JSON.parse(savedSharmaJiData);
        // Verify it's actual saved data, not default
        if (parsed && parsed.name === 'sharma ji' && parsed.email === 'sharmaji@gmail.com' && parsed.businessName) {
            sharmaJiAdded = true;
        } else {
            // Invalid data, clear it
            localStorage.removeItem('sharmaJiAdded');
            localStorage.removeItem('sharmaJiLead');
        }
    } catch (e) {
        // Invalid data, clear it
        localStorage.removeItem('sharmaJiAdded');
        localStorage.removeItem('sharmaJiLead');
    }
} else {
    // No valid data, ensure flags are cleared
    localStorage.removeItem('sharmaJiAdded');
    localStorage.removeItem('sharmaJiLead');
}

// Check for comment - only restore if valid
const savedCommentFlag = localStorage.getItem('firstCommentAdded');
const savedCommentData = localStorage.getItem('firstComment');

if (savedCommentFlag === 'true' && savedCommentData) {
    try {
        const parsed = JSON.parse(savedCommentData);
        // Verify it's actual saved comment, not default
        if (parsed && parsed.comment && parsed.businessName && parsed.comment.trim().length > 0) {
            firstCommentAdded = true;
            firstComment = parsed;
        } else {
            // Invalid comment, clear it
            localStorage.removeItem('firstCommentAdded');
            localStorage.removeItem('firstComment');
        }
    } catch (e) {
        // Invalid comment, clear it
        localStorage.removeItem('firstCommentAdded');
        localStorage.removeItem('firstComment');
    }
} else {
    // No valid comment, ensure flags are cleared
    localStorage.removeItem('firstCommentAdded');
    localStorage.removeItem('firstComment');
}

// ============================================
// MOCK DATA - Expanded Stalls (10+ per domain)
// ============================================

const mockStalls = [
    // AI & Robotics (10 stalls)
    { id: 1, name: "AI Innovations Lab", description: "Cutting-edge artificial intelligence solutions for businesses. Experience live demos of our latest AI models.", domains: ["AI & Robotics", "Technology"], icon: "🤖", likes: 142, visitors: 89 },
    { id: 2, name: "RoboTech Solutions", description: "Advanced robotics systems for industrial automation. See our robots in action.", domains: ["AI & Robotics", "Manufacturing"], icon: "🦾", likes: 98, visitors: 67 },
    { id: 3, name: "Neural Networks Pro", description: "Deep learning platforms and neural network architectures. Power your AI journey.", domains: ["AI & Robotics", "Technology"], icon: "🧠", likes: 156, visitors: 112 },
    { id: 4, name: "Autonomous Systems", description: "Self-driving technology and autonomous vehicle solutions. The future of transportation.", domains: ["AI & Robotics", "Technology"], icon: "🚗", likes: 203, visitors: 145 },
    { id: 5, name: "Machine Learning Hub", description: "ML tools and frameworks for data scientists. Build smarter applications.", domains: ["AI & Robotics", "Technology"], icon: "📊", likes: 127, visitors: 91 },
    { id: 6, name: "AI Vision Systems", description: "Computer vision and image recognition technology. See the world through AI eyes.", domains: ["AI & Robotics", "Technology"], icon: "👁️", likes: 89, visitors: 64 },
    { id: 7, name: "Robotic Process Automation", description: "RPA solutions to automate your business processes. Efficiency redefined.", domains: ["AI & Robotics", "Technology"], icon: "⚙️", likes: 134, visitors: 98 },
    { id: 8, name: "Cognitive Computing Lab", description: "Advanced cognitive systems that learn and adapt. Intelligence amplified.", domains: ["AI & Robotics", "Technology"], icon: "🔮", likes: 112, visitors: 78 },
    { id: 9, name: "AI Ethics & Governance", description: "Responsible AI development and ethical frameworks. Building trust in AI.", domains: ["AI & Robotics", "Technology"], icon: "⚖️", likes: 76, visitors: 52 },
    { id: 10, name: "Quantum AI Research", description: "Quantum computing meets artificial intelligence. Next-generation computing power.", domains: ["AI & Robotics", "Technology"], icon: "⚛️", likes: 189, visitors: 134 },
    
    // Food & Beverages (10 stalls)
    { id: 11, name: "Gourmet Delights", description: "Premium food and beverage experiences. Taste the future of culinary innovation.", domains: ["Food & Beverages"], icon: "🍽️", likes: 234, visitors: 178 },
    { id: 12, name: "Artisan Coffee Co.", description: "Specialty coffee from around the world. Experience the perfect brew.", domains: ["Food & Beverages"], icon: "☕", likes: 198, visitors: 156 },
    { id: 13, name: "Plant-Based Innovations", description: "Revolutionary plant-based food products. Delicious and sustainable.", domains: ["Food & Beverages"], icon: "🌱", likes: 167, visitors: 123 },
    { id: 14, name: "Craft Beer Experience", description: "Microbreweries and craft beer tastings. Discover unique flavors.", domains: ["Food & Beverages"], icon: "🍺", likes: 145, visitors: 109 },
    { id: 15, name: "Fusion Cuisine Lab", description: "Innovative fusion dishes combining global flavors. Culinary creativity unleashed.", domains: ["Food & Beverages"], icon: "🍜", likes: 178, visitors: 134 },
    { id: 16, name: "Organic Food Market", description: "Fresh organic produce and sustainable food options. Healthy choices made easy.", domains: ["Food & Beverages"], icon: "🥗", likes: 156, visitors: 118 },
    { id: 17, name: "Molecular Gastronomy", description: "Science meets cuisine. Experience food like never before.", domains: ["Food & Beverages"], icon: "🧪", likes: 134, visitors: 98 },
    { id: 18, name: "Street Food Revolution", description: "Authentic street food from around the world. Global flavors, local experience.", domains: ["Food & Beverages"], icon: "🌮", likes: 189, visitors: 145 },
    { id: 19, name: "Wine & Spirits Collection", description: "Premium wines and artisanal spirits. Taste excellence.", domains: ["Food & Beverages"], icon: "🍷", likes: 123, visitors: 89 },
    { id: 20, name: "Sustainable Food Systems", description: "Eco-friendly food production and zero-waste solutions. Future of food.", domains: ["Food & Beverages"], icon: "♻️", likes: 167, visitors: 125 },
    
    // Health & Wellness (10 stalls)
    { id: 21, name: "HealthTech Solutions", description: "Revolutionary health monitoring devices and wellness apps. Transform your health journey.", domains: ["Health & Wellness", "Technology"], icon: "💊", likes: 201, visitors: 156 },
    { id: 22, name: "Mindfulness & Meditation", description: "Digital wellness platforms for mental health. Find your inner peace.", domains: ["Health & Wellness"], icon: "🧘", likes: 178, visitors: 134 },
    { id: 23, name: "Fitness Tech Innovations", description: "Wearable fitness trackers and smart gym equipment. Your fitness companion.", domains: ["Health & Wellness", "Technology"], icon: "🏋️", likes: 189, visitors: 145 },
    { id: 24, name: "Holistic Wellness Center", description: "Integrative health approaches combining traditional and modern medicine.", domains: ["Health & Wellness"], icon: "🌿", likes: 145, visitors: 109 },
    { id: 25, name: "Telemedicine Platform", description: "Remote healthcare solutions and virtual consultations. Healthcare reimagined.", domains: ["Health & Wellness", "Technology"], icon: "🏥", likes: 167, visitors: 128 },
    { id: 26, name: "Nutrition Science Lab", description: "Personalized nutrition plans based on DNA and lifestyle. Eat smart.", domains: ["Health & Wellness"], icon: "🥑", likes: 134, visitors: 98 },
    { id: 27, name: "Sleep Technology", description: "Advanced sleep tracking and optimization devices. Rest better, live better.", domains: ["Health & Wellness", "Technology"], icon: "😴", likes: 156, visitors: 118 },
    { id: 28, name: "Mental Health Support", description: "AI-powered mental health apps and therapy platforms. Support when you need it.", domains: ["Health & Wellness", "Technology"], icon: "💚", likes: 178, visitors: 134 },
    { id: 29, name: "Preventive Care Solutions", description: "Early detection and prevention technologies. Stay ahead of health issues.", domains: ["Health & Wellness", "Technology"], icon: "🩺", likes: 123, visitors: 89 },
    { id: 30, name: "Wellness Retreat Experiences", description: "Digital wellness retreats and mindfulness programs. Recharge your life.", domains: ["Health & Wellness"], icon: "🏖️", likes: 145, visitors: 109 },
    
    // Technology (10 stalls)
    { id: 31, name: "Cloud Computing Solutions", description: "Scalable cloud infrastructure and services. Power your business in the cloud.", domains: ["Technology"], icon: "☁️", likes: 234, visitors: 189 },
    { id: 32, name: "Cybersecurity Experts", description: "Advanced security solutions to protect your digital assets. Stay secure.", domains: ["Technology"], icon: "🔒", likes: 201, visitors: 167 },
    { id: 33, name: "Blockchain Innovations", description: "Decentralized solutions and blockchain technology. The future of trust.", domains: ["Technology", "Finance & FinTech"], icon: "⛓️", likes: 267, visitors: 201 },
    { id: 34, name: "IoT Smart Solutions", description: "Internet of Things devices and smart home systems. Connect everything.", domains: ["Technology"], icon: "📡", likes: 189, visitors: 145 },
    { id: 35, name: "5G Network Technology", description: "Next-generation connectivity solutions. Ultra-fast, ultra-reliable.", domains: ["Technology"], icon: "📶", likes: 178, visitors: 134 },
    { id: 36, name: "Augmented Reality Lab", description: "AR experiences and applications. See the world differently.", domains: ["Technology", "Art & Design"], icon: "🥽", likes: 223, visitors: 178 },
    { id: 37, name: "Virtual Reality Experiences", description: "Immersive VR solutions for entertainment and business. Step into new worlds.", domains: ["Technology", "Art & Design"], icon: "🥽", likes: 245, visitors: 198 },
    { id: 38, name: "Edge Computing Platform", description: "Process data closer to the source. Faster, smarter, more efficient.", domains: ["Technology"], icon: "⚡", likes: 156, visitors: 118 },
    { id: 39, name: "DevOps Automation Tools", description: "Streamline your development workflow. Deploy faster, deploy better.", domains: ["Technology"], icon: "🚀", likes: 189, visitors: 145 },
    { id: 40, name: "API Integration Hub", description: "Connect your systems seamlessly. Integration made simple.", domains: ["Technology"], icon: "🔌", likes: 134, visitors: 98 },
    
    // Startups (10 stalls)
    { id: 41, name: "Startup Hub", description: "Connecting innovators and investors. Your gateway to the startup ecosystem.", domains: ["Startups", "Technology"], icon: "🚀", likes: 289, visitors: 234 },
    { id: 42, name: "Venture Capital Network", description: "Funding opportunities for promising startups. Fuel your growth.", domains: ["Startups", "Finance & FinTech"], icon: "💰", likes: 267, visitors: 201 },
    { id: 43, name: "Incubator Program", description: "Mentorship and resources for early-stage startups. Grow your idea.", domains: ["Startups"], icon: "🌱", likes: 223, visitors: 178 },
    { id: 44, name: "Pitch Perfect Platform", description: "Perfect your pitch and connect with investors. Make your mark.", domains: ["Startups"], icon: "🎤", likes: 178, visitors: 134 },
    { id: 45, name: "Startup Legal Services", description: "Legal support for startups. Navigate regulations with confidence.", domains: ["Startups"], icon: "⚖️", likes: 145, visitors: 109 },
    { id: 46, name: "Co-Working Spaces", description: "Flexible workspaces for growing teams. Work where innovation happens.", domains: ["Startups"], icon: "🏢", likes: 167, visitors: 125 },
    { id: 47, name: "Startup Marketing Agency", description: "Growth marketing strategies for startups. Scale your reach.", domains: ["Startups"], icon: "📈", likes: 189, visitors: 145 },
    { id: 48, name: "Tech Startup Accelerator", description: "Intensive programs to accelerate your tech startup. Fast-track success.", domains: ["Startups", "Technology"], icon: "⚡", likes: 245, visitors: 198 },
    { id: 49, name: "Startup Analytics Platform", description: "Data-driven insights for startup growth. Measure what matters.", domains: ["Startups", "Technology"], icon: "📊", likes: 156, visitors: 118 },
    { id: 50, name: "Founder Network", description: "Connect with fellow founders. Share experiences, grow together.", domains: ["Startups"], icon: "🤝", likes: 201, visitors: 156 },
    
    // Manufacturing (10 stalls)
    { id: 51, name: "Smart Manufacturing", description: "Industry 4.0 solutions for manufacturing excellence. Automation redefined.", domains: ["Manufacturing", "Technology", "AI & Robotics"], icon: "🏭", likes: 178, visitors: 134 },
    { id: 52, name: "3D Printing Solutions", description: "Advanced 3D printing technology for rapid prototyping. Create anything.", domains: ["Manufacturing", "Technology"], icon: "🖨️", likes: 189, visitors: 145 },
    { id: 53, name: "Supply Chain Optimization", description: "Streamline your supply chain with smart logistics. Efficiency maximized.", domains: ["Manufacturing"], icon: "📦", likes: 156, visitors: 118 },
    { id: 54, name: "Quality Control Systems", description: "Automated quality assurance and testing solutions. Excellence guaranteed.", domains: ["Manufacturing", "Technology"], icon: "✅", likes: 145, visitors: 109 },
    { id: 55, name: "Lean Manufacturing", description: "Waste reduction and process optimization. Do more with less.", domains: ["Manufacturing"], icon: "⚡", likes: 134, visitors: 98 },
    { id: 56, name: "Industrial IoT", description: "Connected manufacturing equipment and smart factories. Industry transformed.", domains: ["Manufacturing", "Technology"], icon: "🔧", likes: 167, visitors: 125 },
    { id: 57, name: "Predictive Maintenance", description: "AI-powered maintenance predictions. Prevent downtime, maximize uptime.", domains: ["Manufacturing", "AI & Robotics"], icon: "🔮", likes: 178, visitors: 134 },
    { id: 58, name: "Sustainable Manufacturing", description: "Eco-friendly production processes. Green manufacturing solutions.", domains: ["Manufacturing"], icon: "♻️", likes: 156, visitors: 118 },
    { id: 59, name: "Custom Manufacturing", description: "On-demand production and mass customization. Made for you.", domains: ["Manufacturing"], icon: "🎨", likes: 123, visitors: 89 },
    { id: 60, name: "Manufacturing Analytics", description: "Data-driven insights for production optimization. Smart decisions.", domains: ["Manufacturing", "Technology"], icon: "📊", likes: 145, visitors: 109 },
    
    // Education (10 stalls)
    { id: 61, name: "EduTech Platform", description: "Interactive learning solutions for modern classrooms. Empower educators and students.", domains: ["Education", "Technology"], icon: "📚", likes: 234, visitors: 189 },
    { id: 62, name: "Online Learning Academy", description: "Comprehensive online courses and certifications. Learn anywhere, anytime.", domains: ["Education", "Technology"], icon: "💻", likes: 267, visitors: 223 },
    { id: 63, name: "Virtual Classrooms", description: "Immersive virtual learning environments. Education without boundaries.", domains: ["Education", "Technology"], icon: "🏫", likes: 201, visitors: 167 },
    { id: 64, name: "Student Assessment Tools", description: "AI-powered assessment and grading systems. Fair, fast, accurate.", domains: ["Education", "Technology", "AI & Robotics"], icon: "📝", likes: 178, visitors: 134 },
    { id: 65, name: "Language Learning App", description: "Interactive language learning with AI tutors. Speak fluently faster.", domains: ["Education", "Technology"], icon: "🗣️", likes: 223, visitors: 178 },
    { id: 66, name: "STEM Education Lab", description: "Hands-on STEM learning experiences. Inspire the next generation.", domains: ["Education"], icon: "🔬", likes: 189, visitors: 145 },
    { id: 67, name: "Corporate Training Solutions", description: "Professional development and skills training. Upskill your workforce.", domains: ["Education"], icon: "👔", likes: 167, visitors: 125 },
    { id: 68, name: "Educational Games", description: "Gamified learning experiences. Learn through play.", domains: ["Education", "Technology"], icon: "🎮", likes: 245, visitors: 198 },
    { id: 69, name: "Accessibility in Education", description: "Inclusive learning tools for all students. Education for everyone.", domains: ["Education", "Technology"], icon: "♿", likes: 145, visitors: 109 },
    { id: 70, name: "Research Collaboration Platform", description: "Connect researchers and share knowledge. Advance science together.", domains: ["Education", "Technology"], icon: "🔬", likes: 156, visitors: 118 },
    
    // Finance & FinTech (10 stalls)
    { id: 71, name: "FinTech Revolution", description: "Next-generation financial technology platforms. Secure, fast, innovative payments.", domains: ["Finance & FinTech", "Technology", "Startups"], icon: "💳", likes: 289, visitors: 245 },
    { id: 72, name: "Cryptocurrency Exchange", description: "Secure crypto trading platform. Trade with confidence.", domains: ["Finance & FinTech", "Technology"], icon: "₿", likes: 334, visitors: 289 },
    { id: 73, name: "Digital Banking Solutions", description: "Modern banking apps and services. Bank on your terms.", domains: ["Finance & FinTech", "Technology"], icon: "🏦", likes: 267, visitors: 223 },
    { id: 74, name: "Investment Analytics", description: "AI-powered investment insights and portfolio management. Invest smarter.", domains: ["Finance & FinTech", "Technology", "AI & Robotics"], icon: "📈", likes: 245, visitors: 198 },
    { id: 75, name: "Payment Gateway", description: "Seamless payment processing solutions. Accept payments anywhere.", domains: ["Finance & FinTech", "Technology"], icon: "💸", likes: 223, visitors: 178 },
    { id: 76, name: "Personal Finance App", description: "Budget tracking and financial planning tools. Take control of your money.", domains: ["Finance & FinTech", "Technology"], icon: "💰", likes: 267, visitors: 223 },
    { id: 77, name: "InsurTech Solutions", description: "Innovative insurance technology. Protect what matters most.", domains: ["Finance & FinTech", "Technology"], icon: "🛡️", likes: 189, visitors: 145 },
    { id: 78, name: "Lending Platform", description: "Peer-to-peer lending and loan solutions. Access capital easily.", domains: ["Finance & FinTech", "Technology"], icon: "📊", likes: 201, visitors: 167 },
    { id: 79, name: "RegTech Compliance", description: "Regulatory technology for financial compliance. Stay compliant, stay ahead.", domains: ["Finance & FinTech", "Technology"], icon: "⚖️", likes: 156, visitors: 118 },
    { id: 80, name: "Wealth Management", description: "Robo-advisors and automated wealth management. Grow your wealth.", domains: ["Finance & FinTech", "Technology", "AI & Robotics"], icon: "💎", likes: 223, visitors: 178 },
    
    // Art & Design (10 stalls)
    { id: 81, name: "Digital Art Gallery", description: "Immersive digital art experiences and NFT collections. Where creativity meets technology.", domains: ["Art & Design", "Technology"], icon: "🎨", likes: 312, visitors: 267 },
    { id: 82, name: "3D Design Studio", description: "Cutting-edge 3D modeling and animation tools. Bring ideas to life.", domains: ["Art & Design", "Technology"], icon: "🎭", likes: 245, visitors: 198 },
    { id: 83, name: "Graphic Design Tools", description: "Professional design software and creative suites. Design without limits.", domains: ["Art & Design", "Technology"], icon: "🖼️", likes: 223, visitors: 178 },
    { id: 84, name: "Virtual Art Exhibitions", description: "Experience art in virtual reality. Museums reimagined.", domains: ["Art & Design", "Technology"], icon: "🖼️", likes: 267, visitors: 223 },
    { id: 85, name: "Fashion Tech Innovations", description: "Smart fabrics and wearable technology. Fashion meets function.", domains: ["Art & Design", "Technology"], icon: "👗", likes: 201, visitors: 167 },
    { id: 86, name: "Architecture Visualization", description: "3D architectural rendering and visualization. See before you build.", domains: ["Art & Design", "Technology"], icon: "🏛️", likes: 189, visitors: 145 },
    { id: 87, name: "Music Production Studio", description: "Digital audio workstations and music tech. Create the next hit.", domains: ["Art & Design", "Technology"], icon: "🎵", likes: 234, visitors: 189 },
    { id: 88, name: "Photography Tech", description: "Advanced camera systems and photo editing tools. Capture perfection.", domains: ["Art & Design", "Technology"], icon: "📷", likes: 178, visitors: 134 },
    { id: 89, name: "UI/UX Design Agency", description: "User experience design and interface development. Design that converts.", domains: ["Art & Design", "Technology"], icon: "🎯", likes: 245, visitors: 198 },
    { id: 90, name: "Creative AI Tools", description: "AI-powered creative tools for artists. Augment your creativity.", domains: ["Art & Design", "Technology", "AI & Robotics"], icon: "✨", likes: 289, visitors: 245 }
];

const mockLeads = [
    { name: "Sarah Johnson", email: "sarah.j@email.com", interests: ["AI & Robotics", "Technology", "Startups"], time: "2 hours ago" },
    { name: "Michael Chen", email: "m.chen@email.com", interests: ["Health & Wellness", "Technology"], time: "5 hours ago" },
    { name: "Emily Rodriguez", email: "emily.r@email.com", interests: ["Finance & FinTech", "Startups"], time: "1 day ago" },
    { name: "David Kim", email: "david.kim@email.com", interests: ["Art & Design", "Technology"], time: "1 day ago" },
    { name: "Lisa Anderson", email: "lisa.a@email.com", interests: ["Education", "Technology"], time: "2 days ago" },
    { name: "James Wilson", email: "j.wilson@email.com", interests: ["Manufacturing", "Technology"], time: "2 days ago" },
    { name: "Maria Garcia", email: "m.garcia@email.com", interests: ["Food & Beverages"], time: "3 days ago" },
    { name: "Robert Taylor", email: "r.taylor@email.com", interests: ["AI & Robotics", "Technology"], time: "3 days ago" },
    { name: "Jennifer Brown", email: "j.brown@email.com", interests: ["Health & Wellness"], time: "4 days ago" },
    { name: "William Davis", email: "w.davis@email.com", interests: ["Finance & FinTech", "Technology"], time: "4 days ago" },
    { name: "Patricia Martinez", email: "p.martinez@email.com", interests: ["Startups", "Technology"], time: "5 days ago" },
    { name: "Christopher Lee", email: "c.lee@email.com", interests: ["Art & Design"], time: "5 days ago" }
];

// Restore sharma ji to mockLeads array ONLY if it was actually saved
if (sharmaJiAdded && savedSharmaJiData) {
    try {
        const savedSharmaJi = JSON.parse(savedSharmaJiData);
        // Check if sharma ji is already in the array (to avoid duplicates)
        const sharmaJiExists = mockLeads.some(lead => lead.name === 'sharma ji' && lead.email === 'sharmaji@gmail.com');
        if (!sharmaJiExists && savedSharmaJi && savedSharmaJi.name === 'sharma ji') {
            mockLeads.push(savedSharmaJi);
            console.log('✅ Restored sharma ji to mockLeads (from valid saved data)');
        }
    } catch (e) {
        console.error('Error restoring sharma ji:', e);
    }
}

// ============================================
// STATE MANAGEMENT
// ============================================

let selectedInterests = [];
let upvotedStalls = JSON.parse(localStorage.getItem('upvotedStalls')) || [];
let currentSort = 'relevance';
let stallLikes = JSON.parse(localStorage.getItem('stallLikes')) || {};

// Initialize likes from localStorage or use default
mockStalls.forEach(stall => {
    if (!stallLikes[stall.id]) {
        stallLikes[stall.id] = stall.likes;
    }
});

// ============================================
// MODE SWITCHING
// ============================================

const userModeBtn = document.getElementById('userModeBtn');
const ownerModeBtn = document.getElementById('ownerModeBtn');
const userMode = document.getElementById('userMode');
const ownerMode = document.getElementById('ownerMode');

userModeBtn.addEventListener('click', () => switchMode('user'));
ownerModeBtn.addEventListener('click', () => switchMode('owner'));

function switchMode(mode) {
    if (mode === 'user') {
        userModeBtn.classList.add('active');
        ownerModeBtn.classList.remove('active');
        userMode.classList.add('active');
        ownerMode.classList.remove('active');
    } else {
        ownerModeBtn.classList.add('active');
        userModeBtn.classList.remove('active');
        ownerMode.classList.add('active');
        userMode.classList.remove('active');
        // Update comments display when switching to owner mode
        updateCommentsDisplay();
        // Refresh leads table when switching to owner mode
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
            populateLeadsTable();
        }, 50);
    }
}

// ============================================
// INTEREST SELECTION (USER MODE)
// ============================================

const interestsGrid = document.getElementById('interestsGrid');
const interestTags = interestsGrid.querySelectorAll('.interest-tag');

interestTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const interest = tag.dataset.interest;
        tag.classList.toggle('selected');
        
        if (tag.classList.contains('selected')) {
            selectedInterests.push(interest);
        } else {
            selectedInterests = selectedInterests.filter(i => i !== interest);
        }
        
        updateStallsDisplay();
        updateHeatMap();
    });
});

// ============================================
// HEAT MAP
// ============================================

const heatmapContainer = document.getElementById('heatmapContainer');

function updateHeatMap() {
    heatmapContainer.innerHTML = '';
    
    // Get top 12 stalls by visitors
    const sortedStalls = [...mockStalls].sort((a, b) => {
        const visitorsA = stallLikes[a.id] ? a.visitors + Math.floor(stallLikes[a.id] / 10) : a.visitors;
        const visitorsB = stallLikes[b.id] ? b.visitors + Math.floor(stallLikes[b.id] / 10) : b.visitors;
        return visitorsB - visitorsA;
    }).slice(0, 12);
    
    sortedStalls.forEach(stall => {
        const visitors = stallLikes[stall.id] ? stall.visitors + Math.floor(stallLikes[stall.id] / 10) : stall.visitors;
        let heatLevel = 'very-low';
        
        if (visitors >= 200) heatLevel = 'high';
        else if (visitors >= 150) heatLevel = 'medium';
        else if (visitors >= 100) heatLevel = 'low';
        
        const heatItem = document.createElement('div');
        heatItem.className = `heatmap-item ${heatLevel}`;
        heatItem.innerHTML = `
            <div class="heatmap-stall-name">${stall.name}</div>
            <div class="heatmap-visitor-count">${visitors}</div>
            <div class="heatmap-visitor-label">visitors</div>
        `;
        
        heatmapContainer.appendChild(heatItem);
    });
}

// Initialize heat map
updateHeatMap();

// ============================================
// STALLS DISPLAY
// ============================================

const stallsGrid = document.getElementById('stallsGrid');
const sortButtons = document.querySelectorAll('.sort-btn');

sortButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        sortButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentSort = btn.dataset.sort;
        updateStallsDisplay();
    });
});

function updateStallsDisplay() {
    stallsGrid.innerHTML = '';
    
    let filteredStalls = [...mockStalls];
    
    if (selectedInterests.length > 0) {
        const interestToDomain = {
            'ai-robotics': 'AI & Robotics',
            'food-beverages': 'Food & Beverages',
            'health-wellness': 'Health & Wellness',
            'technology': 'Technology',
            'startups': 'Startups',
            'manufacturing': 'Manufacturing',
            'education': 'Education',
            'finance-fintech': 'Finance & FinTech',
            'art-design': 'Art & Design'
        };
        
        const selectedDomainNames = selectedInterests.map(i => interestToDomain[i]);
        
        filteredStalls = mockStalls.filter(stall => 
            stall.domains.some(domain => selectedDomainNames.includes(domain))
        );
    }
    
    // Sort stalls
    if (currentSort === 'popularity') {
        // Sort by likes (descending - highest likes first)
        filteredStalls.sort((a, b) => {
            const likesA = stallLikes[a.id] || a.likes || 0;
            const likesB = stallLikes[b.id] || b.likes || 0;
            return likesB - likesA; // Higher likes come first
        });
    } else if (currentSort === 'relevance') {
        // For relevance, also consider likes as a factor (higher likes = more relevant)
        filteredStalls.sort((a, b) => {
            const likesA = stallLikes[a.id] || a.likes || 0;
            const likesB = stallLikes[b.id] || b.likes || 0;
            // Sort by likes first, then by original order
            if (likesB !== likesA) {
                return likesB - likesA; // Higher likes come first
            }
            return 0; // Maintain original order if likes are equal
        });
    }
    
    if (filteredStalls.length === 0) {
        stallsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <p style="font-size: 1.2rem;">No stalls match your selected interests. Try selecting different interests!</p>
            </div>
        `;
        return;
    }
    
    filteredStalls.forEach(stall => {
        const stallCard = createStallCard(stall);
        stallsGrid.appendChild(stallCard);
    });
}

function createStallCard(stall) {
    const card = document.createElement('div');
    card.className = 'stall-card';
    
    const domainsHTML = stall.domains.map(domain => 
        `<span class="domain-chip">${domain}</span>`
    ).join('');
    
    const currentLikes = stallLikes[stall.id] || stall.likes;
    const isUpvoted = upvotedStalls.includes(stall.id);
    
    card.innerHTML = `
        <div class="stall-header">
            <div class="stall-icon">${stall.icon}</div>
            <h3 class="stall-name">${stall.name}</h3>
        </div>
        <p class="stall-description">${stall.description}</p>
        <div class="stall-footer">
            <div class="stall-domains">
                ${domainsHTML}
            </div>
            <div class="stall-actions">
                <button class="upvote-btn ${isUpvoted ? 'upvoted' : ''}" data-stall-id="${stall.id}">
                    <span class="upvote-icon">👍</span>
                    <span class="upvote-count">${currentLikes}</span>
                </button>
                <button class="comment-btn" data-stall-id="${stall.id}" data-stall-name="${stall.name}">
                    <span class="comment-icon">💬</span>
                    <span>Comment</span>
                </button>
            </div>
        </div>
    `;
    
    // Add upvote functionality
    const upvoteBtn = card.querySelector('.upvote-btn');
    upvoteBtn.addEventListener('click', () => {
        const stallId = parseInt(upvoteBtn.dataset.stallId);
        const isUpvoted = upvotedStalls.includes(stallId);
        
        if (isUpvoted) {
            upvotedStalls = upvotedStalls.filter(id => id !== stallId);
            stallLikes[stallId] = (stallLikes[stallId] || mockStalls.find(s => s.id === stallId).likes) - 1;
            upvoteBtn.classList.remove('upvoted');
        } else {
            upvotedStalls.push(stallId);
            stallLikes[stallId] = (stallLikes[stallId] || mockStalls.find(s => s.id === stallId).likes) + 1;
            upvoteBtn.classList.add('upvoted');
        }
        
        // Update the like count display
        upvoteBtn.querySelector('.upvote-count').textContent = stallLikes[stallId];
        
        // Save to localStorage
        localStorage.setItem('upvotedStalls', JSON.stringify(upvotedStalls));
        localStorage.setItem('stallLikes', JSON.stringify(stallLikes));
        
        // Update heat map
        updateHeatMap();
        
        // Always re-sort and update display to show items with more likes higher
        // This ensures the list updates immediately when likes change
        updateStallsDisplay();
    });
    
    // Add comment functionality
    const commentBtn = card.querySelector('.comment-btn');
    commentBtn.addEventListener('click', () => {
        const stallId = parseInt(commentBtn.dataset.stallId);
        const stallName = commentBtn.dataset.stallName;
        openCommentModal(stallId, stallName);
    });
    
    return card;
}

// Initialize stalls display
updateStallsDisplay();

// ============================================
// QR SCAN MODAL
// ============================================

const scanQRBtn = document.getElementById('scanQRBtn');
const qrModal = document.getElementById('qrModal');
const closeModal = document.getElementById('closeModal');
const visitorForm = document.getElementById('visitorForm');
const selectedInterestsDisplay = document.getElementById('selectedInterestsDisplay');

// Camera QR Scan
const cameraModal = document.getElementById('cameraModal');
const closeCameraModal = document.getElementById('closeCameraModal');
const stopCameraBtn = document.getElementById('stopCameraBtn');
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
let stream = null;
let scanning = false;

scanQRBtn.addEventListener('click', () => {
    startCameraScan();
});

closeCameraModal.addEventListener('click', () => {
    stopCamera();
});

stopCameraBtn.addEventListener('click', () => {
    stopCamera();
});

cameraModal.addEventListener('click', (e) => {
    if (e.target === cameraModal) {
        stopCamera();
    }
});

function startCameraScan() {
    cameraModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Request camera access
    navigator.mediaDevices.getUserMedia({ 
        video: { 
            facingMode: 'environment', // Use back camera on mobile
            width: { ideal: 1280 },
            height: { ideal: 720 }
        } 
    })
    .then(mediaStream => {
        stream = mediaStream;
        video.srcObject = stream;
        video.setAttribute('playsinline', true);
        stopCameraBtn.style.display = 'block';
        
        // Wait for video to be ready before starting scan
        video.onloadedmetadata = () => {
            video.play().then(() => {
                scanning = true;
                scanQRCode();
            }).catch(err => {
                console.error('Error playing video:', err);
            });
        };
    })
    .catch(err => {
        console.error('Error accessing camera:', err);
        // Silently close the modal if camera access fails
        cameraModal.classList.remove('active');
        document.body.style.overflow = '';
        // Optionally show a subtle error message in the UI instead of alert
        showCameraError();
    });
}

function stopCamera() {
    scanning = false;
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
    }
    if (video.srcObject) {
        video.srcObject = null;
    }
    cameraModal.classList.remove('active');
    document.body.style.overflow = '';
    stopCameraBtn.style.display = 'none';
}

function scanQRCode() {
    if (!scanning || !video.videoWidth) {
        return;
    }

    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    
    if (typeof jsQR !== 'undefined') {
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: 'dontInvert',
        });

        if (code) {
            // QR code detected!
            stopCamera();
            handleQRCodeScanned(code.data);
            return;
        }
    }

    // Continue scanning
    if (scanning) {
        requestAnimationFrame(scanQRCode);
    }
}

function handleQRCodeScanned(qrData) {
    // Close camera modal
    stopCamera();
    
    console.log('=== QR CODE SCANNED ===');
    console.log('Raw QR data:', qrData);
    
    // Alternate between QR1 and QR2 based on scan count (no recognition needed)
    scanCount++;
    const isEven = scanCount % 2 === 0;
    const qrKey = isEven ? 'QR_CODE_2' : 'QR_CODE_1';
    const matchedQR = qrCodeRepository[qrKey];
    
    console.log(`Scan #${scanCount} - Showing: ${qrKey} (${matchedQR.businessName})`);
    
    // Open the associated picture/info
    openQRInfoPage(matchedQR);
}

function findQRInRepository(qrData) {
    // Check if scanned QR data matches any QR code in repository
    const originalData = qrData.trim();
    const normalizedData = originalData.toLowerCase().trim();
    
    // Log for debugging - you can see what text was scanned
    console.log('=== FINDING QR IN REPOSITORY ===');
    console.log('Original QR data:', originalData);
    console.log('Normalized QR data:', normalizedData);
    
    // SIMPLIFIED MATCHING: Match by any occurrence of "1" or "2" or "qr1"/"qr2"
    // This is more flexible and will catch most variations
    
    // Check for QR1 first (more specific matches first)
    const qr1Matches = [
        normalizedData.includes('qr1'),
        normalizedData.includes('qr_code_1'),
        normalizedData.includes('techstart'),
        normalizedData === 'qr1',
        normalizedData === '1',
        /^1[^0-9]/.test(normalizedData), // Starts with 1
        /[^0-9]1$/.test(normalizedData), // Ends with 1
        /[^0-9]1[^0-9]/.test(normalizedData), // Contains standalone 1
        originalData.includes('QR1'),
        originalData.includes('QR_CODE_1')
    ];
    
    // Check for QR2
    const qr2Matches = [
        normalizedData.includes('qr2'),
        normalizedData.includes('qr_code_2'),
        normalizedData.includes('healthtech'),
        normalizedData === 'qr2',
        normalizedData === '2',
        /^2[^0-9]/.test(normalizedData), // Starts with 2
        /[^0-9]2$/.test(normalizedData), // Ends with 2
        /[^0-9]2[^0-9]/.test(normalizedData), // Contains standalone 2
        originalData.includes('QR2'),
        originalData.includes('QR_CODE_2')
    ];
    
    // If QR2 matches are found, return QR2 (check QR2 first to avoid conflicts)
    if (qr2Matches.some(match => match === true)) {
        console.log('✓ MATCHED QR_CODE_2 (QR2)');
        return qrCodeRepository['QR_CODE_2'];
    }
    
    // If QR1 matches are found, return QR1
    if (qr1Matches.some(match => match === true)) {
        console.log('✓ MATCHED QR_CODE_1 (QR1)');
        return qrCodeRepository['QR_CODE_1'];
    }
    
    // Fallback: Try exact match with repository qrData
    for (const key in qrCodeRepository) {
        const qrInfo = qrCodeRepository[key];
        if (normalizedData === qrInfo.qrData.toLowerCase() || 
            originalData === qrInfo.qrData ||
            normalizedData.includes(qrInfo.qrData.toLowerCase()) ||
            normalizedData.includes(qrInfo.businessName.toLowerCase())) {
            console.log('✓ MATCHED by repository data:', key);
            return qrInfo;
        }
    }
    
    console.log('✗ No match found for QR data:', originalData);
    console.log('Available QR codes:', Object.keys(qrCodeRepository));
    console.log('Tip: Make sure your QR code contains "QR1", "QR2", "1", or "2" in the text');
    
    // LAST RESORT: If nothing matches, assume first QR code is QR1
    // This is a fallback - you should update your QR codes to contain identifiable text
    console.log('⚠️ Using fallback: Assuming first scanned QR is QR1');
    return qrCodeRepository['QR_CODE_1'];
}

function openQRInfoPage(qrInfo) {
    console.log('Opening QR info page for:', qrInfo);
    
    // Create and show the info page modal
    let infoModal = document.getElementById('qrInfoModal');
    if (!infoModal) {
        createQRInfoModal();
        // Wait a bit for DOM to update
        setTimeout(() => {
            infoModal = document.getElementById('qrInfoModal');
            if (infoModal) {
                populateQRInfoModal(qrInfo, infoModal);
            }
        }, 100);
    } else {
        populateQRInfoModal(qrInfo, infoModal);
    }
}

function populateQRInfoModal(qrInfo, modal) {
    const img = document.getElementById('qrInfoImage');
    const businessName = document.getElementById('qrInfoBusinessName');
    const description = document.getElementById('qrInfoDescription');
    const saveBtn = document.getElementById('saveQRInfoBtn');
    const shareBtn = document.getElementById('shareQRInfoBtn');
    
    console.log('Populating modal with:', qrInfo);
    
    if (!img) {
        console.error('❌ Image element not found!');
        return;
    }
    if (!businessName) {
        console.error('❌ Business name element not found!');
        return;
    }
    if (!description) {
        console.error('❌ Description element not found!');
        return;
    }
    if (!saveBtn) {
        console.error('❌ Save button not found!');
        return;
    }
    if (!shareBtn) {
        console.error('❌ Share button not found!');
        return;
    }
    
    console.log('✅ All elements found, setting data...');
    
    // Set the data
    console.log('Setting image src to:', qrInfo.imageUrl);
    img.src = qrInfo.imageUrl;
    img.alt = qrInfo.businessName;
    
    // Handle image load error
    img.onerror = function() {
        console.error('❌ Image failed to load:', qrInfo.imageUrl);
        console.error('Make sure the file exists in the root directory');
        this.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect width=\'400\' height=\'300\' fill=\'%23ddd\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'.3em\' fill=\'%23999\'%3EImage not found: ' + qrInfo.imageUrl + '%3C/text%3E%3C/svg%3E';
    };
    
    img.onload = function() {
        console.log('✅ Image loaded successfully:', qrInfo.imageUrl);
    };
    
    businessName.textContent = qrInfo.businessName;
    description.textContent = qrInfo.description;
    
    console.log('Business name set to:', qrInfo.businessName);
    console.log('Description set to:', qrInfo.description);
    
    // Store current QR info for save/share actions
    saveBtn.dataset.qrId = qrInfo.id;
    shareBtn.dataset.qrId = qrInfo.id;
    
    // Check if already saved
    const isSaved = savedLeads.some(lead => lead.qrId === qrInfo.id);
    if (isSaved) {
        saveBtn.textContent = '✓ Saved';
        saveBtn.classList.add('saved');
    } else {
        saveBtn.textContent = 'Save';
        saveBtn.classList.remove('saved');
    }
    
    // Show modal
    console.log('Showing modal...');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    console.log('✅ Modal should be visible now');
    console.log('Modal classes:', modal.className);
}

function showQRScanSuccess(data) {
    // Show a brief success message
    const successMsg = document.createElement('div');
    successMsg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(20, 20, 35, 0.95);
        backdrop-filter: blur(20px);
        color: white;
        padding: 2rem 3rem;
        border-radius: 1rem;
        z-index: 10000;
        font-size: 1rem;
        box-shadow: 0 0 50px rgba(139, 92, 246, 0.5);
        border: 1px solid rgba(139, 92, 246, 0.3);
        text-align: center;
        max-width: 400px;
    `;
    successMsg.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 1rem;">✓</div>
        <div style="margin-bottom: 0.5rem; font-weight: 600;">QR Code Scanned</div>
        <div style="color: #A0A0B8; font-size: 0.9rem; word-break: break-all;">${data}</div>
    `;
    document.body.appendChild(successMsg);
    
    setTimeout(() => {
        successMsg.style.opacity = '0';
        successMsg.style.transition = 'opacity 0.3s';
        setTimeout(() => successMsg.remove(), 300);
    }, 2000);
}

function createQRInfoModal() {
    // Create the QR info modal if it doesn't exist
    const modal = document.createElement('div');
    modal.id = 'qrInfoModal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content qr-info-modal">
            <button class="modal-close" id="closeQRInfoModal">&times;</button>
            <div class="qr-info-content">
                <img id="qrInfoImage" src="" alt="QR Info" class="qr-info-image">
                <div class="qr-info-details">
                    <h2 id="qrInfoBusinessName" class="qr-info-business-name"></h2>
                    <p id="qrInfoDescription" class="qr-info-description"></p>
                </div>
                <div class="qr-info-actions">
                    <button class="save-qr-btn" id="saveQRInfoBtn">Save</button>
                    <button class="share-qr-btn" id="shareQRInfoBtn">Share Info</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Add event listeners
    document.getElementById('closeQRInfoModal').addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Save button handler
    document.getElementById('saveQRInfoBtn').addEventListener('click', handleSaveQRInfo);
    
    // Share button handler
    document.getElementById('shareQRInfoBtn').addEventListener('click', handleShareQRInfo);
}

function handleSaveQRInfo(e) {
    const qrId = e.target.dataset.qrId;
    const qrInfo = qrCodeRepository[qrId];
    
    if (!qrInfo) return;
    
    // Check if already saved
    const existingIndex = savedLeads.findIndex(lead => lead.qrId === qrId);
    
    if (existingIndex === -1) {
        // Add to saved leads
        const savedLead = {
            qrId: qrId,
            businessName: qrInfo.businessName,
            description: qrInfo.description,
            category: qrInfo.category,
            imageUrl: qrInfo.imageUrl,
            savedAt: new Date().toISOString()
        };
        savedLeads.push(savedLead);
        localStorage.setItem('savedLeads', JSON.stringify(savedLeads));
        
        e.target.textContent = '✓ Saved';
        e.target.classList.add('saved');
        
        // Update saved leads display
        updateSavedLeadsDisplay();
        
        showNotification('Saved to your leads!', 'success');
        
        // After saving, ask if user wants to share
        setTimeout(() => {
            askToShareInfo(qrInfo);
        }, 500);
    } else {
        // Remove from saved leads
        savedLeads.splice(existingIndex, 1);
        localStorage.setItem('savedLeads', JSON.stringify(savedLeads));
        
        e.target.textContent = 'Save';
        e.target.classList.remove('saved');
        
        updateSavedLeadsDisplay();
        showNotification('Removed from saved leads', 'info');
    }
}

function askToShareInfo(qrInfo) {
    console.log('Asking to share info for:', qrInfo);
    
    // Close the QR info modal first if it's open
    const qrInfoModal = document.getElementById('qrInfoModal');
    if (qrInfoModal && qrInfoModal.classList.contains('active')) {
        qrInfoModal.classList.remove('active');
    }
    
    // Show confirmation dialog
    const shareModal = document.createElement('div');
    shareModal.id = 'shareInfoModal';
    shareModal.className = 'modal-overlay';
    shareModal.style.cssText = 'display: flex; opacity: 1; z-index: 3000;';
    shareModal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <h2 class="modal-title">Share Info?</h2>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Can I share the info with the business owner?</p>
            <div class="form-group" style="margin-bottom: 1.5rem;">
                <label for="shareComment" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-primary);">Add a Comment (Optional)</label>
                <textarea id="shareComment" placeholder="Write your comment here..." style="width: 100%; padding: 1rem; background: rgba(10, 10, 15, 0.6); border: 1px solid var(--card-border); border-radius: 0.75rem; color: var(--text-primary); font-size: 1rem; font-family: inherit; resize: vertical; min-height: 100px;"></textarea>
            </div>
            <div style="display: flex; gap: 1rem;">
                <button class="glow-button" id="confirmShareBtn" style="flex: 1;">Yes</button>
                <button class="glow-button" id="cancelShareBtn" style="flex: 1; background: rgba(139, 92, 246, 0.2); border: 1px solid var(--primary-purple); color: var(--primary-purple);">No</button>
            </div>
        </div>
    `;
    document.body.appendChild(shareModal);
    
    // Add active class for animation
    setTimeout(() => {
        shareModal.classList.add('active');
    }, 10);
    
    document.getElementById('confirmShareBtn').addEventListener('click', () => {
        console.log('User clicked Yes to share');
        const commentText = document.getElementById('shareComment').value.trim();
        shareModal.remove();
        document.body.style.overflow = '';
        
        // Proceed with sharing (pass comment if provided)
        shareQRInfoToOwner(qrInfo, commentText);
    });
    
    document.getElementById('cancelShareBtn').addEventListener('click', () => {
        console.log('User clicked No to share');
        shareModal.remove();
        document.body.style.overflow = '';
    });
    
    shareModal.addEventListener('click', (e) => {
        if (e.target === shareModal) {
            shareModal.remove();
            document.body.style.overflow = '';
        }
    });
    
    document.body.style.overflow = 'hidden';
    
    console.log('Share modal should be visible now');
}

function shareQRInfoToOwner(qrInfo, commentText = '') {
    console.log('=== SHARING QR INFO TO OWNER ===');
    console.log('QR Info:', qrInfo);
    console.log('sharmaJiAdded:', sharmaJiAdded);
    console.log('firstCommentAdded:', firstCommentAdded);
    console.log('Comment provided:', commentText);
    
    let isFirstComment = false;
    let isFirstShare = !sharmaJiAdded;
    
    // Handle comment FIRST (independent of sharma ji)
    if (commentText) {
        if (!firstCommentAdded) {
            // First comment - store it
            console.log('Storing first comment');
            firstComment = {
                comment: commentText,
                businessName: qrInfo.businessName,
                timestamp: new Date().toISOString()
            };
            firstCommentAdded = true;
            isFirstComment = true;
            localStorage.setItem('firstComment', JSON.stringify(firstComment));
            localStorage.setItem('firstCommentAdded', JSON.stringify(true));
            
            // Update comments display if in owner mode
            if (ownerMode && ownerMode.classList.contains('active')) {
                updateCommentsDisplay();
            }
        } else {
            // Subsequent comments - just show message, don't store
            console.log('Comment received but not stored (first comment already exists)');
        }
    }
    
    // Handle sharma ji lead (independent of comment)
    if (!sharmaJiAdded) {
        // First time - Add to owner mode leads with specific details
        console.log('Adding sharma ji to leads list');
        const sharedLead = {
            name: 'sharma ji',
            email: 'sharmaji@gmail.com',
            interests: ['Food & Beverages', 'Finance & FinTech'],
            time: 'Just now',
            qrId: qrInfo.id,
            businessName: qrInfo.businessName,
            sharedAt: new Date().toISOString()
        };
        
        // Check if sharma ji already exists (to avoid duplicates)
        const sharmaJiExists = mockLeads.some(lead => lead.name === 'sharma ji' && lead.email === 'sharmaji@gmail.com');
        if (!sharmaJiExists) {
            // Add to mock leads at the END (last position)
            mockLeads.push(sharedLead);
            
            console.log('✅ Added sharma ji to mockLeads');
            console.log('Total leads now:', mockLeads.length);
            console.log('Last lead:', mockLeads[mockLeads.length - 1]);
            console.log('All leads:', mockLeads);
        } else {
            console.log('⚠️ sharma ji already exists in mockLeads, skipping duplicate');
        }
        
        // Mark as added and save the lead data
        sharmaJiAdded = true;
        localStorage.setItem('sharmaJiAdded', JSON.stringify(true));
        localStorage.setItem('sharmaJiLead', JSON.stringify(sharedLead));
        
        // Always update leads table - force update
        // Get the table body element (it might not be in DOM yet if not in owner mode)
        const tableBody = document.getElementById('leadsTableBody');
        if (tableBody) {
            console.log('Updating leads table...');
            // Use the global leadsTableBody if available, otherwise use the one we just got
            populateLeadsTable('all'); // Force refresh with 'all' filter
            console.log('✅ Leads table updated');
        } else {
            console.warn('⚠️ Leads table body not found in DOM (might not be in owner mode yet)');
            console.log('sharma ji will appear when you switch to owner mode');
        }
        
        // Also check if we need to update when switching to owner mode
        console.log('sharmaJiAdded flag set to:', sharmaJiAdded);
    } else {
        console.log('sharma ji already added, skipping');
    }
    
    // Show appropriate notification
    if (isFirstShare && isFirstComment) {
        showNotification('Info and comment shared with business owner!', 'success');
    } else if (isFirstShare && !commentText) {
        showNotification('Info shared with business owner!', 'success');
    } else if (!isFirstShare && commentText) {
        showNotification('Comment sent to owner', 'success');
    } else {
        showNotification('Sent to owner', 'success');
    }
}

function handleShareQRInfo(e) {
    const qrId = e.target.dataset.qrId;
    const qrInfo = qrCodeRepository[qrId];
    
    if (!qrInfo) return;
    
    // Show confirmation dialog
    const shareModal = document.createElement('div');
    shareModal.className = 'modal-overlay';
    shareModal.style.display = 'flex';
    shareModal.innerHTML = `
        <div class="modal-content" style="max-width: 400px;">
            <h2 class="modal-title">Share Info?</h2>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">Do you want to share this info with the business owner?</p>
            <div style="display: flex; gap: 1rem;">
                <button class="glow-button" id="confirmShare" style="flex: 1;">Yes, Share</button>
                <button class="glow-button" id="cancelShare" style="flex: 1; background: rgba(139, 92, 246, 0.2); border: 1px solid var(--primary-purple); color: var(--primary-purple);">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(shareModal);
    
    document.getElementById('confirmShare').addEventListener('click', () => {
        shareModal.remove();
        document.body.style.overflow = '';
        
        // Proceed with sharing
        shareQRInfoToOwner(qrInfo);
    });
    
    document.getElementById('cancelShare').addEventListener('click', () => {
        shareModal.remove();
        document.body.style.overflow = '';
    });
    
    shareModal.addEventListener('click', (e) => {
        if (e.target === shareModal) {
            shareModal.remove();
            document.body.style.overflow = '';
        }
    });
    
    document.body.style.overflow = 'hidden';
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function updateSavedLeadsDisplay() {
    const savedLeadsGrid = document.getElementById('savedLeadsGrid');
    const noSavedLeads = document.getElementById('noSavedLeads');
    
    if (!savedLeadsGrid) return;
    
    savedLeadsGrid.innerHTML = '';
    
    if (savedLeads.length === 0) {
        if (noSavedLeads) {
            noSavedLeads.style.display = 'block';
        }
        return;
    }
    
    if (noSavedLeads) {
        noSavedLeads.style.display = 'none';
    }
    
    savedLeads.forEach(lead => {
        const leadCard = document.createElement('div');
        leadCard.className = 'saved-lead-card';
        leadCard.innerHTML = `
            <div class="saved-lead-image">
                <img src="${lead.imageUrl}" alt="${lead.businessName}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Crect width=\'200\' height=\'200\' fill=\'%23ddd\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'.3em\' fill=\'%23999\'%3ENo Image%3C/text%3E%3C/svg%3E'">
            </div>
            <div class="saved-lead-info">
                <h3 class="saved-lead-name">${lead.businessName}</h3>
                <p class="saved-lead-description">${lead.description}</p>
                <div class="saved-lead-category">${lead.category}</div>
            </div>
            <button class="remove-saved-lead-btn" data-qr-id="${lead.qrId}">×</button>
        `;
        
        const removeBtn = leadCard.querySelector('.remove-saved-lead-btn');
        removeBtn.addEventListener('click', () => {
            const index = savedLeads.findIndex(l => l.qrId === lead.qrId);
            if (index !== -1) {
                savedLeads.splice(index, 1);
                localStorage.setItem('savedLeads', JSON.stringify(savedLeads));
                updateSavedLeadsDisplay();
                showNotification('Removed from saved leads', 'info');
            }
        });
        
        savedLeadsGrid.appendChild(leadCard);
    });
}

// Initialize saved leads display on page load
document.addEventListener('DOMContentLoaded', () => {
    updateSavedLeadsDisplay();
});

// ============================================
// COMMENT FUNCTIONALITY
// ============================================

function openCommentModal(stallId, stallName) {
    // Create comment modal
    const commentModal = document.createElement('div');
    commentModal.id = 'commentModal';
    commentModal.className = 'modal-overlay';
    commentModal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <button class="modal-close" id="closeCommentModal">&times;</button>
            <h2 class="modal-title">Leave a Comment</h2>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Share your thoughts about <strong>${stallName}</strong></p>
            <form id="commentForm">
                <div class="form-group">
                    <label for="commentText" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-primary);">Your Comment</label>
                    <textarea id="commentText" placeholder="Write your comment here..." required style="width: 100%; padding: 1rem; background: rgba(10, 10, 15, 0.6); border: 1px solid var(--card-border); border-radius: 0.75rem; color: var(--text-primary); font-size: 1rem; font-family: inherit; resize: vertical; min-height: 120px;"></textarea>
                </div>
                <button type="submit" class="glow-button" style="width: 100%; margin-top: 1rem;">Send Comment</button>
            </form>
        </div>
    `;
    document.body.appendChild(commentModal);
    
    // Show modal
    setTimeout(() => {
        commentModal.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden';
    
    // Close button
    document.getElementById('closeCommentModal').addEventListener('click', () => {
        commentModal.remove();
        document.body.style.overflow = '';
    });
    
    // Close on overlay click
    commentModal.addEventListener('click', (e) => {
        if (e.target === commentModal) {
            commentModal.remove();
            document.body.style.overflow = '';
        }
    });
    
    // Handle form submission
    document.getElementById('commentForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const commentText = document.getElementById('commentText').value.trim();
        
        if (commentText) {
            // Store comment (you can extend this to send to owner mode)
            const comment = {
                stallId: stallId,
                stallName: stallName,
                comment: commentText,
                timestamp: new Date().toISOString()
            };
            
            // Store in localStorage
            let comments = JSON.parse(localStorage.getItem('stallComments')) || [];
            comments.push(comment);
            localStorage.setItem('stallComments', JSON.stringify(comments));
            
            // Close modal
            commentModal.remove();
            document.body.style.overflow = '';
            
            // Show success message
            showNotification('Comment sent to owner!', 'success');
        }
    });
}

function showCameraError() {
    // Create a subtle error notification (optional - can be removed if not needed)
    const errorMsg = document.createElement('div');
    errorMsg.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(239, 68, 68, 0.9);
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        z-index: 10000;
        font-size: 0.9rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    `;
    errorMsg.textContent = 'Camera access denied. Please enable camera permissions.';
    document.body.appendChild(errorMsg);
    
    setTimeout(() => {
        errorMsg.style.opacity = '0';
        errorMsg.style.transition = 'opacity 0.3s';
        setTimeout(() => errorMsg.remove(), 300);
    }, 3000);
}

closeModal.addEventListener('click', () => {
    qrModal.classList.remove('active');
    document.body.style.overflow = '';
});

qrModal.addEventListener('click', (e) => {
    if (e.target === qrModal) {
        qrModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

function updateSelectedInterestsDisplay() {
    selectedInterestsDisplay.innerHTML = '';
    
    if (selectedInterests.length === 0) {
        selectedInterestsDisplay.innerHTML = '<span style="color: var(--text-secondary);">No interests selected</span>';
        return;
    }
    
    const interestToDisplay = {
        'ai-robotics': 'AI & Robotics',
        'food-beverages': 'Food & Beverages',
        'health-wellness': 'Health & Wellness',
        'technology': 'Technology',
        'startups': 'Startups',
        'manufacturing': 'Manufacturing',
        'education': 'Education',
        'finance-fintech': 'Finance & FinTech',
        'art-design': 'Art & Design'
    };
    
    selectedInterests.forEach(interest => {
        const chip = document.createElement('span');
        chip.className = 'interest-chip';
        chip.textContent = interestToDisplay[interest] || interest;
        selectedInterestsDisplay.appendChild(chip);
    });
}

visitorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('visitorName').value;
    const email = document.getElementById('visitorEmail').value;
    
    // Close modal
    qrModal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Show success animation
    setTimeout(() => {
        showSuccessAnimation();
    }, 300);
    
    // Reset form
    visitorForm.reset();
});

// ============================================
// SUCCESS ANIMATION
// ============================================

const successOverlay = document.getElementById('successOverlay');

function showSuccessAnimation() {
    successOverlay.classList.add('active');
    
    setTimeout(() => {
        successOverlay.classList.remove('active');
    }, 3000);
}

// ============================================
// OWNER MODE - LEADS TABLE
// ============================================

const leadsTableBody = document.getElementById('leadsTableBody');
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        populateLeadsTable(btn.dataset.filter);
    });
});

function populateLeadsTable(filter = 'all') {
    // Get the table body element (in case it wasn't available when function was defined)
    const tableBody = document.getElementById('leadsTableBody');
    if (!tableBody) {
        console.error('Cannot populate leads table - leadsTableBody element not found');
        return;
    }
    
    tableBody.innerHTML = '';
    
    let filteredLeads = [...mockLeads];
    
    if (filter === 'today') {
        filteredLeads = mockLeads.filter(lead => 
            lead.time.includes('hour') || lead.time === 'Just now'
        );
    } else if (filter === 'week') {
        filteredLeads = mockLeads.filter(lead => 
            lead.time.includes('hour') || lead.time === 'Just now' || 
            (lead.time.includes('day') && parseInt(lead.time) <= 7)
        );
    }
    
    console.log('=== POPULATING LEADS TABLE ===');
    console.log('Filter:', filter);
    console.log('Total leads in mockLeads:', mockLeads.length);
    console.log('Filtered leads count:', filteredLeads.length);
    console.log('All leads:', mockLeads);
    console.log('Filtered leads:', filteredLeads);
    
    if (filteredLeads.length === 0) {
        console.log('No leads to display');
        tableBody.innerHTML = '<tr><td colspan="5" style="text-align: center; padding: 2rem; color: var(--text-secondary);">No leads found</td></tr>';
        return;
    }
    
    filteredLeads.forEach((lead, index) => {
        console.log(`Adding lead ${index + 1}:`, lead);
        const row = document.createElement('tr');
        
        const interestsHTML = lead.interests.map(interest => 
            `<span>${interest}</span>`
        ).join('');
        
        row.innerHTML = `
            <td>${lead.name}</td>
            <td>${lead.email}</td>
            <td>
                <div class="leads-interests">
                    ${interestsHTML}
                </div>
            </td>
            <td>${lead.time}</td>
            <td><button class="action-btn">Contact</button></td>
        `;
        
        tableBody.appendChild(row);
    });
    
    console.log(`✅ Successfully added ${filteredLeads.length} leads to table`);
}

// Initialize leads table after DOM is ready
// Use setTimeout to ensure DOM is fully loaded
setTimeout(() => {
populateLeadsTable();
}, 100);

// ============================================
// COMMENTS DISPLAY (OWNER MODE)
// ============================================

function updateCommentsDisplay() {
    const commentsContainer = document.getElementById('commentsContainer');
    const noComments = document.getElementById('noComments');
    
    if (!commentsContainer) return;
    
    commentsContainer.innerHTML = '';
    
    if (!firstComment || !firstCommentAdded) {
        if (noComments) {
            noComments.style.display = 'block';
        }
        return;
    }
    
    if (noComments) {
        noComments.style.display = 'none';
    }
    
    // Display the first comment
    const commentCard = document.createElement('div');
    commentCard.className = 'comment-card';
    const commentDate = new Date(firstComment.timestamp).toLocaleDateString();
    commentCard.innerHTML = `
        <div class="comment-header">
            <h3 class="comment-business-name">${firstComment.businessName}</h3>
            <span class="comment-date">${commentDate}</span>
        </div>
        <p class="comment-text">${firstComment.comment}</p>
    `;
    commentsContainer.appendChild(commentCard);
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape') {
        if (qrModal.classList.contains('active')) {
            qrModal.classList.remove('active');
            document.body.style.overflow = '';
        }
        if (successOverlay.classList.contains('active')) {
            successOverlay.classList.remove('active');
        }
    }
});

