






let k = 0;
const btnsub = document.querySelector(".submit1");





btnsub.addEventListener("click", validate);


function validate() {

 
    

  let strtxt1 = document.getElementById("Uname").value;
  let strtxt2 = document.getElementById("bitsid").value;
  let strtxt3 = document.getElementById("phno").value;
  let strtxt4 = document.getElementById("expd").value;
  let strtxt5 = document.getElementById("rcvdd").value;
  let qu1 = document.getElementById("q1").value;
  let qu2 = document.getElementById("q2").value;
  let qu3 = document.getElementById("q3").value;
  

  
  


  var re1 = /^[A-Za-z]+$/;
  var re3 = /^\d{10}$/;
  var re4 = /^\d+$/;


  //if(strtxt1=="" || strtxt2=="" || strtxt3=="" || strtxt4=="" || strtxt5=="" || qu1=="" || qu2=="" || qu3=="" ) {
  //  alert("Field(s) should not be empty");
  // return false;}

    if (qu2 < qu3) {

      alert("Returend Quantity should be less than Received");
      return false;
  
  
    }
  if (re1.test(strtxt1) && re1.test(strtxt1) && re3.test(strtxt3) && re4.test(qu1) && re4.test(qu2) && re4.test(qu3)) {

    
    AddNew();

  }
  if(re1.test(strtxt1)==false){

    var err1 = document.createElement("div");
    err1.classList.add('err1');
    namei.appendChild(err1);
    err1.innerText ='Hi'
  
  }
  
  else {


    return false;
  }
  








  function AddNew() {





    var newdiv = [];
    newdiv[k] = document.createElement("div");
    console.log("add");
    newdiv[k].classList.add('entrydiv');
    saved.appendChild(newdiv[k]);

    const newdiv1 = document.createElement("div");
    console.log("add1");
    newdiv1.classList.add('entrydiv1');
    newdiv[k].appendChild(newdiv1);
    const newdiv2 = document.createElement("div");
    console.log("add2");
    newdiv2.classList.add('entrydiv2');
    newdiv[k].appendChild(newdiv2);
    const newdiv3 = document.createElement("div");
    console.log("add3");
    newdiv3.classList.add('entrydiv3');
    newdiv[k].appendChild(newdiv3);



    strtxt1 = document.getElementById("Uname").value;
    strtxt2 = document.getElementById("bitsid").value;
    strtxt3 = document.getElementById("phno").value;
    strtxt4 = document.getElementById("expd").value;
    strtxt5 = document.getElementById("rcvdd").value;
    qu1 = document.getElementById("q1").value;

    qu2 = document.getElementById("q2").value;
    qu3 = document.getElementById("q3").value;
    
    
    

    if (strtxt1 == "" || strtxt2 == "" || strtxt3 == "" || strtxt4 == "" || strtxt5 == "" || qu1 == "" || qu2 == "" || qu3 == "") {
      alert("Field(s) should not be empty");
      return false;
    }



    newdiv1.innerHTML = 'Name:' + strtxt1 + '<br>' + 'BITS ID:' + strtxt2 + '<br>' +
      'Phone No.:' + strtxt3 + '<br>' + 'Expected Date:' + strtxt4.substring(8, 10) + '-' + strtxt4.substring(5, 7) + '-' + strtxt4.substring(0, 4);

    newdiv2.innerHTML = 'Received Date:' + strtxt5.substring(8, 10) + '-' + strtxt5.substring(5, 7) + '-' + strtxt5.substring(0, 4) + '<br>' + 'Quantity Demanded:' + qu1 + '<br>' +
      'Quantity Received:' + qu2 + '<br>' + 'Quantity Returned:' + qu3 +k;

      k = k + 1;

    newdiv3.innerHTML = '<form id="del" onsubmit="return false;"><button class="submit2" type="submit" >Delete</button></form>'
      

      const btndel = document.querySelector(".submit2");
      btndel.addEventListener("click", DelEnt);
      function DelEnt() {


      console.log("Deleted");



      newdiv[k].parentNode.removeChild(newdiv[k]);
      
      

      }
  }
  

  
}










