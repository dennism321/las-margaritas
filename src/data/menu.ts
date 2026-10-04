export type Variant = { label: string; price?: string };
export type Tag = "Popular" | "Chef's Special" | "Spicy";

export type MenuItem = {
  name: string;
  desc?: string;
  price?: string;
  variants?: Variant[];
  tag?: Tag;
};

export type Category = {
  id: string;
  name: string;
  short: string;
  subtitle: string;
  blurb: string;
  image: string;
  imageAlt: string;
  items: MenuItem[];
};

const px = (id: number, w = 1000, h = 1100) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

/**
 * Menu content verified against https://lasmargaritas203.com/menu/
 * Milford, CT (501 New Haven Ave)
 */
export const categories: Category[] = [
  {
    id: "antojitos",
    name: "Antojitos",
    short: "Antojitos",
    subtitle: "Appetizers",
    blurb: "Little cravings to share. Start with a Botana or a sampler for the whole table.",
    image: px(6399996),
    imageAlt: "Tortilla chips with guacamole, salsa and cheese dips",
    items: [
      {
        name: "Botana",
        price: "12.95",
        desc: "Nacho, cheese quesadilla, flauta chicken, guacamole, sour cream.",
      },
      {
        name: "Sampler Platter",
        price: "14.95",
        desc: "Nachos, chicken quesadilla, spicy wings, and beef enchilada, with sour cream and guacamole.",
      },
      {
        name: "El Guacamole Especial",
        price: "14.95",
        desc: "Especial avocado, onion, tomato, cilantro, and chips.",
      },
      {
        name: "Super Nachos",
        desc: "Tortilla with cheese, beans, jalapeños, tomatoes, sour cream and guacamole.",
        variants: [
          { label: "With beef or chicken", price: "13.95" },
          { label: "Pork, chorizo, or steak", price: "14.95" },
        ],
      },
      {
        name: "Wings",
        price: "14.95",
        desc: "Choice of Spicy or Mild Chicken wings served with blue cheese.",
      },
      {
        name: "Homemade Soup",
        price: "5.00",
      },
      {
        name: "Chori-Queso",
        price: "12.95",
        desc: "Comes with tortilla.",
      },
      {
        name: "Cóctelde Camarón",
        price: "14.95",
      },
      {
        name: "Ceviche",
        price: "16.00",
      },
      {
        name: "Empanadas",
        price: "12.00",
        tag: "Popular",
        desc: "Order of 4 crispy empanadas, choice of chicken, beef, or cheese.",
      },
    ],
  },
  {
    id: "ensaladas",
    name: "Ensaladas",
    short: "Ensaladas",
    subtitle: "Salads",
    blurb: "Crisp flour-tortilla baskets and garden-fresh greens.",
    image: px(9213862),
    imageAlt: "Colorful bowl of fresh vegetables with lime and jalapeños",
    items: [
      {
        name: "Taco Salad",
        desc: "Crispy flour tortilla basket filled with mixed greens, jack and cheddar cheese, onion, tomato, sour cream, and avocado.",
        variants: [
          { label: "Choice of ground beef or shredded chicken", price: "17.95" },
          { label: "Steak or chicken breast", price: "18.95" },
          { label: "Shrimp", price: "20.00" },
        ],
      },
      {
        name: "Garden Salad",
        price: "7.95",
        desc: "Mixed greens, tomatoes, onions, peppers with choice of dressing. Dressings: Ranch, Italian, Creamy Garlic, Blue Cheese, Balsamic Vinaigrette, Oil & Vinegar.",
      },
    ],
  },
  {
    id: "del-mar",
    name: "Del Mar",
    short: "Del Mar",
    subtitle: "From the Sea",
    blurb: "Gulf shrimp and fresh fish, sautéed or broiled in tomatillo, garlic and salsa.",
    image: px(4801427),
    imageAlt: "Seafood platter with shrimp in spicy sauce",
    items: [
      {
        name: "Mariscos Combo",
        price: "26.95",
        desc: "Fish and shrimp sautéed is salsa (choice of red or green). Served with bean, rice, and salad.",
      },
      {
        name: "Camarones con Salsa Verde",
        price: "26.95",
        desc: "Gulf Shrimp broiled in tomatillo salsa. Served with rice, fresh vegetables, and salad.",
      },
      {
        name: "Camarones con Arroz",
        price: "26.95",
        desc: "Grilled gulf shrimp on rice topped with Monterey Jack & Cheddar cheese, onion, peppers, tomato, Pico De Gallo, avocado, and salad.",
      },
      {
        name: "Pescado Mexicano",
        price: "26.95",
        desc: "Fresh fish filets sautéed in tomatillo sauce, topped with vegetables, rice, avocado, and salsa.",
      },
      {
        name: "Camarones al Ajillo",
        price: "26.95",
        tag: "Spicy",
        desc: "Spicy garlic shrimp sautéed served with rice and beans.",
      },
    ],
  },
  {
    id: "carnes",
    name: "Carnes",
    short: "Carnes",
    subtitle: "Steak",
    blurb: "Mexican-style steak: grilled, sautéed in salsa, or sizzled over onions.",
    image: px(16444386),
    imageAlt: "Grilled beef steak with mixed vegetables",
    items: [
      {
        name: "Carne Con Arroz",
        price: "25.95",
        desc: "Sliced grilled marinated steak on a bed of Mexican rice, topped with Monterey jack & cheddar cheese, onion peppers, tomato, olives, Pico De Gallo, avocado and cilantro.",
      },
      {
        name: "Steak Tequila",
        price: "26.95",
        desc: "Grilled steak topped with sautéed, fresh mushrooms, broccoli, peppers, onion, garlic, and delicious tequila sauce, served with rice and beans.",
      },
      {
        name: "Steak Ranchero",
        price: "25.95",
        desc: "Mexican steak sautéed in ranchero salsa. Served with rice and beans.",
      },
      {
        name: "Carne Asada",
        price: "25.95",
        desc: "Charcoal grilled steak served with black beans and rice.",
      },
      {
        name: "Chef Carmelo's Sizzling Steak",
        price: "27.95",
        tag: "Chef's Special",
        desc: "New York Strip Steak Served on a sizzling bed of sauteed onions, Served with Rice & Beans or Salad.",
      },
    ],
  },
  {
    id: "pollo",
    name: "Pollo",
    short: "Pollo",
    subtitle: "Chicken",
    blurb: "Marinated, charbroiled and sautéed chicken breast, from garlicky to mole poblano.",
    image: px(32371267),
    imageAlt: "Sliced grilled chicken with red and green peppers",
    items: [
      {
        name: "Pollo con Arroz",
        price: "24.95",
        desc: "Boneless slices of charbroiled, marinated chicken breast on a bed of Mexican rice, topped with Monterey Jack & Cheddar cheese, onion, peppers, tomato, olives, Pico De Gallo, avocado, and cilantro.",
      },
      {
        name: "Pollo al Ajillo",
        price: "24.95",
        tag: "Spicy",
        desc: "For spicy garlic lovers. Mexican chicken breast, sautéed in a blend of fresh garlic and spices. Served with rice and beans.",
      },
      {
        name: "Pollo Ranchero",
        price: "24.95",
        desc: "Chicken sautéed in ranchero salsa, served with rice and beans.",
      },
      {
        name: "Pollo en Salsa Verde",
        price: "24.95",
        desc: "Served with black beans and rice.",
      },
      {
        name: "Pollo en Mole Poblano",
        price: "26.95",
        desc: "Chicken served in a rich Mexican Mole Poblano Sauce.",
      },
    ],
  },
  {
    id: "fajitas",
    name: "Famous Sizzling Fajitas",
    short: "Fajitas",
    subtitle: "Sizzling Fajitas",
    blurb:
      "Broiled Sizzling fajitas marinated in our own special spices served with rice, beans, guacamole, sour cream and flour tortillas.",
    image: px(32375355),
    imageAlt: "Sizzling platter of chicken and beef fajitas with colorful peppers",
    items: [
      { name: "Chicken Breast", price: "24.95" },
      { name: "Steak", price: "25.95" },
      { name: "Chicken & Steak", price: "26.95" },
      { name: "Pork Tenderloin", price: "24.95" },
      { name: "Vegetarian", price: "22.95" },
      { name: "Shrimp", price: "26.95" },
      { name: "Mar y Tierra (Steak & Shrimp)", price: "26.95" },
      { name: "Mar y Tierra (Steak, Chicken & Shrimp)", price: "28.95" },
    ],
  },
  {
    id: "platos-grandes",
    name: "Platos Grandes",
    short: "Platos Grandes",
    subtitle: "Big Plates",
    blurb: "Crispy chimichangas, loaded quesadillas, hearty burritos and crispy flautas.",
    image: px(27603260),
    imageAlt: "Burrito filled with rice, beans and cheese on a decorative plate",
    items: [
      {
        name: "Chimichanga",
        desc: "Crispy flour tortilla filled with sautéed onions, peppers, cheese and beans. Served with Pico De Gallo, guacamole, sour cream, rice and beans.",
        variants: [
          { label: "With beef, chicken or pork", price: "22.95" },
          { label: "With Steak", price: "23.95" },
          { label: "With Shrimp", price: "24.95" },
        ],
      },
      {
        name: "Quesadilla Grande",
        desc: "Cheese filled tortilla served with lettuce, tomato, Pico de Gallo, jalapeños, guacamole & sour cream.",
        variants: [
          { label: "With beef, chicken, or pork", price: "18.95" },
          { label: "With Steak", price: "20.95" },
          { label: "With Shrimp", price: "21.95" },
        ],
      },
      {
        name: "Burrito",
        desc: "Wrapped tortilla filled with cheese, onion, peppers and beans. Served with rice and beans, guacamole and sour cream on the side.",
        variants: [
          { label: "With beef, chicken, or pork", price: "17.95" },
          { label: "With Steak", price: "18.95" },
          { label: "With Shrimp", price: "20.95" },
        ],
      },
      {
        name: "Veggie Burrito",
        price: "18.95",
        desc: "Flour tortilla filled with sautéed veggies (Broccoli, carrots, zucchini, onions, tomatoes, & peppers). Topped with melted cheese, green tomatillo sauce. Served with rice, guacamole and sour cream.",
      },
      {
        name: "Flautas",
        desc: "Crispy corn tortillas, filled with steak or chicken, served with rice and beans, topped with sour cream and guacamole.",
        variants: [
          { label: "With Chicken", price: "17.95" },
          { label: "With Steak", price: "18.95" },
        ],
      },
    ],
  },
  {
    id: "enchiladas",
    name: "Enchiladas",
    short: "Enchiladas",
    subtitle: "Enchiladas",
    blurb: "Soft corn tortillas rolled around chicken, beef or cheese, finished with tomatillo or mole.",
    image: px(32335663),
    imageAlt: "Mexican enchiladas and tacos garnished with cheese and avocado",
    items: [
      {
        name: "Enchiladas Suizas",
        price: "17.95",
        desc: "Chicken enchiladas with our special tomatillo sauce, cheese, sour cream, rice and beans.",
      },
      {
        name: "Enchiladas Mole Poblano",
        price: "17.95",
        desc: "Soft corn tortillas with grilled chicken, mole poblano, cheese, rice and beans.",
      },
      {
        name: "Enchilada Combo",
        price: "18.95",
        desc: "Three enchiladas (Cheese, beef, & Chicken) Served with rice and beans.",
      },
    ],
  },
  {
    id: "combinacion",
    name: "Hacer Tu Combinación",
    short: "Build a Combo",
    subtitle: "Build Your Own Combo",
    blurb: "Pick your favorites and build your own combination plate. Served with rice and beans.",
    image: px(32335667),
    imageAlt: "Enchiladas and tostadas topped with cheese and avocado",
    items: [
      {
        name: "2 Item Combo",
        price: "18.95",
        desc: "Served with rice beans.",
      },
      {
        name: "3 Item Combo",
        price: "20.95",
        desc: "Served with rice beans.",
      },
      {
        name: "Taco",
        desc: "Ground Beef, Chorizo, Chicken, Steak.",
      },
      {
        name: "Burrito",
        desc: "Ground beef, Chorizo, Chicken, Steak.",
      },
      {
        name: "Enchilada",
        desc: "Cheese, Chicken, Ground Beef.",
      },
      {
        name: "Tostada",
        desc: "Ground Beef, Chicken.",
      },
      {
        name: "Chimichanga",
        desc: "Steak, Chicken, Ground Beef.",
      },
      {
        name: "Flauta",
        desc: "Steak, Chicken.",
      },
      {
        name: "Chile Relleno",
        desc: "Poblano pepper stuffed with melted cheese, lightly battered and fried to golden perfection.",
      },
      {
        name: "Tamal",
        desc: "Traditional seasoned pork wrapped in handmade corn masa and steamed in a corn husk.",
      },
    ],
  },
  {
    id: "birria",
    name: "Birria",
    short: "Birria",
    subtitle: "A Jalisco Tradition",
    blurb:
      "A traditional stew originating from the state of Jalisco, Mexico, made with our tender, slow-cooked shredded beef marinated with a medley of spices, chiles & herbs.",
    image: px(8448339),
    imageAlt: "Traditional Mexican tacos topped with radish and onion",
    items: [
      {
        name: "Tacos",
        price: "17.95",
        desc: "Three tacos served with rice and beans.",
      },
      {
        name: "Quesa-birria",
        price: "17.95",
        desc: "Served with guacamole, Sour Cream and Pico de Gallo.",
      },
      {
        name: "Consomé",
        price: "14.95",
        desc: "comes with 3 tortillas.",
      },
    ],
  },
  {
    id: "kids",
    name: "Kids Menu",
    short: "Kids",
    subtitle: "Para los Niños",
    blurb: "Smaller plates for smaller appetites. All items $5.95.",
    image: px(32351724),
    imageAlt: "Grilled quesadilla with salsa",
    items: [
      {
        name: "Enchilada",
        price: "5.95",
        desc: "Cheese enchilada with rice and beans.",
      },
      {
        name: "Nachos",
        price: "5.95",
        desc: "Crisp tortilla chips covered with cheese.",
      },
      {
        name: "Taco",
        price: "5.95",
        desc: "Hard or soft taco, with chicken or beef. Served with rice and beans.",
      },
      {
        name: "Burrito",
        price: "5.95",
        desc: "Chicken or beef burrito with rice and beans.",
      },
      {
        name: "Quesadilla",
        price: "5.95",
        desc: "Folded flour tortilla with cheese.",
      },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    short: "Sides",
    subtitle: "Acompañamientos",
    blurb: "Add a little something extra to your plate.",
    image: px(27603321),
    imageAlt: "Platter of Mexican appetizers with salsa, guacamole and cheese dip",
    items: [
      { name: "Chips and Salsa", price: "5.00" },
      { name: "Rice & Beans", price: "4.75" },
      { name: "Sour Cream", price: "1.25" },
      { name: "Tortillas (corn or flour)", price: "2.00" },
      { name: "Jalapeños", price: "2.25" },
      { name: "Cheese", price: "2.25" },
      { name: "Pico De Gallo", price: "2.75" },
      { name: "Chiles Toreados", price: "2.75" },
      { name: "Cebollas Cambrai", price: "2.75" },
      { name: "Nopales (Mexican Cactus)", price: "3.75" },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    short: "Desserts",
    subtitle: "Postres",
    blurb: "Something sweet to finish the fiesta.",
    image: px(36361402),
    imageAlt: "Cinnamon churros served with a chocolate dip",
    items: [
      { name: "Flan", price: "6.00" },
      { name: "Churros", price: "6.00" },
      { name: "Tres Leches", price: "6.00" },
      { name: "Fried Ice Cream", price: "6.00" },
      {
        name: "Ice Cream Sundae",
        price: "5.00",
        desc: "Choice of Vanilla or Chocolate.",
      },
    ],
  },
  {
    id: "shakes",
    name: "Shakes",
    short: "Shakes",
    subtitle: "Batidos",
    blurb: "Thick, cold and creamy. $6.95 each.",
    image: px(6463655),
    imageAlt: "Milkshakes in glass jars against a bold red backdrop",
    items: [
      { name: "Chocolate", price: "6.95" },
      { name: "Vanilla", price: "6.95" },
      { name: "Strawberry", price: "6.95" },
      { name: "Mango", price: "6.95" },
    ],
  },
  {
    id: "juices",
    name: "Juices",
    short: "Juices",
    subtitle: "Jugos Naturales",
    blurb: "Refreshing chilled juices.",
    image: px(5005919),
    imageAlt: "Refreshing fruit juices in a glass",
    items: [
      { name: "Cranberry", price: "4.50" },
      { name: "Orange", price: "4.50" },
      { name: "Pineapple", price: "4.50" },
      { name: "Grapefruit", price: "4.50" },
      { name: "Mango", price: "6.95" },
      { name: "Passionfruit", price: "6.95" },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    short: "Drinks",
    subtitle: "Bebidas",
    blurb: "Sodas, iced teas, hot beverages and Mexican sodas.",
    image: px(5433721),
    imageAlt: "Cold refreshing beverages with ice and citrus",
    items: [
      { name: "Sprite", price: "3.75" },
      { name: "Ginger Ale", price: "3.75" },
      { name: "Lemonade", price: "3.75" },
      { name: "Shirley Temple", price: "3.75" },
      { name: "Club Soda", price: "3.75" },
      { name: "Orange Soda", price: "3.75" },
      { name: "Iced Tea", price: "3.75" },
      { name: "Pepsi", price: "3.75" },
      { name: "Jarritos", price: "3.50", desc: "Authentic Mexican bottled soda." },
      { name: "Hot Tea", price: "2.75" },
      { name: "Coffee", price: "2.75" },
      { name: "Ice cream Soda", price: "5.95" },
    ],
  },
];
