const PubSub = require('../../helpers/pub_sub.js');

const LifestyleView = function(container) {
  this.container = container;
};

LifestyleView.prototype.bindEvents = function () {
  const menuItem = document.querySelector('#lifestyle-menu-item');
  menuItem.addEventListener('click', (event) => {
    this.createForm();
  });
};






LifestyleView.prototype.createForm = function () {
  event.preventDefault();
  this.container.innerHTML = '';

  const lifestyleForm = document.createElement('form');
  lifestyleForm.id = 'lifestyle-form';

  header = document.createElement("h2");
  header.textContent = "ENTER LIFESTYLE DETAILS:"
  lifestyleForm.appendChild(header);

  clothesQuestion = document.createElement("p");
  clothesQuestion.textContent = "CLOTHES:"
  lifestyleForm.appendChild(clothesQuestion);

  // const clothesLabel = this.createLabel("Clothes");
  // const clothes = this.createInput("checkbox", "1", "Clothes")

  const tShirtLabel = this.createLabel('T-Shirt');
  const tShirt = this.createInput('checkbox', '2', '`T-Shirt`');

  const trousersLabel = this.createLabel('Trousers');
  const trousers = this.createInput('checkbox', '4', 'Trousers');

  const coatLabel = this.createLabel('Coat');
  const coat = this.createInput('checkbox', '5', '`Coat`');

  const jumperLabel = this.createLabel('Jumper');
  const jumper = this.createInput('checkbox', '3', '`Jumper`');

  const underwearLabel = this.createLabel('Underwear');
  const underwear = this.createInput('checkbox', '1', '`Underwear`');

  const clothesDiv = document.createElement('div');
  clothesDiv.classList.add("clothes-section");
  // clothesDiv.appendChild(clothes);
  // clothesDiv.appendChild(clothesLabel);

  clothesDiv.appendChild(tShirt);
  clothesDiv.appendChild(tShirtLabel);

  clothesDiv.appendChild(trousers);
  clothesDiv.appendChild(trousersLabel);

  clothesDiv.appendChild(coat);
  clothesDiv.appendChild(coatLabel);

  clothesDiv.appendChild(jumper);
  clothesDiv.appendChild(jumperLabel);

  clothesDiv.appendChild(underwear);
  clothesDiv.appendChild(underwearLabel);

  lifestyleForm.appendChild(clothesDiv);

  cosmeticsQuestion = document.createElement("p");
  cosmeticsQuestion.textContent = "COSMETICS:"
  lifestyleForm.appendChild(cosmeticsQuestion);

  // const cosmeticsLabel = this.createLabel('Cosmetics');
  // const cosmetics = this.createInput('checkbox', '2', 'cosmetics');

  const deodorantLabel = this.createLabel('Deodorant');
  const deodorant = this.createInput('checkbox', '2', '`deodorant`');

  const beautyLabel = this.createLabel('Beauty');
  const beauty = this.createInput('checkbox', '3', '`beauty`');

  const skincareLabel = this.createLabel('Skincare');
  const skincare = this.createInput('checkbox', '5', '`skincare`');

  const toiletriesLabel = this.createLabel('Toiletries');
  const toiletries = this.createInput('checkbox', '1', '`toiletries`');

  const cosmeticsDiv = document.createElement('div');
  cosmeticsDiv.classList.add("cosmetics-section");
  // cosmeticsDiv.appendChild(cosmetics);
  // cosmeticsDiv.appendChild(cosmeticsLabel);

  cosmeticsDiv.appendChild(deodorant);
  cosmeticsDiv.appendChild(deodorantLabel);

  cosmeticsDiv.appendChild(beauty);
  cosmeticsDiv.appendChild(beautyLabel);

  cosmeticsDiv.appendChild(skincare);
  cosmeticsDiv.appendChild(skincareLabel);

  cosmeticsDiv.appendChild(toiletries);
  cosmeticsDiv.appendChild(toiletriesLabel);

  lifestyleForm.appendChild(cosmeticsDiv);

  electronicsQuestion = document.createElement("p");
  electronicsQuestion.textContent = "ELECTRONICS:"
  lifestyleForm.appendChild(electronicsQuestion);

  // const electronicsLabel = this.createLabel('Electronics');
  // const electronics = this.createInput('checkbox', '3', 'electronics');

  const largeApplianceLabel = this.createLabel('Large Appliances');
  const largeAppliance = this.createInput('checkbox', '5', 'largeAppliance');

  const smallApplianceLabel = this.createLabel('Small Appliances');
  const smallAppliance = this.createInput('checkbox', '2', 'smallAppliance');

  const mediaLabel = this.createLabel('Media');
  const media = this.createInput('checkbox', '4', 'media');

  const personalLabel = this.createLabel('Personal Appliances');
  const personal = this.createInput('checkbox', '3', 'personal');


  const electronicsDiv  = document.createElement('div');
  electronicsDiv.classList.add("electronics-section");
  // electronicsDiv.appendChild(electronics);
  // electronicsDiv.appendChild(electronicsLabel);

  electronicsDiv.appendChild(largeAppliance);
  electronicsDiv.appendChild(largeApplianceLabel);

  electronicsDiv.appendChild(smallAppliance);
  electronicsDiv.appendChild(smallApplianceLabel);

  electronicsDiv.appendChild(media);
  electronicsDiv.appendChild(mediaLabel);

  electronicsDiv.appendChild(personal);
  electronicsDiv.appendChild(personalLabel);

  lifestyleForm.appendChild(electronicsDiv);




  const button = this.createButton();
  lifestyleForm.appendChild(button);

  lifestyleForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const arrayOfValues =
      [ tShirt.value,
        trousers.value,
        coat.value,
        jumper.value,
        underwear.value,
        deodorant.value,
        toiletries.value,
        beauty.value,
        skincare.value,
        largeAppliance.value,
        smallAppliance.value,
        media.value,
        personal.value];
    console.log(arrayOfValues)
    PubSub.publish('LifestyleView:values', arrayOfValues);
  });

  const submitButton = document.createElement("input")
  submitButton.type = "submit";
  submitButton.value = "Calculate Results";
  submitButton.id = "clicky-button";
  this.container.appendChild(lifestyleForm)


  this.container.appendChild(lifestyleForm);
};

LifestyleView.prototype.createLabel = function (text) {
  const label = document.createElement('label');
  label.textContent = text;
  return label;
};

LifestyleView.prototype.createInput = function (type, points, id) {
  const inputElement = document.createElement('input');
  inputElement.type = type;
  inputElement.id = id;
  inputElement.value = 0;

  inputElement.addEventListener('click', () => {
    if (!inputElement.checked) {
      inputElement.value = 0;
    } else {
      inputElement.value = points;
    };
  })

  return inputElement;
};

LifestyleView.prototype.createButton = function () {
  const button = document.createElement('input');
  button.type = 'submit';
  button.value = 'SUBMIT';
  button.id = 'submit-button';
  return button;
};

module.exports = LifestyleView;
