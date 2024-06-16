import {checkActivity} from './tasks/weekday';
import {testQueus} from './tasks/queue';
import { testCombine } from './tasks/type_alias'; 
import { testWorkerPerson } from './tasks/interface_checking';


console.log("--------------------");
checkActivity();
console.log("--------------------");
testQueus();
console.log("--------------------");
testCombine();
console.log("--------------------");
testWorkerPerson();
console.log("--------------------");
