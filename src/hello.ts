import {aa} from "./aa";

export class Test {

  private name:string = "Hello world";

  public constructor () {
    console.log("constructor==========>>>" + this.name);
  }

  public testFun():void {
    aa();
    console.log("testFun===========>>>" + this.name);
  }
}

export function testCallFun():void {
  console.log("=================ddddd=========================")
  console.log(this);
  let t = new Test();
  t.testFun();
}