let app = new Vue({
    el: "#outer-container",
    data: {
      email: "",
      submit: "",
      visible:true,
      errors:[],
    },
    methods:{
      hidden(){
        this.visible = false;
      },
        checkForm: function (e) {
          this.errors = [];
    
          if (!this.email) {
            this.errors.push('Укажите электронную почту.');
          } else if (!this.validEmail(this.email)) {
            this.errors.push('Укажите корректный адрес электронной почты.');
          }
    
          if (!this.errors.length) {
            return true;
          }
    
          e.preventDefault();
        },
        validEmail: function (email) {
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        }
      }
    });


function request(e) {
    e.preventDefault();
  
    app.submit = "success";
    appmob.submit = "success";
    let method = this.getAttribute("method"),
      action = this.getAttribute("action"),
      data = [];
  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log("success");
      }
    };
    xhttp.open(method, action, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
    for (let inp of this.querySelectorAll(
      "[type=text], [type=checkbox]:checked, textarea, select"
    )) {
      data.push(inp.getAttribute("name") + "=" + inp.value);
    }
    xhttp.send(data.join("&"));
  }
  
  let appmob= new Vue({
    el: "#mobile-container",
    data: {
      email: "",
      submit: "",
      visible:true
    },
    methods:{
      hidden(){
        this.visible = false;
      }
    }
  });
