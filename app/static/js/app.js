/* Add your Application JavaScript */
Vue.component('app-header', {
    template: `
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
              <a class="navbar-brand" href="#">VueJS App</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                  </li>
                </ul>
              </div>
            </nav>
        </header>    
    `,
    data: function() {
      return {};
    }
});


Vue.component('news-list', {
  template:`
  <div class="news">
    <h2>News</h2>
    <ul class="news__list">
    <li v-for="article in articles"class="news__item"><img :src="article.urlToImage"/>{{ article.title }}, {{ article.description }}</li>
    </ul>
  </div>
  `,
  created: function() {

    let self = this;

    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=ef8061d126bd40f7806450caa1a47108').then(function(response){
    return response.json();
    })
    .then(function(data) {
    console.log(data);

    self.articles = data.articles;

    });
    },

    data: function(){
      return{
        articles: []
      }
    }

});


Vue.component('app-footer', {
    template: `
        <footer>
            <div class="container">
                <p>Copyright &copy {{ year }} Flask Inc.</p>
            </div>
        </footer>
    `,
    data: function() {
        return {
            year: (new Date).getFullYear()
        }
    }
})

let app = new Vue({
    el: '#app',
    data: {
        welcome: 'Hello World! Welcome to VueJS'
    }
});


