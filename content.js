const SENSITIVE_PATTERNS = [
  /sk-[A-Za-z0-9]{20,}/g, // OpenAI API key (reduced from 32 to 20 for testing)
  /AIza[0-9A-Za-z-_]{35}/g, // Google API key
  /"access_token"\s*:\s*"[^"]+"/g, // OAuth token
  /"secret"\s*:\s*"[^"]+"/gi, // Generic secret
  /"api[_-]?key"\s*:\s*"[^"]+"/gi, // API key
  /eyJ[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+/g, // JWT
  // Add more patterns as needed
];

// Store the last known value
let lastKnownValue = '';

function checkForSensitiveData(text) {
  
  // Test the OpenAI pattern directly
  const openaiPattern = /sk-[A-Za-z0-9]{20,}/g;
  const testString = 'sk-1234567890abcdef1234567890abcd';
  
  // Reset the regex (important for global regex)
  openaiPattern.lastIndex = 0;
  
  for (let i = 0; i < SENSITIVE_PATTERNS.length; i++) {
    const pattern = SENSITIVE_PATTERNS[i];
    // Reset global regex before testing
    pattern.lastIndex = 0;
    const result = pattern.test(text);
    
    if (result) {
      return true;
    }
  }
  
  return false;
}

// Update lastKnownValue whenever input changes
function updateLastKnownValue(e) {
  // Don't update if Enter key is pressed
  if (e && (e.key === 'Enter' || e.keyCode === 13)) {
    return;
  }
  
  const promptP = document.querySelector('#prompt-textarea > p');
  if (promptP) {
    lastKnownValue = promptP.innerText;
  }
}

// Listen for input changes
document.addEventListener('input', updateLastKnownValue);

// Listen for Enter key press
window.addEventListener('keydown', function(e) {
  if (
    (e.key === 'Enter' || e.keyCode === 13) &&
    !e.shiftKey &&
    lastKnownValue
  ) {
    const hasSensitiveData = checkForSensitiveData(lastKnownValue);
    
    if (hasSensitiveData) {
      const proceed = confirm("⚠️ Your message contains sensitive information (e.g., API key, token).\n\nDo you still want to send it?");
      if (!proceed) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
      } else {
      }
    }
  }
}, true);

// Listen for send button clicks
document.addEventListener('click', function(e) {
  // Check if the clicked element is the send button
  const sendButton = e.target.closest('button[data-testid="send-button"]');
  if (sendButton && lastKnownValue) {
    const hasSensitiveData = checkForSensitiveData(lastKnownValue);
    
    if (hasSensitiveData) {
      const proceed = confirm("⚠️ Your message contains sensitive information (e.g., API key, token).\n\nDo you still want to send it?");
      if (!proceed) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
      } else {
      }
    }
  }
}, true);