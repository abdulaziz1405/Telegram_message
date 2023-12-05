// https://api.telegram.org/bot6908979456:AAEVEmRbb6f0ccRysHIXdD-Y9cuypryP-pA/getUpdates

let token = "6908979456:AAEVEmRbb6f0ccRysHIXdD-Y9cuypryP-pA";
let CHAT_ID = "5966131656";
let url_api = `https://api.telegram.org/bot${token}/sendMessage`;
let success=document.getElementById("success")

document.getElementById("tg").addEventListener("submit",function(e){
    e.preventDefault()
    let message=`<b>Заявка с сайта!</b>\n`
    message+=`<b>Отправител:</b> ${this.name.value}\n`
    message+=`<b>Номер:</b> ${this.number.value}\n`
    message+=`<b>Почтв:</b> ${this.email.value}\n`
    console.log(message);
    axios.post(url_api,{
        chat_id:CHAT_ID,
        parse_mode:"html",
        text:message
    }).then((res)=>{
        this.name.value=""
        this.number.value=""
        this.email.value=""
        success.innerHTML="Сообшения отправленно!"
        success.style.display="block"
    }).catch((err)=>{
        console.log(err);
    }).finally(()=>console.log("succesfully"))
})