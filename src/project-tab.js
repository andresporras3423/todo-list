import Project from './project';

const menuLoad = () => ({
  divContent: document.getElementById('content'),
  divMenu: document.createElement('div'),
  h3: document.createElement('h3'),
  image: document.createElement('img'),
  p: document.createElement('p'),
  foodItems: [
    Project('Asian crunch', '1200', 'asian-crunch', '6 crispy rice bites wrapped in fresh salmon with divorce sauce.'),
    Project('Crab croquettes', '1500', 'crab-croquettes', 'Crispy crab bites accompanied by tartar sauce.'),
    Project('Pig bath', '700', 'pig-bath', 'Traditional Asian steamed breads, filled with delicious caramelized pork for 4 hours to give it a deep flavor that contrasts with the color and texture of the vegetables..'),
    Project('Pig gyozas', '1100', 'pig-gyozas', 'Crispy oriental empanadas stuffed with pork and vegetables accompanied by a sweet and sour mustard sauce.'),
    Project('Shrimp bath', '1100', 'shrimp-bath', 'The same breads embracing inside some delicious and crunchy shrimp breaded in coconut, accompanied with mezclum, radish, cape gooseberry sauce and coconut milk.'),
    Project('Sweet banana', '1800', 'sweet-banana', 'Ripe banana slices that wrap an incredible mix of Kani Osaki, Wakame, Japanese mayonnaise and togarashi (a spectacular mix of spices), served in a bath with house molasses.')
],
  loadDivMenu() {
    this.divMenu.id = 'div1';
    this.divMenu.className = 'item-style margin-menu d-none';
    this.divContent.appendChild(this.divMenu);
    this.loadItems();
  },
  loadItems() {
    this.foodItems.forEach((item) => {
      const divItem = document.createElement('div');
      divItem.className = 'item-style border-items';
      const name = document.createElement('h4');
      name.innerText = item.name;
      const price = document.createElement('h6');
      price.innerText = `price: $${item.price}`;
      const description = document.createElement('p');
      description.innerText = item.description;
      const divImage = document.createElement('div');
      const image = document.createElement('img');
      image.src = `../data/sushi-images/${item.image}.jpg`;
      divImage.appendChild(image);
      divItem.appendChild(name);
      divItem.appendChild(price);
      divItem.appendChild(description);
      divItem.appendChild(divImage);
      this.divMenu.appendChild(divItem);
    });
  },
});

export default menuLoad;