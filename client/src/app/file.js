function flatten(obj) {
    var returnObj = {};
       for (var i in obj) {
           if (!obj.hasOwnProperty(i)) continue;
   
           if ((typeof obj[i]) == 'object' && ob[i] !== null) {
               var flatObject = flatten(obj[i]);
               for (var x in flatObject) {
                   if (!flatObject.hasOwnProperty(x)) continue;
   
                   returnObj[i + '.' + x] = flatObject[x];
               }
           } else {
               returnObj[i] = obj[i];
           }
       }
       return returnObj;
   }