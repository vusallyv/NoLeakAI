# NoLeakAI Test Prompts

Use these prompts to test your extension's detection capabilities. Each prompt contains sensitive data that should trigger a warning.

## 🔑 OpenAI API Key Tests

### Test 1: Basic OpenAI Key
```
Can you help me debug this API call? Here's my OpenAI key: sk-1234567890abcdef1234567890abcd
```

### Test 2: OpenAI Key in Code Block
```
Here's my Python code for the OpenAI API:

```python
import openai
openai.api_key = "sk-1234567890abcdef1234567890abcd"
response = openai.ChatCompletion.create(...)
```
```

### Test 3: OpenAI Key in JSON
```
My configuration file looks like this:
{
  "openai_key": "sk-1234567890abcdef1234567890abcd",
  "model": "gpt-4"
}
```

## 🔐 Google API Key Tests

### Test 4: Basic Google API Key
```
I'm trying to use Google Maps API. My key is: AIzaSyB1234567890abcdefghijklmnopqrstuvwxyz
```

### Test 5: Google API Key in URL
```
Here's my API endpoint: https://maps.googleapis.com/maps/api/geocode/json?address=test&key=AIzaSyB1234567890abcdefghijklmnopqrstuvwxyz
```

### Test 6: Google API Key in JavaScript
```
const googleApiKey = "AIzaSyB1234567890abcdefghijklmnopqrstuvwxyz";
```

## 🔒 OAuth Token Tests

### Test 7: OAuth Access Token
```
My OAuth configuration:
{
  "access_token": "ya29.a0AfH6SMB1234567890abcdefghijklmnopqrstuvwxyz",
  "refresh_token": "1//04d1234567890abcdefghijklmnopqrstuvwxyz"
}
```

### Test 8: OAuth Token in Headers
```
Authorization: Bearer ya29.a0AfH6SMB1234567890abcdefghijklmnopqrstuvwxyz
```

## 🎫 JWT Token Tests

### Test 9: Basic JWT Token
```
Here's my JWT token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

### Test 10: JWT in Authorization Header
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

## 🔐 Generic Secret Tests

### Test 11: Generic Secret
```
My database configuration:
{
  "secret": "my-super-secret-password-123",
  "database": "production"
}
```

### Test 12: API Key Pattern
```
const config = {
  "api_key": "my-api-key-123456789",
  "api_secret": "my-api-secret-abcdefgh"
};
```

### Test 13: Mixed Secrets
```
Here are my credentials:
- API Key: my-api-key-123456789
- Secret: my-super-secret-password-123
- Database Password: db-password-456
```

## 🗄️ Database Credentials Tests

### Test 14: Database Connection String
```
My database connection: postgresql://username:my-super-secret-password-123@localhost:5432/database
```

### Test 15: MongoDB Connection
```
mongodb://username:my-super-secret-password-123@localhost:27017/database
```

## 🔑 Private Key Tests

### Test 16: SSH Private Key
```
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA1234567890abcdefghijklmnopqrstuvwxyz
-----END RSA PRIVATE KEY-----
```

### Test 17: PGP Private Key
```
-----BEGIN PGP PRIVATE KEY BLOCK-----
Version: GnuPG v2.0.22 (GNU/Linux)

lQHYBGMAAAAAABEBAAG0H0pvaG4gRG9lIDxqb2huQGV4YW1wbGUuY29tPokB
HAQQAQIABgUCYwQAAAoJEFX8+JkQBaMPI6wP/1234567890abcdefghijklmnopqrstuvwxyz
-----END PGP PRIVATE KEY BLOCK-----
```

## 🧪 Edge Cases

### Test 18: Multiple Keys in One Message
```
I have multiple API keys:
- OpenAI: sk-1234567890abcdef1234567890abcd
- Google: AIzaSyB1234567890abcdefghijklmnopqrstuvwxyz
- JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

### Test 19: Keys in Comments
```
// My OpenAI key: sk-1234567890abcdef1234567890abcd
// My Google key: AIzaSyB1234567890abcdefghijklmnopqrstuvwxyz
```

### Test 20: Keys in Markdown
```
# Configuration

## API Keys
- **OpenAI**: `sk-1234567890abcdef1234567890abcd`
- **Google**: `AIzaSyB1234567890abcdefghijklmnopqrstuvwxyz`
```

## ✅ Safe Prompts (Should NOT Trigger)

### Safe 1: No Sensitive Data
```
Can you help me write a Python function to calculate the Fibonacci sequence?
```

### Safe 2: Fake Keys (Too Short)
```
My fake key: sk-1234567890
```

### Safe 3: Regular Text
```
I'm learning about API development and want to understand how authentication works.
```

### Safe 4: Code Without Keys
```
```python
def hello_world():
    print("Hello, World!")
```
```

## 🧪 Testing Instructions

1. **Install your extension** in Chrome
2. **Go to ChatGPT** (chat.openai.com)
3. **Copy and paste** each test prompt
4. **Try to send** the message (Enter key or Send button)
5. **Verify** that the warning dialog appears for sensitive prompts
6. **Verify** that no warning appears for safe prompts

## 📊 Expected Results

| Test | Should Trigger Warning | Pattern Type |
|------|----------------------|--------------|
| 1-3 | ✅ Yes | OpenAI API Key |
| 4-6 | ✅ Yes | Google API Key |
| 7-8 | ✅ Yes | OAuth Token |
| 9-10 | ✅ Yes | JWT Token |
| 11-13 | ✅ Yes | Generic Secret |
| 14-15 | ✅ Yes | Database Credentials |
| 16-17 | ✅ Yes | Private Keys |
| 18-20 | ✅ Yes | Multiple Patterns |
| Safe 1-4 | ❌ No | No Sensitive Data |

## 🔧 Debugging Tips

- Check browser console for any errors
- Verify the extension is enabled
- Test on different AI platforms (ChatGPT, Gemini, Claude)
- Try both Enter key and Send button
- Check if patterns are being detected correctly 