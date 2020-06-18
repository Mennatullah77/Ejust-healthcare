const drugs = [
      {
          Name:'mebendazol',
          Category: 'Antiparasite+antiamoebic',
          Type:'Tab',
         ExpiryDate: 20/9/2021,
          Quantity: '3 tabs'
      },
      {
          Name:' amoxicllin 500 mg ',
          Category: '  Antibiotics&ophthalamic  ',
          Type:'capsule ',
         ExpiryDate: 20/9/2021,
          Quantity: '9 capsules'
      },
      {
          Name:' chloroquine 250 mg',
          Category: 'Antiparasite+antiamoebic',
          Type:'Tab',
         ExpiryDate: 20/9/2021,
          Quantity: '5 tabs'
      },
      {
          Name:' Clotrimazole',
          Category: ' Antifungal agents',
          Type:' cream ',
         ExpiryDate: 20/9/2021,
          Quantity: '5 tubes'
      },
      {
          Name:'   atorvastatin 10 mg' ,
          Category: ' anticholesterol & antihyperlipidimia ',
          Type:'Tab',
         ExpiryDate: 20/9/2021,
          Quantity: '5 tabs'
      },
      {
          Name:'  insulin 100 IU  ',
          Category: 'Antidiabetics ',
          Type:'vial ',
         ExpiryDate: 20/9/2021,
          Quantity: '5 vials'
      },
      
  ]
  
  const findDrug = function(drugs, Name){
      var searchbar = document.getElementById('searchBar')
  const index = drugs.findIndex(function(todo , searchBar.value){
      
  })
  return drugs[index]
  }
  const printme = findDrug(drugs , 'insulin 100 IU')
  console.log(printme);