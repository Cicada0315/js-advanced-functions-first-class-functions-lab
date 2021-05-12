// Code your solution in this file!
const returnFirstTwoDrivers= function(drivers){
    let newarr=[];
    newarr.push(drivers[0]);
    newarr.push(drivers[1]);
    return newarr;
} 

const returnLastTwoDrivers = function(drivers){
    let newarr=[];
    newarr.push(drivers[drivers.length-2]);
    newarr.push(drivers[drivers.length-1]);
    return newarr;
} 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(muliple){
        return int*muliple;
    };
} 

const fareDoubler = function(int){
    return createFareMultiplier(int)(2);
}
const fareTripler = function(int){
    return createFareMultiplier(int)(3);
}

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);
}