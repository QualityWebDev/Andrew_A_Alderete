class siteHeader extends HTMLElement {
  
    connectedCallback() {
        this.innerHTML = `
            <header class="px-3 h-14 w-screen flex justify-between items-center content-center bg-gray-400">
            <a href="/src/contact/contact.html" class="bg-gray-900 text-gray-100 px-3 py-1 rounded-lg animate-[bounce_1s_ease-in-out_infinite]  hover:animate-none">Contact Us</a>
            <div class="flex">
                <button id="dropdownBtn" class="text-slate-900 rounded-sm border-r border-solid border-slate-900/50 py-1 px-4 hover:bg-gray-300/50">Services</button>
                <div id="dropdown" class=" justify-center hidden absolute bg-gray-800 top-12 left-oncenter w-220px p-2 rounded-sm">
                    <a href="/services/serviceOne/service.html" class="cursor-pointer text-gray-100 text-center py-1 px-1 rounded-sm hover:bg-gray-700">Buy or Sell with Confidence</a>
                    <a href="/services/serviceTwo/service.html" class="cursor-pointer text-gray-100 text-center py-1 px-1 rounded-sm  hover:bg-gray-700">Know Your Property's Worth</a>
                    <a href="/services/serviceThree/service.html" class="cursor-pointer text-gray-100 text-center py-1 px-1 rounded-sm hover:bg-gray-700">Relocation Services</a>
                </div>
                <button id="dropdownBtnTwo" class="text-slate-900 rounded-sm border-l border-solid border-slate-900/50 py-1 px-4 hover:bg-gray-300/50">Articles</button>
                <div id="dropdownTwo" class=" justify-center hidden absolute bg-gray-800 top-12 left-oncenter w-220px p-2 rounded-sm">
                    <a href="/articles/articleOne/article.html" class="cursor-pointer text-gray-100 text-center py-1 px-1 rounded-sm hover:bg-gray-700">10 Tips to Sell Your Home</a>
                    <a href="/articles/articleTwo/article.html" class="cursor-pointer text-gray-100 text-center py-1 px-1 rounded-sm  hover:bg-gray-700">Finding a Reliable Realtor</a>
                    <a href="/articles/articleThree/article.html" class="cursor-pointer text-gray-100 text-center py-1 px-1 rounded-sm hover:bg-gray-700">Buying a Good Home</a>
                </div>
            </div>
            <a href="/src/index.html"><svg class="h-20 self-center stroke-gray-900 fill-gray-900" id="ypytGzQg4DT1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 210 297" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><g transform="translate(-1.589283-78.983269)"><path d="M161.32518,198.57483c-9.87343-2.00254-19.99124-8.92648-27.89148-19.08702-3.23409-4.15937-7.788-11.61192-9.28737-15.19893-.30762-.73591-1.17515-.87474-5.73544-.91774-3.54069-.0332-4.78074-.17303-3.63629-.40947c2.38604-.49284,3.80112-1.20091,5.49249-2.74836l1.4402-1.31765-3.53622-8.76115-3.53623-8.76109-19.680581-.13034-19.68058-.13033-3.260817,7.09414c-1.793443,3.90176-3.26081,7.42262-3.26081,7.82406c0,1.26081,4.010509,7.96436,7.290945,12.18681c5.5092,7.0912,10.630497,10.06769,18.180656,10.56658l4.34175.28687-2.58842.64688c-1.479679.36977-4.331328.56618-6.657349.45852-5.158405-.23873-9.313725-1.83933-13.701949-5.27789l-3.265119-2.55855h-14.825506c-13.991435,0-18.234801-.42799-12.365184-1.2472c3.625068-.50598,7.908533-2.67138,9.592553-4.84937.807415-1.04424,2.575497-4.12923,3.929075-6.85555l2.461049-4.95688-2.07964-5.16635-2.07964-5.16641h-12.372535-12.372529l-1.049737,2.10575c-.577355,1.15815-2.176392,4.6263-3.553416,7.70698-2.907003,6.50353-2.814553,7.85923.604419,8.8633c1.715945.50389.644049.58803-7.248674.56861-5.095883-.0131-8.481181-.18408-7.525699-.38148c4.80554-.99257,5.986468-2.37904,11.040137-12.96151c2.395963-5.01718,6.409032-13.24699,8.917925-18.28838s5.632479-11.47754,6.941302-14.30257c2.718984-5.86883,2.649696-6.22007-1.767404-8.95863-3.129447-1.94026-7.065278-2.62604-11.261113-1.96221-4.406023.69713-4.580389.28688-.313571-.7378c4.761401-1.14345,10.116666-1.10792,13.365922.0886c7.487018,2.75714,10.599828,7.52807,19.709461,30.20799c2.325933,5.79079,4.403663,10.52872,4.617184,10.52872s2.109953-3.62311,4.214306-8.05138c3.617239-7.61189,10.701181-22.1514,19.315994-39.645338c4.412098-8.959573,4.423497-8.703516-.558164-12.536963-6.048105-4.654093-13.71986-6.242072-21.625638-4.476318-4.172125.93183-4.258191.93832-4.258191.320519c0-.260617,2.149167-1.073335,4.775926-1.806036c3.979606-1.11,5.885941-1.34079,11.433273-1.384093c6.614106-.05163,6.687349-.03964,11.27497,1.87867c8.386953,3.506536,13.223259,8.882827,19.066329,21.195039c2.59445,5.46692,12.49925,29.1661,17.30646,41.4092.66875,1.70319,1.35817,3.09366,1.53205,3.0899.52599-.0112,16.7984-33.3989,16.80925-34.48908.003-.30595-1.14669-1.46525-2.55499-2.57629-3.55105-2.80153-7.67441-3.80838-12.51792-3.05665-4.62526.71784-4.98429.35669-.67437-.67835c11.22418-2.69545,18.95073.56761,24.46292,10.33119c1.23224,2.18259,4.82897,10.32275,7.99275,18.08925c11.29466,27.72631,14.01308,32.62253,21.82371,39.3075c4.17355,3.5721,7.4973,4.92449,12.99554,5.28782l4.34175.28687-2.58841.64688c-1.45664.36397-4.36756.56958-6.65736.4702-5.15956-.224-9.48477-1.96196-14.21942-5.71365-6.00534-4.75864-9.84707-10.72156-15.34685-23.8207l-2.76032-6.57442-12.48258.13333-12.48258.13333-1.92976,4.27303-1.92975,4.27297l2.11797,4.64548c8.04481,17.6451,19.89883,31.95243,29.83687,36.01187c4.85637,1.98365,7.85713,2.5463,13.66005,2.56111c7.51698.0193,6.62164,1.06784-2.12368,2.48737-3.59135.58292-8.7036.57271-11.6419-.0232ZM68.406541,167.53308c-1.401945-1.82685-2.548988-3.49925-2.548988-3.71642c0-1.09177-1.060521-.1918-1.378755,1.17004-.548033,2.34526,1.16503,4.98349,3.694354,5.68959c1.114383.3111,2.196301.47846,2.404265.37198s-.768931-1.68829-2.170876-3.51519ZM55.671026,141.6984c.31759-.43977-5.152644-14.7465-8.335171-21.79956-1.025742-2.27321-2.069092-3.94542-2.318558-3.71602-.683635.6287-11.578145,24.33003-11.578145,25.18858c0,.63713,1.590903.74523,10.964934.74523c6.030713,0,11.100836-.18818,11.26694-.41823Zm101.652724.006c0-.87623-8.68164-22.42203-9.75447-24.20829l-1.13329-1.88689-.60923,1.23867c-2.43332,4.94732-11.08011,24.20769-11.08011,24.68048c0,.43417,2.95953.58846,11.28855.58846c6.2087,0,11.28855-.18558,11.28855-.41243Zm-44.5753-4.74953c0-.93935-11.41006-29.47844-14.231323-35.59565-1.226717-2.659878-2.475909-4.766069-2.775976-4.680451s-1.946585,3.265192-3.658931,7.065691-5.838607,12.85163-9.169463,20.11354-6.056104,13.33753-6.056104,13.50153s8.075654.29807,17.945899.29807c15.106458,0,17.945898-.11123,17.945898-.70273Z" stroke-width="0.535563"/></g></svg></a>
        </header>
      `;

        const dropdownBtn = this.querySelector('#dropdownBtn');
        const dropdown = this.querySelector('#dropdown');
        const dropdownBtnTwo = this.querySelector('#dropdownBtnTwo');
        const dropdownTwo = this.querySelector('#dropdownTwo');

        const toggleDropdown = (dropdownToShow, dropdownToHide) => {
            dropdownToShow.classList.toggle('hidden');
            dropdownToShow.classList.toggle('grid');
            dropdownToHide.classList.add('hidden');
            dropdownToHide.classList.remove('grid');
        };

        dropdownBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            toggleDropdown(dropdown, dropdownTwo);
        });

        dropdownBtnTwo.addEventListener("click", (event) => {
            event.stopPropagation();
            toggleDropdown(dropdownTwo, dropdown);
        });

        window.addEventListener("click", () => {
            dropdown.classList.add('hidden');
            dropdown.classList.remove('grid');
            dropdownTwo.classList.add('hidden');
            dropdownTwo.classList.remove('grid');
        });
    }
}

customElements.define('site-header', siteHeader);