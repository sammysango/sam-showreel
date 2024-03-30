module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Added for global recognition
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off", // Turn off prop-types rule for all files
    "no-unused-vars": ["warn", { vars: "all", args: "none" }], // Adjust unused vars rule
    "no-undef": "off", // Turn off no-undef rule if you're facing issues with global variable recognition
    // Add or adjust rules as needed for your project
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"], // Apply this override to all JavaScript and JSX files
      rules: {
        // Specific rules adjustments for JS and JSX files can go here
      },
    },
  ],
};
