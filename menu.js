const restaurantMenu = [
    {
        category: 'appetizers',
        image: 'https://www.dinneratthezoo.com/wp-content/uploads/2019/12/mozzarella-sticks-4-500x500.jpg',
        title:  'Mozzerella Sticks',
        price:  '9.99',
        desc:   'Sticks of mozzarella cheese coated in seasoned breadcrumbs, then deep fried until golden brown',
        ingredients: ['1⁄4 cup flour', '1 cup Italian style breadcrumbs', '2 eggs', '1 tablespoon milk', '1 lb mozzerella cheese', '1 cup vegetable oil', '1 cup marinara sauce'],
        steps: ['Beat the eggs in a mixing bowl. Whisk in the milk, then set aside. Place the bread crumbs into a plastic bag, and set aside', 'Separate and place an egg roll wrapper onto your work surface with one of the tips pointed towards you. Moisten the two far edges of the wrapper with water. Place a string cheese stick onto the corner nearest you, and roll it in 1/3 of the way, fold over the right and left corners, then continue rolling to the end, pressing to seal. Repeat with the remaining string cheese sticks and egg roll wrappers.', 'Heat oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).', 'Dip the mozzarella sticks into the egg wash, then toss in the bread crumbs. Cook in batches in the hot oil until crisp and golden brown, 3 to 4 minutes.']
    },

    {
        category: 'appetizers',
        image: 'https://images.themodernproper.com/billowy-turkey/production/posts/2019/garlic-bread-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599767628&s=08fa1a2e6dd3daeba5175c6eb9a2d06f',
        title:  'Garlic Bread',
        price:  '9.99',
        desc:   'Toasty, buttery, herby, covered in a dusting of salty parmesan cheese, piping hot and fresh out of the oven',
        ingredients: ['1/2 cup butter', '1 1/2 tablespoons garlic powder', '1 tablespoon dried parsley', '1 pound loaf Italian bread, cut into 1/2 inch slices', '8 ounce package shredded mozzarella cheese'],
        steps: ['Preheat oven to 350 degrees F (175 degrees C).', 'In a small saucepan over medium heat, melt butter and mix with garlic powder and dried parsley.', 'Place Italian bread on a medium baking sheet. Using a basting brush, brush generously with the butter mixture.', 'Bake in the preheated oven approximately 10 minutes, until lightly toasted. Remove from heat. Sprinkle with mozzarella cheese and any remaining butter mixture. Return to oven approximately 5 minutes, or until cheese is melted and bread is lightly browned.']
    },

    {
        category: 'appetizers',
        image: 'https://dinnerthendessert.com/wp-content/uploads/2018/08/Buffalo-Wings-4-500x500.jpg',
        title:  'Buffalo Wings',
        price:  '9.99',
        desc:   'Chicken wings coated with a vinegar-and-cayenne-pepper hot sauce mixed with butter. ',
        ingredients: ['5 pounds chicken wings', '4 cups vinegar-based hot pepper sauce', '1/4 cup butter', '6 tablespoons blue cheese dressing', '1/2 onion', '1/2 teaspoon crushed red pepper flakes',],
        steps: ['Preheat an outdoor grill for medium-high heat. Soak hickory wood chips in water.', 'Use a large pot that can be placed on the grill to combine the hot sauce, butter, blue cheese dressing, cherry peppers, onion, black pepper, and red pepper flakes. Stir until well blended, and place on the grate of the grill. Bring to a simmer, and cook for 15 or 20 minutes.', 'Sprinkle some soaked chips on the hot coals. Place chicken wings on the grill, and brush generously with sauce. Grill, turning and basting frequently for 20 to 40 minutes, or until meat is no longer pink and the outside is brown and crispy. Serve with lots of cold drinks!']

    },

    {
        category: 'appetizers',
        image: 'https://easyweeknightrecipes.com/wp-content/uploads/2020/07/Bruschetta-9-500x500.jpg',
        title:  'Fresh Bruschetta',
        price:  '9.99',
        desc:   'Grilled bread rubbed with garlic and topped with olive oil, salt, tomatoes, and balsalmic vinegar.',
        ingredients: ['12 roma tomatoes', '1/3 cup extra virgin olive oil', '3 cloves garlic', '1 cup chopped fresh basil leaves', '2 tablespoons minced shallots', '1 loaf Italian bread, cut into 1/2 inch slices'],
        steps: ['In a large bowl, toss together the roma tomatoes, minced garlic, shallots, basil, lemon juice, salt, pepper and 1/3 cup olive oil.', 'Place the slivered garlic and 1/4 cup olive oil in small saucepan over medium heat. Slowly cook and stir 2 to 3 minutes. Discard garlic.', 'Toast the bread slices, and brush with the olive oil heated with garlic. Top slices with the roma tomato mixture.']
    },

    {
        category: 'appetizers',
        image: 'https://www.spendwithpennies.com/wp-content/uploads/2019/06/Garlic-Grilled-Shrimp-SpendWithPennies-3-500x500.jpg',
        title:  'Grilled Shrimp',
        price:  '9.99',
        desc:   'Shrimp grilled combined with olive oil, red wine vinegar, garlic, Italian seasoning, salt, and pepper',
        ingredients: ['15 large tiger shrimp', '1 teaspoon garlic powder', '2 tablespoons lime juice', '1/4 cup olive oil', '1 teaspoon garlic powder', '1 teaspoon cajun seasoning'],
        steps: ['Whisk olive oil, lime juice, tequila, garlic powder, Cajun seasoning, seasoned salt, and black pepper in a bowl; pour into a resealable plastic bag. Add shrimp, coat with the marinade, squeeze out excess air, and seal the bag. Marinate in the refrigerator for 1 to 4 hours.', 'Preheat an outdoor grill for medium-high heat and lightly oil the grate. Soak wooden skewers in a bowl of water for 30 minutes.', 'Remove shrimp from the marinade, and shake off excess. Discard the remaining marinade. Thread shrimp on skewers, piercing once near the tail and once near the head.', 'Arrange skewers on preheated grill; cook shrimp until they are bright pink on the outside and the meat is no longer transparent in the center, 6 to 8 minutes.']
    },

    {
        category: 'appetizers',
        image: 'https://spicysouthernkitchen.com/wp-content/uploads/Fried-Jalapeno-Popper-Bites-9.jpg',
        title:  'Jalepeno Poppers',
        price:  '9.99',
        desc:   'Spicy jalapeños and cheese fried in a golden brown shell',
        ingredients: ['12 ounces jalapeno peppers, seeded and halved', '1 (8 ounce) package shredded Cheddar cheese', '1 cup all-purpose flour', '1 cup dry bread crumbs', '2 quarts oil for frying', '1 cup milk'],
        steps: ['In a medium bowl, mix the cream cheese, Cheddar cheese and bacon bits. Spoon this mixture into the jalapeno pepper halve', 'Put the milk and flour into two separate small bowls. Dip the stuffed jalapenos first into the milk then into the flour, making sure they are well coated with each. Allow the coated jalapenos to dry for about 10 minutes', 'Dip the jalapenos in milk again and roll them through the breadcrumbs. Allow them to dry, then repeat to ensure the entire surface of the jalapeno is coated.', 'In a medium skillet, heat the oil to 365 degrees F ( 180 degrees C). Deep fry the coated jalapenos 2 to 3 minutes each, until golden brown. Remove and let drain on a paper towel.']
    },

    {
        category: 'appetizers',
        image: 'https://www.dinneratthezoo.com/wp-content/uploads/2019/11/fried-calamari-67-500x500.jpg',
        title:  'Fried Calamari',
        price:  '9.99',
        desc:   'Tender pieces of squid soaked in buttermilk, then coated in seasoned flour and deep fried to golden brown',
        ingredients: ['1 pound calamari tubes, thawed if frozen', '6 cups all-purpose flour', '2 cups whole milk', '1 tablespoon fresh parsley, or to taste', '1 wedge lemon', '4 eggs', '1 cup peanut oil'],
        steps: ['Check calamari for breaks and slice into 1/8- to 1/4-inch rings', 'Heat oil in a deep-fryer or large saucepan to 400 degrees F (200 degrees C).', 'Place 2 cups flour in a bowl. Whisk milk and eggs together in a separate bowl. Place remaining 4 cups flour, cornstarch, paprika, salt, pepper, and cayenne in a third bowl; mix thoroughly.', 'Toss calamari rings in the plain flour. Move to the egg mixture and thoroughly coat. Move to the seasoned flour and coat fully. Move back to egg mixture if not thoroughly coated; coat with seasoned flour again.', 'Submerge floured calamari in the hot oil until golden, 3 to 4 minutes per batch. Lift out with a slotted spoon, letting oil drip off. Drain on paper towels. Place calamari in a small bowl; check seasoning. Add parsley and lemon wedge for garnish']
    },


    {
        category: 'appetizers',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/stuffed-mushrooms-vertical-jpg-1525207616.jpg?crop=1.00xw:0.667xh;0,0.215xh&resize=480:*',
        title:  'Stuffed Mushrooms',
        price:  '9.99',
        desc:   'Mushrooms stuffed with shallots, garlic, walnuts, breadcrumbs, and chopped mushroom stems.',
        ingredients: ['12 medium mushrooms', '2 tablespoons olive oil', '1/2 cup chopped red onion', '3 cloves garlic, chopped', '2 tablespoons grated Asiago cheese', '1 tablespoon ricotta cheese'],
        steps: ['Preheat the oven to 400 degrees F (200 degrees C). Grease a baking sheet.', 'Remove stems from mushrooms. Chop stems and set aside. Brush caps with 1 tablespoon olive oil and place on the prepared baking sheet with the open sides up.', 'Heat remaining 1 tablespoon oil in a skillet over medium heat. Add onion, garlic, and Italian seasoning; cook for 2 minutes. Add mushroom stems and cook until tender, about 5 minutes. Remove from the heat and transfer to a bowl.', 'Add Asiago cheese and ricotta cheese to the onion-mushroom mixture and mix to combine. Season with salt and pepper. Fill each mushroom cap with a spoonful of the mixture.', 'Bake in the preheated oven until mushrooms are tender and filling is bubbling slightly, 20 to 25 minutes.']
    },

    {
        category: 'appetizers',
        image: 'https://foodwithfeeling.com/wp-content/uploads/2021/08/truffle-fries-4-225x225.jpg',
        title:  'Truffle Fries',
        price:  '9.99',
        desc:   'Thin cut deep-fried potatoes topped with truffle oil, fresh herbs and spices, garlic, and cheese,',
        ingredients: ['6 large red potatoes', '3 cups canola oil', '1/4 cup grated Parmesan cheese', '3 cloves garlic', '2 1/2 tablespoons truffle oil', '2 tablespoons sea salt, or more to taste'],
        steps: ['Cut potatoes to desired size, but not too thick.', 'Place fries into a microwave-safe container and microwave for 4 minutes.', 'Place oil into a frying pan and heat to 375 degrees F (190 degrees C).', 'Place 1 to 2 handfuls of fries in the frying pan and fry until browned and soft, 4 to 5 minutes, turning and tossing frequently to cook evenly.', 'Preheat the oven to 225 degrees F (110 degrees C).', 'Drain fries in a bowl lined with a paper towel. Toss fries in the bowl to get rid of excess oil; remove paper towel.', 'Combine Parmesan cheese, garlic, salt, and pepper in a bowl. Toss fries in the mixture until well mixed. Drizzle fries with truffle oil and toss again until well mixed.', 'Bake in the preheated oven to allow truffle oil to settle and reheat fries, 5 to 7 minutes. Serve fries while hot.']
    },


    {
        category: 'appetizers',
        image: 'https://www.lemontreedwelling.com/wp-content/uploads/2020/10/air-fryer-onion-rings-featured-720x720.jpg',
        title:  'Onion Rings',
        price:  '9.99',
        desc:   'Large white onions sliced into rings, dipped in a batter and bread crumbs then deep fried',
        ingredients: ['1 yellow onion - ends trimmed off, peeled, and cut crosswise into 1/2-inch slices', '3 cups panko bread crumbs, or more if needed', '½ cup all-purpose flour', '2 tablespoons milk', '2 eggs', '1 pinch cayenne pepper'],
        steps: ['Preheat oven to 450 degrees F (230 degrees C).', 'Separate onion slices into individual rings.', 'Whisk eggs with milk in a bowl until thoroughly combined; season egg mixture with a pinch of cayenne pepper. Place panko crumbs into a separate bowl.', 'Place onion rings into a large resealable plastic bag. Add flour, salt, and black pepper; seal bag and shake until rings are well coated with flour.', 'Drop flour-coated onion rings into egg white-milk mixture, a few at a time, and toss lightly with tongs until coated. Place rings into panko crumbs and gently shake the bowl to toss the crumbs with the onion rings until rings are coated with crumbs', 'Transfer coated onion rings to a large baking sheet; spray rings lightly with cooking spray.', 'Bake in the preheated oven until onion rings are tender and crumbs are lightly golden brown, 12 to 15 minutes.']
    },

    {
        category: 'salads',
        image: 'https://www.jessicagavin.com/wp-content/uploads/2019/07/caesar-salad-10-1200.jpg',
        title:  'Caesar Salad',
        price:  '9.99',
        desc:   'Romaine lettuce tossed with a creamy caesar dressing and grated cheese, topped with croutons',
        ingredients: ['1 head romaine lettuce', '2 cloves garlic, chopped', '1 cup mayonnaise', '1/3 cup grated Parmesan cheese', '1 tablespoon Dijon mustard', '1 tablespoon white wine vinegar', '4 tablespoons croutons', '¼ cup olive oil'],
        steps: ['Wash the lettuce and dry the leaves well. Tear into 1 to 2 inch pieces, and transfer to a salad bowl.', 'Using a food processor puree or pulverize the garlic. Add the lemon juice, mustard, garlic, oil, pepper, parmesan cheese, and vinegar and mix well. Just before serving, toss the romaine lettuce with the dressing and top with croutons.']
    },

    {
        category: 'salads',
        image: 'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
        title:  'Italian Salad',
        price:  '9.99',
        desc:   'Salad with romaine lettuce, croutons, tomatoes, pepperoncini, parmesan, topped with Italian dressing',
        ingredients: ['5 cups romaine lettuce', '1/2 cup canola oil', '1/3 cup tarragon vinegar', '1 carrot', '1 red onion', '1/4 cup black olives', '½ cucumber, sliced', , '2 cloves garlic, minced', '1/2 teaspoon dry mustard'],
        steps: ['In a medium container with a lid, mix canola oil, tarragon vinegar, dry mustard, and garlic. Cover, and shake until well blended.', 'In a large bowl, toss together lettuce, carrot, red onion, black olives, cucumber, and Romano cheese. Season with pepper. Pour in the artichoke and marinade mixture, and toss to coat.']
    },

    {
        category: 'salads',
        image: 'https://cravingtasty.com/wp-content/uploads/2019/02/Grilled-Chicken-Salad-Horizontal-500x500.jpg',
        title:  'Grilled Chicken Salad',
        price:  '9.99',
        desc:   'Tender marinated chicken served over lettuce with bacon, avocado, corn, blue cheese and tomatoes',
        ingredients: ['4 cups chopped grilled chicken', '1 cup mayonnaise', '1/2 cup bacon', '1 avacado', '1 sliced tomate', '1/2 cup blue cheese', '1/8 teaspoon garlic powder', '1/2 cup corn'],
        steps: ['Whisk together 1 cup of mayonnaise, pepper, garlic powder, and blue cheese until combined. Combine the chicken, bacon, avacado, corn, and tomatoes in a large bowl. Pour the mayonnaise mixture over the chicken mixture and stir until evenly combined.']
    },


    {
        category: 'salads',
        image: 'https://www.spoonfulofflavor.com/wp-content/uploads/2020/03/garden-salad-recipe-500x500.jpg',
        title:  'Fresh Garden Salad',
        price:  '9.99',
        desc:   'Tossed green salad made with carrots, tomatoes, cucumbers and onions',
        ingredients: ['10 romaine lettuce leaves', '4 tomatoes, chopped', '1 large cucumber, sliced', '1 onion, sliced', '2 tablespoons lemon juice', '1 tablespoon extra-virgin olive oil', '1/2 cup sour cream', '1/2 cup parsley'],
        steps: ['Toss the romaine lettuce, tomatoes, cucumber, onion, and parsley together in a large bowl; season with salt. Drizzle the lemon juice and olive oil over the salad; stir. Add the sour cream and mix until evenly coated.']
    },

    {
        category: 'salads',
        image: 'https://www.daringgourmet.com/wp-content/uploads/2020/10/Minestrone-12.jpg',
        title:  'Minestrone Soup',
        price:  '9.99',
        desc:   'Italian vegetable soup filled with pasta, beans, tomatoes, and veggies, seasoned with Italian herbs.',
        ingredients: ['1 tablespoon olive oil', '3/4 cup diced carrot', '1 cup diced onion', '1 teaspoon minced garlic', '2 cups College Inn® Chicken Broth', '3/4 cup sliced celery', '1 (15 ounce) can Contadina® Tomato Sauce', '1 (15 ounce) can cannellini beans'],
        steps: ['Heat olive oil in a large saucepan or Dutch oven over medium-high heat. Cook onion, carrot, celery, garlic until vegetables begin to soften, about 5 minutes', 'Stir in tomato sauce, beans and 2 1/2 cups water. Add broth, pasta and pepper; bring to a simmer. Cook, uncovered, 10 minutes or until pasta is tender, stirring occasionally.']
    },

    {
        category: 'salads',
        image: 'https://www.willcookforsmiles.com/wp-content/uploads/2020/01/pasta-e-fagioli-8-1-500x500.jpg',
        title:  'Pasta Fagoli',
        price:  '9.99',
        desc:   'Italian style soup with tender pasta, creamy beans, and delicious herbs in a rich and savory broth.',
        ingredients: ['1 (15 ounce) can cannellini (white kidney) beans, drained', '3 cups chopped Swiss chard', '3 cups chicken broth', '¾ cup dry elbow macaroni', '¼ cup tomato paste', '12 ounces sweet bulk Italian sausage', '3/4 cup dry elbow macaroni'],
        steps: ['Heat oil in a skillet over medium-high heat. Brown sausage while breaking it into small pieces, about 5 minutes. Reduce heat to medium. Add diced celery and chopped onion. Cook until onions are translucent, 4 to 5 minutes. Add dry pasta. Cook and stir 2 minutes.', 'Stir in tomato paste until evenly distributed, 2 to 3 minutes. Add 3 cups broth. Raise heat to high and bring to a simmer. Add salt, black pepper, pepper flakes, and oregano. When soup comes to a boil, reduce heat to medium and let it simmer about 5 minutes, stirring often. Check soup consistency and add more broth, if needed.', 'Place chopped chard in a bowl. Cover with cold water and rinse the leaves; any grit will fall to the bottom of the bowl. Transfer chard to colander to drain briefly; add to soup. Cook and stir until leaves wilt, 2 to 3 minutes', 'Stir in white beans; continue cooking and stirring until pasta is perfectly cooked, another 4 or 5 minutes. Remove from heat and stir in grated cheese. Serve topped with grated cheese, if desired.']
    },


    {
        category: 'salads',
        image: 'https://s23209.pcdn.co/wp-content/uploads/2019/06/One-Pot-French-Onion-SoupIMG_9418-360x360.jpg',
        title:  'French Onion Soup',
        price:  '9.99',
        desc:   'French style soup prepared with beef stock, caramelized onions, topped with cheesy bread',
        ingredients: ['6 slices French bread, toasted', '1/2 cup grated Parmesan cheese', '½ cup shredded Swiss cheese', '2 (10.5 ounce) cans beef broth', '2 tablespoons all-purpose flour', '2 onions, thinly sliced'],
        steps: ['Preheat oven to 425 degrees F(220 degrees C). Separate sliced onion into single rings.', 'In a medium sauce pan saute onions in butter until soft, approximately 20 minutes. Stir in flour and gradually add broth and water. Bring to a boil and simmer for 20 minutes.', 'Meanwhile, toast French bread slices.', 'Place toasted bread into soup bowls. Pour soup mixture over bread and sprinkle with Parmesan and Swiss cheese. Bake for 10 minutes.']
    },
    

    {
        category: 'salads',
        image: 'https://realhousemoms.com/wp-content/uploads/Crockpot-Chicken-Tortellini-Soup-IG.jpg',
        title:  'Tortellini Soup',
        price:  '9.99',
        desc:   'Creamy soup with rich cheese tortellini, ground beef, tomatoes and vegetables, and flavorful herbs.',
        ingredients: ['2 cans chicken broth, divided', '1 (20 ounce) package cheese tortellini', '1 small onion, chopped', '2 tablespoons Italian seasoning', '1 bunch fresh spinach, chopped', '2 tablespoons minced garlic'],
        steps: ['Pour 1 can broth into a small saucepan and add tortellini; bring to a boil. Cook tortellini until tender yet firm to the bite, about 5 minutes.', 'Heat oil in a large stockpot over medium heat; cook and stir onion, garlic, and Italian seasoning. Add tortellini-broth mixture, remaining can of broth, and spinach; cover stockpot and simmer until flavors blend, about 30 minutes']
    },

 

    {
        category: 'entrees',
        image: 'https://images.themodernproper.com/billowy-turkey/production/posts/2021/Chicken-Parmesan-14.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1618755606&s=cb9a4e64a5cd5948c2156f53ca5312ed',
        title:  'Chicken Parmagian',
        price:  '9.99',
        desc:   'Breaded chicken breast covered in tomato sauce and mozzarella, parmesan, or provolone cheese',
    },

    {
        category: 'entrees',
        image: 'https://www.yellowblissroad.com/wp-content/uploads/2019/07/Shrimp-Scampi-SQUARE.jpg',
        title:  'Shrimp Scampi',
        price:  '9.99',
        desc:   'Shrimp sauteed perfection and tossed in a garlic butter white wine sauce served over linguine noodles.',
    },

    {
        category: 'entrees',
        image: 'https://keytomylime.com/wp-content/uploads/2021/07/Best-Creamy-Cajun-Chicken-Pasta-Recipe-735x735.jpg',
        title:  'Cajun Chicken Pasta',
        price:  '9.99',
        desc:   'Chicken dredged in cajun spices, sauteed with bell peppers, topped with basil-cream sauce over linguine.',
    },

    {
        category: 'entrees',
        image: 'https://www.jocooks.com/wp-content/uploads/2020/07/skillet-steak-1-7-500x500.jpg',
        title:  'Wood Fired Steak',
        price:  '9.99',
        desc:   'Tender, flavorful, juicy, and steak cooked to perfection, topped in a peppercorn sauce',
    },

    {
        category: 'entrees',
        image: 'https://www.brit.co/media-library/burger-recipes.jpg?id=21629003&width=600&quality=90',
        title:  'Classic Burger',
        price:  '9.99',
        desc:   'Juicy all-beef burger classic with lettuce, tomato, onion and pickles on a Brioche bun.',
    },

    {
        category: 'entrees',
        image: 'https://cafedelites.com/wp-content/uploads/2017/03/Best-Crispy-Lemon-Garlic-Herb-Salmon-IMAGES-19-500x500.jpg',
        title:  'Salmon Filet',
        price:  '9.99',
        desc:   'Grilled salmon fillets with lemon pepper, garlic powder, and salt.',
    },

    {
        category: 'entrees',
        image: 'https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231103/5565807.jpg',
        title:  'Maryland Crab Cakes',
        price:  '9.99',
        desc:   'Deep fried lump crab meat topped with Old Bay seasoning, served with Honey Dijon mustard',
    },

    {
        category: 'entrees',
        image: 'https://www.verywellfit.com/thmb/zZl_RzLW_D1gpMi-ndGBpX8QM8U=/1414x1414/smart/filters:no_upscale()/chicken-marsala-962194078-04aca06b8b2b48588e40c8b57210c294.jpg',
        title:  'Chicken Marsala',
        price:  '9.99',
        desc:   'Golden pan-fried chicken cutlets and mushrooms in a rich Marsala wine sauce.',
    },

    {
        category: 'entrees',
        image: 'http://cdn.shopify.com/s/files/1/0577/3616/7591/products/chicken-alfredo-8-1200.jpg?v=1625717688',
        title:  'Chicken Alfredo',
        price:  '9.99',
        desc:   'Chicken breast served over a bed of tender fettuccine pasta, topped with creamy Alfredo sauce',
    },

   

    {
        category: 'entrees',
        image: 'https://neighborfoodblog.com/wp-content/uploads/2019/09/stuffed-pork-tenderloin-4-720x720.jpg',
        title:  'Pork Tenderloin',
        price:  '9.99',
        desc:   'Tender, juicy, thin cut of pork, crusted in Italian herbs',
    },

    {
        category: 'entrees',
        image: 'https://thebusybaker.ca/wp-content/uploads/2021/02/easy-eggplant-parmesan-fb-ig-5-scaled.jpg',
        title:  'Eggplant Parmesan',
        price:  '9.99',
        desc:   'Tender eggplant breaded in crispy breadcrumbs, topped with marinara and parmesan cheese',
    },

    {
        category: 'entrees',
        image: 'https://www.thecountrycook.net/wp-content/uploads/2020/02/EASY-BAKED-ZITI-thumbnail.jpg',
        title:  'Baked Ziti',
        price:  '9.99',
        desc:   'Tomato-coated pasta is then combined with cheese, with a mixture of ricotta, mozzarella, and parmesan',
    },


    {
        category: 'desserts',
        image: 'https://www.recipetineats.com/wp-content/uploads/2021/02/Chocolate-Lava-Cake_7-SQ.jpg',
        title:  'Chocolate Lava Cake',
        price:  '9.99',
        desc:   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi culpa illo, accusamus quas atque.',
    },

    {
        category: 'desserts',
        image: 'https://www.livewellbakeoften.com/wp-content/uploads/2021/01/Tiramisu-8s.jpg',
        title:  'Tiramisu',
        price:  '9.99',
        desc:   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi culpa illo, accusamus quas atque.',
    },

    {
        category: 'desserts',
        image: 'https://www.culinaryhill.com/wp-content/uploads/2018/09/Easy-Chocolate-Mousse-SQ-03-Culinary-Hill-e1580268096256-500x500.png',
        title:  'Chocolate Mousse',
        price:  '9.99',
        desc:   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi culpa illo, accusamus quas atque.',
    },

    {
        category: 'desserts',
        image: 'https://www.momontimeout.com/wp-content/uploads/2020/09/stack-of-chewy-chocolate-chip-cookies-on-dark-wood-board-square.jpg',
        title:  'Chocolate Chip Cookies',
        price:  '9.99',
        desc:   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi culpa illo, accusamus quas atque.',
    },


    {
        category: 'desserts',
        image: 'https://www.looneybeanbishop.com/uploads/1/3/1/2/131223678/s807527588167116925_p101_i1_w1920.jpeg',
        title:  'Almond Bear Claw',
        price:  '9.99',
        desc:   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi culpa illo, accusamus quas atque.',
    },



    {
        category: 'desserts',
        image: 'https://www.spoonfulofflavor.com/wp-content/uploads/2021/03/Homemade-Eclair-500x500.jpg',
        title:  'Eclairs',
        price:  '9.99',
        desc:   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi culpa illo, accusamus quas atque.',
    },

    {
        category: 'desserts',
        image: 'https://amandascookin.com/wp-content/uploads/2021/07/Cream-Puffs-SQ.jpg',
        title:  'Cream Puffs',
        price:  '9.99',
        desc:   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi culpa illo, accusamus quas atque.',
    },

    {
        category: 'desserts',
        image: 'https://img.buzzfeed.com/video-api-prod/assets/fafe8090b4f3434f80c33b6e4ce40e24/BFV21539_BestFudgyBrownies-ThumbB1080.jpg',
        title:  'Fudge Brownie',
        price:  '9.99',
        desc:   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi culpa illo, accusamus quas atque.',
    },

    {
        category: 'desserts',
        image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2021-11-Rainbow-Cookies%2Fxtest__rainbow_cookies-2',
        title:  'Rainbow Cookies',
        price:  '9.99',
        desc:   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi culpa illo, accusamus quas atque.',
    },

    {
        category: 'desserts',
        image: 'https://carameltintedlife.com/wp-content/uploads/2021/03/Puff-Pastry-Cinnamon-Rolls.jpg',
        title:  'Cinnamon Roll',
        price:  '9.99',
        desc:   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi culpa illo, accusamus quas atque.',
    },

 
 

   

    

]

/*async function getRecipes(){
    const res = await fetch(`menu.json`);

    const data = await res.json();
    
    return data;
}


async function showPosts(){
    const posts = await getRecipes();
    console.log(posts);
}

showPosts();*/

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
});

const menuGrid = document.querySelector('.menu-grid');

 //dynamically add starter html (appetizers only)
window.addEventListener('DOMContentLoaded', function(){
    const appetizers = [];
    for(let i = 0; i < restaurantMenu.length; i++){
        if(restaurantMenu[i].category === 'appetizers'){
            appetizers.push(restaurantMenu[i]);
        }
    }
    
    updateDOM(appetizers);
    
    const recipeItems = document.querySelectorAll('.recipe-item');
    selectRecipeFromMain(recipeItems);

});  

//section active 

const stepsSection = document.querySelector('.steps');
//select a category
const categories = document.querySelectorAll('.menu-option');
const selectedRecipeSection = document.querySelector('.selected-recipe');
const selectedRecipeTitle = document.querySelector('.selected-recipe-title');
const selectedRecipeDesc = document.querySelector('.selected-recipe-desc');
const selectedRecipeImage = document.querySelector('.selected-recipe-img');
const selectedRecipeIngredients = document.querySelector('.ingredients-list');
const selectedRecipeSteps = document.querySelector('.recipe-steps');


categories.forEach(function(category){
    category.addEventListener('click', function(e){
       const selected = e.currentTarget;

       categories.forEach(category => {
           category.classList.remove('active');
           selected.classList.add('active');
       })

       //show selected menu items based on category
       const categoryID = e.currentTarget.getAttribute('id');
       const categoryArray = [];
       
       for(let i = 0; i < restaurantMenu.length; i++){
           let menuItem = restaurantMenu[i];

           if(categoryID === menuItem.category){
            //console.log(menuItem)
            categoryArray.push(menuItem);
           } 
       }

       updateDOM(categoryArray)


       //select a recipe 
       const recipeItems = document.querySelectorAll('.recipe-item');
       selectRecipeFromMain(recipeItems);

      
       
    })
});




//add search list items dynamically
const searchFilter = document.querySelector('.recipe-search');
const searchResultList = document.querySelector('.search-list');



const searchItems = restaurantMenu.map(recipe => `
    <a href="#selected-recipe" class="search-item">
        <img class="search-result-image" src="${recipe.image}">
        <h4 class="search-result-title">${recipe.title}</h4>
    </a>
`).join('');

searchResultList.innerHTML = searchItems;

const searchResults = document.querySelectorAll('.search-item');

searchFilter.addEventListener('keyup', function(e){
    let inputValue = e.target.value.toLowerCase();

    for(let i = 0; i < searchResults.length; i++){
        const match = searchResults[i].children[1].textContent;
        if(match.toLowerCase().includes(inputValue)){
            searchResults[i].classList.add('show');
        } else {
            searchResults[i].classList.remove('show');
        }
    }


    //clear the input list if input is empty
    if(inputValue === ''){
        searchResults.forEach(function(searchResult){
            searchResult.classList.remove('show');
        })
    }

    //select a recipe from search list
    searchResults.forEach(function(searchResult){
    searchResult.addEventListener('click', function(e){
       const selection = searchResult.children[1].textContent;
       addRecipe(selection);
       console.log(inputValue);
    })
})


});


//select a recipe from search list
searchResults.forEach(function(searchResult){
    searchResult.addEventListener('click', function(e){
       const selection = searchResult.children[1].textContent;
       addRecipe(selection);
       
    })
})





//multiple use functions

//select recipe from main section
function selectRecipeFromMain(recipeItems){
    recipeItems.forEach(function(recipeItem){
        recipeItem.addEventListener('click', function(e){
             const recipeTitle = recipeItem.children[1].children[0].textContent;
             addRecipe(recipeTitle);
        })
    })
}



//update DOM to display correct section
function updateDOM(array){
    let displayCategoryItems = array.map(menuOption => `
    <a href="#selected-recipe" class="recipe-item ${menuOption.category}">
     <img class="recipe-img" src="${menuOption.image}">
     <div class="recipe-info">
         <h2 class="recipe-title">${menuOption.title}</h2>
         <p>${menuOption.desc}</p>
     </div>
    </a>`).join('');
 
    menuGrid.innerHTML = displayCategoryItems;
}



//
function addRecipe(element){
    sectionActive(selectedRecipeSection);
    sectionActive(stepsSection);

    for(let i = 0; i < restaurantMenu.length; i++){
        if(element === restaurantMenu[i].title){
            selectedRecipeTitle.textContent = restaurantMenu[i].title;
            selectedRecipeDesc.textContent = restaurantMenu[i].desc;
            selectedRecipeImage.src = restaurantMenu[i].image;
            selectedRecipeSection.classList.add(restaurantMenu[i].category);//for coloring 
        
            const ingredients = restaurantMenu[i].ingredients;

            const ingredientsList = restaurantMenu[i].ingredients.map(ingredient => `
            <li>
            <span class="step-number">${ingredients.indexOf(ingredient) + 1}</span>
            <p class="step-content">${ingredient}</p>
            </li>
            `).join('');

            const steps = restaurantMenu[i].steps;

            const stepsList = restaurantMenu[i].steps.map(step => `
            <li>
                <span class="step-number">${steps.indexOf(step) + 1}</span>
                <p class="step-content">${step}</p>
            </li>
            `).join('');

            selectedRecipeIngredients.innerHTML = ingredientsList;
            selectedRecipeSteps.innerHTML = stepsList;
        }
    }  
}

function sectionActive(element){
    element.classList.add('active');
}

