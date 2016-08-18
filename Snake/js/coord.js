const Coordinate = {

  plus(coord1, coord2) {
    return [coord1[0] + coord2[0], coord1[1] + coord2[1]];
  },

  equals(letter) {
    if (letter === "N") {
      return [0,1];
    }
    if (letter === "S") {
      return [0,-1];
    }
    if (letter === "E") {
      return [1,0];
    }
    if (letter === "W") {
      return [-1,0];
    }
  },

  isOpposite(dir1, dir2) {
    if (dir1 === "N" && dir2 === "S") {
      return true;
    }
    if (dir1 === "S" && dir2 === "N") {
      return true;
    }
    if (dir1 === "E" && dir2 === "W") {
      return true;
    }
    if (dir1 === "W" && dir2 === "E") {
      return true;
    }

    return false;
  }
};

module.exports = Coordinate;
