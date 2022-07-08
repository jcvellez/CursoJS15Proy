// cadenas
// let nombre = prompt('Cual es tu nombre');
// let edad = prompt('Cual es tu edad');
// document.getElementById('app').innerHTML=`Bienvenido ${nombre} de ${edad} años`;
// console.log('Enviado a cnsola');

// let lenguaje= 'Javascript';
// let frame= 'Esto es un, mensaje para todos';

// console.log(`Estoy aprendiendo ${frame}`);
// console.log(frame.indexOf('m'));
// console.log(frame.substring(0,7));
// console.log(frame.replace('mensaje','FrameWork'));
// console.log(frame.includes('angular'));

// let tecno= 'JavaScript'+' ';
// console.log(tecno.repeat(11));
// console.log(frame.split('o'));
// let m= frame.split('o');
// console.log(m[2]);

// numeros
// let numero1 = 100;
// let numero2 = 5.7;
// let numero3 = 2.81;
// let pi= Math.PI;

// let resultado= numero1 / numero2;
// console.log(resultado);
// console.log(pi);
// console.log(Math.round(numero2));
// console.log(Math.ceil(numero2));
// console.log(Math.floor(numero2));

// let numero=null;
// let arreglo=[1,2,3,4,5,6,7];
// console.log(typeof arreglo);

// const numero1 = 20;
// const numero2 = 50;
// const numero3 = 'hada';

// console.log( numero1 > numero2 );
// console.log( numero1 < numero2 );
// console.log(numero1 == numero3);

// console.log(typeof numero1);
// console.log(typeof numero3);

// console.log(2 != 7);

// console.log('A' > 'o');

//cONVERTIR STRING A NUMBER
// const n1 ="60",
//       n2= 10,
//       n3="tres";

// console.log(parseInt(n1) + n2);

// let dato;
// //dato = parseInt("20");
// dato = Number('20.8998564');
// dato = parseInt('90.69969');
// dato = parseFloat('90.69969');
// dato = 970.565469878964
// console.log(dato.toFixed(2));

//CLASE 20
// const cp= 90210;

// console.log(String(cp).length);
// console.log(String(cp)[3]);

//De arreglo a String

// const dato= ([1,2,3,4,5]);

// console.log(dato);
// console.log(dato.length);
// console.log(typeof dato);
// console.log(dato[3]);

const 
prod1= 'pizza',
precio1= 30
prod2= 'hamburguesa',
precio2= 40;

let html;

// html= '<ul>'+
//         '<li>Orden:'+ prod1 +'</li>'+
//         '<li>Precio:'+ precio1 +'</li>'+
//         '<li>Orden:'+ prod2 +'</li>'+
//         '<li>Precio:'+ precio2 +'</li>'+
//         '</ul>';

html= `
       <ul>
       <li>Orden: ${prod1}</li>
       <li>Orden: ${precio1}</li>
       <li>Orden: ${prod2}</li>
       <li>Orden: ${precio2}</li>
       <li>TOTAL: ${total(precio1,precio2)}</li>
       </ul> 
      `;

      function total(precio1,precio2) {
        return precio1 + precio2;
      }
document.getElementById('app').innerHTML= html;
console.log(total(precio1,precio2));