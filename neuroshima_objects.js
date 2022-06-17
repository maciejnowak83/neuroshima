//let neuroshima_sprzet = [];


let neuroshima_sprzet = {
    alkohol_sam_litr : {rodzaj: 'uzywki',nazwa: 'Litr samogonu',marker: {}},
    alkohol_mar_litr : {rodzaj: 'uzywki',nazwa: 'Litr markowego alkoholu',marker: {}},
    papieros_sztuka : {rodzaj:'uzywki',nazwa: 'Papieros',marker: {}},
    tyton_do_zucia_porcja : {rodzaj:'uzywki',nazwa: 'Porcja tytoniu do żucia',marker: {}}
 
  };
  

let neuroshima_oponents = {
    plujka : {rodzaj: 'sprzet_molocha',nazwa: 'plujka',atak: 6,pokonano:false, marker: {} },
    mobsprzet : {rodzaj: 'sprzet_molocha',nazwa: 'mob1',atak: 8,pokonano:false, marker: {} },
    technomorwa : {rodzaj: 'dziki_insekt',nazwa: 'tehchomorwa',atak: 4,pokonano:false, marker: {} },
    maszynoczlowiek: {rodzaj: 'sprzet_molocha',nazwa: 'maszynoczlowiek',atak: 6,pokonano:false, marker: {}}
};



export {neuroshima_sprzet};
export {neuroshima_oponents};