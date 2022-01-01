/* Simple Hello World in Node.js */


function vaxTrail(persons){
    let A=[]
    let B=[]
    let C=[]
    let D=[]
    let obj = {}
    
    persons.map(per =>{
        if(per.age >=20 && per.age <=30 && per.temperature <100 )
                {
                A.push(per)
                
                }
    
            else if(per.age >=31 && per.age <=40 && per.temperature <100 )
                {
                    B.push(per)
                }
    
            else if(per.age >=41 && per.age <=50 && per.temperature <100 )
                {
                    C.push(per)
                }   
            else{
                D.push(per)
            }
    })
    obj = {
        A: A,
        B: B,
        C:C,
        D:D,
    };
     
        return obj
    }
    
    
    console.log(vaxTrail([
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Biplap', age: 22, temperature: 98 },
    ]));