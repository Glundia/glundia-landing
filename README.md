# Glundia Landing Page

Static website for Glundia app with legal documentation (Privacy Policy, Terms of Service, Support).

## Files

- `index.html` - Main landing page
- `privacy.html` - Privacy Policy (GDPR compliant)
- `terms.html` - Terms of Service
- `support.html` - Support page with FAQs
- `styles.css` - Branded CSS (Glundia colors and typography)

## Deployment Options

### Option 1: GitHub Pages (Recommended - Free & Easy)

1. Push this directory to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch and `/glundia-landing` folder
4. Wait 2-3 minutes for deployment
5. Access at `https://[username].github.io/[repo-name]/`

For custom domain (glundia.com):
- Add CNAME file with `glundia.com`
- Configure DNS: CNAME record pointing to `[username].github.io`

### Option 2: Netlify (Free with CI/CD)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login and deploy
netlify login
netlify deploy --dir=glundia-landing --prod
```

Custom domain: Configure in Netlify dashboard → Domain settings

### Option 3: Vercel (Free & Fast)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd glundia-landing
vercel --prod
```

Custom domain: Configure in Vercel dashboard

### Option 4: AWS S3 + CloudFront (Production Grade)

1. Create S3 bucket (enable static website hosting)
2. Upload all files
3. Create CloudFront distribution
4. Point glundia.com DNS to CloudFront

## Testing Locally

```bash
# Using Python
cd glundia-landing
python3 -m http.server 8000

# Using Node.js
npx http-server glundia-landing -p 8000

# Then open: http://localhost:8000
```

## URLs After Deployment

Once deployed, these URLs must be accessible:
- `https://glundia.com/` - Landing page
- `https://glundia.com/privacy` - Privacy Policy (required for app stores)
- `https://glundia.com/terms` - Terms of Service (required for app stores)
- `https://glundia.com/support` - Support page (required for app stores)

## Updating Flutter App URLs

After deployment, verify the URLs in:
- `glundia-front/lib/core/constants/legal_urls.dart`

Current URLs are set to `https://glundia.com/*`. Update if deploying to different domain.

## App Store Requirements Met

✅ Privacy Policy publicly accessible  
✅ Terms of Service publicly accessible  
✅ Support/Contact information publicly accessible  
✅ All pages use app branding  
✅ Mobile responsive design  
✅ GDPR compliance information included  

## Brand Colors Used

- Dark Purple: #1A0028
- Light Purple: #D0CEFD
- Cream: #EDEDD9
- Pink: #FCDBD0

## Fonts

- McQueenDisplay (headings) - loaded from Google Fonts fallback
- McQueenText (body) - loaded from Google Fonts fallback

Note: Custom font files would need to be added for exact brand match.
