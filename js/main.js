import {
  addSubPlansToDOM,
  addSectionSelectedClass,
  changeSubPlanValue,
  changeClassOfSelectedSection,
} from './lib.js';
import subPlans from './data/subscription-plans.js';

window.addEventListener('DOMContentLoaded', addSubPlansToDOM(subPlans));
document.addEventListener('click', changeSubPlanValue);

addSectionSelectedClass();
changeClassOfSelectedSection();
