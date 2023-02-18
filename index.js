


// function changeType(idNumber){
//     const inputFeild=document.getElementById(idNumber);
//     const inputFeildString=inputFeild.value;
//     const inputFeildValue=parseFloat(inputFeildString);
//     return inputFeildValue;
// }

// function setResult(courentResult,setId){
//     const resultValue=document.getElementById(setId);
//     resultValue.innerText=courentResult;
// }
// document.getElementById('triangle-button').addEventListener('click',function(){
//     const inputFeildFristItem=changeType('triangle-b-input');
//     const inputFeildScondtItem=changeType('triangle-h-input');
//     const courentResult=0.5*inputFeildFristItem*inputFeildScondtItem;
//     setResult(courentResult,'tringel-result');
//     addResult('tringel',courentResult);
    
// })
// document.getElementById('rectangle-button').addEventListener('click',function(){
//     const inputFeildFristItem=changeType('rectangle-W-input');
//     const inputFeildScondtItem=changeType('rectangle-I-input');
//     const courentResult=inputFeildFristItem*inputFeildScondtItem
//     setResult(courentResult,'rectangle-result');
//     addResult('rectangle',courentResult);
// })
// document.getElementById('Parallelogram-button').addEventListener('click',function(){
//     const inputFeildFristItem=changeType('Parallelogram-B-input');
//     const inputFeildScondtItem=changeType('Parallelogram-H-input');
//     const courentResult=inputFeildFristItem*inputFeildScondtItem
//     setResult(courentResult,'Parallelogram-result');
//     addResult('Parallelogram',courentResult);
// })
// document.getElementById('Rhombus-button').addEventListener('click',function(){
//     const inputFeildFristItem=changeType('Rhombus-d1-input');
//     const inputFeildScondtItem=changeType('Rhombus-d2-input');
//     const courentResult=0.5*inputFeildFristItem*inputFeildScondtItem
//     setResult(courentResult,'Rhombus-result');
//     addResult('Rhombus',courentResult);
// })
// document.getElementById('Pentagon-button').addEventListener('click',function(){
//     const inputFeildFristItem=changeType('Pentagon-p-input');
//     const inputFeildScondtItem=changeType('Pentagon-b-input');
//     const courentResult=0.5*inputFeildFristItem*inputFeildScondtItem
//     setResult(courentResult,'Pentagon-result');
//     addResult('Pentagon',courentResult);
// })
// document.getElementById('Ellipse-button').addEventListener('click',function(){
//     const inputFeildFristItem=changeType('Ellipse-a-input');
//     const inputFeildScondtItem=changeType('Ellipse-b-input');
//     const courentResult=3.14*inputFeildFristItem*inputFeildScondtItem;
//    const courentResultFixed= courentResult.toFixed(2);
//     setResult(courentResultFixed,'Ellipse-result');
//    const btn= addResult('Ellipse',courentResultFixed);
//    updateElement(btn);
// })

// const calculationList=document.getElementById('calculation-list');
// function addResult(itemName,courentResult){
//     const li=document.createElement('li');
//     const button=document.createElement('button');
//     li.innerText=itemName+'  '+courentResult+'cm² ';
//     button.innerText='ConvertMeter';
//     button.classList.add('convertBtn')
//     li.appendChild(button);
//     li.classList.add('liststyle');
//     calculationList.appendChild(li);
  
// }






function changeType(idNumber){
    const inputFeild=document.getElementById(idNumber);
    const inputFeildString=inputFeild.value;
    const inputFeildValue=parseFloat(inputFeildString);
    return inputFeildValue;
}

function setResult(courentResult,setId){
    const resultValue=document.getElementById(setId);
    resultValue.innerText=courentResult;
}
document.getElementById('triangle-button').addEventListener('click',function(){
    const inputFeildFristItem=changeType('triangle-b-input');
    const inputFeildScondtItem=changeType('triangle-h-input');
    const courentResult=0.5*inputFeildFristItem*inputFeildScondtItem;
    setResult(courentResult,'tringel-result');
    addResult('triangle',courentResult)
    
})
document.getElementById('rectangle-button').addEventListener('click',function(){
    const inputFeildFristItem=changeType('rectangle-W-input');
    const inputFeildScondtItem=changeType('rectangle-I-input');
    const courentResult=inputFeildFristItem*inputFeildScondtItem
    setResult(courentResult,'rectangle-result');
    addResult('rectangle',courentResult)
})
document.getElementById('Parallelogram-button').addEventListener('click',function(){
    const inputFeildFristItem=changeType('Parallelogram-B-input');
    const inputFeildScondtItem=changeType('Parallelogram-H-input');
    const courentResult=inputFeildFristItem*inputFeildScondtItem
    setResult(courentResult,'Parallelogram-result');
    addResult('Parallelogram',courentResult)
})
document.getElementById('Rhombus-button').addEventListener('click',function(){
    const inputFeildFristItem=changeType('Rhombus-d1-input');
    const inputFeildScondtItem=changeType('Rhombus-d2-input');
    const courentResult=0.5*inputFeildFristItem*inputFeildScondtItem
    setResult(courentResult,'Rhombus-result');
    addResult('itemName',courentResult)
})
document.getElementById('Pentagon-button').addEventListener('click',function(){
    const inputFeildFristItem=changeType('Pentagon-p-input');
    const inputFeildScondtItem=changeType('Pentagon-b-input');
    const courentResult=0.5*inputFeildFristItem*inputFeildScondtItem
    setResult(courentResult,'Pentagon-result');
    addResult('Pentagon',courentResult)
})
document.getElementById('Ellipse-button').addEventListener('click',function(){
    const inputFeildFristItem=changeType('Ellipse-a-input');
    const inputFeildScondtItem=changeType('Ellipse-b-input');
    const courentResult=3.14*inputFeildFristItem*inputFeildScondtItem;
   const courentResultFixed= courentResult.toFixed(2);
    setResult(courentResultFixed,'Ellipse-result');
const button=    addResult('Ellipse',courentResultFixed)
    console.log(button.innerText
        );
})

const calculationList=document.getElementById('calculation-list');
function addResult(itemName,courentResult){
    const li=document.createElement('li');
    const button=document.createElement('button');
    li.innerText=itemName+'  '+courentResult+'cm² ';
    button.innerText='ConvertMeter';
    button.classList.add('convertBtn')
    li.appendChild(button);
    li.classList.add('liststyle');
    calculationList.appendChild(li);
  return button;
}
const button=addResult();
button.addEventListener('click',function updateElement(courentResult){
    console.log(courentResult.innerText);
})

