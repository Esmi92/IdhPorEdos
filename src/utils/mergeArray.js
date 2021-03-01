// This function is to relate the BD with the randoim IDH as a Pseudo API
export default function mergeArray (arrayOne,arrayTwo,arrayThree) {
    const creation = []
    for (let i=0; i<arrayOne.length; i++){
        creation.push({'nombre':arrayOne[i],'idh':arrayTwo[i],'code': arrayThree[i]})
    }
    return creation
}