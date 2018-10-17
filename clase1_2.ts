function calc_distancia(x1:number,y1:number,
                        x2=0, y2=0):number{
var a:number=Math.pow(y2-y1,2)
var b:number=Math.pow(x2-x1,2)

  return Math.sqrt(a+b)
}

var d:number= calc_distancia(15,5);
console.log("la distancia es ",d)
var e:number=calc_distancia(15,5,20,2)
console.log("la distancia es ", e)
var f:number = calc_distancia(20,2)
console.log("la distancia es ",f)
var t:number = calc_distancia(10,10)
console.log("la distancia es ",t)
var z:number = calc_distancia(-10,-10)
console.log("la distancia es ",z)
var m:number = calc_distancia(20,10)
console.log("la distancia es ",m)
var n:number = calc_distancia(-10,0)
console.log("la distancia es ",n)
