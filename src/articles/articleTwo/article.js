// article.js
class pageContent extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <div class="w-screen grid justify-center justify-items-center">
              <article class="md:w-2/3 m-6 p-6 bg-gray-200 rounded-md shadow-md grid justify-center items-stretch">
                <img class="rounded-md w-full object-fill" src="${article.header.img}" alt="sold-sign">
                <div class="">
                    <h1 id="heading" class="m-2 text-slate-900 text-center text-xl md:text-2xl uppercase">${article.header.title}</h1>
                    <h2 id="sub-heading" class="hidden mb-2 text-slate-600 details-center text-center text-base uppercase md:grid justify-items-center ">${article.header.subTitle}</h2>
                    <div class="">
                        <p class="text-slate-900 m-2 ind">${article.content.paragraphs.one}</p>      
                        <p class="text-slate-900 m-2 ind"><span class="font-bold">${article.content.headings.one}</span>: ${article.content.paragraphs.two}</p> 
                        <p class="text-slate-900 m-2 ind"><span class="font-bold">${article.content.headings.two}</span>: ${article.content.paragraphs.three}</p>      
                        <p class="text-slate-900 m-2 ind"><span class="font-bold">${article.content.headings.three}</span>: ${article.content.paragraphs.four}</p>
                        <p class="text-slate-900 m-2 ind"><span class="font-bold">${article.content.headings.four}</span>: ${article.content.paragraphs.five}</p>      
                        <p class="text-slate-900 m-2 ind"><span class="font-bold">${article.content.headings.five}</span>: ${article.content.paragraphs.six}</p> 
                        <p class="text-slate-900 m-2 ind"><span class="font-bold">${article.content.headings.six}</span>: ${article.content.paragraphs.seven}</p>      
                        <p class="text-slate-900 m-2 ind"><span class="font-bold">${article.content.headings.seven}</span>: ${article.content.paragraphs.eight}</p>
                        <p class="text-slate-900 m-2 ind"><span class="font-bold">${article.content.headings.eight}</span>: ${article.content.paragraphs.nine}</p>      
                        <p class="text-slate-900 m-2 ind"><span class="font-bold">${article.content.headings.nine}</span>: ${article.content.paragraphs.ten}</p> 
                        <p class="text-slate-900 m-2 ind">${article.content.paragraphs.eleven}</p>      
                        <p class="text-slate-900 m-2 text-center">Want proffessional help? <span class="text-slate-900 underline"><a href="/src/contact/contact.html">Contact us.</a></span></p>
                    </div>
                </div>
              </article>
            </div>
        `
        
        console.log(article)
    }
}
customElements.define('page-content', pageContent);

const article = {
    header: {
        img: "./cover-img.jpg",
        title: "How to Choose a Reliable and Honest Realtor",
        subTitle: "Key Qualities to Look For"
    },
    content: {
        paragraphs: {
            one: "Choosing a good realtor makes a huge difference in a property deal. A good realtor will leave you with peace of mind after completing a transaction. Here is what to look for in a good and trusted realtor:",
            two: "Experience: It counts. An experienced realtor would be aware of nuances in local market trends, pricing strategies, and have a contact network that would be beneficial. Look for a realtor with at least several years of experience working in your area and having a proven track record. Their knowledge of neighborhoods, schools, and facilities may give valuable insights that help you make informed decisions.",
            three: "Effective communication in a real estate transaction involves a lot. A good agent should be able to simplify for you the tough terms in layman's language so that you are informed each step of the way. He or she also should be in a position to answer all your calls, emails, and texts to make sure you feel supported and aware of everything going on. Trust comes in through clear, transparent, and honest communication.",
            four: "Professionalism and ethical behavior are two characteristics a realtor has to live by. They have to be under an ethical standard that treats everybody with respect and honesty. Check if they belong to good organizations like the National Association of Realtors, who has a very strict code of ethics. An honest realtor will always have your interests at heart rather than pushing for a quick commission.",
            five: "Look to testimonials from past clients as they will shine a light on the reputation and previous performance of a realtor. Look for reviews across all review platforms, such as Google, Yelp, Zillow. Look to reoccurring trends in the feedback. Testimonials noted with being reliable, good service, and successful transactions can be considered as key to showing that the realtor is trustworthy.",
            six: "It is here that, with a good understanding of market conditions, local realtors are able to have valuations of property that are accurate and pick up on opportunities that might be lost on others. They should have enough knowledge about the markets in terms of good pricing strategies and even the laws and regulations in the local areas. This is the knowledge that will allow you to make proper decisions and move your way through all the complexities in buying or selling properties in your area.",
            seven: "Negotiation is one key component in real estate. An experienced negotiator will mean a good deal, either purchasing or selling property. Find a realtor with the reputation of a tough yet fair negotiator. The way they handle negotiations can actually affect the final result of your deal.",
            eight: "Real estate transactions are rather a paper-intensive and legal process. An organized realtor is very careful to make sure everything on documents is correct and in on time, which then prevents costly errors from happening. Their detail orientation keeps possible issues that could drag the whole closing process out or bring some potential legal challenges closer to zero.",
            nine: "Finding a realtor with whom you are most comfortable or whom you can trust is also of importance. Indeed, find a realtor who will listen to your needs, understand your preferences, and respect the decisions you make about the new property. A very good rapport may make everything more interesting and stress-free.",
            ten: "Real estate transactions happen so quickly, and availability is a key factor in a realtor. He should be ready to make proper schedule adjustments according to your convenience, which may involve having meeting schedules at night or viewing houses over the weekends. That means he will avail himself when a deal comes knocking on your door.",
            eleven: "It is upon considering these key qualities that one decides on choosing the realtor: an honest and reliable one. For sure, experience, communication, professionalism, local knowledge, negotiation skills, attention to detail, personal compatibility, and availability are all factors that will help one to find exactly the right realtor to make their real estate journey one of success and without stress. Your right realtor is your partner in achieving your real estate goals."
        },
        headings: {
            one: "Experience and Knowledge",
            two: "Strong Communication Skills",
            three: "Professionalism and Ethics",
            four: "Positive Reviews and Testimonials",
            five: "Local Market Expertise",
            six: "Good Negotiation",
            seven: "Attention to Detail",
            eight: "Personal Compatibility",
            nine: "Accessibility and Availability",
            ten: "Conclusion"
        }
    }
};