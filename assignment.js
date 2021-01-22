
//  kilometerToMeter
    function kilometerToMeter(meter){
       if(meter<0){
         return 'not negative value';
       }
       else{
         //1 kilometer = 1000 meter
         var kilometer = meter*1000;
         return kilometer;
       }
   }
      kilometerToMeter(4);
      

 // budgetCalculator

 function budgetCalculator(watch,phone,laptop){
    var watch1 = watch*50;
    var phone2 = phone *100;
    var laptop3 =laptop *500;
    var total =watch1+phone2+laptop3;
    return total;
}
    budgetCalculator(4,2,3);

// hotelCost 
  function hotelCost (hotelTime){
    var rent = 0; //initial value
     if(hotelTime<=10){
         rent =hotelTime*100;
    }
    else if (hotelTime<=20){
        var days1 = 10 * 100;
        var remainingday =hotelTime-10;
        var days2 = hotelTime * 80;
        rent = days1 + days2;
    }
    else {
       var days1=10*100;
       var days2 = 10*80;
       var remainingday =hotelTime-20;
       var finalday=hotelTime*100;
       rent =days1+days2+finalday;

    }
    return rent;
   }
   

//megaFriend

function megaFriend(myfriend){
  //search long value
    var num = '';
    for (var i = 0; i<myfriend.length; i++) 
    {
      if (num.length < myfriend[i].length) {
        num = myfriend[i];
      }
    }
    return num;
  }
  megaFriend['mina', 'rina', 'cina', 'kina', 'longsimaa'];
 


