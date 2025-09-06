# Render Deployment Guide for AI Skincare Advisor

This guide will help you deploy your Vite + React app to Render.com.

## 1. Prepare Your Project
- Make sure your code is committed to a GitHub repository (public or private).
- Your `.env.local` file should be renamed to `.env` and committed if you want Render to use it (do not commit secrets to public repos).

## 2. Add a `render.yaml` Blueprint (optional but recommended)
Create a file named `render.yaml` in your project root:

```yaml
services:
  - type: web
    name: ai-skincare-advisor
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm run preview
    envVars:
      - key: GEMINI_API_KEY
        value: <your-gemini-api-key>
    plan: free
```

## 3. Steps to Deploy

### Step 1: Push Your Code to GitHub
- Make sure all changes are committed and pushed.

### Step 2: Create a New Web Service on Render
- Go to https://dashboard.render.com/
- Click "New" > "Web Service"
- Connect your GitHub repo.
- Set the build command: `npm install && npm run build`
- Set the start command: `npm run preview` (or `npm run dev` for development, but `preview` is recommended for production)
- Add your environment variable `GEMINI_API_KEY` in the Render dashboard.
- Choose the Free plan (or upgrade if needed).

### Step 3: Deploy
- Click "Create Web Service".
- Wait for the build and deploy to finish.
- Your app will be live at the provided Render URL.

## 4. Troubleshooting
- If you see build errors, check your build and start commands.
- Make sure your environment variable is set correctly.
- For private repos, connect Render to your GitHub account and grant access.

## 5. Useful Links
- Render Docs: https://render.com/docs
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html

---
For any issues, check the Render logs or ask for help!
