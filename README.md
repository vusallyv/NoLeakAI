# NoLeakAI - AI Confidentiality Checker

A Chrome extension that protects you from accidentally sharing sensitive information (like API keys, tokens, and secrets) with AI services like ChatGPT.

## Features

- 🔒 **Real-time Detection**: Monitors your input for sensitive patterns
- ⚠️ **Smart Warnings**: Alerts you before sending potentially sensitive data
- 🎯 **Targeted Protection**: Works on ChatGPT and other AI platforms
- 🚀 **Lightweight**: Minimal performance impact

## Supported Patterns

- OpenAI API keys (`sk-...`)
- Google API keys (`AIza...`)
- OAuth access tokens
- Generic secrets and API keys
- JWT tokens

## Installation

### Method 1: Chrome Web Store (Recommended)
1. Visit the Chrome Web Store (link will be added once published)
2. Click "Add to Chrome"
3. Confirm the installation

### Method 2: Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked"
5. Select the folder containing your extension files

## Usage

1. Navigate to [ChatGPT](https://chat.openai.com) or other supported AI platforms
2. Type your message as usual
3. If sensitive data is detected, you'll see a warning dialog
4. Choose whether to proceed or cancel sending

## Supported Platforms

- ChatGPT (chat.openai.com)
- ChatGPT (chatgpt.com)
- Google Gemini (gemini.google.com)
- Claude (claude.ai)

## Development

### File Structure
```
NoLeakAI/
├── manifest.json      # Extension configuration
├── content.js         # Main functionality
├── popup.html         # Extension popup
├── icon.png           # Extension icon
└── README.md          # This file
```

### Building for Distribution

1. **For Chrome Web Store:**
   - Create a ZIP file of all extension files
   - Submit to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)

2. **For Direct Sharing:**
   - Share the entire folder or create a ZIP file
   - Recipients can install using Method 2 above

## Privacy

This extension:
- ✅ Runs entirely in your browser
- ✅ Does not send any data to external servers
- ✅ Only monitors text you type in supported AI platforms
- ✅ Respects your privacy and data

## Contributing

Feel free to submit issues and enhancement requests!

## License

See [LICENSE](LICENSE) file for details.