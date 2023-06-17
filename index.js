// Write your solution here!
let cats=["Milo", "Otis", "Garfield"]
console.log(cats)
function destructivelyAppendCat () {
  cats.push("Ralph")
}
function destructivelyPrependCat(){
  cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
  cats.pop('Garfield')
}
function destructivelyRemoveFirstCat(){
  cats.shift("Bob")
}
function appendCat(){
  let NewArray=cats
  return cats.concat("Broom")

}
function prependCat(Arnold){
  let catsReduced = ["Arnold"].concat(cats);
  return catsReduced; 
}
function removeLastCat(){
  let removeLastCat = ["Garfield"].slice(cats);
  return removeLastCat;
}