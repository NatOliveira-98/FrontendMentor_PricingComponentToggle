import subscriptionArray from './data/subscription-plans.js';

function addSubPlansToDOM(planArray) {
  const subscriptionsContainer = document.querySelector('#plans-container');

  let plan = planArray
    .map(planObj => {
      return `
    <section class="section-area">
        <div class="section-container">
          <!-- HEADING -->
          <h2 class="plan-title">${planObj.planType}</h2>
          <p class="plan-value">${planObj.priceMonthly}</p>

          <!-- ADVANTAGES -->
          <div class="horizontal-line"></div>
          <p class="plan-advantages">${planObj.storageLimit}</p>
          <div class="horizontal-line"></div>
          <p class="plan-advantages">${planObj.allowedUsers}</p>
          <div class="horizontal-line"></div>
          <p class="plan-advantages">${planObj.uploadLimit}</p>
          <div class="horizontal-line"></div>

          <!-- MORE INFO -->
          <a href="#" class="learn-more">LEARN MORE</a>
        </div>
      </section>
    `;
    })
    .join('');

  subscriptionsContainer.innerHTML = plan;
}

function addSectionSelectedClass() {
  const section = document.querySelector('.section-area:nth-of-type(2n)');
  section.classList.add('section-selected');
}

function changeClassOfSelectedSection() {
  const sections = document.querySelectorAll('.section-area');
  sections.forEach(section => {
    section.addEventListener('click', () => {
      sections.forEach(selected => {
        if (selected !== section) {
          selected.classList.remove('section-selected');
        }
      });

      section.classList.toggle('section-selected');
    });
  });
}

function changeSubPlanValue() {
  const checkboxPrice = document.querySelector('input[type="checkbox"]');
  if (checkboxPrice.checked) {
    changeToAnnualPlan();
  } else {
    changeToMonthlyPlan();
  }
}

function changeToAnnualPlan() {
  const planValues = document.querySelectorAll('.plan-value');
  subscriptionArray.forEach((planObj, index) => {
    if (index < planValues.length) {
      const annualPrice = planObj.priceAnnually;
      planValues[index].textContent = annualPrice;
    }
  });
}

function changeToMonthlyPlan() {
  const planValues = document.querySelectorAll('.plan-value');
  subscriptionArray.forEach((planObj, index) => {
    if (index < planValues.length) {
      const annualPrice = planObj.priceMonthly;
      planValues[index].textContent = annualPrice;
    }
  });
}

export {
  addSubPlansToDOM,
  addSectionSelectedClass,
  changeSubPlanValue,
  changeClassOfSelectedSection,
};
