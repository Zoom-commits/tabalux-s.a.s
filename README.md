# Tabalux S.A.S - Unified Support System

Integrated technical support management system with multiple user profiles and analytical dashboards.

## 📋 Description

This system unifies two support platforms into a single application with centralized authentication and role-based access.

## 👥 User Profiles

### 1. **Client**
- **Access:** Personal ticket portal
- **Features:**
  - Create new tickets
  - View ticket status
  - Add comments
  - Track resolution

### 2. **Consultant**
- **Access:** Consultant Portal + Operational View
- **Features:**
  - Manage all tickets
  - Change ticket statuses
  - Add comments and solutions
  - Operational view with real-time metrics
  - Personal productivity dashboard

### 3. **Manager**
- **Access:** Operational View + Executive View + Predictive Analytics
- **Features:**
  - Complete operational view
  - Executive and financial analysis
  - Machine Learning projections
  - Strategic metrics and KPIs
  - Cost and ROI analysis

## 🔐 Access Credentials

### Client
- **Username:** `cliente1`
- **Password:** `cliente123`
- **Type:** Client

### Consultant
- **Username:** `consultor1`
- **Password:** `consultor123`
- **Type:** Consultant

### Manager
- **Username:** `gerente1`
- **Password:** `gerente123`
- **Type:** Manager

## 📁 File Structure

```
tabalux-unified/
├── index.html                    # Main login page
├── app.js                        # Authentication and navigation logic
├── auth.js                       # Access control system
├── styles.css                    # Global styles
├── consultant-portal.html        # Consultant portal (Consultant only)
├── operational-view.html         # Operational view (Consultant and Manager)
├── executive-view.html           # Executive view (Manager only)
├── predictive-analytics.html     # Predictive analysis (Manager only)
└── README.md                     # This file
```

## 🔒 Access Control System

The system includes **auth.js** which automatically verifies:
- ✅ If the user is authenticated
- ✅ If they have permissions to access the page
- ✅ Redirects to login if not authorized

**Permissions per page:**
- `consultant-portal.html` → **Consultant** only
- `operational-view.html` → **Consultant** and **Manager**
- `executive-view.html` → **Manager** only
- `predictive-analytics.html` → **Manager** only

If a user tries to directly access a URL without permissions, they will be redirected to login.

## 🚀 How to Use

1. **Open the system:**
   - Open `index.html` in a web browser

2. **Log in:**
   - Select user type
   - Enter credentials
   - Click "Login"

3. **Navigate:**
   - Each profile has access to different dashboards
   - Use the top navigation menu to switch between views
   - Click "🏠 Home" to return to the main dashboard

## 📊 Available Dashboards

### Consultant Portal
- Personal consultant dashboard
- Assigned tickets
- Personal performance metrics
- Quick management tools

### Operational View
- Real-time ticket tracking
- Team metrics
- Distribution by category and priority
- Critical tickets
- Interactive charts

### Executive View
- Cost analysis
- ROI and savings
- SLA compliance
- Business impact
- Financial trends

### Predictive Analytics
- Machine Learning models
- Ticket volume projections
- Cost predictions
- Scenario analysis
- AI recommendations

## 🎨 Features

- ✅ Unified authentication
- ✅ Role-based access control
- ✅ Responsive interface
- ✅ Interactive dashboards with Chart.js
- ✅ Real-time ticket management
- ✅ Comment system
- ✅ Status changes (consultants only)
- ✅ Intuitive navigation
- ✅ Modern and professional design

## 🔧 Technologies Used

- HTML5
- CSS3 (with gradients and animations)
- JavaScript (ES6+)
- Chart.js (for charts)
- LocalStorage (for session persistence)

## 📝 Important Notes

- Ticket data is simulated and stored in memory
- Session is maintained using LocalStorage
- To log out, use the "Logout" button in the top bar
- All dashboards have navigation back to home

## 🎯 Workflow

### Client:
1. Login → Client Dashboard → Create/View Tickets → Add Comments

### Consultant:
1. Login → Consultant Dashboard → Access to:
   - Consultant Portal (personal management)
   - Operational View (operational view)
   - Management of all tickets

### Manager:
1. Login → Manager Dashboard → Access to:
   - Operational View (operational metrics)
   - Executive View (executive analysis)
   - Predictive Analytics (ML projections)

## 🌟 Suggested Future Improvements

- Integration with real backend
- Persistent database
- Real-time notifications
- Report export
- Advanced filters
- Global search
- Change history
- Attach files to tickets

## 📞 Support

System developed for Tabalux S.A.S
Version: 1.0.0
Date: May 2026

---

**System ready to use!** 🎉