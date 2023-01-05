var BugetApp=angular.module('BugetApp',[])


BugetApp.controller('BugetController',['$scope',function($scope){
     $scope.bugetlist= [
       
        
    ]
    $scope.total=0
    $scope.datas=[['Task', 'Hours per Day']]
    
    $scope.display =function () {
        google.charts.load('current', {'packages':['corechart']});
           google.charts.setOnLoadCallback(drawChart);
   
           
               google.charts.setOnLoadCallback(drawChart);
         
     
           function drawChart() {
     
             var data = google.visualization.arrayToDataTable( $scope.datas);
     
             var options = {
               title: 'Buget',
               is3D: true
             };
     
             var chart = new google.visualization.PieChart(document.getElementById('piechart'));
     
             chart.draw(data, options);
           }
       }

    $scope.calcTotal =function (){
        $scope.datas=[['Task', 'Hours per Day']]
      $scope.total=0
      $scope.bugetlist.forEach(element => {
        $scope.datas.push([element.description,element.amount])
        if(element.type=='expense'){
            $scope.total=$scope.total-element.amount
        }
        else{
            $scope.total=$scope.total+element.amount
        }
    });

    $scope.display()
   
    
}

    $scope.calcTotal()
    $scope.addBuget =function (){
        $scope.bugetlist.push({
            description:$scope.newBuget.description,
            amount:$scope.newBuget.amount,
            type:$scope.newBuget.type
        })
        $scope.calcTotal()
         
    }

    
   
}]) 