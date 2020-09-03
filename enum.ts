enum Membership { // <= from this we receive contents number numeration
  Simple,
  Standard,
  Premium
}

const membership = Membership.Standard;
const membershipReverse = Membership[0];
console.log(membership);
console.log(membershipReverse);

enum SocialMedia { // <= from this we receive verbal content
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM;
console.log(social);