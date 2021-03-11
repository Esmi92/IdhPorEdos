
 export default function generateIdh (){
    const years = []
    const firstYear = 2011
    for(let i = 0; i<=10;i++){
        const year = []
        for(let j =0; j<32;j++){
            const idh =  Math.random()
            year.push(idh)
        }
        years.push({year:firstYear+i,idhPerYear:year})
    }
   
    return years 
}
