// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

// Simulated data
var currentUser = null;

// Load tickets from localStorage or use initial data
var ticketsIniciales = [
    { id: 1, title: "Login Error", description: "Cannot access the system with my credentials", status: "open", cliente: "cliente1", fecha: "2026-05-10", comments: [{ author: "consultor1", text: "We are reviewing the issue", date: "2026-05-10 14:30" }] },
    { id: 2, title: "Reports Issue", description: "Reports are not generating correctly", status: "in-progress", cliente: "cliente1", fecha: "2026-05-12", comments: [{ author: "consultor1", text: "We identified the error in the reports module", date: "2026-05-12 10:15" }] },
    { id: 3, title: "Data Update", description: "I need to update my profile information", status: "closed", cliente: "cliente1", fecha: "2026-05-08", comments: [{ author: "consultor1", text: "Issue resolved", date: "2026-05-09 09:00" }] },
    { id: 4, title: "Payment Gateway Error", description: "Transactions failing at checkout", status: "open", cliente: "cliente1", fecha: "2026-05-11", comments: [] },
    { id: 5, title: "Email Notifications", description: "Not receiving order confirmation emails", status: "in-progress", cliente: "cliente1", fecha: "2026-05-09", comments: [{ author: "consultor1", text: "Checking email server configuration", date: "2026-05-09 16:00" }] },
    { id: 6, title: "Dashboard Loading Slow", description: "Dashboard takes too long to load data", status: "open", cliente: "cliente1", fecha: "2026-05-13", comments: [] },
    { id: 7, title: "Mobile App Crash", description: "App crashes when opening product details", status: "in-progress", cliente: "cliente1", fecha: "2026-05-07", comments: [{ author: "consultor1", text: "Investigating crash logs", date: "2026-05-07 11:20" }] },
    { id: 8, title: "Search Not Working", description: "Search function returns no results", status: "open", cliente: "cliente1", fecha: "2026-05-14", comments: [] },
    { id: 9, title: "Password Reset", description: "Password reset link not working", status: "closed", cliente: "cliente1", fecha: "2026-05-05", comments: [{ author: "consultor1", text: "Fixed email template", date: "2026-05-05 14:00" }] },
    { id: 10, title: "API Integration", description: "Third-party API returning errors", status: "dependency", cliente: "cliente1", fecha: "2026-05-12", comments: [{ author: "consultor1", text: "Waiting for vendor response", date: "2026-05-12 09:30" }] },
    { id: 11, title: "Database Connection", description: "Intermittent database connection issues", status: "in-progress", cliente: "cliente1", fecha: "2026-05-11", comments: [] },
    { id: 12, title: "File Upload Error", description: "Cannot upload files larger than 5MB", status: "open", cliente: "cliente1", fecha: "2026-05-13", comments: [] },
    { id: 13, title: "Invoice Generation", description: "Invoices showing incorrect totals", status: "in-progress", cliente: "cliente1", fecha: "2026-05-10", comments: [{ author: "consultor1", text: "Reviewing calculation logic", date: "2026-05-10 15:45" }] },
    { id: 14, title: "User Permissions", description: "Admin users cannot access settings", status: "open", cliente: "cliente1", fecha: "2026-05-14", comments: [] },
    { id: 15, title: "Export Function", description: "CSV export not including all columns", status: "closed", cliente: "cliente1", fecha: "2026-05-06", comments: [{ author: "consultor1", text: "Updated export template", date: "2026-05-06 10:00" }] },
    { id: 16, title: "Calendar Sync", description: "Calendar not syncing with external apps", status: "open", cliente: "cliente1", fecha: "2026-05-13", comments: [] },
    { id: 17, title: "Notification Settings", description: "Cannot disable email notifications", status: "in-progress", cliente: "cliente1", fecha: "2026-05-12", comments: [] },
    { id: 18, title: "Chart Display", description: "Charts not rendering on Firefox browser", status: "open", cliente: "cliente1", fecha: "2026-05-14", comments: [] },
    { id: 19, title: "Session Timeout", description: "Users getting logged out too quickly", status: "dependency", cliente: "cliente1", fecha: "2026-05-11", comments: [{ author: "consultor1", text: "Reviewing security policies", date: "2026-05-11 13:00" }] },
    { id: 20, title: "Print Layout", description: "Print preview showing incorrect formatting", status: "open", cliente: "cliente1", fecha: "2026-05-13", comments: [] },
    { id: 21, title: "Language Translation", description: "Some text not translating to Spanish", status: "in-progress", cliente: "cliente1", fecha: "2026-05-10", comments: [] },
    { id: 22, title: "Backup Restore", description: "Need to restore data from backup", status: "closed", cliente: "cliente1", fecha: "2026-05-04", comments: [{ author: "consultor1", text: "Backup restored successfully", date: "2026-05-04 16:30" }] },
    { id: 23, title: "SSL Certificate", description: "SSL certificate expiring soon", status: "in-progress", cliente: "cliente1", fecha: "2026-05-12", comments: [{ author: "consultor1", text: "Renewal in progress", date: "2026-05-12 11:00" }] },
    { id: 24, title: "Performance Issue", description: "System slow during peak hours", status: "open", cliente: "cliente1", fecha: "2026-05-14", comments: [] },
    { id: 25, title: "Data Migration", description: "Need to migrate old customer data", status: "dependency", cliente: "cliente1", fecha: "2026-05-09", comments: [{ author: "consultor1", text: "Preparing migration scripts", date: "2026-05-09 14:00" }] },
    { id: 26, title: "Widget Integration", description: "Third-party widget not displaying", status: "open", cliente: "cliente1", fecha: "2026-05-13", comments: [] },
    { id: 27, title: "Form Validation", description: "Form accepting invalid email formats", status: "in-progress", cliente: "cliente1", fecha: "2026-05-11", comments: [] },
    { id: 28, title: "Image Optimization", description: "Images loading slowly on mobile", status: "open", cliente: "cliente1", fecha: "2026-05-14", comments: [] },
    { id: 29, title: "Cache Clearing", description: "Old data showing after updates", status: "closed", cliente: "cliente1", fecha: "2026-05-07", comments: [{ author: "consultor1", text: "Implemented cache invalidation", date: "2026-05-07 12:00" }] },
    { id: 30, title: "API Rate Limit", description: "Hitting API rate limits during sync", status: "in-progress", cliente: "cliente1", fecha: "2026-05-12", comments: [{ author: "consultor1", text: "Implementing request throttling", date: "2026-05-12 10:30" }] },
    { id: 31, title: "Webhook Configuration", description: "Webhooks not triggering events", status: "open", cliente: "cliente1", fecha: "2026-05-13", comments: [] },
    { id: 32, title: "Timezone Issues", description: "Dates showing in wrong timezone", status: "in-progress", cliente: "cliente1", fecha: "2026-05-11", comments: [] },
    { id: 33, title: "Duplicate Records", description: "System creating duplicate customer records", status: "open", cliente: "cliente1", fecha: "2026-05-14", comments: [] },
    { id: 34, title: "Access Denied", description: "Cannot access archived documents", status: "closed", cliente: "cliente1", fecha: "2026-05-08", comments: [{ author: "consultor1", text: "Permissions updated", date: "2026-05-08 15:00" }] },
    { id: 35, title: "Integration Error", description: "CRM integration failing to sync contacts", status: "dependency", cliente: "cliente1", fecha: "2026-05-10", comments: [{ author: "consultor1", text: "Contacting CRM support", date: "2026-05-10 09:00" }] }
];

// Load tickets from localStorage or initialize
var ticketsGuardados = localStorage.getItem('tabaluxTickets');
var tickets = ticketsGuardados ? JSON.parse(ticketsGuardados) : ticketsIniciales;

// Function to save tickets to localStorage
function guardarTickets() {
    localStorage.setItem('tabaluxTickets', JSON.stringify(tickets));
}

// Test users
var users = {
    cliente1: { password: "cliente123", type: "cliente", name: "John Perez" },
    consultor1: { password: "consultor123", type: "consultor", name: "Maria Garcia" },
    gerente1: { password: "gerente123", type: "gerente", name: "Carlos Rodriguez" }
};

// Login
var loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const userType = document.getElementById('userType').value;
        
        if (users[username] && users[username].password === password && users[username].type === userType) {
            currentUser = {
                username: username,
                type: userType,
                name: users[username].name
            };
            
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            showDashboard();
        } else {
            alert('Incorrect credentials');
        }
    });
}

// Show dashboard according to user type
function showDashboard() {
    const loginContainer = document.querySelector('.login-container');
    if (loginContainer) {
        loginContainer.style.display = 'none';
    }
    
    document.body.classList.add('dashboard-active');
    
    if (currentUser.type === 'cliente') {
        showClienteDashboard();
    } else if (currentUser.type === 'consultor') {
        showConsultorDashboard();
    } else if (currentUser.type === 'gerente') {
        showGerenteDashboard();
    }
}

// Dashboard Cliente
function showClienteDashboard() {
    const dashboardHTML = `
        <div class="dashboard active">
            <nav class="navbar">
                <h2>Tabalux S.A.S - Client Portal</h2>
                <div class="user-info">
                    <span class="user-badge">${currentUser.name}</span>
                    <button class="btn-logout" onclick="logout()">Sign Out</button>
                </div>
            </nav>
            
            <div class="container">
                <button class="btn-new-ticket" onclick="showNewTicketModal()">+ New Ticket</button>
                
                <div class="tickets-grid" id="ticketsGrid"></div>
            </div>
        </div>
        
        <!-- Modal New Ticket -->
        <div class="modal" id="newTicketModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Create New Ticket</h3>
                    <button class="btn-close" onclick="closeModal('newTicketModal')">&times;</button>
                </div>
                <form id="newTicketForm">
                    <div class="form-group">
                        <label>Title</label>
                        <input type="text" id="ticketTitle" required>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea id="ticketDescription" rows="5" required style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-family: inherit;"></textarea>
                    </div>
                    <button type="submit" class="btn-primary">Create Ticket</button>
                </form>
            </div>
        </div>
        
        <!-- View Ticket Modal -->
        <div class="modal" id="viewTicketModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 id="modalTicketTitle"></h3>
                    <button class="btn-close" onclick="closeModal('viewTicketModal')">&times;</button>
                </div>
                <div id="modalTicketContent"></div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', dashboardHTML);
    renderClienteTickets();
}

// Dashboard Consultor
function showConsultorDashboard() {
    const dashboardHTML = `
        <div class="dashboard active">
            <nav class="navbar">
                <h2>Tabalux S.A.S - Consultant Portal</h2>
                <div class="user-info">
                    <span class="user-badge">${currentUser.name}</span>
                    <button class="btn-logout" onclick="logout()">Sign Out</button>
                </div>
            </nav>
            
            <div class="container">
                <h3 style="margin-bottom: 20px; color: #2d3436;">Dashboard Access</h3>
                
                <div class="dashboard-cards">
                    <a href="consultant-portal.html" class="dashboard-card-link">
                        <span class="dashboard-card-icon">👨‍💻</span>
                        <h3 class="dashboard-card-title">Consultant Portal</h3>
                        <p class="dashboard-card-description">Personal ticket management and productivity tools</p>
                    </a>
                    
                    <a href="operational-view.html" class="dashboard-card-link">
                        <span class="dashboard-card-icon">📋</span>
                        <h3 class="dashboard-card-title">Operational View</h3>
                        <p class="dashboard-card-description">Operational view with real-time ticket tracking</p>
                    </a>
                </div>
                
                <h3 style="margin: 30px 0 20px; color: #2d3436;">All Tickets</h3>
                <div class="tickets-grid" id="ticketsGrid"></div>
            </div>
        </div>
        
        <!-- View Ticket Modal -->
        <div class="modal" id="viewTicketModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 id="modalTicketTitle"></h3>
                    <button class="btn-close" onclick="closeModal('viewTicketModal')">&times;</button>
                </div>
                <div id="modalTicketContent"></div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', dashboardHTML);
    renderConsultorTickets();
}

// Dashboard Gerente
function showGerenteDashboard() {
    const dashboardHTML = `
        <div class="dashboard active">
            <nav class="navbar">
                <h2>Tabalux S.A.S - Manager Portal</h2>
                <div class="user-info">
                    <span class="user-badge">${currentUser.name}</span>
                    <button class="btn-logout" onclick="logout()">Sign Out</button>
                </div>
            </nav>
            
            <div class="container">
                <h3 style="margin-bottom: 20px; color: #2d3436;">Executive Dashboards</h3>
                
                <div class="dashboard-cards">
                    <a href="operational-view.html" class="dashboard-card-link">
                        <span class="dashboard-card-icon">📋</span>
                        <h3 class="dashboard-card-title">Operational View</h3>
                        <p class="dashboard-card-description">Real-time ticket tracking and team performance</p>
                    </a>
                    
                    <a href="executive-view.html" class="dashboard-card-link">
                        <span class="dashboard-card-icon">💼</span>
                        <h3 class="dashboard-card-title">Executive View</h3>
                        <p class="dashboard-card-description">Strategic analysis and financial impact</p>
                    </a>
                    
                    <a href="predictive-analytics.html" class="dashboard-card-link">
                        <span class="dashboard-card-icon">🤖</span>
                        <h3 class="dashboard-card-title">Predictive Analytics</h3>
                        <p class="dashboard-card-description">AI-powered projections and machine learning</p>
                    </a>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', dashboardHTML);
}

// Render tickets for client
function renderClienteTickets() {
    const grid = document.getElementById('ticketsGrid');
    const clienteTickets = tickets.filter(t => t.cliente === currentUser.username);
    
    if (clienteTickets.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: #95a5a6; padding: 40px;">You have no tickets created</p>';
        return;
    }
    
    grid.innerHTML = clienteTickets.map(ticket => `
        <div class="ticket-card">
            <div class="ticket-header">
                <span class="ticket-id">Ticket #${ticket.id}</span>
                <span class="ticket-status status-${ticket.status}">${getStatusText(ticket.status)}</span>
            </div>
            <h4 class="ticket-title">${ticket.title}</h4>
            <p class="ticket-description">${ticket.description}</p>
            <div class="ticket-meta">
                <span>📅 ${ticket.fecha}</span>
                <span>💬 ${ticket.comments.length} comments</span>
            </div>
            <div class="ticket-actions">
                <button class="btn-view" onclick="viewTicket(${ticket.id})">View Details</button>
            </div>
        </div>
    `).join('');
}

// Render tickets for consultant
function renderConsultorTickets() {
    const grid = document.getElementById('ticketsGrid');
    
    grid.innerHTML = tickets.map(ticket => `
        <div class="ticket-card">
            <div class="ticket-header">
                <span class="ticket-id">Ticket #${ticket.id}</span>
                <span class="ticket-status status-${ticket.status}">${getStatusText(ticket.status)}</span>
            </div>
            <h4 class="ticket-title">${ticket.title}</h4>
            <p class="ticket-description">${ticket.description}</p>
            <div class="ticket-meta">
                <span>👤 ${ticket.cliente}</span>
                <span>📅 ${ticket.fecha}</span>
                <span>💬 ${ticket.comments.length} comments</span>
            </div>
            <div class="ticket-actions">
                <button class="btn-view" onclick="viewTicket(${ticket.id})">View and Manage</button>
            </div>
        </div>
    `).join('');
}

// View ticket
window.viewTicket = function(ticketId) {
    const ticket = tickets.find(t => t.id === ticketId);
    if (!ticket) return;
    
    document.getElementById('modalTicketTitle').textContent = `Ticket #${ticket.id} - ${ticket.title}`;
    
    let content = `
        <div class="ticket-description" style="margin-bottom: 20px;">
            <strong>Description:</strong><br>
            ${ticket.description}
        </div>
        <div class="ticket-meta" style="margin-bottom: 20px;">
            <span>Cliente: ${ticket.cliente}</span>
            <span>Fecha: ${ticket.fecha}</span>
            <span>Estado: <span class="ticket-status status-${ticket.status}">${getStatusText(ticket.status)}</span></span>
        </div>
    `;
    
    // Comments section
    content += `
        <div class="comments-section">
            <h4 style="margin-bottom: 15px;">Comments</h4>
            ${ticket.comments.map(comment => `
                <div class="comment">
                    <div class="comment-author">${comment.author}</div>
                    <div class="comment-text">${comment.text}</div>
                    <div class="comment-date">${comment.date}</div>
                </div>
            `).join('')}
            
            <div class="add-comment">
                <textarea id="newComment" placeholder="Add comment..."></textarea>
                <button onclick="addComment(${ticketId})">Add Comment</button>
            </div>
        </div>
    `;
    
    // Only consultants can change status
    if (currentUser.type === 'consultor') {
        content += `
            <div class="status-selector">
                <label><strong>Change Status:</strong></label>
                <select id="ticketStatus" onchange="updateTicketStatus(${ticketId}, this.value)">
                    <option value="open" ${ticket.status === 'open' ? 'selected' : ''}>Open</option>
                    <option value="in-progress" ${ticket.status === 'in-progress' ? 'selected' : ''}>In Progress</option>
                    <option value="dependency" ${ticket.status === 'dependency' ? 'selected' : ''}>With Dependency</option>
                    <option value="closed" ${ticket.status === 'closed' ? 'selected' : ''}>Closed</option>
                </select>
            </div>
        `;
    }
    
    document.getElementById('modalTicketContent').innerHTML = content;
    document.getElementById('viewTicketModal').classList.add('active');
};

// Add comment
window.addComment = function(ticketId) {
    const commentText = document.getElementById('newComment').value.trim();
    if (!commentText) {
        alert('Please write a comment');
        return;
    }
    
    const ticket = tickets.find(t => t.id === ticketId);
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    ticket.comments.push({
        author: currentUser.username,
        text: commentText,
        date: dateStr
    });
    
    guardarTickets(); // Save to localStorage
    viewTicket(ticketId);
};

// Update ticket status
window.updateTicketStatus = function(ticketId, newStatus) {
    const ticket = tickets.find(t => t.id === ticketId);
    ticket.status = newStatus;
    
    // Automatic comment added
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    ticket.comments.push({
        author: currentUser.username,
        text: `Status changed to: ${getStatusText(newStatus)}`,
        date: dateStr
    });
    
    guardarTickets(); // Save to localStorage
    renderConsultorTickets();
    alert('Status updated successfully');
};

// Show new ticket modal
window.showNewTicketModal = function() {
    document.getElementById('newTicketModal').classList.add('active');
};

// Close modal
window.closeModal = function(modalId) {
    document.getElementById(modalId).classList.remove('active');
};

// Create new ticket
document.addEventListener('submit', function(e) {
    if (e.target.id === 'newTicketForm') {
        e.preventDefault();
        
        var title = document.getElementById('ticketTitle').value;
        var description = document.getElementById('ticketDescription').value;
        
        var newTicket = {
            id: tickets.length + 1,
            title: title,
            description: description,
            status: 'open',
            cliente: currentUser.username,
            fecha: new Date().toISOString().split('T')[0],
            comments: []
        };
        
        tickets.push(newTicket);
        guardarTickets(); // Save to localStorage
        closeModal('newTicketModal');
        renderClienteTickets();
        
        document.getElementById('newTicketForm').reset();
        alert('Ticket created successfully');
    }
});

// Get status text
function getStatusText(status) {
    const statusMap = {
        'open': 'Open',
        'in-progress': 'In Progress',
        'dependency': 'With Dependency',
        'closed': 'Closed'
    };
    return statusMap[status] || status;
}

// Logout
window.logout = function() {
    localStorage.removeItem('currentUser');
    location.reload();
};

// Close modales al hacer clic fuera
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Check session on load
window.addEventListener('load', function() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showDashboard();
    }
});

}); // End of DOMContentLoaded

// Made with Bob
