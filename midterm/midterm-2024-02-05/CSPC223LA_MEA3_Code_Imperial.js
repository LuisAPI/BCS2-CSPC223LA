"use strict";

function displayTableHeader() {
    let sepFillerChar = '•';
    let sepFiller = sepFillerChar.repeat(8);
    let sepStripe = "----------------------------"; // 28 characterd
    let sepColumn = " | ";
    let nameHeader = " 𝐍𝐚𝐦𝐞 ";
    let phoneNumHeader = " 𝐏𝐡𝐨𝐧𝐞 ";
    let emailHeader = " 𝐄𝐦𝐚𝐢𝐥 ";
    let tableHeader1 = sepFiller + nameHeader + sepFiller + sepColumn;
    let tableHeader2 = sepFiller + phoneNumHeader + sepFiller + sepColumn;
    let tableHeader3 = sepFiller + emailHeader + sepFiller;
    
    console.log(tableHeader1 + tableHeader2 + tableHeader3);
    console.log(sepStripe + sepColumn + sepStripe + sepColumn + sepStripe);
}

function displayTableEntry(data1, data2, data3) {
    function countFillerNeeded(dataEntry) {
        let tableCellCapacity = 18;
        
        var fillerNeeded = tableCellCapacity - dataEntry.length;
        if (fillerNeeded < 1) {var fillerNeeded = 1};
        return(fillerNeeded);
    }
    
    let sepColumnPipe = '|';
    let sepFillerChar = '•';
    let sp = " ";
    
    let fillerNeeded_data1 = countFillerNeeded(data1);
    let fillerNeeded_data2 = countFillerNeeded(data2);
    let fillerNeeded_data3 = countFillerNeeded(data3);
    
    /// For debugging purposes
    // console.log(fillerNeeded_data1);
    
    console.log(
        data1+sp+sepFillerChar.repeat(fillerNeeded_data1)+sp+sepColumnPipe+sp+
        data2+sp+sepFillerChar.repeat(fillerNeeded_data2)+sp+sepColumnPipe+sp+
        data3+sp+sepFillerChar.repeat(fillerNeeded_data3)+sp
    );
}

function formatPhoneNumber(phoneNum) {
    let countryCode_ph = "+63";
    
    return(countryCode_ph + " " + phoneNum);
}

let contact01_name = "Yuri Brown";
let contact02_name = "Red Sinangote";
let contact03_name = "Krish Reformina";
let contact04_name = "Timothy Sicad";
let contact05_name = "Eurie Manaig";

let contact01_phoneNum = 9284251566;
let contact02_phoneNum = 9201106969;
let contact03_phoneNum = 9664919724;
let contact04_phoneNum = 9760482659;
let contact05_phoneNum = 9473616206;

let contact01_email = "bym0866@dlsud.edu.ph";
let contact02_email = "sms0644@dlsud.edu.ph";
let contact03_email = "rkb0699@dlsud.edu.ph";
let contact04_email = "stn0169@dlsud.edu.ph";
let contact05_email = "meb0864@dlsud.edu.ph";

let contact01_phoneNum_fmt = formatPhoneNumber(contact01_phoneNum);
let contact02_phoneNum_fmt = formatPhoneNumber(contact02_phoneNum);
let contact03_phoneNum_fmt = formatPhoneNumber(contact03_phoneNum);
let contact04_phoneNum_fmt = formatPhoneNumber(contact04_phoneNum);
let contact05_phoneNum_fmt = formatPhoneNumber(contact05_phoneNum);

displayTableHeader();
displayTableEntry(contact01_name, contact01_phoneNum_fmt, contact01_email);
displayTableEntry(contact02_name, contact02_phoneNum_fmt, contact02_email);
displayTableEntry(contact03_name, contact03_phoneNum_fmt, contact03_email);
displayTableEntry(contact04_name, contact04_phoneNum_fmt, contact04_email);
displayTableEntry(contact05_name, contact05_phoneNum_fmt, contact05_email);