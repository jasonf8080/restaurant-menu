const restaurantMenu = [
    {
        category: 'appetizers',
        image: 'https://www.dinneratthezoo.com/wp-content/uploads/2019/12/mozzarella-sticks-4-500x500.jpg',
        title:  'Mozzerella Sticks',
        price:  '9.99',
        desc:   'Sticks of mozzarella cheese that are coated in seasoned Italian breadcrumbs, then deep fried until golden brown',
        ingredients: ['1⁄4 cup flour', '1 cup Italian style breadcrumbs', '2 eggs', '1 tablespoon milk', '1 lb mozzerella cheese', '1 cup vegetable oil', '1 cup marinara sauce']
    },

    {
        category: 'appetizers',
        image: 'https://images.themodernproper.com/billowy-turkey/production/posts/2019/garlic-bread-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599767628&s=08fa1a2e6dd3daeba5175c6eb9a2d06f',
        title:  'Garlic Bread',
        price:  '9.99',
        desc:   'Toasty, buttery, herby, covered in a dusting of salty parmesan cheese, piping hot and fresh out of the oven',
        ingredients: ['1/2 cup butter', '1 1/2 tablespoons garlic powder', '1 tablespoon dried parsley', '1 pound loaf Italian bread, cut into 1/2 inch slices', '8 ounce package shredded mozzarella cheese']
    },

    {
        category: 'appetizers',
        image: 'https://dinnerthendessert.com/wp-content/uploads/2018/08/Buffalo-Wings-4-500x500.jpg',
        title:  'Buffalo Wings',
        price:  '9.99',
        desc:   'Chicken wings coated with a vinegar-and-cayenne-pepper hot sauce mixed with butter. ',
        ingredients: ['5 pounds chicken wings', '4 cups vinegar-based hot pepper sauce', '1/4 cup butter', '6 tablespoons blue cheese dressing', '1/2 onion', '1/2 teaspoon crushed red pepper flakes',]
    },

    {
        category: 'appetizers',
        image: 'https://easyweeknightrecipes.com/wp-content/uploads/2020/07/Bruschetta-9-500x500.jpg',
        title:  'Fresh Bruschetta',
        price:  '9.99',
        desc:   'Grilled bread rubbed with garlic and topped with olive oil, salt, tomatoes, and balsalmic vinegar.',
        ingredients: ['12 roma tomatoes', '1/3 cup extra virgin olive oil', '3 cloves garlic', '1 cup chopped fresh basil leaves', '2 tablespoons minced shallots', '1 loaf Italian bread, cut into 1/2 inch slices'] 
    },

    {
        category: 'appetizers',
        image: 'https://www.spendwithpennies.com/wp-content/uploads/2019/06/Garlic-Grilled-Shrimp-SpendWithPennies-3-500x500.jpg',
        title:  'Grilled Shrimp',
        price:  '9.99',
        desc:   'Shrimp grilled combined with olive oil, red wine vinegar, garlic, Italian seasoning, salt, and pepper',
        ingredients: ['15 large tiger shrimp', '1 teaspoon garlic powder', '2 tablespoons lime juice', '1/4 cup olive oil', '1 teaspoon garlic powder', '1 teaspoon cajun seasoning']
    },

    {
        category: 'appetizers',
        image: 'https://spicysouthernkitchen.com/wp-content/uploads/Fried-Jalapeno-Popper-Bites-9.jpg',
        title:  'Jalepeno Poppers',
        price:  '9.99',
        desc:   'Spicy jalapeños and cheese fried in a golden brown shell',
        ingredients: ['', '', '', '', '', '']
    },

    {
        category: 'appetizers',
        image: 'https://www.dinneratthezoo.com/wp-content/uploads/2019/11/fried-calamari-67-500x500.jpg',
        title:  'Fried Calamari',
        price:  '9.99',
        desc:   'Tender pieces of squid soaked in buttermilk, then coated in seasoned flour and deep fried to golden brown',
        ingredients: ['', '', '', '', '', '']
    },


    {
        category: 'appetizers',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/stuffed-mushrooms-vertical-jpg-1525207616.jpg?crop=1.00xw:0.667xh;0,0.215xh&resize=480:*',
        title:  'Stuffed Mushrooms',
        price:  '9.99',
        desc:   'Mushrooms stuffed with shallots, garlic, walnuts, breadcrumbs, and chopped mushroom stems.',
        ingredients: ['', '', '', '', '', '']
    },

    {
        category: 'appetizers',
        image: 'https://foodwithfeeling.com/wp-content/uploads/2021/08/truffle-fries-4-225x225.jpg',
        title:  'Truffle Fries',
        price:  '9.99',
        desc:   'Thin cut deep-fried potatoes topped with truffle oil, fresh herbs and spices, garlic, and cheese,',
        ingredients: ['', '', '', '', '', '']
    },


    {
        category: 'appetizers',
        image: 'https://www.lemontreedwelling.com/wp-content/uploads/2020/10/air-fryer-onion-rings-featured-720x720.jpg',
        title:  'Onion Rings',
        price:  '9.99',
        desc:   'Large white onions sliced into rings, dipped in a batter and bread crumbs then deep fried',
        ingredients: ['', '', '', '', '', '']
    },

    {
        category: 'salads',
        image: 'https://www.jessicagavin.com/wp-content/uploads/2019/07/caesar-salad-10-1200.jpg',
        title:  'Caesar Salad',
        price:  '9.99',
        desc:   'Romaine lettuce tossed with a creamy caesar dressing and grated cheese, topped with croutons',
        ingredients: ['5 pounds chicken wings', '4 cups vinegar-based hot pepper sauce', '1/4 cup butter', '6 tablespoons blue cheese dressing', '1/2 onion', '1/2 teaspoon crushed red pepper flakes',]
    },

    {
        category: 'salads',
        image: 'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
        title:  'Italian Salad',
        price:  '9.99',
        desc:   'Salad with romaine lettuce, croutons, tomatoes, pepperoncini, parmesan, topped with Italian dressing',
        ingredients: ['5 pounds chicken wings', '4 cups vinegar-based hot pepper sauce', '1/4 cup butter', '6 tablespoons blue cheese dressing', '1/2 onion', '1/2 teaspoon crushed red pepper flakes',]
    },

    {
        category: 'salads',
        image: 'https://cravingtasty.com/wp-content/uploads/2019/02/Grilled-Chicken-Salad-Horizontal-500x500.jpg',
        title:  'Grilled Chicken Salad',
        price:  '9.99',
        desc:   'Tender marinated chicken served over lettuce with bacon, avocado, corn, blue cheese and tomatoes',
        ingredients: ['', '', '', '', '', '']
    },


    {
        category: 'salads',
        image: 'https://www.spoonfulofflavor.com/wp-content/uploads/2020/03/garden-salad-recipe-500x500.jpg',
        title:  'Fresh Garden Salad',
        price:  '9.99',
        desc:   'Tossed green salad made with carrots, tomatoes, cucumbers and onions',
        ingredients: ['', '', '', '', '', '']
    },

    {
        category: 'salads',
        image: 'https://www.daringgourmet.com/wp-content/uploads/2020/10/Minestrone-12.jpg',
        title:  'Minestrone Soup',
        price:  '9.99',
        desc:   'Italian vegetable soup filled with pasta, beans, tomatoes, and veggies, seasoned with Italian herbs.',
        ingredients: ['', '', '', '', '', '']
    },

    {
        category: 'salads',
        image: 'https://www.willcookforsmiles.com/wp-content/uploads/2020/01/pasta-e-fagioli-8-1-500x500.jpg',
        title:  'Pasta Fagoli',
        price:  '9.99',
        desc:   'Italian style soup with tender pasta, creamy beans, and delicious herbs in a rich and savory broth.',
        ingredients: ['', '', '', '', '', '']
    },


    {
        category: 'salads',
        image: 'https://s23209.pcdn.co/wp-content/uploads/2019/06/One-Pot-French-Onion-SoupIMG_9418-360x360.jpg',
        title:  'French Onion Soup',
        price:  '9.99',
        desc:   'French style soup prepared with beef stock, caramelized onions, topped with cheesy bread',
        ingredients: ['', '', '', '', '', '']
    },
    

    {
        category: 'salads',
        image: 'https://realhousemoms.com/wp-content/uploads/Crockpot-Chicken-Tortellini-Soup-IG.jpg',
        title:  'Tortellini Soup',
        price:  '9.99',
        desc:   'Creamy soup with rich cheese tortellini, ground beef, tomatoes and vegetables, and flavorful herbs.',
        ingredients: ['', '', '', '', '', '']
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
        title:  'Maryland Style Crab Cakes',
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

});  


//select a category
const categories = document.querySelectorAll('.option');
const selectedRecipeSection = document.querySelector('.selected-recipe');
const selectedRecipeTitle = document.querySelector('.selected-recipe-title');
const selectedRecipeDesc = document.querySelector('.selected-recipe-desc');
const selectedRecipeImage = document.querySelector('.selected-recipe-img');
const selectedRecipeIngredients = document.querySelector('.ingredients-list');


categories.forEach(function(category){
    category.addEventListener('click', function(e){
       
        //update categorySlider
        const categorySlider = document.querySelector('.category-slider');
        for(let i = 0; i < categories.length; i++){
            const selectedCategory = categories[i];//all of the individual indexes
            

            if(e.target === selectedCategory){//if e.target = one of the indexes
                categorySlider.style.transform = `translateX(${i}00%)`;
            }
        }
    

       //show selected menu items based on category
       const categoryID = e.target.getAttribute('id');
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
       recipeItems.forEach(function(recipeItem){
           recipeItem.addEventListener('click', function(e){
                const recipeTitle = recipeItem.children[1].children[0].textContent;
                selectRecipe(recipeTitle);
           })
       })
       
    })
})




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
    const inputValue = e.target.value.toLowerCase();

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
})


//select a recipe from search list
searchResults.forEach(function(searchResult){
    searchResult.addEventListener('click', function(e){
       const selection = searchResult.children[1].textContent;
       selectRecipe(selection);
    })
})





function updateDOM(array){
    let displayCategoryItems = array.map(menuOption => `
    <a href="#selected-recipe" class="recipe-item ${menuOption.category}">
     <img class="recipe-img" src="${menuOption.image}">
     <div class="recipe-info">
         <h2 class="recipe-title">${menuOption.title}</h2>
         <p>Recipe By: John Petran</p>
         <div class="recipe-ratings">
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star-half-alt"></i>
         </div>
     </div>
    </a>`).join('');
 
    menuGrid.innerHTML = displayCategoryItems;
}




function selectRecipe(element){
    for(let i = 0; i < restaurantMenu.length; i++){
        if(element === restaurantMenu[i].title){
            selectedRecipeTitle.textContent = restaurantMenu[i].title;
            selectedRecipeDesc.textContent = restaurantMenu[i].desc;
            selectedRecipeImage.src = restaurantMenu[i].image;
            selectedRecipeSection.classList.add(restaurantMenu[i].category);

            const ingredientsList = restaurantMenu[i].ingredients.map(ingredient => `
            <li>- ${ingredient}</li>
            `).join('');

            selectedRecipeIngredients.innerHTML = ingredientsList;
        }
    }  
}

