function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const localPart = email.slice(0, atIndex);
  const domainPart = email.slice(atIndex);

  if (localPart.length <= 2) {
    return email;
  }

  const firstChar = localPart[0];
  const stars = "*".repeat(localPart.length - 2);
  const lastChar = localPart[localPart.length - 1];

  return firstChar + stars + lastChar + domainPart;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));

email = "freecodecamp@example.com";
console.log(maskEmail(email));

email = "info@test.dev";
console.log(maskEmail(email));

email = "user@domain.org";
console.log(maskEmail(email));
