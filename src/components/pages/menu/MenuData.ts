export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  category: 'burgers' | 'pizza' | 'sides' | 'pasta' | 'drinks';
  badge?: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  tagline: string;
  items: MenuItem[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'burgers',
    name: 'BURGERS',
    tagline: 'Smashed, seasoned, and stacked with bold flavor.',
    items: [
      {
        id: 'flame-smash-burger',
        name: 'FLAME BURGER SMASH BURGER',
        price: '$12',
        description: 'A juicy smashed beef patty with cheddar, crisp lettuce, pickles, and our house Zest sauce.',
        category: 'burgers',
        badge: 'HOUSE FAVORITE',
        image: '/assets/images/cat-smash-burgers.jpg'
      },
      {
        id: 'double-stack-deluxe',
        name: 'DOUBLE STACK DELUXE',
        price: '$15',
        description: 'Two beef patties, double cheddar, caramelized onions, and smoky mayo.',
        category: 'burgers',
        badge: 'DOUBLE CHEESE',
        image: '/assets/images/menu-bacon-stack.jpg'
      },
      {
        id: 'hot-honey-chicken-burger',
        name: 'HOT HONEY CHICKEN BURGER',
        price: '$13',
        description: 'Crispy chicken glazed with hot honey, topped with slaw and creamy garlic mayo.',
        category: 'burgers',
        badge: 'SPICY',
        image: '/assets/images/menu-bbq-chicken.jpg'
      },
      {
        id: 'crispy-veggie-burger',
        name: 'CRISPY VEGGIE BURGER',
        price: '$11',
        description: 'A seasoned veggie patty with lettuce, tomato, pickled onion, and herb sauce.',
        category: 'burgers',
        badge: 'VEGETARIAN',
        image: '/assets/images/menu-cheeseburger.jpg'
      }
    ]
  },
  {
    id: 'pizza',
    name: 'PIZZA',
    tagline: 'Fermented crust, stone-baked and loaded with toppings.',
    items: [
      {
        id: 'classic-margherita',
        name: 'CLASSIC MARGHERITA PIZZA',
        price: '$15',
        description: 'Tomato sauce, fresh mozzarella, basil, and a golden, airy crust.',
        category: 'pizza',
        badge: 'CLASSIC',
        image: '/assets/images/gallery-03.jpg'
      },
      {
        id: 'pepperoni-heat',
        name: 'PEPPERONI HEAT',
        price: '$17',
        description: 'Mozzarella, pepperoni, tomato sauce, and a hint of chili.',
        category: 'pizza',
        badge: 'POPULAR',
        image: '/assets/images/gallery-07.jpg'
      },
      {
        id: 'garden-harvest',
        name: 'GARDEN HARVEST',
        price: '$16',
        description: 'Bell peppers, mushrooms, red onion, olives, and mozzarella.',
        category: 'pizza',
        badge: 'FRESH VEG',
        image: '/assets/images/gallery-09.jpg'
      }
    ]
  },
  {
    id: 'sides',
    name: 'SIDES & SNACKS',
    tagline: 'Golden, crispy, and impossible not to share.',
    items: [
      {
        id: 'loaded-zest-fries',
        name: 'LOADED ZEST FRIES',
        price: '$8',
        description: 'Crispy fries loaded with melted cheese, scallions, and smoky house sauce.',
        category: 'sides',
        badge: 'MUST TRY',
        image: '/assets/images/cat-loaded-fries.jpg'
      },
      {
        id: 'golden-french-fries',
        name: 'GOLDEN FRENCH FRIES',
        price: '$5',
        description: 'Hot, golden fries with a light, satisfying crunch.',
        category: 'sides',
        image: '/assets/images/menu-garlic-fries.jpg'
      },
      {
        id: 'crispy-chicken-tenders',
        name: 'CRISPY CHICKEN TENDERS',
        price: '$11',
        description: 'Golden chicken tenders served with seasoned fries and your choice of dip.',
        category: 'sides',
        badge: 'CRISPY',
        image: '/assets/images/offer-crispy-chicken.jpg'
      },
      {
        id: 'onion-rings',
        name: 'ONION RINGS',
        price: '$6',
        description: 'Crispy battered onion rings with house dipping sauce.',
        category: 'sides',
        image: '/assets/images/gallery-02.jpg'
      }
    ]
  },
  {
    id: 'pasta',
    name: 'PASTA & BOWLS',
    tagline: 'Rich sauces, al dente pasta, and wholesome grains.',
    items: [
      {
        id: 'creamy-tuscan-pasta',
        name: 'CREAMY TUSCAN PASTA',
        price: '$16',
        description: 'Penne tossed in a creamy tomato sauce with herbs and parmesan.',
        category: 'pasta',
        badge: 'CHEF PICK',
        image: '/assets/images/cat-pasta.jpg'
      },
      {
        id: 'spicy-arrabbiata',
        name: 'SPICY ARRABBIATA',
        price: '$14',
        description: 'Pasta tossed in a lively tomato and chili sauce.',
        category: 'pasta',
        badge: 'HOT',
        image: '/assets/images/gallery-06.jpg'
      },
      {
        id: 'grilled-chicken-bowl',
        name: 'GRILLED CHICKEN BOWL',
        price: '$15',
        description: 'Grilled chicken, rice, seasonal greens, and herb dressing.',
        category: 'pasta',
        badge: 'BALANCED',
        image: '/assets/images/gallery-04.jpg'
      }
    ]
  },
  {
    id: 'drinks',
    name: 'DRINKS & DESSERTS',
    tagline: 'Ice-cold refreshment and decadent sweet finishes.',
    items: [
      {
        id: 'classic-lemonade',
        name: 'CLASSIC LEMONADE',
        price: '$4',
        description: 'Fresh, citrusy, and served ice-cold.',
        category: 'drinks',
        badge: 'ICE COLD',
        image: '/assets/images/cat-thick-shakes.jpg'
      },
      {
        id: 'chocolate-fudge-brownie',
        name: 'CHOCOLATE FUDGE BROWNIE',
        price: '$6',
        description: 'Rich chocolate brownie with a soft, fudgy center.',
        category: 'drinks',
        badge: 'SWEET',
        image: '/assets/images/gallery-08.jpg'
      },
      {
        id: 'vanilla-shake',
        name: 'VANILLA SHAKE',
        price: '$6',
        description: 'Creamy vanilla milkshake blended until smooth.',
        category: 'drinks',
        image: '/assets/images/gallery-05.jpg'
      },
      {
        id: 'strawberry-shake',
        name: 'STRAWBERRY SHAKE',
        price: '$6',
        description: 'Sweet strawberry flavor in a chilled, creamy shake.',
        category: 'drinks',
        image: '/assets/images/gallery-10.jpg'
      }
    ]
  }
];
