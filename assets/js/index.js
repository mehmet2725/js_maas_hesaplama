let maas = 0;
let zam = 0;

function maasBilgisiAl(){
    let maasBilgisi = Number(prompt(`Lütfen Maaş bilginizi Giriniz.`));
    maas = maasBilgisi;
}
function zamBilgisiAl(){
    let zamBilgisi = Number(prompt(`Zam Oranını Giriniz.`));
    zam = zamBilgisi;
}
function yeniMaasiYazdir(){
    let yeniMaas = maas * zam;
    alert(`Zamlı Maaşınız: ${yeniMaas}`);
}
maasBilgisiAl();
zamBilgisiAl();
yeniMaasiYazdir();