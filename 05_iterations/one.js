//for

for ( i = 0; i <=10; i++) {
    const element = i;
   // console.log(element);
    
}

for (let i = 0; i < 10; i++) {
    //console.log(`outer loop value:${i}`)
    for (let j = 0; j <10; j++) {
        
        //console.log(`inner loop value: ${j} and inner loop${i}`)
       // console.log(i+'*'+j+' =' +i*j);
    }
    
}
let array = ["flash","batman","superman"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //console.log(element)
}

//break  and  continue

// for (let index = 1; index <=20; index++) {

//     if(index== 5){
//         console.log(`Detected 5`);
//         break  //control flow pura loop se bahar ho jaega
//     }
//     console.log(`value of i is ${index}`);
    
// }
for (let index = 1; index <=20; index++) {

    if(index== 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
    
}