// // const firstNameChange =(e)=>{
// // const val=e.target.value
// // if (val.length >3){
// //  console.log('correct');
// // }
// // // }
// // function  sumitform(e){
// //     e.preventDefault();
// //     console.log(e);

// // // }
// // function  sumitform(e){
// //        e.preventDefault();
// //        const t=e.target
// //        for(let i=0; i<t.length; i++)
// //     {
// //         //console.log(t[i].type, t[i].value);
// //         const ty=t[i].type
// //         const vl=t[i].value
// //         console.log(ty,vl);
// //         if(ty=='checkbox'){
// //             console.log(t[i].checked);
// //         }
// //   }}

// function sumitform(e) {
//   e.preventDefault();
//   const t = e.target;
//   const res = {
//     hobbies: [],
//   };
// //   console.log(t);
//   for (let i = 0; i < t.length; i++) 
//     //console.log(t[i].type, t[i].value);
//     const ty = t[i].type;
//       const vl = t[i].value;
//       const nm = t[i].name;
//    console.log(ty, vl, nm);
//    if(ty=='checkbox'){
//      console.log(t[i].checked);
//        res.hobbies.push(vl);
//      }
//    }
function sumitform(e){
    e.preventDefault();
    // console.log(e);
    const t = e.target;
    const res = {
        hobbies: [],
    };
    for(let i = 0; i<t.length; i++){

        // console.log(t[i].type);
        // console.log(t[i].value);
        const ty = t[i].type;
        const vl = t[i].value;
        const nm = t[i].name;
        console.log(ty, vl, nm);
        if(ty=='checkbox'){
            console.log(t[i].checked);
            res.hobbies.push(vl);
        }
        if(ty=='submit'){
            res[nm] = vl;
        }
    }
    console.log(res);
    
}