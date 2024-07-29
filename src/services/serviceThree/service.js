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
        title: "Comprehensive Relocation Services",
        subTitle: "Smooth Transitions for Your Move"
    },
    content: {
        heading: {
            one: "Tailored Relocation Plans",
            two: "Professional Packing Services",
            three: "Reliable Transportation",
            four: "Home Finding Assistance",
            five: "Settling-In Support",
            six: "Ongoing Customer Support"
        },
        details: {
            one: "Receive customized moving plans that cater to your specific needs and timeline, helping with a seamless transition.",
            two: "Enjoy reduced stress as you pack, with services that handle all your belongings with care and precision.",
            three: "Trust in secure and efficient transportation solutions for all your possessions, whether moving locally or long-distance.",
            four: "Benefit from guidance in locating and securing your new home, making the search process easier and more effective.",
            five: "Access comprehensive services to help you settle into your new environment smoothly, including utility setup and local area orientation.",
            six: "Experience support throughout your move, I'll be available to address any concerns and ensure a successful relocation."
        }
    }
}