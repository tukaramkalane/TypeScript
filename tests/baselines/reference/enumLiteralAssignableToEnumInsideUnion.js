//// [enumLiteralAssignableToEnumInsideUnion.ts]
module X {
    export enum Foo {
        A, B
    }
}
module Y {
    export enum Foo {
        A, B
    }
}
module Z {
    export enum Foo {
        A = 1 << 1,
        B = 1 << 2,
    }
}
module Ka {
    export enum Foo {
        A = 1 << 10,
        B = 1 << 11,
    }
}
const e1: X.Foo | boolean = Z.Foo.A; // ok
const e2: X.Foo.A | X.Foo.B | boolean = Z.Foo.A; // ok, X.Foo is equivalent to X.Foo.A | X.Foo.B
const e3: X.Foo.B | boolean = Z.Foo.A; // not legal
const e4: X.Foo.A | boolean = Z.Foo.A; // not legal either because Z.Foo is computed and Z.Foo.A is not necessarily assignable to X.Foo.A
const e5: Ka.Foo | boolean = Z.Foo.A; // ok


//// [enumLiteralAssignableToEnumInsideUnion.js]
var X;
(function (X) {
    (function (Foo) {
        Foo[Foo["A"] = 0] = "A";
        Foo[Foo["B"] = 1] = "B";
    })(X.Foo || (X.Foo = {}));
    var Foo = X.Foo;
})(X || (X = {}));
var Y;
(function (Y) {
    (function (Foo) {
        Foo[Foo["A"] = 0] = "A";
        Foo[Foo["B"] = 1] = "B";
    })(Y.Foo || (Y.Foo = {}));
    var Foo = Y.Foo;
})(Y || (Y = {}));
var Z;
(function (Z) {
    (function (Foo) {
        Foo[Foo["A"] = 2] = "A";
        Foo[Foo["B"] = 4] = "B";
    })(Z.Foo || (Z.Foo = {}));
    var Foo = Z.Foo;
})(Z || (Z = {}));
var Ka;
(function (Ka) {
    (function (Foo) {
        Foo[Foo["A"] = 1024] = "A";
        Foo[Foo["B"] = 2048] = "B";
    })(Ka.Foo || (Ka.Foo = {}));
    var Foo = Ka.Foo;
})(Ka || (Ka = {}));
var e1 = Z.Foo.A; // ok
var e2 = Z.Foo.A; // ok, X.Foo is equivalent to X.Foo.A | X.Foo.B
var e3 = Z.Foo.A; // not legal
var e4 = Z.Foo.A; // not legal either because Z.Foo is computed and Z.Foo.A is not necessarily assignable to X.Foo.A
var e5 = Z.Foo.A; // ok