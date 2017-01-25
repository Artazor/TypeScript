class HKTDemo<Wrapper<*>> {
    num: Wrapper<number>;
    str: Wrapper<string>;
}

type Id<T> = T;

const arrDemo: HKTDemo<Array> = new HKTDemo<Array>();
const idDemo: HKTDemo<Id> = new HKTDemo<Id>();

arrDemo.num = [1,2,3];
arrDemo.str = ["A","B","C"];

idDemo.num = 123;
idDemo.str = "ABC";
