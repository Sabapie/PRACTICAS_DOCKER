import express, { request } from 'express'
import mongoose from 'mongoose'

//const Animal = mongoose.model('Animal', new mongoose.Schema({
//  tipo: String,
//  estado: String,
//}))

const app = express()

// mongoose.connect('mongodb://usuario:password@servidor:puerto/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listando...')
  //const animales = await Animal.find();
  return res.send('Hola mundo')
})
//app.get('/crear', async (_req, res) => {
//  console.log('creando...')
//  await Animal.create({ tipo: 'animalico', estado: 'Feliz' })
//  return res.send('ok')
//})


app.get('/alumnos/:id', async (_req, res) => {
  const id = _req.params.id
  console.log(`consultando alumno ${id}`)
  //const animales = await Animal.find();
  return res.send(`Alumno nº ${id}`)
})

app.get('/alumno', async (_req, res) => {
  const nombre = _req.query.nombre;
  console.log(`Alumno: ${nombre}`)
  //const animales = await Animal.find();
  return res.send(`Nombre del alumno, ${nombre}`)
})

//RANDOM
app.get('/random', async (_req, res) => {
  const num = Math.floor(Math.random() * (100 + 1));
  console.log(`${num}`)
  //const animales = await Animal.find();
  return res.send(`NUmero random: ${num}`)
})

//FECHA ACTUAL
app.get('/date', async (_req, res) => {
  const actualDate = new Date().toLocaleDateString("es-ES");
  console.log(`Date: ${actualDate}`)
  //const animales = await Animal.find();
  return res.send(`Fecha actual: ${actualDate}`)
})

//EXAMENES /:ID
app.get('/examenes/:id', async (_req, res) => {
  const examList = [{
    id: 1,
    nombre: 'PSP'
  },
  {
    id: 2,
    nombre: 'ACCD'
  },
  {
    id: 3,
    nombre: 'DESP'
  },
  {
    id: 4,
    nombre: 'SERV'
  }];

  const id = _req.params.id
  console.log(`Result - ${examList[id - 1].nombre}`)
  //const animales = await Animal.find();
  return res.send(`Asignatura del examen nº${id}: ${examList[id - 1].nombre}`)
})

//EXAMENES / nombre?=
app.get('/examenes', async (_req, res) => {
  const examList = [{
    nombre: 'PSP',
    fecha: '11-11-2026'

  },
  {
    nombre: 'ACCD',
    fecha: '20-11-2026'
  },
  {
    nombre: 'DESP',
    fecha: '25-11-2026'
  },
  {
    nombre: 'SERV',
    fecha: '06-11-2026'
  }];

  const nombre = _req.query.nombre;
  var result = " ";
  examList.forEach(examen => {
    examen.nombre == nombre ? result = examen.fecha : "";
  });
  console.log(`Result - ${result}`)
  //const animales = await Animal.find();
  return res.send(`Fecha del examen de ${nombre}: ${result}`)
})

// SUMA op1?= op2?=
app.get('/suma', async (_req, res) => {

  const nombre = _req.query.nombre;
  var op1 = Number(_req.query.op1);
  var op2 = Number(_req.query.op2);
  var result = op1 + op2;

  console.log(`Result - ${result}`)
  //const animales = await Animal.find();
  return res.send(`Resultado de sumar ${op1} y ${op2} : ${result}`)
})

// RESTA op1?= op2?=
app.get('/resta', async (_req, res) => {

  const nombre = _req.query.nombre;
  var op1 = Number(_req.query.op1);
  var op2 = Number(_req.query.op2);
  var result = op1 - op2;

  console.log(`Result - ${result}`)
  //const animales = await Animal.find();
  return res.send(`Resultado de sumar ${op1} y ${op2} : ${result}`)
})

// COMPARAR op1?= op2?=
app.get('/comparar', async (_req, res) => {

  const nombre = _req.query.nombre;
  var op1 = _req.query.op1;
  var op2 = _req.query.op2;
  var result = op1 === op2? 'iguales' : 'diferentes';

  console.log(`Result - ${result}`)
  //const animales = await Animal.find();
  return res.send(`${op1} y ${op2} son: ${result}`)
})

app.listen(3000, () => console.log('listening...'))