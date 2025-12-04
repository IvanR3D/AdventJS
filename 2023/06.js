function maxDistance(movements) {
  const moves = { left: 0, right: 0, asterisk: 0 };
  for (let i = 0; i < movements.length; i++) {
    if (movements[i] === "<") {
      moves.left++;
    } else if (movements[i] === ">") {
      moves.right++;
    } else {
      moves.asterisk++;
    }
  }
  if (moves.right < moves.left) {
    moves.left += moves.asterisk;
    return moves.left - moves.right;
  } else {
    moves.right += moves.asterisk;
    return moves.right - moves.left;
  }
}