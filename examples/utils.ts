/*
 * This file is part of AOL - LICENSE, licensed under the
 * Authentic Open License (AOL).
 *
 * Personal use and limited sharing (under 25 people) is permitted
 * without license compliance requirements.
 *
 * Public distribution requires full compliance including attribution
 * and copyleft for AOL-licensed files only.
 *
 * Copyright (c) 2025 Yui Elina
 *
 * See LICENSE file for details.
*/

function capitalizeFirstLetter(n: string): string {
    if (!n) return n;

    if (isNaN(Number(n[0]))) {
        return n[0].toUpperCase() + n.slice(1);
    }

    return n;
}

console.log(capitalizeFirstLetter("hello"));
console.log(capitalizeFirstLetter("1world"));
console.log(capitalizeFirstLetter(""));