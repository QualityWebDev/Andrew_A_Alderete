// service.js
class pageContent extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
              <div class="w-screen grid justify-center justify-items-center">
              <article class="md:w-2/3 m-6 p-6 bg-gray-200 rounded-md shadow-md grid justify-center items-stretch">
                <img class="rounded-md w-full object-fill" src="${article.header.img}" alt="sold-sign">
                <div class="">
                    <h1 id="heading" class="m-2 text-slate-900 text-center text-xl md:text-2xl uppercase">${article.header.title}</h1>
                    <h2 id="sub-heading" class="hidden mb-2 text-slate-600 details-center text-center text-base uppercase md:grid justify-items-center ">${article.header.subTitle}</h2>
                    <ul class="w-fit text-slate-500 list-dis grid justify-center justify-items-center">
                        <li class="text-slate-900"><span class="font-bold text-slate-900">${article.content.heading.one}</span>: ${article.content.details.one}</li>      
                        <li class="text-slate-900"><span class="font-bold text-slate-900">${article.content.heading.two}</span>: ${article.content.details.two}</li> 
                        <li class="text-slate-900"><span class="font-bold text-slate-900">${article.content.heading.three}</span>: ${article.content.details.three}</li> 
                        <li class="text-slate-900"><span class="font-bold text-slate-900">${article.content.heading.four}</span>: ${article.content.details.four}</li> 
                        <li class="text-slate-900"><span class="font-bold text-slate-900">${article.content.heading.five}</span>: ${article.content.details.five}</li> 
                        <li class="text-slate-900"><span class="font-bold text-slate-900">${article.content.heading.six}</span>: ${article.content.details.six}</li>               
                    </ul>
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
        title: "Home Valuation and Market Analysis",
        subTitle: "Know Your Property's Worth"
    },
    content: {
        heading: {
            one: "Accurate Property Valuation",
            two: "Comparable Market Analysis",
            three: "Market Trends Insight",
            four: "Customized Reports",
            five: "Expert Consultation",
            six: "Maximize Your Investment"
        },
        details: {
            one: "Get an estimate of your home's current market value based on comprehensive analysis and recent sales data.",
            two: "Understand how your property compares to similar homes in the area, highlighting key differentiators that impact its value.",
            three: "Stay informed with the latest trends and patterns in the local real estate market to make well-timed decisions.",
            four: "Receive detailed and personalized reports that break down your property's value and market position.",
            five: "Benefit from advice and insights from me to optimize your property's market potential.",
            six: "Leverage accurate market analysis to enhance your property's appeal and maximize its value in the competitive real estate market."
        }
    }
}