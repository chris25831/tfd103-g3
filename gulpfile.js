const {
    src, 
    dest,
    series,
    parallel,
    watch
} = require("gulp");


exports.testgulp = function test(cb) {
    console.log("gulp執行成功");
    cb();
}

function missionA(cb){
    console.log("missionA");
    cb();
}

function missionB(cb){
    console.log("missionB");
    cb();
}

//依序
exports.async = series(missionA, missionB);

//同時
exports.sync = parallel(missionA, missionB);

exports.file = function copy(){
    // return src("./index.html").pipe(dest("dist"))
    return src(["./**/*.html", ])
}