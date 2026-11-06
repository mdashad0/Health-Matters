# HEALTH MATTERS – Your Gateway to Better Health Awareness

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-black?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-emerald)](#)

> **"Read. Interact. Learn. Test Your Knowledge."**

HEALTH MATTERS is a modern, responsive, educational digital health portal built to empower students, families, and everyday people with clear, evidence-based health awareness. It breaks down complex medical concepts surrounding common conditions—such as Blood Pressure, Diabetes, and Dehydration—into accessible language, visual infographics, interactive self-assessment tools, and engaging knowledge quizzes.

---

## 🌟 Key Features

### 1. Modern Healthcare Aesthetic
- **Color Palette**: Clinical Medical Blue (`#0ea5e9`, `#0284c7`), Vibrant Teal Green (`#14b8a6`, `#0d9488`), and Soft Mint Accent (`#10b981`).
- **Smooth Animations**: Powered by Framer Motion for gentle fade-ins, card hover elevations, and dynamic transitions.
- **Responsive Layout**: Optimized for mobile screens, tablets, laptops, and ultra-wide desktops.
- **Glassmorphism & Crisp Typography**: Uses Google's Plus Jakarta Sans and Inter for modern medical readability.

### 2. Comprehensive Condition Guides
Each topic features its own dedicated individual page (`/topics/:topicId`):
- **Blood Pressure (`/topics/blood-pressure`)**:
  - What is blood pressure? (Systolic vs Diastolic explained using clear fluid pressure analogies).
  - **Hypertension (High Blood Pressure)**: Definition, causes, symptoms ("The Silent Killer"), risk factors, DASH diet prevention, and clinical management.
  - **Hypotension (Low Blood Pressure)**: Definition, causes, warning signs, orthostatic reflex tips, and immediate first-aid guidance.
  - **Interactive AHA Blood Pressure Category Checker**: Input systolic and diastolic readings to immediately identify clinical classifications (Normal, Elevated, Stage 1, Stage 2, Crisis).
- **Diabetes Mellitus (`/topics/diabetes`)**:
  - What is diabetes? Biological key-and-lock analogy for insulin and glucose transport.
  - **Type 1 Diabetes**: Autoimmune nature, islet beta cell destruction, lifelong insulin therapy.
  - **Type 2 Diabetes**: Insulin resistance, visceral adiposity, lifestyle prevention (DPP study evidence).
  - **Gestational Diabetes**: Placental hormone resistance, screening at 24-28 weeks, postpartum care.
  - **The Three Ps**: Polyuria, Polydipsia, Polyphagia explained clearly.
  - **ADA Blood Sugar Reference Chart**: Fasting, 2-hr postprandial, and HbA1c standards.
- **Dehydration & Electrolytes (`/topics/dehydration`)**:
  - What is dehydration? Why the human body (60% water) requires cellular fluid balance.
  - Causes & fluid loss mechanisms: heat, exercise, diarrhea, vomiting, diuretics.
  - Warning signs & severity scale: Mild to moderate vs emergency red flags (sunken eyes, confusion, anuria).
  - **Oral Rehydration Salts (ORS)**: WHO recommended electrolyte formulation and homemade ratio.
  - **Interactive Daily Hydration Calculator**: Custom fluid requirement calculated from body weight, exercise minutes, and weather, plus daily cup tracker.
  - **Visual Urine Color Chart**: Levels 1–8 hydration color scale with direct hydration advice.

### 3. Interactive Health Quiz Hub (`/quiz`)
- **Category 1: Multiple Choice Questions (MCQs)**:
  - 15+ comprehensive questions across Blood Pressure, Diabetes, and Dehydration.
  - 4 options per question with single correct answer.
  - Instant color-coded feedback with detailed medical explanations.
- **Category 2: Myth or Fact**:
  - Debunk dangerous health myths (e.g., "Himalayan pink salt is safe in unlimited amounts", "High BP always gives headaches", "Eating sugar directly causes Type 1 diabetes").
  - Instant flip verdict (MYTH vs. FACT) with scientific rationale.
- **Category 3: Quiz Scoring & Persistence**:
  - Real-time score calculation, percentage, and performance levels (Health Champion, Health Scholar, Health Conscious, Health Explorer).
  - Confetti burst animation for high scores.
  - Detailed answer review screen with questions, answers, and explanations.
  - **LocalStorage Integration**: Automatically saves latest score and quiz attempt history.
  - Topic filters & Previous / Next question navigation.

### 4. Interactive Tools & Additional Polish
- **Global Search Modal (`Ctrl+K`)**: Instant search across conditions, subtopics, causes, and symptoms.
- **Smooth Back-to-Top Button**: Floating quick-scroll button with progress awareness.
- **Responsive Navigation**: Desktop navigation bar with active indicators and animated mobile slide-down drawer.
- **Daily Health Tips**: Actionable habit cards (e.g. 20-minute post-meal walk, skin turgor test, hidden sodium).
- **Medically Responsible**: Prominent medical disclaimer banner and modal reminder:
  > *"This platform is designed for general health education and awareness only. It is not a substitute for professional medical advice, diagnosis, or treatment."*

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern reactive component architecture |
| **Vite 6** | Ultra-fast build tool and bundler |
| **Tailwind CSS 3** | Utility-first styling with custom medical theme |
| **React Router 7** | Client-side routing with smooth page navigation |
| **Framer Motion 12** | Fluid animations, card reveals, and transitions |
| **Lucide React** | Medical, diagnostic, and interface iconography |
| **Canvas Confetti** | Celebration visual effect upon quiz achievement |
| **LocalStorage** | Persistent offline quiz score and progress tracking |

---

## 🚀 Deploy on Render

This project is configured as a Render Static Site through [`render.yaml`](./render.yaml).

### One-click Blueprint setup

1. Push the project to a GitHub, GitLab, or Bitbucket repository.
2. In [Render](https://render.com), select **New → Blueprint**.
3. Connect the repository and select the branch containing `render.yaml`.
4. Click **Apply**. Render will run `npm ci && npm run build` and publish the `dist` folder.

The configuration includes a SPA rewrite so refreshing routes such as `/quiz` and `/topics/diabetes` works correctly in production.

### Manual setup

If you prefer to create the service manually, choose **Static Site** and use:

| Setting | Value |
| :--- | :--- |
| Build Command | `npm ci && npm run build` |
| Publish Directory | `dist` |

Add a rewrite rule from `/*` to `/index.html` with the **Rewrite** action.

---

## 📂 Project Structure

```
health-matters/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx              # React DOM entry point with BrowserRouter
│   ├── App.jsx               # Main layout and route registry
│   ├── index.css             # Tailwind directives and custom scrollbar
│   ├── data/
│   │   ├── topicsData.js     # Medically verified condition content, stats, & charts
│   │   ├── quizData.js       # MCQs, Myth or Fact challenges, & scoring tiers
│   │   └── tipsData.js       # Daily health awareness tips & core features
│   ├── components/
│   │   ├── Navbar.jsx        # Responsive navigation with search & quiz CTA
│   │   ├── Footer.jsx        # Navigation links, newsletter, disclaimer & credits
│   │   ├── MedicalDisclaimer.jsx # Educational disclaimer banner and modal dialog
│   │   ├── SearchModal.jsx   # Ctrl+K global search popup for conditions & symptoms
│   │   ├── BackToTop.jsx     # Smooth floating back-to-top button
│   │   ├── BpCalculator.jsx  # Interactive AHA blood pressure category checker
│   │   └── HydrationCalculator.jsx # Personal daily water intake & cup logger
│   └── pages/
│       ├── HomePage.jsx          # Hero, featured topics, tools preview, & tips
│       ├── ExploreTopicsPage.jsx # Topic directory with categories & search filters
│       ├── TopicDetailPage.jsx  # Dynamic guide (/topics/:topicId) with subtopic tabs
│       ├── QuizPage.jsx          # 3-category interactive quiz hub with LocalStorage
│       └── AboutPage.jsx         # Mission, vision, why health awareness matters, & credits
└── dist/                         # Production build output
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation
```bash
# Navigate to the project directory
cd health-matters

# Install dependencies (already completed)
npm install
```

### Running Locally
To launch the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
To generate an optimized production bundle:
```bash
npm run build
```

### Previewing the Production Build
```bash
npm run preview
```

---

## 📋 Academic Presentation Notes

This project is tailored for an academic or college healthcare IT presentation:
1. **Clinical Accuracy**: Content is structured according to clinical guidelines (AHA, ADA, WHO) while maintaining 8th-grade reading level accessibility.
2. **Pedagogical Workflow**: The **"Read. Interact. Learn. Test Your Knowledge."** pipeline promotes active recall and high retention.
3. **Architecture Scalability**: Zero hardcoded UI strings; all condition data, quiz questions, and tools are decoupled into reusable data models ready for future backend/API integration.
4. **Offline Resilience**: Quiz scores, progress, and historical attempts persist locally via the Web Storage API (`localStorage`).

---

## ⚖️ Medical Disclaimer
*This platform is designed for general health education and awareness only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified physician or healthcare provider with any medical questions.*
