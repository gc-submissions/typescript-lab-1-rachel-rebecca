 interface Mountain {
    name: string;
    height: number;
}

 let mountains: Mountain[] = [{name:"Kilimanjaro",height:19341},{name:"Everest",height:29029},{name:"Denali",height:20310}];

export function findNameOfTallestMountain (array:Mountain[]):string {
    let tallestMountain: number  = 0;
    let mountainName: string = "";
    for(let i = 0; i < array.length; i++){
        if(array[i].height > tallestMountain) {
            tallestMountain = array[i].height;
            mountainName = array[i].name;
        }
    }

    return mountainName;
}

