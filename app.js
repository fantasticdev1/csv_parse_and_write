const csv = require('csv-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


const db = [];

let hd =[];
let skuData = [];

const options = [
  'Carver Custom Covers Options',
  'Carver Custom Covers Options CPR CSR',
  'Carver Custom Covers Options CPR CSR Only',
  'Carver Chair Cover Options',
  'Carver Universal Motor Cover Options',
  'Carver Center Console Cover Options',
  'Carver Seat Option Sunbrella Only',
  'Pontoon Console Cover Option',
  'Carver Semi Custom PWC Options',
  'Carver Semi Covers Options-Sunbrella',
  'Carver Semi Covers Options',
  'Carver Semi Covers Options-Boat Duck',
  'Carver Semi Covers Options+Camo',
  'Carver Semi Covers Options+Camo-boat duck',
  'Carver Specialty Options',
  'Carver Specialty Travel Options'
]

console.log('\n.......... Start ..........\n')

fs.createReadStream('fabric-color-sku.csv')
.pipe(csv())
.on('headers', (headers) => {
  headers.forEach((val, index) => {
    hd.push({id: val, title: val})
  })
})
.on('data', (row) => {
  skuData.push(row);
})

fs.createReadStream('export-file.csv')
.pipe(csv())
.on('data', (row) => {
  console.log('Product SKU: ', row['Product Code/SKU']);
  const baseID = row['Product Code/SKU'].replace('#', '');
  const optionSet = row['Option Set']
  row['Product Code/SKU'] = baseID + '#'
  db.push(row)
  skuData.forEach((val, index) => {
    const newData = {};
    Object.keys(val).forEach((key) => {
      newData[key] = val[key];
    })
    if (index === 0) {
      newData['Product Code/SKU'] = baseID;
      if (
        optionSet === 'Carver Universal Motor Cover Options' || 
        optionSet === 'Carver Semi Covers Options-Sunbrella' || 
        optionSet === 'Carver Semi Covers Options' || 
        optionSet === 'Carver Semi Covers Options+Camo'
        ) {
        db.push(newData);
      }
    } else if (index === 1) {
      newData['Product Code/SKU'] = baseID + 'D';
      if (
        optionSet === 'Carver Custom Covers Options' || 
        optionSet === 'Carver Custom Covers Options CPR CSR' || 
        optionSet === 'Carver Universal Motor Cover Options' || 
        optionSet === 'Carver Semi Covers Options-Sunbrella' || 
        optionSet === 'Carver Semi Covers Options' || 
        optionSet === 'Carver Semi Covers Options-Boat Duck' || 
        optionSet === 'Carver Semi Covers Options+Camo' || 
        optionSet === 'Carver Semi Covers Options+Camo-boat duck' || 
        optionSet === 'Carver Specialty Travel Options'
        ) {
        db.push(newData);
      }
    } else if (index === 2) {
      newData['Product Code/SKU'] = baseID + 'P';

      if (
        optionSet === 'Carver Custom Covers Options' || 
        optionSet === 'Carver Custom Covers Options CPR CSR' || 
        optionSet === 'Carver Custom Covers Options CPR CSR Only' || 
        optionSet === 'Carver Chair Cover Options' || 
        optionSet === 'Carver Universal Motor Cover Options' || 
        optionSet === 'Carver Center Console Cover Options' || 
        optionSet === 'Pontoon Console Cover Option' || 
        optionSet === 'Carver Semi Custom PWC Options' || 
        optionSet === 'Carver Semi Covers Options-Sunbrella' || 
        optionSet === 'Carver Semi Covers Options' || 
        optionSet === 'Carver Semi Covers Options-Boat Duck' || 
        optionSet === 'Carver Semi Covers Options+Camo' || 
        optionSet === 'Carver Semi Covers Options+Camo-boat duck' || 
        optionSet === 'Carver Specialty Options' || 
        optionSet === 'Carver Specialty Travel Options'
        ) {
        db.push(newData);
      }
    } else if (index === 3) {
      newData['Product Code/SKU'] = baseID + 'C';

      if (
        optionSet === 'Carver Universal Motor Cover Options' || 
        optionSet === 'Carver Semi Covers Options+Camo' || 
        optionSet === 'Carver Semi Covers Options+Camo-boat duck'
        ) {
        db.push(newData);
      }

    } else if (index === 4) {
      newData['Product Code/SKU'] = baseID + 'S';

      if (
        optionSet === 'Carver Custom Covers Options' || 
        optionSet === 'Carver Custom Covers Options CPR CSR' || 
        optionSet === 'Carver Custom Covers Options CPR CSR Only' || 
        optionSet === 'Carver Chair Cover Options' || 
        optionSet === 'Carver Universal Motor Cover Options' || 
        optionSet === 'Carver Center Console Cover Options' || 
        optionSet === 'Pontoon Console Cover Option' || 
        optionSet === 'Carver Semi Custom PWC Options' || 
        optionSet === 'Carver Semi Covers Options-Sunbrella' || 
        optionSet === 'Carver Semi Covers Options' || 
        optionSet === 'Carver Semi Covers Options-Boat Duck' || 
        optionSet === 'Carver Semi Covers Options+Camo' || 
        optionSet === 'Carver Semi Covers Options+Camo-boat duck' || 
        optionSet === 'Carver Specialty Options' || 
        optionSet === 'Carver Specialty Travel Options'
        ) {
        db.push(newData);
      }

    } else if (index === 5) {
      newData['Product Code/SKU'] = baseID + 'A';

      if (
        optionSet === 'Carver Custom Covers Options' || 
        optionSet === 'Carver Custom Covers Options CPR CSR' || 
        optionSet === 'Carver Chair Cover Options' || 
        optionSet === 'Carver Universal Motor Cover Options' || 
        optionSet === 'Carver Center Console Cover Options' || 
        optionSet === 'Carver Seat Option Sunbrella Only' || 
        optionSet === 'Carver Semi Custom PWC Options' || 
        optionSet === 'Carver Semi Covers Options' || 
        optionSet === 'Carver Semi Covers Options-Boat Duck' || 
        optionSet === 'Carver Semi Covers Options+Camo' || 
        optionSet === 'Carver Semi Covers Options+Camo-boat duck'
        ) {
        db.push(newData);
      }
      
    } else if (index === 6) {
      newData['Product Code/SKU'] = baseID + 'R';
      if (
        optionSet === 'Pedestal Boat Seat Option' || 
        optionSet === 'Westland Custom Cover Option' || 
        optionSet === 'Console Cover Option' || 
        optionSet === 'Westland Semi-Custom Cover Option Set' || 
        optionSet === 'Westland Sharkskin Option Set'
        ) {
        db.push(newData);
      }
    } else if (index === 7) {
      newData['Product Code/SKU'] = baseID + 'S'
      if (
        optionSet === 'Pedestal Boat Seat Option' || 
        optionSet === 'Westland Custom Cover Option' || 
        optionSet === 'Console Cover Option' || 
        optionSet === 'Westland Semi-Custom Cover Option Set' || 
        optionSet === 'Westland Sharkskin Option Set' || 
        optionSet === 'Westland Supreme + Sunbrella Option Set'
        ) {
        db.push(newData);
      }
    } else if (index === 8) {
      newData['Product Code/SKU'] = baseID + 'A'
      if (
        optionSet === 'Pedestal Boat Seat Option' || 
        optionSet === 'Westland Custom Cover Option' || 
        optionSet === 'Console Cover Option' || 
        optionSet === 'Westland Semi-Custom Cover Option Set' ||
        optionSet === 'Westland Supreme + Sunbrella Option Set'
        ) {
        db.push(newData);
      }
    }
  })
})
.on('end', () => {
  const csvWriter = createCsvWriter({
    path: 'out.csv',
    header: hd
  });
  csvWriter.writeRecords(db)
  .then(() => console.log('\n.......... done ..........\n'));
});

