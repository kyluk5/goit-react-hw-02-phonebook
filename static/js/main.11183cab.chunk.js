(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),l=n.n(c),o=n(5),u=n(3),i=n(4),m=n(7),s=n(6),b=n(15),f=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:"",name:"",number:""},e.contactName=function(t){e.setState({name:t.target.value})},e.contactNumber=function(t){e.setState({number:t.target.value})},e.filterValue=function(t){e.setState({filter:t.target.value})},e.getFilteredContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e.deleteContact=function(t){var n=t.target.id;e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==n}))}}))},e.submitForm=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;if(n.contacts.find((function(t){return t.name===e.state.name})))alert("This name alredy exist");else{var c={name:a,number:r,id:Object(b.a)()};e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[c])}}))}},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.getFilteredContacts();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("span",null,"Name"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",onChange:this.contactName}),r.a.createElement("br",null),r.a.createElement("span",null,"Number"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"number",onChange:this.contactNumber}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Add contact")),r.a.createElement("h3",null,"Contacts"),r.a.createElement("span",null,"Find contacts by name"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",onChange:this.filterValue}),r.a.createElement("ul",null,t.map((function(t){return r.a.createElement("li",{key:t.id},t.name," : ",t.number,r.a.createElement("button",{type:"button",id:t.id,onClick:e.deleteContact},"Delete"))}))))}}]),n}(a.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.11183cab.chunk.js.map