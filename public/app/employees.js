app.controller('EmpCtrl', function($scope, Emp,User,ngProgress, toaster) {

$scope.emp = new Emp();
//$scope.user = new User();
$scope.resultCtrl = false;
$scope.fillCtrl = true;
$scope.add_error = false;
//$scope.login = true;
$scope.user = new User();
$scope.login = true;
$scope.isValidated=false;


var refresh = function() {
  $scope.emps = Emp.query(); 
  $scope.emp ="";
}


$scope.add = function(emp) {
  if($scope.Appraisal.$valid){
    $scope.add_error = false;
    Emp.save(emp,function(emp){
      refresh();
    });
  }
  else{
    $scope.add_error = true;
  }
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

$scope.export = function(){
  html2canvas(document.getElementById('exporthis'),{
    onrendered: function (canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500,
                    }]
                };
                pdfMake.createPdf(docDefinition).download("response.pdf");
            }
  });
}

/*$scope.log = function(){
  $scope.login=true;
}

$scope.signup = function(){
  $scope.login=false;
}



$scope.Validate = function(id){
  users.forEach(function(usr){
    if(usr.man_id === $scope.user.man_id){
      if(usr.pwd === $scope.user.pwd){
        console.log('success');
      }
    }
  })
}

$scope.AddUser = function(){
  User.save(user,function(user){
      console.log('Created Successfully');
      refresh();
    });
}*/
$scope.log = function(){
      $scope.login=true;
  }

  $scope.signup = function(){
      $scope.login=false;
  }
  var refreshlogin = function() {
      $scope.users = User.query(); 
      $scope.user ="";
  }
  refreshlogin();


$scope.Validate = function(){
  console.log($scope.users);
  $scope.temp = $scope.users = $scope.users.filter(function(usr){
    return (usr.man_id == $scope.user.man_id && usr.pwd== $scope.user.pwd)
  })
  console.log($scope.temp);
  if($scope.temp.length != 0){
    console.log('success');
    $scope.isValidated=true;
    refresh();
  }else{
    $scope.user=""
  }
  
}

$scope.AddUser = function(){
  User.save($scope.user,function(user){
      $scope.login=true;
      refreshlogin();
    });
}

})