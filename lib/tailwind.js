// lib/tailwind.js
import { create } from 'twrnc';

// Create the customized version...
const tw = create(require(`../tailwind.config`)); // <- your path may differ

// Export the customized `tw` function
export default tw;
