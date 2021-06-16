let app = new Vue({
    el: "#outer-container",
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