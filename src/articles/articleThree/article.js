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
        title: "Navigating the Home Buying Process",
        subTitle: "Helpful Tips in Real Estate"
    },
    content: {
        paragraphs: {
            one: "The process of buying a house is altogether exciting and overwhelming. There are many factors that come into play, and, of course, professional help from an experienced realtor makes all the difference. So here are some tips to guide you through the journey of buying your new home.",
            two: "Establishing your budget by getting pre-approved for a mortgage is probably the first step to take. A proactive realtor would definitely want you to get preapproved for a mortgage so that you absolutely have an idea of what you can afford. Among the numerous reasons to get preapproved for a mortgage are, foremost, to make your search narrower and, secondly, to make your offer position stronger. After all, you should not forget additional costs, such as property taxes, insurance, and repairs.",
            three: "Put serious thought to your needs and wants in a house, and list those down. Such considerations can include: needs for how many bedrooms, proximity to work or schools, a big yard, or certain architectural styles. Most times, an experienced realtor will help prioritize your features in addition to finding the near or best homes to your criteria thus saving you time and effort.",
            four: "As critical as the property is the location of your new home. Do your homework about the neighborhood and its safety, schools, amenities, and other future improvements. Use a successful realtor—one with many years of local experience—to assist you with community exploration to choose just the right location for your ideal lifestyle and long-term goals.",
            five: "An experienced real estate agent brings immense value to the process. They know the market trends in your area, how to price a property correctly, and have developed negotiation skills that could get you the best deal. They will also guide you through making competitive offers and help you navigate heaps of complicated paperwork that goes into purchasing a home.",
            six: "The home inspection is a critical component of the buying process. Any good real estate agent will encourage you to contract with a home inspector to review the property for items like structural damage, leaky pipes, and inefficient or outdated electrical and heating systems. This can turn up hidden problems that you can use to help with your negotiating or in needed repairs.",
            seven: "Though having a list of features you want is good, it's also important to be prepared to settle on some issues. No one house can be perfect, so have your list of things you need and then not fret about the rest. Experienced realtors can really help weigh the pros and cons against your wants and budget.",
            eight: "Know the offer and contract agreement terms. A professional real estate agent will explain all that gobbledygook to your satisfaction and allow you to make an informed choice. They will support you in the development of a comprehensive offer; manage any contingencies, and counteroffers by the seller.",
            nine: "Closing costs are additional fees you will have to pay to close on your house. They could include a few things like loan origination fees, title insurance, appraisal fees, and transfer taxes. An experienced real estate agent will help you estimate those costs and prepare for them so that you do not get any shocks while closing.",
            ten: "Buying a home can be a long process, and with patience and determination, you will get there. An experienced real estate agent will keep you motivated and on track toward your goals and help you through tough moments.",
            eleven: "Finally, do remember that buying a home should be a happy event. It may seem stressful at times, but do try to enjoy the process. Your Realtor is there to make sure that the process goes as smoothly and pleasantly as possible and he or she will definitely keep you advised along each step of the way.",
            twelve: "The procedure for purchasing a house involves good planning and advice from an expert. These useful tips and some guidance from an experienced real estate agent will surely help you make wise decisions to help you select the best home that will meet your needs and wants. And with the right guidance, your home buying journey will result in a very rewarding and successful experience."
        },
        headings: {
            one: "Budgeting",
            two: "Know What You Need and Want",
            three: "Know the Neighborhood",
            four: "Work with a Knowledgeable Realtor",
            five: "Inspect the Property Carefully",
            six: "Be Willing to Make a Compromise",
            seven: "The Offer and Contract",
            eight: "Prepare for Closing Costs",
            nine: "Stay Patient and Persistent",
            ten: "Enjoy",
        }
    }
};