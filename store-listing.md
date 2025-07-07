# Chrome Web Store Listing Information

## Extension Details

### Name
AI Confidentiality Checker - NoLeakAI

### Short Description (132 characters max)
Protects you from accidentally sharing API keys and sensitive data with AI services like ChatGPT.

### Detailed Description
🔒 **Prevent Accidental API Key Sharing on ChatGPT**

NoLeakAI is a focused security extension that detects and warns you before sending API keys, tokens, and other sensitive data to ChatGPT. It's designed specifically to prevent accidental data leaks when chatting with AI assistants.

**🛡️ What It Protects:**
• OpenAI API keys (sk-...)
• Google API keys (AIza...)
• OAuth access tokens
• JWT tokens
• Generic secrets and API keys
• Database credentials
• Private keys and certificates

**⚡ How It Works:**
1. Type your message normally in ChatGPT (currently supported)
2. NoLeakAI silently monitors your input in real-time
3. If sensitive data is detected, you get an immediate warning
4. Choose to cancel or proceed - you're always in control
5. Stay protected without any performance impact
6. Support for Google Gemini, Claude, and other platforms coming soon!

**🎯 Supported Platforms:**
• **ChatGPT** (chat.openai.com) - ✅ Currently Supported
• **Google Gemini** (gemini.google.com) - 🔄 Coming Soon
• **Claude** (claude.ai) - 🔄 Coming Soon
• **Other AI platforms** - 🔄 Planned for future updates

**🔐 Privacy-First Design:**
✅ Zero data collection - everything stays in your browser
✅ No external servers - complete privacy
✅ No tracking or analytics
✅ Open source and transparent
✅ Lightweight and fast

**💡 Perfect For:**
• Developers who share code with ChatGPT
• Anyone working with API keys and tokens
• Users who want to prevent accidental data leaks

**🚀 Why Choose NoLeakAI:**
• **Single purpose** - focused solely on preventing API key leaks on ChatGPT
• **Real-time detection** - catches sensitive data before sending
• **Simple warnings** - clear alerts when sensitive data is detected
• **Privacy-focused** - no data collection, runs entirely in your browser

**📈 Simple, focused protection** for ChatGPT users who work with API keys and sensitive data. Don't let one accidental paste compromise your security - install NoLeakAI today and chat with confidence!

**🔧 Technical Details:**
• Manifest V3 compliant
• Minimal permissions required
• Focused on ChatGPT integration
• Privacy-first design

Stay safe, stay secure, stay protected with NoLeakAI! 🛡️

### Category
Productivity

### Language
English

### Country/Region
United States (or your country)

## Images Required

### Icon (128x128 PNG)
Use your existing `icon.png`

### Screenshots (1280x800 or 640x400 PNG)
You'll need to create screenshots showing:
1. Extension popup
2. Warning dialog on ChatGPT
3. Extension working on different AI platforms

### Promotional Images (Optional)
- Small tile (440x280)
- Large tile (920x680)

## Privacy Policy
Since your extension doesn't collect any data, you can use a simple privacy policy:

"Privacy Policy for NoLeakAI

This extension does not collect, store, or transmit any personal data. All processing happens locally in your browser. We do not have access to any information you type or any data about your usage of this extension."

## Host Permission Justification

**Permission Requested:** `https://chat.openai.com/*`

**Justification:** This permission is required for the extension to fulfill its single purpose of detecting sensitive data before it's sent to ChatGPT. The extension needs to:

1. **Inject content script** - To monitor the text input field on chat.openai.com
2. **Access page content** - To read the user's typed text before sending
3. **Intercept form submission** - To prevent sending when sensitive data is detected

**What the extension does with this permission:**
- Monitors the ChatGPT text input area for sensitive patterns
- Reads only the text content that the user is about to send
- Shows a warning dialog if sensitive data is detected
- Does NOT collect, store, or transmit any data
- Does NOT access any other parts of the page or browser

**Why this permission is minimal and necessary:**
- Only requests access to chat.openai.com (ChatGPT)
- No access to other websites or browser data
- Required for the core functionality to work
- No alternative way to achieve the same security benefit

## Data Usage Disclosure

**NoLeakAI does NOT collect any user data.**

### Data Collection Categories - All Answered "NO":

| Category | Collection Status | Explanation |
|----------|------------------|-------------|
| **Personally identifiable information** | ❌ NO | No names, emails, addresses, or IDs collected |
| **Health information** | ❌ NO | No medical or health data accessed |
| **Financial and payment information** | ❌ NO | No financial data or payment info collected |
| **Authentication information** | ❌ NO | No passwords, credentials, or PINs collected |
| **Personal communications** | ❌ NO | No emails, texts, or chat messages stored |
| **Location** | ❌ NO | No GPS, IP address, or location data collected |
| **Web history** | ❌ NO | No browsing history or page visits tracked |
| **User activity** | ❌ NO | No clicks, keystrokes, or activity monitoring |
| **Website content** | ❌ NO | No text, images, or content stored |

### How NoLeakAI Works Without Data Collection:

1. **Local Processing Only** - All text analysis happens in your browser
2. **No Data Storage** - Nothing is saved locally or remotely
3. **No Network Requests** - Extension never sends data to external servers
4. **Temporary Memory** - Text is only read temporarily for pattern detection
5. **Immediate Deletion** - No data persists after the check is complete

### Privacy Commitment:

- **Zero Data Collection** - Extension operates without collecting any user information
- **Local Processing** - All functionality runs entirely in your browser
- **No Tracking** - No analytics, monitoring, or user tracking
- **Transparent** - Open source code with no hidden data collection

## Support Site
GitHub repository URL (if you create one)

## Store Listing URL
Will be generated after submission

## Pricing
Free

## Distribution
Public (available to everyone) 