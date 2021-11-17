var menu = document.getElementById('menu');
var nav = document.getElementById('nav');

var aromat_m = document.getElementById('aromat_m');
var baza_m = document.getElementById('baza_m');
var shot_m = document.getElementById('shot_m');
var miesz_m = document.getElementById('miesz_m');

var aromat = document.getElementById('aromat');
var baza = document.getElementById('baza');
var shot = document.getElementById('shot');
var miesz = document.getElementById('miesz');
const mediaQueryPortrait = window.matchMedia('(orientation: portrait)');

var przyc = document.getElementById('przyciemnienie');
var info = document.getElementById('info');
var txt_info = document.getElementById('tekst_info');

function menu_s() {

    if (mediaQueryPortrait.matches) {
        menu.style.width = '100vw';

    } else {
        menu.style.width = '60vw';
    }
    menu.setAttribute("onclick", "menu_h()");
    menu.style.transition = '1100ms';
    aromat_m.style.display = 'flex';
    baza_m.style.display = 'flex';
    shot_m.style.display = 'flex';
    miesz_m.style.display = 'flex';
}

function menu_h() {

    if (mediaQueryPortrait.matches) {
        menu.style.width = '10vw';

    } else {
        menu.style.width = '5vw';
    }
    aromat_m.style.left = '10vw';
    baza_m.style.display = '10vw';
    shot_m.style.display = '10vw';
    miesz_m.style.display = '10vw';
    menu.setAttribute("onclick", "menu_s()");

}

function show_a() {

    aromat.style.display = 'block';
    baza.style.display = 'none';
    shot.style.display = 'none';
    miesz.style.display = 'none';

}

function show_b() {

    aromat.style.display = 'none';
    baza.style.display = 'block';
    shot.style.display = 'none';
    miesz.style.display = 'none';

}

function show_s() {

    aromat.style.display = 'none';
    baza.style.display = 'none';
    shot.style.display = 'block';
    miesz.style.display = 'none';

}

function show_m() {

    aromat.style.display = 'none';
    baza.style.display = 'none';
    shot.style.display = 'none';
    miesz.style.display = 'block';

}

function zamknij() {
    przyc.style.display = 'none';
    info.style.display = 'none';
}

function pokaz_blad() {
    przyc.style.display = 'flex';
    info.style.display = 'flex';
}

function aromat_licz() {

    var krople = document.getElementById('a_krople').value;
    var baza = document.getElementById('a_baza').value;

    if (krople <= 0) {
        pokaz_blad();
        txt_info.innerHTML = 'PODAJ ILOŚĆ KROPEL WIĘKSZĄ OD 0';
    }


    else if (baza <= 0) {
        pokaz_blad();
        txt_info.innerHTML = 'PODAJ ILOŚĆ BAZY WIĘKSZĄ OD 0';
    } else {

        var okolo_wyn = document.getElementById('a_ok_ml');
        var ml_aromatu = document.getElementById('ml_aromatu');
        var liczba_kropel = document.getElementById('licz_krop');

        var dzialanie1 = krople * baza;
        var krop = 0.0325;
        var wynik1 = krop * dzialanie1;
        var okolo = Math.round(wynik1);
        var wynik = Math.round(wynik1 * 100) / 100;

        okolo_wyn.innerHTML = okolo;
        ml_aromatu.innerHTML = wynik;
        liczba_kropel.innerHTML = krople;

    }

}

function baza_licz() {

    var il_shota = document.getElementById('b_shot').value;
    var moc_shota = document.getElementById('b_moc_shota').value;
    var po_moc = document.getElementById('b_moc').value;

    if (il_shota <= 0) {

        pokaz_blad();
        txt_info.innerHTML = 'PODAJ ILOŚĆ SHOTA WIĘKSZĄ OD 0';

    }


    else if (moc_shota <= 0) {

        pokaz_blad();
        txt_info.innerHTML = 'PODAJ MOC SHOTA WIĘKSZĄ OD 0';

    }

    else if (po_moc <= 0) {

        pokaz_blad();
        txt_info.innerHTML = 'PODAJ POŻĄDANĄ MOC WIĘKSZĄ OD 0';

    }

    else if (Number(po_moc) > Number(moc_shota)) {

        pokaz_blad();
        txt_info.innerHTML = 'POŻĄDANA MOC JEST WIĘKSZA OD MOCY SHOTA';

    } else {
        var dzialanie1 = il_shota * moc_shota;
        var dzialanie2_1 = dzialanie1 / po_moc;
        var dzialanie2 = Math.round(dzialanie2_1 * 100) / 100;
        var wynik1 = Number(dzialanie2) - Number(il_shota);
        var wynik = Math.round(wynik1 * 100) / 100;
        var wynik_okolo = Math.round(wynik);
        var il_okolo = Math.round(dzialanie2);

        document.getElementById('b_0').innerHTML = wynik_okolo;
        document.getElementById('b_ml').innerHTML = il_okolo;
        document.getElementById('b_moc_g').innerHTML = po_moc;
        document.getElementById('z_b_0').innerHTML = Math.round(wynik1 * 100) / 100;
        document.getElementById('z_b_ml').innerHTML = Math.round(dzialanie2 * 100) / 100;
    }
}

function shot_licz() {
    var baza = document.getElementById("s_baza").value;
    var moc_shota = document.getElementById("s_shot").value;
    var po_moc = document.getElementById("s_moc").value;

    if (baza <= 0) {
        pokaz_blad();
        txt_info.innerHTML = 'PODAJ ILOŚĆ BAZY WIĘKSZĄ OD 0';
    }


    else if (moc_shota <= 0) {
        pokaz_blad();
        txt_info.innerHTML = 'PODAJ MOC SHOTA WIĘKSZĄ OD 0';
    }

    else if (po_moc <= 0) {
        pokaz_blad();
        txt_info.innerHTML = 'PODAJ POŻĄDANĄ MOC WIĘKSZĄ OD 0';
    }

    else if (Number(po_moc) > Number(moc_shota)) {
        pokaz_blad();
        txt_info.innerHTML = 'POŻĄDANA MOC JEST WIĘKSZA OD MOCY SHOTA';
    } else {
        obliczenie1 = baza * po_moc * (-1);
        obliczenie2 = po_moc - moc_shota;
        x = obliczenie1 / obliczenie2;
        y = Number(x) + Number(baza);

        document.getElementById('s_1').innerHTML = Math.round(x);
        document.getElementById('s_2').innerHTML = moc_shota;
        document.getElementById('s_3').innerHTML = Math.round(y);
        document.getElementById('s_4').innerHTML = po_moc;
        document.getElementById('s_5').innerHTML = Math.round(x * 100) / 100;
        document.getElementById('s_6').innerHTML = Math.round(moc_shota * 100) / 100;
        document.getElementById('s_7').innerHTML = Math.round(y * 100) / 100;

        console.log(obliczenie1);
        console.log(obliczenie2);
        console.log(x);//POTRZEBNA IL SHOTA
        console.log(y);//ILOSC GOTOWEGO LQ
    }
}

function gotowe_licz() {
    var il_bazy = document.getElementById("m_baza").value;
    var il_shota = document.getElementById("m_shot").value;
    var moc_shota = document.getElementById("m_moc").value;

    if (il_bazy <= 0) {
        pokaz_blad();
        txt_info.innerHTML = 'PODAJ ILOŚĆ BAZY WIĘKSZĄ OD 0';
    }

    else if (il_shota <= 0) {
        pokaz_blad();
        txt_info.innerHTML = 'PODAJ ILOŚĆ SHOTA WIĘKSZĄ OD 0';
    }

    else if (moc_shota <= 0) {
        pokaz_blad();
        txt_info.innerHTML = 'PODAJ MOC SHOTA WIĘKSZĄ OD 0';
    } else {

        var il_lq_po_zmiesz_1 = Number(il_bazy) + Number(il_shota);
        var il_lq_po_zmiesz = Math.round(il_lq_po_zmiesz_1 * 100) / 100;
        var dzialanie1 = moc_shota / il_lq_po_zmiesz;
        var wynik1 = dzialanie1 * il_shota;
        var wynik_okolo = Math.round(wynik1);
        var il_okolo = Math.round(il_lq_po_zmiesz);
        var wynik = Math.round(wynik1 * 100) / 100;

        document.getElementById("g1").innerHTML = il_okolo;
        document.getElementById("g2").innerHTML = wynik_okolo;
        document.getElementById("g3").innerHTML = il_lq_po_zmiesz;
        document.getElementById("g4").innerHTML = wynik;
    }
}