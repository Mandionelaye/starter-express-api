const email = require("nodemailer")

const sendMail= (req,res)=>{
    const elm = {nom:"mbaye",
prenom:"Seydina",
numero:770938816,
categori:"studio",
 evnement:"bapteme", date:"27/02/2030",
 heure:"10:00"}
    const {nom,prenom,numero,categori, evnement, date, heure} = elm
    const transporter = email.createTransport({
    service:"gmail",
    auth:{
        user:"pro4groupe@gmail.com",
        pass:"ftqsuggqqycuwheu"
    }
});

const mailOp = {
    from:"pro4groupe@gmail.com",
    to:"seydinamandionem9@gmail.com",
    subject: "Nouvelle commande",
    html: `<h1> commande ${categori}</h1>

    <p>Vous avez une commande pour:</br></p>
    <p><b>Prenom</b>: ${prenom}</br></p>
    <p><b>Nom</b>: ${nom}</br></p>
    <p><b>Numero</b>: ${numero}</br></p>
    <p><b>Evenement</b>: ${evnement}</br></p>
    <p><b>Date</b>: ${date}</br></p>
    <p><b>Heure</b>: ${heure}</br></p>`
};


transporter.sendMail(mailOp, (err, info) =>{
    if(err){
        console.log(err);
        res.send(err)
    } else{
        console.log("send email " + info.response);
        res.send("send email " + info.response)
    }
});
}

module.exports=sendMail
