class HashTable{
    constructor(size){
        this.data=new Array(size)
    }
    hashFunction(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash=(hash+key.charCodeAt(i)*i)%this.data.length;
            return hash;
        }
    }
    set(key,value){
     const index=this.hashFunction(key);
     if(!this.data[index]){
        this.data[index]=[];
     }
     this.data[index].push([key,value])
     return;
    }

    get(key){
        const index=this.hashFunction(key);
        const currentBucket=this.data[index]
        if(currentBucket){
            for(let i=0;i<currentBucket.length;i++){
                if(currentBucket[i][0] == key){
                    console.log(currentBucket[i][1]);
                    return;
                }
            }
        }
    }
}


  const Obj = new HashTable(10);
  Obj.set("name", "rithick");
  Obj.set("anme", "rithick");
  Obj.set("age", 21);
  Obj.set("place", "ramanthali");

  Obj.get("name")