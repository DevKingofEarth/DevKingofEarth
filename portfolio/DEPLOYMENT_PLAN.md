# Deployment Strategy Plan - Dharrun Singh Portfolio

## Executive Summary

Deploy portfolio to existing `DevKingofEarth/DevKingofEarth` repository, leveraging both the decorated README (profile display) and GitHub Pages (portfolio website). Use rxresu.me live link for CV (not PDF) to ensure always-current content.

---

## Decision: CV Strategy

### ✅ RECOMMENDATION: Use rxresu.me Live Link

**Why NOT PDF or JSON:**

| Format | Pros | Cons | Verdict |
|--------|------|------|---------|
| **rxresu.me Link** | Always current, easy updates, no repo bloat | Requires internet | ✅ **WINNER** |
| **PDF Upload** | Works offline, ATS-compatible | Stale quickly, repo bloat, manual updates | ❌ |
| **JSON File** | Machine-readable, structured | Recruiters can't read JSON easily | ❌ |

**Key Insight:** Your CV changes as you gain experience. rxresu.me is your "source of truth" — link to it directly.

### Technical Implementation

**HTML Button:**
```html
<a href="https://rxresu.me/devkingofearth/dharrun-singh-cv" 
   target="_blank" 
   rel="noopener noreferrer"
   class="btn btn-primary">
  📄 View My CV
</a>
```

**Why NOT `download` attribute:**
- `download` attribute is **blocked by browsers** for cross-origin URLs (security feature)
- rxresu.me is different domain → download won't work
- `target="_blank"` opens in new tab → user can save manually

---

## Deployment Architecture

### Repository Strategy: Use Existing Profile Repo

**Repository:** `DevKingofEarth/DevKingofEarth` (already exists with decorated README)

**Structure:**
```
DevKingofEarth/
├── README.md              # ✓ Already exists (decorated profile)
├── index.html             # ← ADD: Portfolio website (new)
├── style.css              # ← ADD: Styles (from portfolio/)
├── animations.js          # ← ADD: Scripts (from portfolio/)
│
└── assets/                # ← ADD: Static assets
    └── (images if any)
```

**URLs:**
- Profile: `https://github.com/DevKingofEarth` → Shows README.md
- Website: `https://devkingofearth.github.io` → Shows index.html

### How It Works

| File | Purpose | URL | Result |
|------|---------|-----|--------|
| `README.md` | Profile display | github.com/devkingofearth | Shows decorated README |
| `index.html` | Portfolio site | devkingofearth.github.io | Shows portfolio website |

**They coexist perfectly** — GitHub shows README on profile, GitHub Pages serves index.html as website.

---

## Integration Strategy

### 1. README → Website Link

In your decorated `README.md`, add prominent link to portfolio:

```markdown
## 🌐 Portfolio
[![Portfolio](https://img.shields.io/badge/Portfolio-View%20Site-blue?style=for-the-badge)](https://devkingofearth.github.io)

Check out my full portfolio: **[devkingofearth.github.io](https://devkingofearth.github.io)**
```

### 2. Website → README Link

In `index.html` footer, link back to GitHub profile:

```html
<footer class="footer">
  <p>
    <a href="https://github.com/DevKingofEarth" target="_blank">GitHub Profile</a> | 
    <a href="https://github.com/DevKingofEarth/DevKingofEarth">View README</a>
  </p>
</footer>
```

### Visual Flow

```
Recruiter visits github.com/devkingofearth
        ↓
┌─────────────────────────────────────┐
│  SEES: Decorated README.md          │
│  • Badges, stats, intro             │
│  • Link: "View Portfolio →"         │
└─────────────────────────────────────┘
        ↓
Clicks link to devkingofearth.github.io
        ↓
┌─────────────────────────────────────┐
│  SEES: Full Portfolio Website       │
│  • Projects, skills, contact        │
│  • CV download link                 │
│  • Rich HTML/CSS/JS experience      │
└─────────────────────────────────────┘
```

---

## Implementation Steps

### Phase 1: Prepare Files

1. **Copy portfolio files to repo root:**
   - `index.html` → `DevKingofEarth/index.html`
   - `style.css` → `DevKingofEarth/style.css`
   - `animations.js` → `DevKingofEarth/animations.js`

2. **Update CV link in index.html:**
   ```html
   <!-- Change from local PDF to rxresu.me -->
   <a href="https://rxresu.me/devkingofearth/dharrun-singh-cv" 
      target="_blank" 
      rel="noopener noreferrer"
      class="btn btn-primary">
     📄 View My CV
   </a>
   ```

3. **Update LinkedIn URL (if not already done):**
   ```html
   <a href="https://www.linkedin.com/in/dharrun-singh" target="_blank">
   ```

### Phase 2: Configure GitHub Pages

1. **Go to:** `https://github.com/DevKingofEarth/DevKingofEarth/settings`

2. **Navigate to:** Pages (left sidebar)

3. **Set Source:**
   - Branch: `main`
   - Folder: `/ (root)`

4. **Save** and wait 2-10 minutes

5. **Verify:** Visit `https://devkingofearth.github.io`

### Phase 3: Update README

Add to existing decorated README.md:

```markdown
## 🚀 Quick Links

[![Portfolio](https://img.shields.io/badge/🌐%20Portfolio-devkingofearth.github.io-blue)](https://devkingofearth.github.io)
[![CV](https://img.shields.io/badge/📄%20CV-View%20Resume-green)](https://rxresu.me/devkingofearth/dharrun-singh-cv)
[![LinkedIn](https://img.shields.io/badge/💼%20LinkedIn-Connect-blue)](https://linkedin.com/in/dharrun-singh)

---
```

### Phase 4: Test & Verify

**Desktop Test:**
- [ ] `https://devkingofearth.github.io` loads
- [ ] All sections display correctly
- [ ] CV link opens rxresu.me in new tab
- [ ] LinkedIn link works
- [ ] GitHub profile link works

**Mobile Test:**
- [ ] Site is responsive on phone
- [ ] Touch targets work (buttons)
- [ ] Text is readable

**Cross-Browser:**
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)

---

## Post-Deployment Workflow

### When You Update CV

1. **Edit on rxresu.me** (your source of truth)
2. **No code changes needed** — link automatically shows latest
3. **Profile stays current** without git commits

### When You Update Portfolio

1. **Edit files locally** in portfolio folder
2. **Copy to DevKingofEarth repo**
3. **Commit & push:**
   ```bash
   git add .
   git commit -m "Update portfolio: [description]"
   git push origin main
   ```
4. **Wait 2-10 minutes** for GitHub Pages to update

---

## Benefits of This Strategy

| Benefit | Explanation |
|---------|-------------|
| **Single source of truth** | CV lives on rxresu.me, always current |
| **No maintenance burden** | No PDF files to update in repo |
| **Professional appearance** | Full portfolio website + decorated README |
| **Recruiter-friendly** | Direct CV access, no download friction |
| **Cost: $0** | GitHub Pages is free |
| **Custom domain ready** | Can add dharrunsingh.dev later |

---

## Success Criteria

- [ ] `https://devkingofearth.github.io` live and functional
- [ ] README.md links to portfolio prominently
- [ ] Portfolio links to rxresu.me CV
- [ ] Mobile-responsive design
- [ ] All social links functional (LinkedIn, GitHub)
- [ ] 0 broken links

---

**Created by Planner**  
**Ready for Builder execution**
