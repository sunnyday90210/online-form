// function to clear the form and show the customer the form was successful submitted.

function submitForm() {
  document.querySelector('.alert').style.display = 'block';
  document.getElementById('submitForm').reset();
}




// setTimeout(function(){
//   document.querySelector('.alert').style.display = 'none';
// },3000);