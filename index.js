// Code your solution in this file!
let street;
function distanceFromHqInBlocks(street) {
    if (street < 42) {
        return (street - 42) * -1;
    } else {
        return (street - 42)
    }
}

function distanceFromHqInFeet(street) {
    let feet = distanceFromHqInBlocks(street);
    return feet * 264
}

function distanceTravelledInFeet(street1, street2) {
    if (street1 < street2) {
        return (street2 - street1) * 264;
    } else {
        return (street1 - street2) * 264;
    }
}

function calculatesFarePrice(street1, street2) {
    const traveled = distanceTravelledInFeet(street1, street2);
    if (traveled > 400 && traveled < 2000) {
        return (traveled - 400) * 2 / 100
    } else if (traveled > 2000 && traveled < 2500) {
        return 25;
    } else if (traveled < 400) {
        return 0;
    } else {
        return "cannot travel that far";
    }
}
    