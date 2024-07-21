# SMOLBOIS

🏋️ The SMOLBOIS app delivers personalized workout plans tailored to your goals and fitness level. \
With its easy to navigate interface, you can select through muscle groups, workout splits, and \
your goals to generate your 💪SMOLDIER plan today🗒️. 
No two plans are the same so you'll never get bored! \
Click our [link](https://smol-bois.vercel.app/) to get started!

-------------------------------------------

# Tailwind CSS Styles Not Rendering

## Problem
I encountered an issue where Tailwind CSS styles were not rendering correctly in my project, despite following various suggestions from online forums.

## Solution
The problem stemmed from spaces in the path specified in the `tailwindcss.config` file, which determines the files and directories where Tailwind CSS styles should be applied. Here is the corrected configuration:

```javascript
module.exports = {
  content: [
    "./index.html",
    './src/**/*.{js,ts,jsx,tsx}', // Issue: spaces between the file types
  ],
  // Other configurations...
};

