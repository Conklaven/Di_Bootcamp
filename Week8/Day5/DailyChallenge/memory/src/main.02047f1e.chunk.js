(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"clicked":false,"name":"Captain America","image":"https://media.oregonlive.com/madaboutmovies/photo/9816899-large.jpg","occupation":"Soldier"},{"id":2,"clicked":false,"name":"Iron Man","image":"https://i.pinimg.com/originals/88/39/2b/88392b3dc35aad62440a3866ee02a8e8.jpg","occupation":"CEO Stark Ind."},{"id":3,"clicked":false,"name":"Hulk","image":"https://www.zastavki.com/pictures/640x960/2015/Fantasy_Hulk_angry__Avengers_104763_30.jpg","occupation":"Biochemist"},{"id":4,"clicked":false,"name":"Thor","image":"https://images-na.ssl-images-amazon.com/images/I/51Tp1peS5FL._AC_.jpg","occupation":"Warrior"},{"id":5,"clicked":false,"name":"Batman","image":"https://vignette.wikia.nocookie.net/batman/images/8/8f/Christian_Bale_as_The_Dark_Knight.jpg/revision/latest/top-crop/width/360/height/450?cb=20140208170841","occupation":"Expert Detective"},{"id":6,"clicked":false,"name":"Superman","image":"https://i0.wp.com/pipocamoderna.com.br/wp-content/uploads/2017/09/superman__henry_cavill__batman_v_superman.jpg","occupation":"Journalist"},{"id":7,"clicked":false,"name":"Wonder Woman","image":"https://i.pinimg.com/originals/f3/3c/f0/f33cf0bf1bb0fd71c4bba1d4a88afe70.jpg","occupation":"Secretary"},{"id":8,"clicked":false,"name":"Flash","image":"https://i.pinimg.com/originals/d7/0d/84/d70d843d8ab87911754c6b7603a4edf2.jpg","occupation":"Forensic Sci."},{"id":9,"clicked":false,"name":"Wolverine","image":"https://c4.wallpaperflare.com/wallpaper/899/678/503/movies-comics-xmen-wolverine-superheroes-logan-claws-3333x4929-entertainment-movies-hd-art-wallpaper-preview.jpg","occupation":"Adventurer"},{"id":10,"clicked":false,"name":"Spider-Man","image":"https://i.pinimg.com/originals/d5/6b/c4/d56bc445842242b29284d60b4b9a2684.jpg","occupation":"Photographer"},{"id":11,"clicked":false,"name":"Deadpool","image":"https://vignette.wikia.nocookie.net/marvelmovies/images/6/66/Deadpool_promo.png/revision/latest?cb=20150707202600","occupation":"Mercenary"},{"id":12,"clicked":false,"name":"Mr Incredible","image":"https://www.writeups.org/wp-content/uploads/Mister-Incredible-The-Incredibles-Bob-Parr-i.jpg","occupation":"Insurance Rep."}]')},,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(2),i=t.n(r),o=(t(13),t(3)),l=t(4),s=t(6),m=t(7);var d=function(e){return c.a.createElement("div",{className:"card "+(e.Clicked?"animate":""),onClick:function(){return e.handleClick(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})),c.a.createElement("div",{className:"img-content"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("strong",null,"Name: "),e.name),c.a.createElement("li",null,c.a.createElement("strong",null,"Occupation: "),e.occupation))))};var u=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)};var p=function(e){return c.a.createElement("header",{className:"container-fluid fixed-top"},c.a.createElement("div",{className:"row"},c.a.createElement("h1",{className:"col-sm-8"},"Superheroes Memory Game"),c.a.createElement("nav",{className:"col-sm-4"},c.a.createElement("p",null,"Score: ",c.a.createElement("span",null,e.currentScore)),c.a.createElement("p",null,"Top Score: ",c.a.createElement("span",null,e.highScore)," "),e.children)))};var h=function(e){return c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container"},e.children,c.a.createElement("p",{className:"lead"},"Get points by clicking on an image but don't click on any more than once!")))},g=t(5),f=(t(14),function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={characters:g,highScore:0,currentScore:0,Clicked:!1},e.handleClick=function(a){e.shuffleArray(),e.handleScore(a),console.log(e.state.timesClicked)},e.handleScore=function(a){e.state.characters.forEach((function(t){a===t.id&&!1===t.clicked?(t.clicked=!0,e.setState({Clicked:!1}),e.handleIncrement()):a===t.id&&!0===t.clicked&&(e.state.currentScore>e.state.highScore&&e.setState({highScore:e.state.currentScore}),e.setState({currentScore:0}),e.setState({Clicked:!0}),e.state.characters.forEach((function(e){return e.clicked=!1})),console.log(e.state.characters))}))},e.shuffleArray=function(){var a=e.shuffle(e.state.characters);e.setState({shuffledArr:a})},e.handleIncrement=function(){e.setState({currentScore:e.state.currentScore+1})},e.shuffle=function(e){for(var a,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),a=e[n-=1],e[n]=e[t],e[t]=a;return e},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(u,null,c.a.createElement(p,{currentScore:this.state.currentScore,highScore:this.state.highScore}),c.a.createElement(h,null),this.state.characters.map((function(a){return c.a.createElement(d,{Clicked:e.state.Clicked,handleClick:e.handleClick,id:a.id,key:a.id,name:a.name,image:a.image,occupation:a.occupation})})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.02047f1e.chunk.js.map