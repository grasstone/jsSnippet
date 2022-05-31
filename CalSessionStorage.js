var _lsTotal = 0,
    _xSize, _x;
var entries = [];
for (_x in sessionStorage) {
    if (!sessionStorage.hasOwnProperty(_x)) {
        continue;
    }
	_xSize = new Blob(Object.values(sessionStorage[_x])).size + new Blob(Object.values(_x)).size;
    _lsTotal += _xSize;
    entries.push({
        label: _x.substr(0, 50),
        size: (_xSize / 1024) /* in KB */
    });
};
entries.sort((a, b) => {
    if (a.size === b.size) return 0;
    return a.size > b.size ? -1 : 1;
});
entries.forEach(entry => {
    console.log(entry.label + " = " + entry.size.toFixed(2) + " KB");
});
console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");