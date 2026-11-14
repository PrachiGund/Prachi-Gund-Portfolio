# Prachi Gund — Data Analyst Portfolio Website

A modern, responsive, and data-centric personal portfolio website designed for **Prachi Gund**, an aspiring **Data Analyst** with a **B.Sc. in Computer Science from Mumbai University (2023–2026, CGPA 8.40)**.

Built using clean **HTML5, CSS3, and Vanilla JavaScript** with **zero external frameworks or dependencies**. Fast-loading, accessible, mobile-friendly, and ready to deploy for free on **GitHub Pages**.

---

## 🎨 Theme & Color Palette

- **Background:** Clean White (`#FFFFFF`) with subtle soft-slate contrast sections (`#F8FAFC`).
- **Typography & Primary:** Deep Navy Blue (`#0F172A` / `#1E3A8A`) for professional authority and contrast.
- **Accents:** Light Sky Blue (`#0284C7` / `#38BDF8`) for buttons, active navigation, badges, and focus indicators.

---

## 📁 Project Directory Structure

```text
Data Analyst Portfolio/
│
├── favicon.svg                                # Custom vector data icon displayed in the browser tab
├── index.html                                 # Main one-page portfolio containing all primary sections
├── README.md                                  # Complete documentation, customization guide & deployment steps
│
├── css/                                       # Styling folder
│   ├── style.css                              # Design tokens (colors, fonts), desktop layout, cards, buttons
│   └── responsive.css                         # Mobile & tablet breakpoints (hamburger menu, responsive grid)
│
├── js/                                        # Interactivity folder
│   ├── main.js                                # Mobile menu toggle, smooth scrolling, active nav link, contact feedback
│   └── projects.js                            # Project category filter (All, Data Analytics & BI, Database & SQL, Web)
│
├── project-details/                           # In-depth case study pages for Prachi's actual projects
│   ├── healthcare-analytics/
│   │   └── index.html                         # Case Study 1: Healthcare Analytics Dashboard (Excel, Pivot Tables, Power Query)
│   ├── superstore-sales-analysis/
│   │   └── index.html                         # Case Study 2: Superstore Sales Analysis (MySQL, SQL Queries)
│   └── railway-bus-booking/
│       └── index.html                         # Case Study 3: Online Railway & Bus Ticket Booking Website (PHP, MySQL, HTML, CSS, JS)
│
└── assets/                                    # Media and static resources
    ├── docs/
    │   ├── Resume.pdf                         # Place your actual PDF resume here
    │   └── Resume-Placeholder.txt             # Guidance note for adding your resume
    └── images/
        ├── analyst-avatar.svg                 # Header vector profile graphic placeholder
        ├── healthcare-dashboard.svg           # Excel healthcare dashboard preview
        ├── superstore-sql.svg                 # MySQL sales analysis preview
        └── ticket-booking.svg                 # Web application & admin panel preview
```

---

## 📖 Explanation of What Each File Does

### 1. Root Files
- **`index.html`**: The main portfolio homepage containing:
  1. **Home (Hero)**: Headline, status pill ("Open to Entry-Level Data Analyst Roles"), education badge ("B.Sc. CS • Mumbai University • CGPA 8.40"), quick highlights strip, email copy button, and resume download.
  2. **About Me**: Prachi's professional summary, academic background, core technical strengths, and soft skills (Analytical Thinking, Communication, Teamwork, Problem Solving, Attention to Detail, Time Management).
  3. **Methodology (Workflow)**: 4-step framework demonstrating problem understanding, Power Query ETL, SQL querying, and visual storytelling.
  4. **Skills**: Categorized into:
     - *Data Analysis & BI*: Power BI, Microsoft Excel, Pivot Tables, Power Query
     - *Databases & Querying*: MySQL, SQL (Queries, Aggregations, Relational Schemas)
     - *Programming & Web*: Python, PHP, JavaScript, HTML5, CSS3
  5. **Projects**: Cards for Prachi's 3 actual projects with filter buttons, capability highlights, and links to full case studies.
  6. **Education & Achievements**: Highlights **B.Sc. Computer Science (Mumbai University, CGPA 8.40)**, official certifications (*Bloomzen Infosolutions* Android & Machine Learning, Data Science Session), and technical achievements (*HackerRank*, coding competitions, dashboard creation).
  7. **Contact**: Visible email `prachigund05@gmail.com` with one-click copy, location (Mumbai), optional phone notice, LinkedIn, GitHub, and an interactive contact form with instant confirmation.
- **`favicon.svg`**: A clean vector graphic displayed next to the page title on your browser tabs.

### 2. Styling (`css/`)
- **`css/style.css`**: Defines CSS design tokens and styles every card, badge, code block, subgrid, and typography element.
- **`css/responsive.css`**: Ensures the layout adjusts seamlessly across mobile phones (< 768px), tablets (< 1024px), and large monitors.

### 3. JavaScript Interactivity (`js/`)
- **`js/main.js`**: Handles mobile hamburger menu toggle, highlights the current section in the navigation bar while scrolling, controls the "Back to Top" button, and gives visual feedback when the contact form is submitted.
- **`js/projects.js`**: Enables interactive filtering on the Projects section (*All*, *Data Analytics & BI*, *Database & SQL*, *Web Development*).

### 4. Case Study Pages (`project-details/`)
- **`project-details/healthcare-analytics/index.html`**: Explains the healthcare data challenge, Power Query ETL steps, Pivot Table architecture, and visual insight placeholders.
- **`project-details/superstore-sales-analysis/index.html`**: Details the relational MySQL schema, sample SQL queries for category & regional sales, and findings placeholders.
- **`project-details/railway-bus-booking/index.html`**: Details the full-stack architecture (PHP backend, MySQL database, JS validation), administrative panel control, and data takeaways.

---

## ✏️ Easy Customization Checklist (Where to Put Your Info)

All files contain clear placeholders marked in brackets: `[Insert your LinkedIn Profile URL]`, `[Insert your GitHub project URL]`.

1. **Replace Personal Links in `index.html` and Case Studies**:
   - Email is configured as `prachigund05@gmail.com`.
   - Replace `[Insert your LinkedIn Profile URL]` with your actual LinkedIn handle.
   - Replace `[Insert your GitHub Profile URL]` and `[Insert your GitHub project URL]` with your actual GitHub links.

2. **Add Your Resume**:
   - Save your resume as a PDF named `Resume.pdf`.
   - Place `Resume.pdf` in `assets/docs/Resume.pdf`.
   - All download buttons on the site will automatically download this file.

3. **Add Real Project Screenshots (Optional)**:
   - When you have screenshots of your Excel dashboard, MySQL query outputs, or booking website UI, save them in `assets/images/` (e.g. `healthcare-dashboard.png`).
   - Update the `src` attribute of the `<img>` tags in the case study pages to point to your new images.

4. **Add Your Own Project Findings & Insights**:
   - Open each case study page in `project-details/` and fill in the bracketed placeholders `[Insert your finding: ...]` with your actual project discoveries.

---

## 💻 How to View & Test Locally

You do not need to install Node.js, npm, or any build tools:

### Option A: Direct Open (Simplest)
- Double-click `index.html` in your file explorer, or right-click `index.html` and choose **Open with > Google Chrome** (or Microsoft Edge, Firefox, Safari).

### Option B: VS Code Live Server
1. Open this folder in VS Code.
2. If you have the "Live Server" extension installed, right-click `index.html` and select **Open with Live Server**.

### Option C: Python HTTP Server (Terminal)
Open PowerShell or Command Prompt in this folder and run:
```bash
python -m http.server 8000
```
Then open your browser and navigate to: `http://localhost:8000`

---

## 🚀 How to Deploy for Free to GitHub Pages

1. **Initialize Git in this folder**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Prachi Gund Data Analyst Portfolio"
   ```

2. **Create a GitHub Repository**:
   - Go to [github.com](https://github.com) and create a new public repository named `portfolio` (or `<your-username>.github.io`).

3. **Push your code to GitHub**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - In your GitHub repository, click on **Settings** (top menu).
   - In the left sidebar, click on **Pages**.
   - Under **Build and deployment > Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.
   - Within 1–2 minutes, your portfolio will be live at:
     `https://<your-username>.github.io/<repo-name>/`

---

### 💡 Alternative: No Git Installed? Deploy via GitHub Web (Drag & Drop)

If you don't have Git installed on your computer, you can deploy in 2 minutes directly through your browser:

1. Go to [github.com/new](https://github.com/new) and create a new public repository (e.g., `portfolio`).
2. On the setup screen, click the link: **"uploading an existing file"**.
3. Drag and drop all the files and folders from this project folder into the browser window.
4. Click **"Commit changes"**.
5. Go to **Settings > Pages**, choose branch `main` and folder `/ (root)`, then click **Save**.
6. Your portfolio website is now live!
