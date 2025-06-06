a= 10
b= 15

c= a + b

console.log(c)

a= 10
b= 15

c= a - b

console.log(c)

a= 10
b= 15

c= a / b

console.log(c)


a= 30
b= 15

c= a % b

console.log(c)

x=20

x++   //x=x+1  this is the inside meaning of x++

console.log(x)

x=20

x--   //x=x-1  this is the inside meaning of x--

console.log(x)


console.log(2==2)


console.log(2===2)


console.log(2==="2")  // because === compares operand data types 2 is number "2" is string so its shows false in terminal



console.log(2!=2)  //!= represents the notequals to working


console.log(2!=3)


console.log((2==2) && (2==="2"))   //true  false    && represents the AND gate

console.log((2==4) && (2==="2"))   //false  false

console.log((2==2) && (2===2))    // true true



console.log((2==2) || (2==="2"))   //true  false    || represents the OR gate

console.log((2==4) || (2==="2"))   //false  false

console.log((2==2) || (2===2))    // true true



console.log( !(2==2))    // bcz of NOT gate true become false and vice-versa

console.log( !(2==4))    // bcz of NOT gate true become false and vice-versa

console.log( !(2==2) )   // bcz of NOT gate true become false and vice-versa


//assignment operators
/*+
+=
-=
*=
/=*/


x=5

console.log(x)

y=10  ,x=y
x+=3

console.log(x)

x/=3

console.log(x)


//conditional or ternary operator


x = "raju"

y = "bhargav"

z=(2==2)

console.log(z)


x = "raju"

y = "bhargav"

z=(2==="2")

console.log(z)

//ome more example for conditional operator


workers =(4>6) ? 2 : 1

console.log(workers)

workers =(7>6) ? 2 : 1

console.log(workers)


//coersion

//x = 5 + 5    //here + is adding

//console.log(x)


ab = "bhargav" + "br"  //here + is joining or concatining this behaviour is called coersion bcz in js string is joining

console.log(ab)



zzz = (1+2+3+"45"+4+5)
 console.log(zzz)                //ans is 64545  bcz  until string it adds then it concatenates