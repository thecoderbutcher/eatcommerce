
import background from '../../assets/images/hero/background.webp';
import pizza from '../../assets/images/hero/pizza.webp';
import burger from '../../assets/images/hero/burger.webp';
import french from '../../assets/images/hero/french.webp';
import desserts from '../../assets/images/hero/desserts.webp';

import chicken from '../../assets/images/hero/chicken.webp';
import burrito from '../../assets/images/hero/burrito.webp';
import combo from '../../assets/images/hero/combo.webp';

import { MdOutlineLunchDining, MdFlatware, MdFastfood, MdOutlineStar } from "react-icons/md"; 
import cooking  from '../../assets/images/hero/cooking.webp';

import deal1 from '../../assets/images/hero/deal-1.webp'
import deal2 from '../../assets/images/hero/deal-2.webp'
import deal3 from '../../assets/images/hero/deal-3.webp'
import deal4 from '../../assets/images/hero/deal-4.webp'
import deal5 from '../../assets/images/hero/deal-5.webp'
import deal6 from '../../assets/images/hero/deal-6.webp'

import specialBurger from '../../assets/images/hero/burgers.webp'

import feature1 from '../../assets/images/hero/feature-1.webp'
import feature2 from '../../assets/images/hero/feature-2.webp'
import feature3 from '../../assets/images/hero/feature-3.webp'
import feature4 from '../../assets/images/hero/feature-4.webp'
import feature5 from '../../assets/images/hero/feature-5.webp'
import feature6 from '../../assets/images/hero/feature-6.webp' 

import backgroundContact from '../../assets/images/hero/contact-background.webp'

import chef1 from '../../assets/images/hero/chef1.webp'
import chef2 from '../../assets/images/hero/chef2.webp'
import chef3 from '../../assets/images/hero/chef3.webp'

import custumer1 from '../../assets/images/hero/custumer1.webp'
import custumer2 from '../../assets/images/hero/custumer2.webp'
import custumer3 from '../../assets/images/hero/custumer3.webp'
import custumers from '../../assets/images/hero/custumers.webp'

export const principalHero = {
    backgroundImage: background,
    title: "Welcome to EatCommerce",
    content:[
        {menu: "Taste Pizza", img:pizza},
        {menu: "Taste Burger", img:burger},
        {menu: "Taste French", img:french},
        {menu: "Taste Desserts", img:desserts},
    ] 
}

export const offers = [
    {
        price:"Start price $9.99", 
        title:"Special Spacial Chicken",
        condition:"Limits time offer",
        img:chicken
    },
    {
        price:"Start price $9.99", 
        title:"Best Mexican Burrito",
        condition:"Limits time offer",
        img:burrito
    },
    {
        price:"Start price $9.99", 
        title:"Most Complete Comobo",
        condition:"Limits time offer",
        img:combo
    },
]

export const about = {
    title:"About EatCommerce",
    subtitle:"Variety of flavours from world cuisine",
    icon: <MdOutlineLunchDining />,
    img: cooking,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod?",
    content: [
        {
            icon: <MdFlatware />,
            title:"Variety of flavours",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod?",
        },
        {
            icon: <MdFastfood />,
            title:"Fast Delivery",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod?",
        },
    ]
}

export const mostPopular = {
    title: "Popular Deals",
    subtitle:"Most Popular Deals",
    icon: <MdOutlineLunchDining />,
    star: <MdOutlineStar />,
    deals: [
        {
            title: "Special Spacial Chicken",
            price: "$9.99",
            condition:"Does not include taxes",
            img: deal1,
            calification: 3
        },
        {
            title: "Special Spacial Chicken",
            price: "$9.99",
            condition:"Does not include taxes",
            img: deal2,
            calification: 4
        },
        {
            title: "Special Spacial Chicken",
            price: "$9.99",
            condition:"Does not include taxes",
            img: deal3,
            calification: 5
        },
        {
            title: "Special Spacial Chicken",
            price: "$9.99",
            condition:"Does not include taxes",
            img: deal4,
            calification: 3
        },
        {
            title: "Special Spacial Chicken",
            price: "$9.99",
            condition:"Does not include taxes",
            img: deal5,
            calification: 2
        },
        {
            title: "Special Spacial Chicken",
            price: "$9.99",
            condition:"Does not include taxes",
            img: deal6,
            calification: 5
        },
    ]
}

export const specialFood = {
    title: "Welcome to EatCommerce",
    subtitle:"TODAY SPACIAL FOOD",
    condition: "Limits Time Offer",
    img: specialBurger,
    background: background
}

export const featureCategory = {
    title: "POPULAR DISHES",
    subtitle: "Our feature category",
    icon: <MdOutlineLunchDining/>,
    content: [
        {img: feature1, title: "Grilled", subtitle:"20+ Varieties"},
        {img: feature2, title: "Burgers", subtitle:"15+ Varieties"},
        {img: feature3, title: "French", subtitle:"10+ Varieties"},
        {img: feature4, title: "Pastas", subtitle:"35+ Varieties"},
        {img: feature5, title: "Desserts", subtitle:"20+ Varieties"},
        {img: feature6, title: "Pizzas", subtitle:"15+ Varieties"}, 
    ]
}

export const chefes = {
    title: "Our Chefe",
    subtitle:"Meet Our Expert Chefe",
    icon: <MdOutlineLunchDining/>,
    chefes:[
        {img:chef1, name:"Jophep Doeng", position:"President of Sales"},
        {img:chef2, name:"Charles Magnun", position:"Chefe Manager"},
        {img:chef3, name:"Jennifer Petterson", position:"Main Chefe"}, 
    ]
}

export const testimonials = {
    title: "Testimonials", 
    subtitle: "what have lots of happy customer feedback",
    image: custumers,
    icon: <MdOutlineLunchDining />,
    testimonial:[
        { id:1, img: custumer1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse debitis, voluptates odit reiciendis perferendis consequuntur vero placeat, eius eveniet porro a quisquam dolorem numquam temporibus dolore nobis omnis, nihil magni!"},
        { id:2, img: custumer2, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse debitis, voluptates odit reiciendis perferendis consequuntur vero placeat, eius eveniet porro a quisquam dolorem numquam temporibus dolore nobis omnis, nihil magni!"},
        { id:3, img: custumer3, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse debitis, voluptates odit reiciendis perferendis consequuntur vero placeat, eius eveniet porro a quisquam dolorem numquam temporibus dolore nobis omnis, nihil magni!"},
    ]
}

export const contact = {
    title: "Contact us",
    subtitle: "Meet Out Experts Chefes",
    icon: <MdOutlineLunchDining/>,
    img: backgroundContact
}