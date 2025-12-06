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
        filteredStalls.sort((a, b) => {
            const likesA = stallLikes[a.id] || a.likes;
            const likesB = stallLikes[b.id] || b.likes;
            return likesB - likesA;
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
        
        upvoteBtn.querySelector('.upvote-count').textContent = stallLikes[stallId];
        localStorage.setItem('upvotedStalls', JSON.stringify(upvotedStalls));
        localStorage.setItem('stallLikes', JSON.stringify(stallLikes));
        updateHeatMap();
        
        // Re-sort if sorting by popularity
        if (currentSort === 'popularity') {
            updateStallsDisplay();
        }
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

scanQRBtn.addEventListener('click', () => {
    updateSelectedInterestsDisplay();
    qrModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

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
    leadsTableBody.innerHTML = '';
    
    let filteredLeads = [...mockLeads];
    
    if (filter === 'today') {
        filteredLeads = mockLeads.filter(lead => lead.time.includes('hour'));
    } else if (filter === 'week') {
        filteredLeads = mockLeads.filter(lead => 
            lead.time.includes('hour') || lead.time.includes('day') && parseInt(lead.time) <= 7
        );
    }
    
    filteredLeads.forEach(lead => {
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
        
        leadsTableBody.appendChild(row);
    });
}

// Initialize leads table
populateLeadsTable();

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

