var Siglas;
(function (Siglas) {
    Siglas[Siglas["PI"] = 0] = "PI";
    Siglas[Siglas["CE"] = 1] = "CE";
    Siglas[Siglas["MA"] = 2] = "MA";
})(Siglas || (Siglas = {}));
;
for (var s = 0; s < 3; s++) {
    console.log(Siglas[s]);
}
