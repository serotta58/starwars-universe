(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(52)},33:function(e,t,a){},36:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),s=(a(33),a(27)),i=a(10),u=a.n(i),m=a(17),o=a(11),p=a(12),E=a(14),h=a(13),v=a(15),d=(a(36),function(e){return r.a.createElement("button",{className:"toggle-button",onClick:e.click},r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}))}),f=a(1),g=function(e){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.b,{to:"/films"},"Films")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/people"},"Characters")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/planets"},"Planets")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/species"},"Species")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/starships"},"Starships")),r.a.createElement("li",null,r.a.createElement(f.b,{to:"/vehicles"},"Vehicles")))},b=(a(45),function(e){return r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",{className:"toolbar__navigation"},r.a.createElement("div",{className:"toolbar__toggle-button"},r.a.createElement(d,{click:e.drawerClickHandler})),r.a.createElement("div",{className:"toolbar__logo"},r.a.createElement(f.b,{to:"/"},"Star Wars Universe")),r.a.createElement("div",{className:"toolbar__navigation-items"},r.a.createElement(g,null))))}),N=(a(46),function(e){var t=e.show?"side-drawer open":"side-drawer";return r.a.createElement("nav",{className:t},r.a.createElement(g,null))}),w=(a(47),function(e){return r.a.createElement("div",{className:"backdrop",onClick:e.click})}),k=(a(48),function(e){return r.a.createElement("div",{className:"footer"},"App by Glen Cunningham")}),C=a(7),_=function(e){function t(){return Object(o.a)(this,t),Object(E.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),y=Object(C.e)(_),O=a(3),j=a(26);function x(e){return isNaN(e)?e:Number(e).toLocaleString()}function S(e){if(isNaN(e))return NaN;for(var t=String(+e).split(""),a=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"],n="",r=3;r--;)n=(a[+t.pop()+10*r]||"")+n;return Array(+t.join("")+1).join("M")+n}function M(e){return"https://swapi.co/api"+e+"/"}var D=function(e){var t=e.films,a=e.universe;return t.length?r.a.createElement("div",{className:"film-list"},r.a.createElement("h3",{className:"list-title"},"Films:"),t.map(function(e){return r.a.createElement(U,{key:e,origUrl:e,universe:a})})):r.a.createElement("div",null)},U=function(e){var t=e.origUrl,a=e.universe.films,n=t.split("/"),l="/films/"+n[n.length-2],c=S(a.get(t).episode_id)+": "+a.get(t).title;return r.a.createElement("div",{className:"film-link"},r.a.createElement(f.b,{to:l},c))},I=function(e){var t=e.characters,a=e.universe,n=e.title;return n=n||"Characters",t.length?r.a.createElement("div",{className:"character-list"},r.a.createElement("h3",{className:"list-title"},n,":"),t.map(function(e){return r.a.createElement(P,{key:e,origUrl:e,universe:a})})):r.a.createElement("div",null)},P=function(e){var t=e.origUrl,a=e.universe.people,n=t.split("/"),l="/people/"+n[n.length-2],c=a.get(t).name;return r.a.createElement("div",{className:"person-link"},r.a.createElement(f.b,{to:l},c))},X=function(e){var t=e.planets,a=e.universe;return t.length?r.a.createElement("div",{className:"planet-list"},r.a.createElement("h3",{className:"list-title"},"Planets:"),t.map(function(e){return r.a.createElement(H,{key:e,origUrl:e,universe:a})})):r.a.createElement("div",null)},H=function(e){var t=e.origUrl,a=e.universe,n=e.useSpan;if(Object(j.isNullOrUndefined)(t))return n?r.a.createElement("span",null,"N/A"):r.a.createElement("div",null,"N/A");n=n||!1;var l=a.planets,c=t.split("/"),s="/planets/"+c[c.length-2],i=l.get(t).name;return n?r.a.createElement("span",{className:"planet-link"},r.a.createElement(f.b,{to:s},i)):r.a.createElement("div",{className:"planet-link"},r.a.createElement(f.b,{to:s},i))},L=function(e){var t=e.species,a=e.universe;return t.length?r.a.createElement("div",{className:"species-list"},r.a.createElement("h3",{className:"list-title"},"Species:"),t.map(function(e){return r.a.createElement(A,{key:e,origUrl:e,universe:a})})):r.a.createElement("div",null)},A=function(e){var t=e.origUrl,a=e.universe.species,n=t.split("/"),l="/species/"+n[n.length-2],c=a.get(t).name;return r.a.createElement("div",{className:"species-link"},r.a.createElement(f.b,{to:l},c))},V=function(e){var t=e.starships,a=e.universe;return t.length?r.a.createElement("div",{className:"starships-list"},r.a.createElement("h3",{className:"list-title"},"Starships:"),t.map(function(e){return r.a.createElement(G,{key:e,origUrl:e,universe:a})})):r.a.createElement("div",null)},G=function(e){var t=e.origUrl,a=e.universe.starships,n=t.split("/"),l="/starships/"+n[n.length-2],c=a.get(t).name;return r.a.createElement("div",{className:"starship-link"},r.a.createElement(f.b,{to:l},c))},T=function(e){var t=e.vehicles,a=e.universe;return t.length?r.a.createElement("div",{className:"vehicles-list"},r.a.createElement("h3",{className:"list-title"},"Vehicles:"),t.map(function(e){return r.a.createElement(W,{key:e,origUrl:e,universe:a})})):r.a.createElement("div",null)},W=function(e){var t=e.origUrl,a=e.universe.vehicles,n=t.split("/"),l="/vehicles/"+n[n.length-2],c=a.get(t).name;return r.a.createElement("div",{className:"vehicle-link"},r.a.createElement(f.b,{to:l},c))},F=(a(8),function(e){var t=e.universe.films,a=Object(O.a)(t.values()).map(function(e){return r.a.createElement(R,{key:e.url,film:e})});return r.a.createElement("div",null,r.a.createElement("div",{className:"category-titlebar"},r.a.createElement("h1",{className:"card"},"Films")),r.a.createElement("div",{className:"card-list"},a))}),R=function(e){var t=e.film,a=t.url.split("/"),n="/films/"+a[a.length-2];return r.a.createElement(f.b,{to:n,className:"card grow"},r.a.createElement("h2",null,t.title),r.a.createElement("p",null,"Episode ",S(t.episode_id)),r.a.createElement("p",null,"Director: ",t.director))},B=function(e){var t=e.match,a=e.universe,n=M(t.url),l=a.films.get(n);return r.a.createElement("div",{className:"detail"},r.a.createElement("h1",null,l.title),r.a.createElement("h2",null,"Episode: ",S(l.episode_id)),r.a.createElement("pre",null,l.opening_crawl),r.a.createElement("h3",null,"Director: ",l.director),r.a.createElement("h3",null,"Producer: ",l.producer),r.a.createElement("h3",null,"Release Date: ",l.release_date),r.a.createElement(I,{characters:l.characters,universe:a}),r.a.createElement(X,{planets:l.planets,universe:a}),r.a.createElement(L,{species:l.species,universe:a}),r.a.createElement(V,{starships:l.starships,universe:a}),r.a.createElement(T,{vehicles:l.vehicles,universe:a}))},z=function(e){var t=e.universe;return r.a.createElement(C.c,null,r.a.createElement(C.a,{exact:!0,path:"/films",render:function(){return r.a.createElement(F,{universe:t})}}),r.a.createElement(C.a,{path:"/films/:number",render:function(e){var a=e.match;return r.a.createElement(B,{match:a,universe:t})}}))},J=function(e){var t=e.universe.people,a=Object(O.a)(t.values()).map(function(e){return r.a.createElement(Y,{key:e.url,person:e})});return r.a.createElement("div",null,r.a.createElement("div",{className:"category-titlebar"},r.a.createElement("h1",{className:"card"},"Characters")),r.a.createElement("div",{className:"card-list"},a))},Y=function(e){var t=e.person,a=t.url.split("/"),n="/people/"+a[a.length-2];return r.a.createElement(f.b,{to:n,className:"card grow"},r.a.createElement("h2",null,t.name),r.a.createElement("p",null,"Gender: ",t.gender),r.a.createElement("p",null,"Height (cm): ",t.height))},$=function(e){var t=e.match,a=e.universe,n=M(t.url),l=a.people.get(n);return r.a.createElement("div",{className:"detail"},r.a.createElement("h1",null,l.name),r.a.createElement("h3",null,"Gender: ",l.gender),r.a.createElement("h3",null,"Height (cm): ",l.height),r.a.createElement("h3",null,"Birth Year: ",l.birth_year),r.a.createElement("h3",null,"Hair Color: ",l.hair_color),r.a.createElement("h3",null,"Eye Color: ",l.eye_color),r.a.createElement("h3",null,"Skin Color: ",l.skin_color),r.a.createElement("h3",null,"Mass (kg): ",l.mass),r.a.createElement("h3",null,r.a.createElement("span",null,"Homeworld: "),r.a.createElement(H,{origUrl:l.homeworld,universe:a,useSpan:!0})),r.a.createElement(L,{species:l.species,universe:a}),r.a.createElement(D,{films:l.films,universe:a}),r.a.createElement(V,{starships:l.starships,universe:a}),r.a.createElement(T,{vehicles:l.vehicles,universe:a}))},q=function(e){var t=e.universe;return r.a.createElement(C.c,null,r.a.createElement(C.a,{exact:!0,path:"/people",render:function(){return r.a.createElement(J,{universe:t})}}),r.a.createElement(C.a,{path:"/people/:number",render:function(e){var a=e.match;return r.a.createElement($,{match:a,universe:t})}}))},K=function(e){var t=e.universe.planets,a=Object(O.a)(t.values()).map(function(e){return r.a.createElement(Q,{key:e.url,planet:e})});return r.a.createElement("div",null,r.a.createElement("div",{className:"category-titlebar"},r.a.createElement("h1",{className:"card"},"Planets")),r.a.createElement("div",{className:"card-list"},a))},Q=function(e){var t=e.planet,a=t.url.split("/"),n="/planets/"+a[a.length-2];return r.a.createElement(f.b,{to:n,className:"card grow"},r.a.createElement("h2",null,t.name),r.a.createElement("p",null,"Population: ",x(t.population)),r.a.createElement("p",null,"Terrain: ",t.terrain))},Z=function(e){var t=e.match,a=e.universe,n=M(t.url),l=a.planets.get(n);return r.a.createElement("div",{className:"detail"},r.a.createElement("h1",null,l.name),r.a.createElement("h2",null,"Population: ",x(l.population)),r.a.createElement("h2",null,"Terrain: ",l.terrain),r.a.createElement("h3",null,"Climate: ",l.climate),r.a.createElement("h3",null,"Diameter: ",x(l.diameter)),r.a.createElement("h3",null,"Surface Water (%): ",l.surface_water),r.a.createElement("h3",null,"Gravity: ",l.gravity),r.a.createElement("h3",null,"Orbital Period: ",l.orbital_period),r.a.createElement("h3",null,"Rotation Period: ",l.rotation_period),r.a.createElement(D,{films:l.films,universe:a}),r.a.createElement(I,{characters:l.residents,title:"Residents",universe:a}))},ee=function(e){var t=e.universe;return r.a.createElement(C.c,null,r.a.createElement(C.a,{exact:!0,path:"/planets",render:function(){return r.a.createElement(K,{universe:t})}}),r.a.createElement(C.a,{path:"/planets/:number",render:function(e){var a=e.match;return r.a.createElement(Z,{match:a,universe:t})}}))},te=function(e){var t=e.universe.species,a=Object(O.a)(t.values()).map(function(e){return r.a.createElement(ae,{key:e.url,species:e})});return r.a.createElement("div",null,r.a.createElement("div",{className:"category-titlebar"},r.a.createElement("h1",{className:"card"},"Species")),r.a.createElement("div",{className:"card-list"},a))},ae=function(e){var t=e.species,a=t.url.split("/"),n="/species/"+a[a.length-2];return r.a.createElement(f.b,{to:n,className:"card grow"},r.a.createElement("h2",null,t.name),r.a.createElement("p",null,"Classification: ",t.classification),r.a.createElement("p",null,"Language: ",t.language))},ne=function(e){var t=e.match,a=e.universe,n=M(t.url),l=a.species;return l=l.get(n),r.a.createElement("div",{className:"detail"},r.a.createElement("h1",null,l.name),r.a.createElement("h2",null,"Classification: ",l.classification),r.a.createElement("h2",null,"Language: ",l.language),r.a.createElement("h3",null,"Avg Height (cm): ",l.average_height),r.a.createElement("h3",null,"Designation: ",l.designation),r.a.createElement("h3",null,"Eye Colors: ",l.eye_colors),r.a.createElement("h3",null,"Hair Colors: ",l.hair_colors),r.a.createElement("h3",null,"Skin Colors: ",l.skin_colors),r.a.createElement("h3",null,r.a.createElement("span",null,"Homeworld: "),r.a.createElement(H,{origUrl:l.homeworld,universe:a,useSpan:!0})),r.a.createElement(D,{films:l.films,universe:a}),r.a.createElement(I,{characters:l.people,universe:a}))},re=function(e){var t=e.universe;return r.a.createElement(C.c,null,r.a.createElement(C.a,{exact:!0,path:"/species",render:function(){return r.a.createElement(te,{universe:t})}}),r.a.createElement(C.a,{path:"/species/:number",render:function(e){var a=e.match;return r.a.createElement(ne,{match:a,universe:t})}}))},le=function(e){var t=e.universe.starships,a=Object(O.a)(t.values()).map(function(e){return r.a.createElement(ce,{key:e.url,starship:e})});return r.a.createElement("div",null,r.a.createElement("div",{className:"category-titlebar"},r.a.createElement("h1",{className:"card"},"Starships")),r.a.createElement("div",{className:"card-list"},a))},ce=function(e){var t=e.starship,a=t.url.split("/"),n="/starships/"+a[a.length-2];return r.a.createElement(f.b,{to:n,className:"card grow"},r.a.createElement("h2",null,t.name),r.a.createElement("p",null,"Class: ",t.starship_class),r.a.createElement("p",null,"Crew: ",x(t.crew)),r.a.createElement("p",null,"Passengers: ",x(t.passengers)))},se=function(e){var t=e.match,a=e.universe,n=M(t.url),l=a.starships.get(n);return r.a.createElement("div",{className:"detail"},r.a.createElement("h1",null,l.name),r.a.createElement("h2",null,"Class: ",l.starship_class),r.a.createElement("h3",null,"Model: ",l.model),r.a.createElement("h3",null,"Crew: ",x(l.crew)),r.a.createElement("h3",null,"Passengers: ",x(l.passengers)),r.a.createElement("h3",null,"Cargo Capacity: ",x(l.cargo_capacity)),r.a.createElement("h3",null,"Length: ",x(l.length)),r.a.createElement("h3",null,"Sublight Speed (MGLT): ",x(l.MGLT)),r.a.createElement("h3",null,"Hyperdrive Rating: ",l.hyperdrive_rating),r.a.createElement("h3",null,"Max Atmosphering Speed: ",x(l.max_atmosphering_speed)),r.a.createElement("h3",null,"Consumables: ",l.consumables),r.a.createElement("h3",null,"Manufacturer: ",l.manufacturer),r.a.createElement("h3",null,"Cost (credits): ",x(l.cost_in_credits)),r.a.createElement(D,{films:l.films,universe:a}),r.a.createElement(I,{characters:l.pilots,title:"Pilots",universe:a}))},ie=function(e){var t=e.universe;return r.a.createElement(C.c,null,r.a.createElement(C.a,{exact:!0,path:"/starships",render:function(){return r.a.createElement(le,{universe:t})}}),r.a.createElement(C.a,{path:"/starships/:number",render:function(e){var a=e.match;return r.a.createElement(se,{match:a,universe:t})}}))},ue=function(e){var t=e.universe.vehicles,a=Object(O.a)(t.values()).map(function(e){return r.a.createElement(me,{key:e.url,vehicle:e})});return r.a.createElement("div",null,r.a.createElement("div",{className:"category-titlebar"},r.a.createElement("h1",{className:"card"},"Vehicles")),r.a.createElement("div",{className:"card-list"},a))},me=function(e){var t=e.vehicle,a=t.url.split("/"),n="/vehicles/"+a[a.length-2];return r.a.createElement(f.b,{to:n,className:"card grow"},r.a.createElement("h2",null,t.name),r.a.createElement("p",null,"Crew: ",x(t.crew)),r.a.createElement("p",null,"Passengers: ",x(t.passengers)),r.a.createElement("p",null,"Class: ",t.vehicle_class))},oe=function(e){var t=e.match,a=e.universe,n=M(t.url),l=a.vehicles.get(n);return r.a.createElement("div",{className:"detail"},r.a.createElement("h1",null,l.name),r.a.createElement("h2",null,"Class: ",l.vehicle_class),r.a.createElement("h3",null,"Model: ",l.model),r.a.createElement("h3",null,"Crew: ",x(l.crew)),r.a.createElement("h3",null,"Passengers: ",x(l.passengers)),r.a.createElement("h3",null,"Cargo Capacity: ",x(l.cargo_capacity)),r.a.createElement("h3",null,"Length: ",x(l.length)),r.a.createElement("h3",null,"Max Atmosphering Speed: ",x(l.max_atmosphering_speed)),r.a.createElement("h3",null,"Consumables: ",l.consumables),r.a.createElement("h3",null,"Manufacturer: ",l.manufacturer),r.a.createElement("h3",null,"Cost (credits): ",x(l.cost_in_credits)),r.a.createElement(D,{films:l.films,universe:a}),r.a.createElement(I,{characters:l.pilots,title:"Pilots",universe:a}))},pe=function(e){var t=e.universe;return r.a.createElement(C.c,null,r.a.createElement(C.a,{exact:!0,path:"/vehicles",render:function(){return r.a.createElement(ue,{universe:t})}}),r.a.createElement(C.a,{path:"/vehicles/:number",render:function(e){var a=e.match;return r.a.createElement(oe,{match:a,universe:t})}}))},Ee=["https://swapi.co/api/films/","https://swapi.co/api/people/","https://swapi.co/api/planets/","https://swapi.co/api/species/","https://swapi.co/api/starships/","https://swapi.co/api/vehicles/"],he=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(E.a)(this,Object(h.a)(t).call(this))).loadMapOfObjects=function(){var e=Object(m.a)(u.a.mark(function e(t){var a,n,r,l,c,s,i,m;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=new Map([]),n=[],r=0,l=t;case 4:return e.next=6,fetch(l);case 6:if((c=e.sent).ok){e.next=9;break}throw Error(c.status+" on fetch of "+c.url);case 9:return e.next=11,c.json();case 11:s=e.sent,r=s.count,s.results.forEach(function(e){return n.push(e)}),l=s.next;case 15:if(l){e.next=4;break}case 16:i=t.split("/"),m=i[i.length-2],e.t0=m,e.next="films"===e.t0?21:23;break;case 21:return n.sort(function(e,t){return e.episode_id-t.episode_id}),e.abrupt("break",25);case 23:return n.sort(function(e,t){return e.name.localeCompare(t.name)}),e.abrupt("break",25);case 25:return n.forEach(function(e){return a.set(e.url,e)}),a.size!==r&&console.log("Expected: ",r," Got: ",a.size," for ",t),e.abrupt("return",a);case 28:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),e.componentDidMount=Object(m.a)(u.a.mark(function t(){var a,n,r,l,c,i,m,o,p;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all(Ee.map(function(t){return e.loadMapOfObjects(t)}));case 3:a=t.sent,n=Object(s.a)(a,6),r=n[0],l=n[1],c=n[2],i=n[3],m=n[4],o=n[5],e.universe={films:r,people:l,planets:c,species:i,starships:m,vehicles:o},e.setState({loadingMessage:""}),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),p=t.t0.name+": "+t.t0.message,e.setState({loadingMessage:p});case 19:case"end":return t.stop()}},t,null,[[0,15]])})),e.drawerToggleClickHandler=function(){e.setState(function(e){return{sideDrawerOpen:!e.sideDrawerOpen}})},e.backdropClickHandler=function(){e.setState({sideDrawerOpen:!1})},e.state={sideDrawerOpen:!1,loadingMessage:"Loading the universe..."},e.universe={},e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state.loadingMessage,a=this.state.sideDrawerOpen?r.a.createElement(w,{click:this.backdropClickHandler}):null;return t.length?r.a.createElement("div",{className:"centered-message"},r.a.createElement("h2",null,t)):r.a.createElement(f.a,{basename:"/starwars-universe"},r.a.createElement("div",{className:"App"},r.a.createElement(b,{drawerClickHandler:this.drawerToggleClickHandler}),r.a.createElement(N,{show:this.state.sideDrawerOpen}),a,r.a.createElement("main",null,r.a.createElement(C.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",{className:"scroll-up"},r.a.createElement("div",null,r.a.createElement("h2",null,"Explore the Star Wars Universe!"),r.a.createElement("p",null,"Click a menu item to view a category."),r.a.createElement("p",null,"Click on any item card in a category for more detail."),r.a.createElement("p",null,"Click on any links to jump to that item."),r.a.createElement("p",null,"May the Force be with you!")))}}),r.a.createElement(y,null,r.a.createElement(C.c,null,r.a.createElement(C.a,{path:"/films",render:function(){return r.a.createElement(z,{universe:e.universe})}}),r.a.createElement(C.a,{path:"/people",render:function(){return r.a.createElement(q,{universe:e.universe})}}),r.a.createElement(C.a,{path:"/planets",render:function(){return r.a.createElement(ee,{universe:e.universe})}}),r.a.createElement(C.a,{path:"/species",render:function(){return r.a.createElement(re,{universe:e.universe})}}),r.a.createElement(C.a,{path:"/starships",render:function(){return r.a.createElement(ie,{universe:e.universe})}}),r.a.createElement(C.a,{path:"/vehicles",render:function(){return r.a.createElement(pe,{universe:e.universe})}})))),r.a.createElement("footer",null,r.a.createElement(k,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){}},[[28,1,2]]]);
//# sourceMappingURL=main.f8e79708.chunk.js.map