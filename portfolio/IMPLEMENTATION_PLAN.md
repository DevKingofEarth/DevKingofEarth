# Portfolio Optimization Plan - Mobile-First Redesign

## Executive Summary

Complete restructuring of portfolio to create an honest, mobile-optimized presentation that differentiates between:
1. **Professional Identity** (Header)
2. **Domain Expertise** (Knowledge areas)
3. **Active Tech Stack** (Tools actively used)
4. **Key Skills** (Demonstrated abilities)

**Core Philosophy:** Elegant minimalism for mobile users. Leave detailed claims for CV.

---

## Current Issues & Corrections

### 1. Header/Subtitle Correction
**Current:** `EEE Graduate | ML Researcher | Embedded Systems`  
**New:** `EEE Graduate | ML Researcher | Ex-Intern C-DAC`

**Rationale:**
- "Ex-Intern C-DAC" is a concrete credential (C-DAC CINE Silchar)
- More impressive than generic "Embedded Systems"
- Shows research experience at prestigious institution
- Aligns with IEEE publication credibility

---

## Section Restructuring Strategy

### NEW STRUCTURE (Mobile-First)

```
┌─────────────────────────────┐
│ HERO                        │
│ Name + New Subtitle         │
├─────────────────────────────┤
│ ABOUT (Keep current)        │
│ Short, impactful summary    │
├─────────────────────────────┤
│ DOMAIN EXPERTISE (2 cards)  │
│ Knowledge areas, not tools  │
├─────────────────────────────┤
│ TECH STACK (2 cards)        │
│ Active tools + proficiency  │
├─────────────────────────────┤
│ KEY SKILLS (1 card)         │
│ Demonstrated abilities      │
├─────────────────────────────┤
│ PROJECTS (Keep 3 active)    │
│ Repo-Crafter, AIEcoinNix,   │
│ pBMSLSuite-O                │
├─────────────────────────────┤
│ PUBLICATION (Keep)          │
│ IEEE FRoZN paper            │
├─────────────────────────────┤
│ CV DOWNLOAD (New section)   │
│ PDF primary + rxresu link   │
├─────────────────────────────┤
│ CONTACT (Keep)              │
│ Chennai, Tamil Nadu         │
└─────────────────────────────┘
```

**Total:** 5 skill cards → 5 cards (better organized)  
**Mobile Impact:** Scrollable, scannable in 30 seconds

---

## Detailed Section Content

### SECTION 1: Domain Expertise (2 Cards)
*Knowledge areas where you have demonstrated competence*

**Card 1: Machine Learning & Research**
```
Machine Learning & Research
────────────────────────────
• Network-on-Chip (NoC) - IEEE paper focus
• Reinforcement Learning - Q-Learning, GNN
• Deep Learning - PyTorch
• Research: C-DAC CINE Silchar (6 months)
```
**Evidence:** FRoZN paper, C-DAC internship

**Card 2: Embedded Systems & IoT**
```
Embedded Systems & IoT
──────────────────────
• ESP32/ESP8266 - Active development
• Battery Management Systems (BMS)
• Hardware-Software Integration
• IoT Protocols & Connectivity
```
**Evidence:** pBMSLSuite-O project, academic background

**Note:** Domain knowledge (Power Systems, Renewables, EVs) → Move to "Key Skills" or CV only

---

### SECTION 2: Tech Stack (2 Cards)
*Tools you actively use and maintain*

**Card 1: Languages & Core Tools**
```
Languages & Core Tools
──────────────────────
• Python - Primary language
• C/C++ - Embedded systems
• Bash/Shell - Automation (Repo-Crafter)
• Git - Version control & workflows
```
**Proficiency:** Active use in all 3 projects

**Card 2: Infrastructure & Platforms**
```
Infrastructure & Platforms
──────────────────────────
• NixOS - Daily driver (laptop maintenance)
• Linux - Ubuntu (C-DAC), NixOS (personal)
• Docker/Containers - AIEcoinNix
• TypeScript - AIEcoinNix project
```
**Proficiency:** NixOS is unique differentiator

**What to REMOVE from Tech Stack:**
- ❌ Java/Kotlin (academic only, not in active projects)
- ❌ Android Studio (final year project only, no code available)
- ❌ MATLAB (college labs only, not current)
- ❌ Google Colab (tool used, not a skill)
- ❌ Gem5 (tried/experimented, not active)
- ❌ Arch Linux (distro hop phase, few days only)
- ❌ Nobara (previous setup, not current)
- ❌ KiCAD/FreeCAD (not active, leave for CV)

**What to mention in CV instead:**
- Full tool list (MATLAB, Gem5 experiments, CAD tools)
- Ubuntu internship experience
- Academic tools and lab work

---

### SECTION 3: Key Skills (1 Card)
*Demonstrated abilities across projects*

```
Key Competencies
────────────────
• System Design - BMS architecture (pBMSLSuite-O)
• Automation - Git workflows (Repo-Crafter)
• Infrastructure - Self-hosted LLM stack (AIEcoinNix)
• Research - NoC optimization (IEEE paper)
• Technical Writing - Documentation, READMEs
```

**Soft Skills:** Leave for CV only (as you noted - subjective)

---

## CV Integration Strategy

### NEW SECTION: "Download My CV"

**Placement:** After Projects, before Contact

**Layout (Mobile-Optimized):**
```
┌─────────────────────────────────────┐
│ Want the full picture?              │
│                                     │
│ [📄 Download CV (PDF)]              │
│                                     │
│ Or view updated version online:     │
│ rxresu.me →                         │
│                                     │
│ Includes: Certifications, detailed  │
│ tool list, full project history,    │
│ academic scores, and more.          │
└─────────────────────────────────────┘
```

**Implementation:**
- Primary: PDF download (fast, reliable, ATS-friendly)
- Secondary: rxresu.me link (always current)
- Text hint: "Includes certifications, detailed tool list..."

**Why this works:**
- Mobile users tap once for PDF
- Desktop users can choose
- Sets expectations for CV content
- No clutter in main portfolio

---

## Visual Hierarchy for Mobile

### Mobile Breakpoints Strategy

**Mobile (< 576px):**
- Single column layout
- Large touch targets (buttons 44px min)
- Abbreviated descriptions
- Collapsed sections (optional)

**Tablet (576px - 968px):**
- 2-column skill cards
- Full descriptions
- Side-by-side contact info

**Desktop (> 968px):**
- Current layout optimized
- Max-width containers
- Hover effects restored

### Responsive Typography Strategy

**CRITICAL: Desktop fonts stay LARGE, mobile adapts via media queries**

```css
/* DESKTOP (default) - Keep current large fonts */
.hero h1 { font-size: 4.5rem; }
.subtitle { font-size: 1.5rem; }
.section-title { font-size: 2.5rem; }
body { font-size: 18px; }

/* MOBILE ONLY - Adapted inside media query */
@media (max-width: 576px) {
  .hero h1 { font-size: 2.5rem; }      /* Was 4.5rem */
  .subtitle { font-size: 1.1rem; }     /* Was 1.5rem */
  .section-title { font-size: 1.75rem; } /* Was 2.5rem */
  body { font-size: 16px; }            /* Was 18px */
}
```

**Rule:** Desktop fonts are NEVER reduced. Mobile gets special treatment ONLY inside `@media (max-width: 576px)` blocks.

---

## Honesty Guidelines

### What to Claim in Portfolio vs CV

| Claim | Portfolio | CV | Reason |
|-------|-----------|-----|--------|
| NixOS expertise | ✅ YES | ✅ | Daily driver, active project |
| ESP32/BMS | ✅ YES | ✅ | Active project (pBMSLSuite-O) |
| ML/NoC research | ✅ YES | ✅ | IEEE paper, C-DAC internship |
| Python/C/Bash | ✅ YES | ✅ | Used in all projects |
| Git automation | ✅ YES | ✅ | Repo-Crafter project |
| Docker | ✅ MENTION | ✅ | AIEcoinNix uses it |
| Ubuntu/Linux | ✅ YES | ✅ | C-DAC + personal use |
| Java/Kotlin | ❌ NO | ✅ | Academic only |
| MATLAB | ❌ NO | ✅ | College labs only |
| Gem5 | ❌ NO | ✅ | Experimented, not active |
| Android dev | ❌ NO | ✅ | Project true, no code/hardware |
| Arch Linux | ❌ NO | ⚠️ | Distro hop, few days |
| CAD tools | ❌ NO | ✅ | Not active currently |
| Soft skills | ❌ NO | ✅ | Subjective |

**Principle:** Portfolio = proven competence. CV = full history.

---

## Implementation Steps

### Phase 1: Header & Navigation
1. Update subtitle to: `EEE Graduate | ML Researcher | Ex-Intern C-DAC`
2. Verify mobile nav works (hamburger menu)
3. Ensure smooth scroll to sections

### Phase 2: Skills Section Restructure
1. Remove all 6 existing skill cards
2. Create 5 new cards:
   - Domain Expertise (2 cards)
   - Tech Stack (2 cards)
   - Key Skills (1 card)
3. Populate with honest assessment from above
4. Remove Java, Kotlin, GANs, etc.

### Phase 3: Add CV Download Section
1. Create new section between Projects and Contact
2. Add PDF download button (primary CTA)
3. Add rxresu.me link (secondary)
4. Include descriptive text

### Phase 4: Mobile Optimization
1. Reduce font sizes for mobile breakpoint
2. Ensure 44px minimum touch targets
3. Test single-column layout
4. Optimize images (if any)

### Phase 5: Polish & Review
1. Review all content for honesty
2. Check mobile responsiveness
3. Verify all links work
4. Test CV download

---

## Success Criteria

- [ ] Subtitle updated to "Ex-Intern C-DAC"
- [ ] Skills reorganized into 5 cards (Domain 2, Tech 2, Skills 1)
- [ ] Removed: Java, Kotlin, GANs, Arch Linux mention, CAD tools
- [ ] Added: CV download section with PDF + rxresu.me link
- [ ] Mobile-optimized typography and spacing
- [ ] All content honest and defensible
- [ ] No soft skills in portfolio (CV only)
- [ ] Ready for GitHub Pages deployment

---

## Final Notes

**Your Unique Positioning:**
- Recent EEE grad with IEEE publication (rare)
- C-DAC research experience (credibility)
- NixOS user (unique in India market)
- Active open-source contributor (3 projects)
- Chennai-based (target local + remote jobs)

**What Makes You Stand Out:**
1. IEEE paper + C-DAC = Research credibility
2. NixOS + AIEcoinNix = Modern infrastructure skills
3. BMS + ESP32 = Practical embedded experience
4. Honest presentation = Trust with recruiters

**Remember:** Better to show 5 strong skills than 15 weak ones.

---

**Plan Created:** Based on honest assessment  
**Implementation:** Builder to execute  
**Target:** Mobile-first, honest, elegant portfolio

