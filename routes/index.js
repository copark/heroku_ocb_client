var express = require('express');
var router = express.Router();

var path = require('path');
var multer = require('multer');
var fs = require('fs');
var init = function(path) {
    if(fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function(file,index) {
            var curPath = path + "/" + file;
            fs.unlinkSync(curPath);
        });
    }
};

var upload_img = multer({ dest : 'shrink/' });

var clog = require('clog');
clog.configure({"log level": 5});

var apiKey = "G1jcIWKRcAtk8LgCznSfb7leFE29QCm1";

function showifconfig() {
	var os = require( 'os' );
	var networkInterfaces = os.networkInterfaces( );
	clog.log("========= ifconfig =========")
	clog.log( networkInterfaces );
	clog.log("============================")
}

router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

router.post('/file-upload-shrink', upload_img.single('uploadImage'), function (req, res, next) {
  console.log('START FILE UPLOAD');
  var tmp_path = req.file.path;
  var ext = path.extname(req.file.originalname);
  var dest_name = path.basename(req.file.originalname, ext) + "_shrink" + ext;

  var target_path = req.file.destination + req.file.originalname;
  var dest_path = req.file.destination + dest_name;

  console.log('target path = ' + target_path);
  console.log('dest path = ' + dest_path);

  fs.rename(tmp_path, target_path, function (err) {
    if (err) throw err
  })

  console.log('START Image Shrink');
  const tinify = require("tinify");
  tinify.key = apiKey;
  let process = tinify.fromFile(target_path).toFile(dest_path);
  let start = new Date().getTime();
  process.then((data) =>{
      let end = new Date().getTime();
      console.log('success', end - start);
      res.download(dest_path);
  }, (error) =>{
      console.log(error);
      res.status(200).end('Error found ' + error);
  })
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('main.html');
});

router.get('/*.html', function(req, res, next) {
	clog.log("url  " + req.url);
  var url = req.url.substring(1);
	var suburl = url;
	
	if (url.indexOf("?") > -1) {
		suburl = url.substring(0, url.indexOf("?"));
	}
  res.render(suburl);
});

//showifconfig();
init("shrink/");
module.exports = router;

