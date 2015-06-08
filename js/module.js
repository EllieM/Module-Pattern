
var Module = (function () {

  var _privateMethod = function (param) {
  		console.log('param', param);
  };

  var getData = function (param) {
  		_privateMethod(param);
  };
  
  return {
    getModuleData: getData
  };

})();