function billingFunction(){
    if(document.getElementById('same').checked){
        document.getElementById('billingName').value = document.getElementById('shippingName').value; // Auto completing the Billing Name when same is checked
        document.getElementById('billingZip').value = document.getElementById('shippingZip').value; // Auto completing the Billing Zip when same is checked
     }else{
        document.getElementById('billingName').value = ""; // Clearing the Billing Name when same is unchecked 
        document.getElementById('billingZip').value = ""; // Clearing the Billing Zip when same is unchecked 
     }
}