//creating greeting
var user = 'Visitor';
var salutation = 'Hello';
var greeting = salutation + ' ' + user + '!';
var el=document.getElementById('greeting');
el.textContent = greeting;

//product price and student discount
var price = 40, 
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount);
var p = document.getElementById('price');
var sp = document.getElementById('student-price');
p.textContent = 'Price: $' + price;
sp.textContent = 'Student price: $' + studentPrice;