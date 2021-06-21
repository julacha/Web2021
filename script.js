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
        this.errors.push('Email address is required');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Please provide a valid e-mail address');
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

function login(e){
  e.preventDefault();
  const form = document.getElementById('formsubscribe');
  postData('login.php', {email: form.email.value}).then(res => {
    const span = document.getElementById('error');
    if (res.error){
      span.innerText = res.message;
    }
  });
}
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
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
