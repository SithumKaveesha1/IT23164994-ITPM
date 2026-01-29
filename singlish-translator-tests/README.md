# Singlish to Sinhala Translator - Automated Testing

This project contains automated tests for the Singlish to Sinhala translator application at https://www.swifttranslator.com/

## 📋 Test Coverage

### Functional Tests
- **24 Positive Test Cases**: Verify correct Singlish to Sinhala conversion
- **10 Negative Test Cases**: Test system behavior with invalid/edge case inputs
- **1 UI Test Case**: Verify user interface functionality

### Test Categories
The test suite covers:
- Sentence structures (simple, compound, complex)
- Interrogative and imperative forms
- Positive and negative sentences
- Daily language usage and greetings
- Word combinations and phrase patterns
- Grammatical forms (tense, negation, pronouns)
- Input length variations (short, medium, long)
- Mixed language content (Singlish + English)
- Punctuation, numbers, and formatting
- Informal language and slang
- UI functionality

## 🚀 Prerequisites

Before running the tests, ensure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

## 📦 Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd singlish-translator-tests
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## ▶️ Running Tests

### Run all tests (headless mode)
```bash
npm test
```

### Run tests with browser visible (headed mode)
```bash
npm run test:headed
```

### Run tests with Playwright UI mode (interactive)
```bash
npm run test:ui
```

### View test report after execution
```bash
npm run test:report
```

## 📁 Project Structure

```
singlish-translator-tests/
├── tests/
│   └── translator.spec.js    # All test cases
├── playwright.config.js        # Playwright configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## 📊 Test Results

After running tests, you can:
1. View console output for immediate results
2. Open the HTML report: `npm run test:report`
3. Check screenshots and videos (generated on failures)

## 🔧 Configuration

The `playwright.config.js` file contains:
- Base URL: https://www.swifttranslator.com
- Browser: Chromium
- Test timeout: 60 seconds
- Screenshots and videos on failure
- Automatic retries on failure (2 retries in CI)

## 📝 Test Case Naming Convention

- **Pos_Fun_XXXX**: Positive Functional Test Cases
- **Neg_Fun_XXXX**: Negative Functional Test Cases
- **Pos_UI_XXXX**: Positive UI Test Cases
- **Neg_UI_XXXX**: Negative UI Test Cases

## 🐛 Troubleshooting

### Tests failing due to element not found
- The website structure may have changed
- Check if the website is accessible
- Verify element locators in the test file

### Slow test execution
- Tests include wait times for real-time translation
- Increase timeout in `playwright.config.js` if needed

### Browser installation issues
```bash
npx playwright install --force
```

## 📄 Excel Test Case Documentation

A comprehensive Excel file (`test_cases.xlsx`) is included with:
- All 35 test cases documented
- Expected outputs
- Test coverage details
- Accuracy justifications

## 👤 Author

Created as part of IT3040 - ITPM Assignment 1

## 📅 Last Updated

January 2026
