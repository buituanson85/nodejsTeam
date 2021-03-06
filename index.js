const express = require("express");
const app = express();

// app.listen(6010,function () {
//     console.log("server is running...");
// });
app.use(express.static("public"));
// sử dụng ejs làm view engine
app.set("view engine","ejs");

var counter = 0;
app.get("/",function (req,res) {
    counter++;
    let city = req.query.cityname;
    if(city === undefined){
        city = "Hanoi,vietnam";
    }
    res.render("homes",{
        counter: counter,
        city:city
    });
});

app.get("/about-us",function (req,res) {
    res.send("Gioi thieu ve chung toi");
});
const fss = require("fs");
app.get("/danh-sach-thanh-pho",function (req,res) {
    let data = fss.readFileSync("data/thanhpho.json","utf-8");
    let cities = JSON.parse(data);
    res.render("cities",{
        cities:cities
    })
});

app.get("/thanh-pho/:id",function (req,res) {
    let cityId = req.params.id;
    let city = {};
    let data = fss.readFileSync("data/thanhpho.json","utf-8");
    let cities = JSON.parse(data);
    cities.map(function (e) {
        if(e.id == cityId){
            city = e;
        }
    });
    res.render("city",{
        city:city
    });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,function () {
    console.log("server is running...");
});

app.get("api/messages",function (req,res) {
    let data = [
        {
            msg: "hello",
            name: "Luna"
        },
        {
            msg: "hello",
            name: "Luna"
        },
        {
            msg: "hello",
            name: "Luna"
        },
        {
            msg: "hello",
            name: "Luna"
        },
    ];
    let rs = {
        status: true,
        message: "Success",
        data:data
    };
    res.send(rs);
});

//Thêm file

app.get("/trang-chu",function (req,res) {
    let Home = req.query.trangchu;
    res.render("Home");
});
app.get("/tuan-son",function (req,res) {
    let PaceOneId = req.params.id;
    let PaceOne = {};
    res.render("PaceOne");
})
app.get("/huy-nguyen",function (req,res) {
    let PaceOneId = req.params.id;
    let PaceOne = {};
    res.render("teamwork-huy");
})

app.get("/hai-nam",function (req,res) {
    let PaceOneId = req.params.id;
    let PaceOne = {};
    res.render("try");
})
app.get("/quoc-viet",function (req,res) {
    let PaceOneId = req.params.id;
    let PaceOne = {};
    res.render("craftman-viet");
})
app.get("/link",function (req,res) {
    let PaceOneId = req.params.id;
    let PaceOne = {};
    res.render("fomrtemwork");
})

const fs = require("fs");
app.get("/danh-sach-san-pham",function (req,res) {
    let data = fs.readFileSync("data/sanpham.json","utf-8");
    let dssp = JSON.parse(data);
    res.render("dssp",{
        dssp:dssp
    })
});

app.get("/san-pham/:id",function (req,res) {
    let spId = req.params.id;
    let sp = {};
    let data = fs.readFileSync("data/sanpham.json","utf-8");
    let dssp = JSON.parse(data);
    dssp.map(function (e) {
        if(e.id == spId){
            sp = e;
        }
    });
    res.render("sp",{
        sp:sp
    });
})

