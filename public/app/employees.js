app.controller('EmpCtrl', function($scope, Emp, ngProgress, toaster) {

$scope.emp = new Emp();
$scope.resultCtrl = false;
$scope.fillCtrl = true;


var refresh = function() {
  $scope.emps = Emp.query(); 
  $scope.emp ="";
}
refresh();

$scope.add = function(emp) {
  Emp.save(emp,function(emp){
    refresh();
  });
};

$scope.update = function(emp) {
  emp.$update(function(){
    refresh();
  });
};

$scope.remove = function(emp) {
  emp.$delete(function(){
    refresh();
  });
};

$scope.edit = function(id) {
  $scope.emp = Emp.get({ id: id });
  $scope.resultCtrl = false;
  $scope.fillCtrl = true;
  $scope.viewCtrl = false;
};  

$scope.view = function(id) {
  $scope.resultCtrl = false;
  $scope.fillCtrl = false;
  $scope.viewCtrl = true;
  $scope.emp = Emp.get({ id:id });
}

$scope.deselect = function() {
  $scope.emp = "";
}

$scope.ShowFill = function(){
  $scope.emp ="";
  $scope.resultCtrl = false;
  $scope.fillCtrl = true;
  $scope.viewCtrl = false;
  //refresh();
}

$scope.ShowResult = function(){
  $scope.resultCtrl = true;
  $scope.fillCtrl = false;
  $scope.viewCtrl = false;
  //refresh();
}

})