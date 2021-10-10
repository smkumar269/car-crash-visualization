const getInitials = function (name) {
  const parts = name.split(" ");
  const initials = [];
  const length = parts.length > 2 ? 2 : parts.length;
  for (let i = 0; i < length; i++) {
    if (parts[i].length > 0 && parts[i] !== "") {
      initials.push(parts[i][0]);
    }
  }
  return initials.join(" ");
};

export { getInitials };
