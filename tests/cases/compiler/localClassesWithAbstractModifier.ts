// From https://github.com/Microsoft/TypeScript/issues/9110
(() => {
    // works:
    class SomeClass { }

    // should not emit "error TS1184: Modifiers cannot appear here":
    abstract class SomeAbstractClass { }

    // should not emit "error TS1184: Modifiers cannot appear here":
    const C = abstract class X { };

    // should not emit "error TS1184: Modifiers cannot appear here":
    const A = abstract class { };
})();