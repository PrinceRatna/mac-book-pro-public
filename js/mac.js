function cost(costButtonId,costDisplayId){
    let costButton=document.getElementById(costButtonId);
    let costDisplay=document.getElementById(costDisplayId);
    if(costButton.getAttribute('id')=='eight-gb-memory'||costButton.getAttribute('id')=='small-storage'||costButton.getAttribute('id')=='late-delivery'){
        costDisplay.innerText =0;
    }
    else if(costButton.getAttribute('id')=='sixteen-gb-memory'||costButton.getAttribute('id')=='large-storage'){
        costDisplay.innerText=180;  
    }
    else if(costButton.getAttribute('id')=='medium-storage'){
        costDisplay.innerText=100; 
    }
    else{
        costDisplay.innerText=20;
    } 
    let extraMemoryCost=document.getElementById('extra-memory-cost');
    let extraStorageCost=document.getElementById('extra-storage-cost');
    let deliveryCharge=document.getElementById('delivery-charge');
    let totalAmount =document.getElementById('total-price');
    totalAmount.innerText=1299+parseInt(extraMemoryCost.innerText)+parseInt(extraStorageCost.innerText)+parseInt(deliveryCharge.innerText);
     let totalPercentageAmount =document.getElementById('total-percentage-amount');
     totalPercentageAmount.innerText=totalAmount.innerText;

}
//memory-------------------------
document.getElementById('eight-gb-memory').addEventListener('click',function(){
    cost('eight-gb-memory','extra-memory-cost');  
});
document.getElementById('sixteen-gb-memory').addEventListener('click',function(){
   cost('sixteen-gb-memory','extra-memory-cost');
});
//SSD------------------------------
document.getElementById('small-storage').addEventListener('click',function(){
  cost('small-storage','extra-storage-cost');
});
document.getElementById('medium-storage').addEventListener('click',function(){
  cost('medium-storage','extra-storage-cost');
});
document.getElementById('large-storage').addEventListener('click',function(){
   cost('large-storage','extra-storage-cost');
});
//delivery charge----------------------------
document.getElementById('late-delivery').addEventListener('click',function() {
     cost('late-delivery','delivery-charge');
});
document.getElementById('early-delivery').addEventListener('click',function(){
  cost('early-delivery','delivery-charge');
});
//promocode---------------------------
function promocodeFunction(){
    let totalAmount =document.getElementById('total-price');
    let totalPercentageAmount =document.getElementById('total-percentage-amount');
    let promocodeValue=document.getElementById('promocode');
    if(promocodeValue.value=='stevekaku'){
       totalPercentageAmount.innerText=totalAmount.innerText*.8;
       promocodeValue.value='';
    }   
}
//apply button----------------------
document.getElementById('apply-button').addEventListener('click',function(){
    promocodeFunction();
})






