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
        title: "Expert Residential Real Estate",
        subTitle: "Buy or Sell Your Home with Confidence"
    },
    content: {
        heading: {
            one: "Consultation",
            two: "Investment Analysis",
            three: "Home Staging",
            four: "Negotiation",
            five: "Smooth Transactions",
            six: "Client Support"
        },
        details: {
            one: "I offer tailored advice to help you navigate the buying or selling process, striving to meet your unique needs.",
            two: "I do comprehensive market analysis, helping you make informed decisions based on current trends and data.",
            three: "Maximize your home's appeal with professional staging services, designed to attract potential buyers and enhance property value.",
            four: "I will negotiate, and advocate for your best interests, securing favorable terms and prices.",
            five: "Enjoy a hassle-free experience with seamless transaction management, from listing to closing.",
            six: "Receive ongoing support and guidance from me, I will strive to meet your needs throughout the process"
        }
    }
}