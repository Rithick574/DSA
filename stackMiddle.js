let st=[];
st.push(1)
st.push(2)
st.push(3)
st.push(4)
st.push(5)
st.push(6)
st.push(7)
let v=[]
while (st.length > 0) {
    v.push(st[0])
    st.shift()
}
let n=v.length;
    let middle=Math.floor(n/2);
    for(let i=0;i<n;i++){
        if(i == middle){
            continue;
        }
        st.push(v[i])
    }
console.log('after deleting the middle');
while(st.length>0){
    let p=st[0];
    st.shift();
    console.log(p+'@');
}