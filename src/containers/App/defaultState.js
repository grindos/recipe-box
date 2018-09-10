import { HIDE } from '../../constants';

export default {
  recipes: [
    {
      name: 'Garlic Chicken',
      id: 1,
      ingredients: [
        '3 tablespoons butter',
        '1 teaspoon seasoning salt',
        '1 teaspoon onion powder',
        '4 skinless, boneless chicken breast halves',
        '2 teaspoons garlic powder',
      ],
      directions: [
        'Melt butter in a large skillet over medium high heat.',
        'Add chicken and sprinkle with garlic powder, seasoning salt and onion powder.',
        'Saute about 10 to 15 minutes on each side, or until chicken is cooked through and juices run clear.',
      ],
    },
    {
      name: 'Easy Chocolate Pie',
      id: 2,
      ingredients: [
        '1 (12 ounce) can evaporated milk',
        '1 (5.9 ounce) package chocolate instant pudding mix',
        '1 (6.5 ounce) can whipped cream',
        '1/2 cup miniature semi-sweet chocolate chips (optional)',
        '1 (9 inch) graham cracker pie crust',
        'Another can of whipped cream for garnish (optional)',
      ],
      directions: [
        'Pour milk into medium bowl. Add dry pudding mix.',
        'Add contents of whipped cream can; stir gently.',
        'Refrigerate 6 hours, or until set. Cut into 8 slices.',
      ],
    },
    {
      name: 'Lime Chicken Tacos',
      id: 3,
      ingredients: [
        '1 1/2 pounds skinless, boneless chicken breast meat - cubed',
        '1/8 cup red wine vinegar',
        '1/2 lime, juiced',
        '1 teaspoon white sugar',
        '1/2 teaspoon salt',
        '1/2 teaspoon ground black pepper',
        '2 green onions, chopped',
        '2 cloves garlic, minced',
        '1 teaspoon dried oregano',
        '10 (6 inch) corn tortillas',
        '1 tomato, diced',
        '1/4 cup shredded lettuce',
        '1/4 cup shredded Monterey Jack cheese',
        '1/4 cup salsa',
      ],
      directions: [
        'Saute chicken in a medium saucepan over medium high heat for about 20 minutes.',
        'Heat an iron skillet over medium heat. Place a tortilla in the pan, warm.',
      ],
    },
  ],
  chosenRecipe: 1,
  form: {
    status: HIDE,
    id: null,
    name: '',
    ingredients: [],
    directions: [],
  },
};
