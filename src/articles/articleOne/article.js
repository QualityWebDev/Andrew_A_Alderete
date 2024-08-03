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
                        <p class="text-slate-900 m-2 ind"><span class="font-bold">${article.content.headings.ten}</span>: ${article.content.paragraphs.eleven}</p>      
                        <p class="text-slate-900 m-2 ind">${article.content.paragraphs.twelve}</p>
                        <p class="text-slate-900 m-2 text-center">Want proffessional help? <span class="text-slate-900 underline"><a href="/contact/contact.html">Contact us.</a></span></p>
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
        img: "./cover-img.png",
        title: "Top 10 Tips for Selling Your Home Quickly and for the Best Price",
        subTitle: "Expert Strategies for a Fast and Profitable Sale"
    },
    content: {
        paragraphs: {
            one: "Selling one's home is a challenging job, but it can become even more daunting when one is in a hurry and needs to sell quickly and for the best available price. To make this rather tough ordeal easier on the sellers, here are 10 tips for selling your home quickly at the best price:",
            two: "First impressions matter. It's the first thing that potential buyers see in your home, so make sure the exterior is welcoming. Mow the grass, plant some flowers, paint the front door, and make sure the driveway is clean. Little details mean a lot.",
            three: "When you stage a home, you are enabling someone to envision themselves in your home. Declutter and depersonalize, arrange furniture to show off space. A nicely staged home will look larger in size, be more appealing and assist buyers in feeling attached emotionally to the property.",
            four: "Address any visible repairs before putting your home on the market. Repair leaky faucets, fill in holes in walls, and make sure all appliances are fully functioning. A buyer is more apt to make an offer if your home looks well cared for.",
            five: "Having the right price is absolutely essential. Check out other similar homes within your neighborhood and consider having a professional appraisal. Ask for too much and buyers may be put off; ask for too little and you might have left money on the table. Try to find that happy medium in price when listing it.",
            six: "Great photos will make your listing pop. Consider hiring a professional photographer with expertise in real estate to take photos of your home—good photos can significantly increase interest and showings.",
            seven: "Write a compelling listing description that highlights your home's best features. Use descriptive language to paint a picture for potential buyers by underlining the unique aspects and recent upgrades. Be honest but tout the positives.",
            eight: "It should be marketed widely, through every medium possible. Beyond the use of traditional techniques, like the use of yard signs, online platforms should also be leveraged, such as real estate websites, the use of social media, and the use of email newsletters. A massive approach to marketing would most probably pull in more potential buyers.",
            nine: "A professional real estate agent can do wonders with his expertise. He can help with market knowledge, negotiations, and paperwork management. Hire an agent from the neighborhood who has a proven sales history in the aspects of selling quickly and at the best price.",
            ten: "Make your home available for showings as often as possible. The more people you can get through your home, the better the chances of receiving multiple offers. Be prepared for last-minute showings and keep your home in show-ready condition at all times.",
            eleven: "Nowadays, home buyers are actively interested in making energy-efficient purchases. Let them know if your home has new windows, insulation, or appliances that help with energy-saving. They are big selling points, and these may justify an increase in the asking price.",
            twelve: "The key to selling your home quickly and at the best possible price is proper preparation, strategic pricing, effective marketing, and working with the right professionals. Consider these top 10 tips in enhancing how home buyers are attracted to your property and improve your probability of a sale. But remember, the effort you put into preparing and marketing your home truly does pay off with a fast sale and for top dollar."
        },
        headings: {
            one: "Curb Appeal",
            two: "Stage Your Home",
            three: "Make Necessary Repairs",
            four: "Price It Right",
            five: "Professional Photography",
            six: "Write a Powerful Listing Description",
            seven: "Market Widely",
            eight: "Engage a Real Estate Agent",
            nine: "Be Flexible with Showings",
            ten: "Show Energy Efficiency"
        }
    }
};