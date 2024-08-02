/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/index.html', './contact/contact.html', '/services/serviceOne/service.html', '/services/serviceTwo/service.html', '/services/serviceThree/service.html', '/services/serviceOne/service.js', '/services/serviceTwo/service.js', '/services/serviceThree/service.js', '/components/components.js', '/articles/articleOne/article.html', '/articles/articleOne/article.js','/articles/articleTwo/article.html', '/articles/articleTwo/article.js', '/articles/articleThree/article.html', '/articles/articleThree/article.js'],
  theme: {
    extend: {
      spacing: {
        '220px': '225px',
        '410px': '410px',
        'oncenter': 'calc(50vw - 100px)',
        'ontop': '60px'
      },
      
    },
  },
  plugins: [],
}

