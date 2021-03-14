module.exports = function toReadable (number) {

  let arr = [];
  let result = '';

  var names=new Array();
    names[0]='zero';
    names[1]='one';
    names[2]='two';
    names[3]='three';
    names[4]='four';
    names[5]='five';
    names[6]='six';
    names[7]='seven';
    names[8]='eight';
    names[9]='nine';
    names[10]='ten';
    names[11]='eleven';
    names[12]='twelve';
    names[13]='thirteen';
    names[14]='fourteen';
    names[15]='fifteen';
    names[16]='sixteen';
    names[17]='seventeen';
    names[18]='eighteen';
    names[19]='nineteen';
    names[20]='twenty';
    names[30]='thirty';
    names[40]='forty';
    names[50]='fifty';
    names[60]='sixty';
    names[70]='seventy';
    names[80]='eighty';
    names[90]='ninety';
    names[100]='hundred';
    names[1000]='thousand';

    var y=Math.floor(number);
    if (y>0) {
       arr.push(y%10);
       arr.push( y%100-arr[0]);
       arr.push((y%100-arr[0]>9&&(y%100-arr[0])!=0) ? y%100 : 0); //<20
       arr.push(Math.trunc(y/100));

       if (arr.length > 0) {
           for (let i=arr.length-1; i>=0; i--){
               if (i==3 && arr[i] > 0){
                   result = result + String(names[arr[i]]) + " " + String(names[100]);
               }

               if (i==2 && arr[i] > 19){
                        (result != '') ? result += " " + names[arr[1]] : result += names[arr[1]];
                        if (i==0  && arr[i]>0) {
                           (result != '') ? result += " " + names[arr[0]] : result += names[arr[0]];
                        }
               }

               if  (i==2 && arr[i]<20 && arr[i]>9)  {
                   arr[0]=0;
                   (result != '') ? result += " " + names[arr[2]] : result += names[arr[2]];
               }

               if (i==0  && arr[i]>0 && arr[i]<10) {
                  (result != '') ? result += " " + names[arr[0]] : result += names[arr[0]];
               }
           }
       }
    }
    else
        result = names[0];

  return result;
}
