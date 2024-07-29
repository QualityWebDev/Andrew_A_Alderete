/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html', './src/contact/contact.html', './src/services/serviceOne/service.html', './src/services/serviceTwo/service.html', './src/services/serviceThree/service.html', './src/services/serviceOne/service.js', './src/services/serviceTwo/service.js', './src/services/serviceThree/service.js', './src/components/components.js', './src/articles/articleOne/article.html', './src/articles/articleOne/article.js','./src/articles/articleTwo/article.html', './src/articles/articleTwo/article.js','./src/articles/articleThree/article.html', './src/articles/articleThree/article.js'],
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

