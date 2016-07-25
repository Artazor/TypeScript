(() => {
    // should emit "error TS18500: This modifier is not allowed for a local class"
    public class SomeClass {}
    // should emit "error TS18500: This modifier is not allowed for a local class"
    public abstract class SomeAbstractClass { }
    // should emit "error TS18500: This modifier is not allowed for a local class"
    abstract public class SomeOtherAbstractClass { }
    // should emit "error TS1030: 'abstract' modifier is already seen"
    abstract abstract class TwiceAbstractClass { }
    // should emit "error TS1030: 'abstract' modifier is already seen"
    const A = abstract abstract class { };
})();