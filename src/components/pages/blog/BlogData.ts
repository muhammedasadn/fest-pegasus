export interface BlogPost {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  content: string[];
}

export const FEATURED_POST: BlogPost = {
  slug: "the-secret-to-a-better-burger-at-home",
  category: "FOOD TIPS",
  readTime: "5 min read",
  title: "THE SECRET TO A BETTER BURGER AT HOME",
  excerpt: "A great burger is all about balance: a flavorful patty, a soft toasted bun, crisp toppings, and a sauce that brings everything together. Discover the simple details that make every bite count.",
  date: "November 5, 2026",
  author: "Chef Marcus Vance",
  image: "/assets/images/blog-feature.jpg",
  content: [
    "When it comes to crafting an unforgettable burger, the difference between average and legendary lies in the micro-details. It all begins with your beef blend. We always advocate for an 80/20 lean-to-fat ratio ground chuck, ensuring the patty renders enough natural juices on a screaming hot flat-top cast iron skillet.",
    "The smash technique is where the magic happens. By pressing the patty firmly within the first thirty seconds of hitting the iron, you maximize surface contact and kickstart the Maillard reaction. This produces that deeply savory, ultra-crispy lace perimeter that burger purists dream about.",
    "Do not overlook the bun. A lightly sweet potato brioche, toasted in butter until golden brown, acts as both structural support and flavor amplifier. Spread your sauce on both top and bottom buns to create a moisture barrier that keeps the bun intact through the very last bite.",
    "Finally, simplicity reigns supreme on toppings. A single slice of sharp American cheddar for maximum meltability, thinly sliced tangy dill pickles for acidity, and crisp butterhead lettuce. Balance, heat, and freshness—that is the Flame Burger doctrine."
  ]
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-fresh-ingredients-make-all-the-difference",
    category: "KITCHEN NOTES",
    readTime: "4 min read",
    title: "WHY FRESH INGREDIENTS MAKE ALL THE DIFFERENCE",
    excerpt: "Fresh ingredients bring color, texture, and flavor to the table. Learn why thoughtful sourcing and careful preparation can transform everyday favorites.",
    date: "October 28, 2026",
    author: "Elena Rostova",
    image: "/assets/images/gallery-01.jpg",
    content: [
      "In modern casual dining, shortcuts are everywhere—pre-cut frozen produce, powdered sauces, and freeze-dried garnishes. But nothing compares to the snap of crisp lettuce chopped that morning or tomatoes sliced thirty minutes before service.",
      "Thoughtful sourcing means partnering with growers who prioritize regenerative agriculture and peak ripeness. When your raw ingredients possess natural sweetness and vibrant acidity, you do not need heavy sugar or artificial enhancers to make a meal sing."
    ]
  },
  {
    slug: "the-ultimate-guide-to-sharing-pizza",
    category: "FOOD & FRIENDS",
    readTime: "6 min read",
    title: "THE ULTIMATE GUIDE TO SHARING PIZZA",
    excerpt: "From choosing a mix of classic and adventurous toppings to picking the right sides, here is how to make pizza night work for everyone.",
    date: "October 19, 2026",
    author: "Marco Bellini",
    image: "/assets/images/gallery-03.jpg",
    content: [
      "Ordering pizza for a group shouldn't require diplomatic negotiations. The golden rule is simple: anchor your order with one undisputed classic (like our Margherita or Pepperoni Heat), and pair it with an adventurous wild card like Truffle White or BBQ Chicken.",
      "Always factor in sides. Crispy garlic bread and a vibrant seasonal green salad cleanse the palate and round out the meal into a celebratory feast."
    ]
  },
  {
    slug: "how-to-build-the-perfect-combo-meal",
    category: "RECIPES",
    readTime: "5 min read",
    title: "HOW TO BUILD THE PERFECT COMBO MEAL",
    excerpt: "Texture, heat, acidity, and crunch: discover how pairing contrasting flavors transforms a simple meal into an elevated dining ritual.",
    date: "October 12, 2026",
    author: "Chef Marcus Vance",
    image: "/assets/images/cat-loaded-fries.jpg",
    content: [
      "A truly great combo meal is a symphony of contrasting textures. If your burger is rich, savory, and cheesy, your side needs high-impact crunch and acidity.",
      "That is why our Loaded Zest Fries feature pickled scallions and smoky vinegar-laced sauce to cut through the richness of melted cheddar."
    ]
  },
  {
    slug: "meet-the-sauces-behind-our-signature-flavor",
    category: "BEHIND THE SCENES",
    readTime: "4 min read",
    title: "MEET THE SAUCES BEHIND OUR SIGNATURE FLAVOR",
    excerpt: "From our smoky Zest secret sauce to the fiery Hot Honey glaze, take a peek behind the kitchen curtain at what makes our menu sing.",
    date: "October 02, 2026",
    author: "David Kim",
    image: "/assets/images/gallery-06.jpg",
    content: [
      "A sauce can elevate a good dish into an iconic one. At Flame Burger, we spent six months testing forty-two variations of our house Zest Sauce before landing on the perfect blend of smoked paprika, roasted garlic, and pickle brine.",
      "Our Hot Honey glaze is infused with three varieties of whole chili peppers and unfiltered wildflower honey, creating a slow-building heat that lingers pleasantly."
    ]
  }
];
